import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto_super_seguro_descubreya';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  try {
    const { email, name, picture } = req.body;

    let result = await sql`SELECT * FROM users WHERE email = ${email}`;
    let user = result.rows[0];

    if (!user) {
      // Registro automático si es la primera vez que usa Google
      const insertResult = await sql`
        INSERT INTO users (name, email, avatar_url, auth_provider)
        VALUES (${name}, ${email}, ${picture}, 'google')
        RETURNING id, name, email, avatar_url, auth_provider;
      `;
      user = insertResult.rows[0];
    } else if (user.auth_provider === 'local') {
      // Actualizamos su foto si ya existía como local
      await sql`UPDATE users SET avatar_url = ${picture} WHERE email = ${email}`;
      user.avatar_url = picture;
    }

    if (user.password_hash) delete user.password_hash;
    
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    
    return res.status(200).json({ user, token });
  } catch (error) {
    console.error('Error en auth de Google:', error);
    return res.status(500).json({ error: 'Error al autenticar con Google' });
  }
}