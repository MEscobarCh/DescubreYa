import express from 'express';
import { sql } from '@vercel/postgres';
import jwt from 'jsonwebtoken';
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const router = express.Router();

// 👇 Configuramos el cliente de S3 igual que hicimos en la subida 👇
const S3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
});

// En server/routes/reviews.ts, pegar ESTO justo debajo de: const router = express.Router();

// 0. GET: Traer el promedio de estrellas de TODOS los lugares (Para las tarjetas)
router.get('/', async (req, res) => {
    try {
        const result = await sql`
            SELECT 
                place_id, 
                ROUND(AVG(rating), 1) as average_rating, 
                COUNT(*) as total_reviews
            FROM reviews 
            GROUP BY place_id
        `;
        
        // Convertimos el resultado en un diccionario { "id_del_lugar": { average: 4.5, total: 2 } }
        const ratingsMap: Record<string, { average: number, total: number }> = {};
        result.rows.forEach(row => {
            ratingsMap[row.place_id] = {
                average: parseFloat(row.average_rating),
                total: parseInt(row.total_reviews)
            };
        });

        res.json(ratingsMap);
    } catch (error) {
        console.error("Error obteniendo todos los promedios:", error);
        res.status(500).json({ error: "Error interno" });
    }
});

// 1. GET: Descargar reseñas de un sitio (De 10 en 10) y su promedio
router.get('/:place_id', async (req, res) => {
    try {
        const { place_id } = req.params;
        // Paginación: Si no envían página, asumimos la página 1
        const page = parseInt(req.query.page as string) || 1;
        const limit = 10;
        const offset = (page - 1) * limit;

        // A) Calcular el promedio de estrellas y el total de comentarios
        const statsResult = await sql`
            SELECT 
                ROUND(AVG(rating), 1) as average_rating,
                COUNT(*) as total_reviews
            FROM reviews 
            WHERE place_id = ${place_id}
        `;
        const stats = statsResult.rows[0];

        // B) Traer los 10 comentarios de esta página, unidos con la foto y nombre del usuario
        // B) Traer los 10 comentarios de esta página, unidos con la foto y nombre del usuario
        const reviewsResult = await sql`
            SELECT 
                r.id, r.rating, r.comment, r.image_url, r.created_at, r.updated_at,
                u.name, u.avatar_url, u.id as user_id
            FROM reviews r
            JOIN users u ON r.user_id = u.id
            WHERE r.place_id = ${place_id}
            ORDER BY r.created_at DESC
            LIMIT ${limit} OFFSET ${offset}
        `;

        // Devolvemos todo empaquetado al Frontend
        res.json({
            stats: {
                average: parseFloat(stats.average_rating) || 0,
                total: parseInt(stats.total_reviews) || 0
            },
            reviews: reviewsResult.rows,
            currentPage: page,
            hasMore: reviewsResult.rows.length === limit // Si trajo 10, significa que posiblemente hay más
        });

    } catch (error) {
        console.error("Error obteniendo reseñas:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// 2. POST: Crear o Editar una reseña
router.post('/', async (req, res) => {
    try {
        // Validar quién es el usuario mediante su Token
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No autorizado' });
        }
        
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
        const userId = decoded.userId;

        // Leer las estrellas y el comentario
        // Leer las estrellas, el comentario y la foto
        const { place_id, rating, comment, image_url } = req.body;

        if (!place_id || !rating || rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'El rating debe ser entre 1 y 5 estrellas.' });
        }

        // Magia SQL: Intenta insertar. Si ya existe (ON CONFLICT), lo actualiza
        const result = await sql`
            INSERT INTO reviews (user_id, place_id, rating, comment, image_url)
            VALUES (${userId}, ${place_id}, ${rating}, ${comment}, ${image_url})
            ON CONFLICT (user_id, place_id) 
            DO UPDATE SET 
                rating = EXCLUDED.rating, 
                comment = EXCLUDED.comment, 
                image_url = COALESCE(EXCLUDED.image_url, reviews.image_url),
                updated_at = CURRENT_TIMESTAMP
            RETURNING *;
        `;

        res.json({ message: "Reseña guardada con éxito", review: result.rows[0] });

    } catch (error) {
        console.error("Error guardando reseña:", error);
        res.status(500).json({ error: "Error interno guardando la reseña" });
    }
});

// 3. DELETE: Eliminar una reseña
router.delete('/', async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'No autorizado' });
        }
        
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
        const userId = decoded.userId;

        const { place_id } = req.body;

        if (!place_id) {
            return res.status(400).json({ error: 'Falta el ID del lugar.' });
        }

        // 1. ANTES de borrar, buscamos si esta reseña tiene una foto guardada
        const reviewResult = await sql`
            SELECT image_url FROM reviews 
            WHERE user_id = ${userId} AND place_id = ${place_id}
        `;
        const reviewToDelete = reviewResult.rows[0];

        // 2. Si hay una foto, disparamos el misil a Cloudflare R2
        if (reviewToDelete && reviewToDelete.image_url) {
            try {
                // Extraemos el nombre exacto del archivo de la URL completa
                // Ejemplo: pasa de "https://pub.r2.dev/reviews/foto.jpg" a "reviews/foto.jpg"
                const urlParts = new URL(reviewToDelete.image_url);
                const fileKey = urlParts.pathname.substring(1); 
                
                const deleteCommand = new DeleteObjectCommand({
                    Bucket: process.env.R2_BUCKET_NAME,
                    Key: fileKey,
                });
                
                await S3.send(deleteCommand);
            } catch (s3Error) {
                console.error("Error eliminando foto física en Cloudflare:", s3Error);
                // No detenemos el proceso aquí para asegurar que al menos se borre de la BD
            }
        }

        // 3. Finalmente, borramos el rastro de la base de datos Neon
        await sql`
            DELETE FROM reviews 
            WHERE user_id = ${userId} AND place_id = ${place_id}
        `;

        res.json({ message: "Reseña e imagen eliminadas con éxito" });

    } catch (error) {
        console.error("Error eliminando reseña:", error);
        res.status(500).json({ error: "Error interno eliminando la reseña" });
    }
});

export default router;