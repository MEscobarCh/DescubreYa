import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sql } from '@vercel/postgres';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'mi_secreto_super_seguro_descubreya';

// 1. REGISTRO TRADICIONAL
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userCheck = await sql`SELECT id FROM users WHERE email = ${email}`;
    
    if (userCheck.rowCount > 0) {
      return res.status(400).json({ error: 'El correo ya está registrado.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const result = await sql`
      INSERT INTO users (name, email, password_hash, auth_provider)
      VALUES (${name}, ${email}, ${passwordHash}, 'local')
      RETURNING id, name, email, auth_provider;
    `;

    const user = result.rows[0];
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ user, token });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 2. LOGIN TRADICIONAL
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await sql`SELECT * FROM users WHERE email = ${email}`;
    const user = result.rows[0];

    if (!user) return res.status(400).json({ error: 'Usuario no encontrado.' });
    if (user.auth_provider === 'google' && !user.password_hash) {
      return res.status(400).json({ error: 'Usa el botón de Google para entrar.' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ error: 'Contraseña incorrecta.' });

    delete user.password_hash;
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ user, token });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// 3. LOGIN CON GOOGLE
router.post('/google', async (req, res) => {
  try {
    // Ya no extraemos 'picture'
    const { email, name } = req.body;
    let result = await sql`SELECT * FROM users WHERE email = ${email}`;
    let user = result.rows[0];

    if (!user) {
      const insertResult = await sql`
        INSERT INTO users (name, email, auth_provider)
        VALUES (${name}, ${email}, 'google')
        RETURNING id, name, email, auth_provider;
      `;
      user = insertResult.rows[0];
    }
    // Eliminamos el 'else if' porque ya no necesitamos actualizar la foto local

    if (user.password_hash) delete user.password_hash;
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ user, token });
  } catch (error) {
    console.error('Error en auth de Google:', error);
    res.status(500).json({ error: 'Error al autenticar con Google' });
  }
});

export default router;