import express from 'express';
import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto_super_seguro_descubreya';

// Middleware rápido para validar el token en estas rutas
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato: "Bearer TOKEN"

  if (!token) return res.status(401).json({ error: 'Acceso denegado. No hay token.' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ error: 'Token inválido o expirado.' });
    req.user = user; // Guardamos los datos del token (ej. userId) en la request
    next();
  });
};

// 1. OBTENER TODOS LOS FAVORITOS DEL USUARIO
router.get('/', authenticateToken, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;
    
    // Obtenemos solo el id y el tipo para que el frontend sepa qué corazones pintar
    const result = await sql`
      SELECT item_id, item_type 
      FROM user_favorites 
      WHERE user_id = ${userId}
    `;

    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener favoritos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 2. AGREGAR O QUITAR UN FAVORITO (TOGGLE)
router.post('/toggle', authenticateToken, async (req: any, res: any) => {
  try {
    const userId = req.user.userId;
    const { itemId, itemType } = req.body;

    if (!itemId || !itemType) {
      return res.status(400).json({ error: 'Faltan datos del elemento.' });
    }

    // Verificar si ya existe
    const checkResult = await sql`
      SELECT id FROM user_favorites 
      WHERE user_id = ${userId} AND item_id = ${itemId} AND item_type = ${itemType}
    `;

    if (checkResult.rowCount > 0) {
      // Si ya existe, lo eliminamos (Quitar favorito)
      await sql`
        DELETE FROM user_favorites 
        WHERE user_id = ${userId} AND item_id = ${itemId} AND item_type = ${itemType}
      `;
      return res.json({ status: 'removed', itemId, itemType });
    } else {
      // Si no existe, lo insertamos (Agregar favorito)
      await sql`
        INSERT INTO user_favorites (user_id, item_id, item_type)
        VALUES (${userId}, ${itemId}, ${itemType})
      `;
      return res.status(201).json({ status: 'added', itemId, itemType });
    }

  } catch (error) {
    console.error('Error al alternar favorito:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;