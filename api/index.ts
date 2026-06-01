import express from 'express';
// Agregamos .js al final de estas dos líneas
import authRoutes from '../server/routes/auth.js';
import favoritesRoutes from '../server/routes/favorites.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoritesRoutes);

export default app;