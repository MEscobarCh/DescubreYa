import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// 1. Configuramos el cliente de S3 leyendo tu R2_ENDPOINT directo
const S3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT, // 👈 Ahora usa tu variable exacta
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
  },
});

export default async function handler(req: any, res: any) {
  // 2. Seguridad básica: solo aceptar peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { filename, contentType } = req.body;

    if (!filename || !contentType) {
      return res.status(400).json({ error: 'Faltan datos del archivo' });
    }

    // 3. Crear un nombre único. Agregamos el prefijo "reviews/" para mantener tu bucket R2 organizado
    const uniqueFilename = `reviews/${Date.now()}-${filename.replace(/\s+/g, '-')}`;

    // 4. Preparar la orden de subida
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: uniqueFilename,
      ContentType: contentType,
    });

    // 5. Generar la URL Prefirmada (válida por 5 minutos)
    const signedUrl = await getSignedUrl(S3, command, { expiresIn: 300 });

    // 6. Construir la URL pública final (lo que se guardará en tu base de datos Neon)
    // Usamos una variable de entorno para tu dominio público de R2
    const domainLimpio = process.env.R2_PUBLIC_DOMAIN?.trim();
    const publicUrl = `https://${domainLimpio}/${uniqueFilename}`;

    // 7. Enviar ambas URLs al cliente (React)
    return res.status(200).json({ signedUrl, publicUrl });

  } catch (error) {
    console.error("Error generando la URL prefirmada:", error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}