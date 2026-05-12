import { neon } from '@neondatabase/serverless';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') return response.status(405).end();

  const { email, ciudad } = request.body;
  // Usamos la variable de entorno que Vercel creó automáticamente
  const sql = neon(process.env.POSTGRES_URL!); 

  try {
    await sql`INSERT INTO suscripciones (email, ciudad) VALUES (${email}, ${ciudad})`;
    return response.status(200).json({ message: '¡Viento en popa!' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: 'Error de conexión' });
  }
}