// server/routes/tourism.ts
import express from 'express';
import { sql } from '@vercel/postgres';

const router = express.Router();

// Obtener todos los sitios turísticos desde Vercel Neon
router.get('/', async (_req, res) => {
  try {
    const result = await sql`SELECT * FROM tourist_spots;`;
    
    // Mapeamos las filas para que mantengan la estructura exacta que el frontend espera
    const spots = result.rows.map(row => ({
      id: row.id,
      ciudad: row.ciudad,
      categoria: row.categoria,
      nombre: row.nombre,
      descripcion: row.descripcion,
      imagen: row.imagen,
      dificultad: row.dificultad,
      mapUrl: row.mapurl // Convertimos mapurl (BD) a mapUrl (Frontend)
    }));

    res.json(spots);
  } catch (error) {
    console.error('Error al obtener los sitios turísticos de Neon:', error);
    res.status(500).json({ error: 'Error interno del servidor al cargar sitios turísticos' });
  }
});

export default router;