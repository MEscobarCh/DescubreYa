import express from 'express';
import authRoutes from '../server/routes/auth.js';
import favoritesRoutes from '../server/routes/favorites.js';
// 1. Importamos la nueva ruta
import reviewsRoutes from '../server/routes/reviews.js'; 

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoritesRoutes);
// 2. Le decimos a Express que la use
app.use('/api/reviews', reviewsRoutes); 

export default app;