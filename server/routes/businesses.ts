// server/routes/businesses.ts
import express from 'express';
import { sql } from '@vercel/postgres';

const router = express.Router();

// Obtener todos los negocios desde Vercel Neon
router.get('/', async (_req, res) => {
  try {
    const result = await sql`SELECT * FROM businesses;`;
    
    // Mapeamos las filas para que mantengan la estructura exacta que el cliente espera
    const businesses = result.rows.map(row => ({
      id: row.id,
      ciudad: row.ciudad,
      category: row.category,
      name: row.name,
      image: row.image,
      // Si guardaste los tags como un array de Postgres, pasará directo. 
      // Si se guardó como string/texto, lo parseamos como JSON.
      tags: Array.isArray(row.tags) ? row.tags : JSON.parse(row.tags || '[]'),
      whatsapp: row.whatsapp,
      mapUrl: row.mapurl, // Convertimos mapurl (BD) a mapUrl (Frontend)
      phone: row.phone
    }));

    res.json(businesses);
  } catch (error) {
    console.error('Error al obtener los negocios de Neon:', error);
    res.status(500).json({ error: 'Error interno del servidor al cargar negocios' });
  }
});

export default router;