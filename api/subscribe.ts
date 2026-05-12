import { db } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Método no permitido' });
  }

  const { email, ciudad } = request.body;

  if (!email || !ciudad) {
    return response.status(400).json({ error: 'Faltan datos' });
  }

  try {
    const client = await db.connect();
    await client.sql`
      INSERT INTO suscripciones (email, ciudad)
      VALUES (${email}, ${ciudad});
    `;
    return response.status(200).json({ message: 'Suscripción exitosa' });
  } catch (error) {
    return response.status(500).json({ error: 'Error en el servidor' });
  }
}