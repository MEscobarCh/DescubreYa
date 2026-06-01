import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto_super_seguro_descubreya';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  try {
    const { name, email, password } = req.body;

    // Verificar si el correo ya existe
    const userCheck = await sql`SELECT id FROM users WHERE email = ${email}`;
    if (userCheck.rowCount > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado.' });
    }

    // Encriptar la contraseña (usando la versión ligera)
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Insertar en la base de datos
    const result = await sql`
      INSERT INTO users (name, email, password_hash, auth_provider)
      VALUES (${name}, ${email}, ${passwordHash}, 'local')
      RETURNING id, name, email, avatar_url, auth_provider;
    `;

    const user = result.rows[0];
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    return res.status(201).json({ user, token });
  } catch (error) {
    console.error('Error en registro:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}