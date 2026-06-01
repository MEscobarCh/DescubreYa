import express from 'express';
// Importamos las rutas de tu carpeta server original
import authRoutes from '../server/routes/auth';
import favoritesRoutes from '../server/routes/favorites';

const app = express();

// Middleware básico para entender JSON
app.use(express.json());

// Enganchamos tus rutas
app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoritesRoutes);

// ¡ESTA ES LA LÍNEA MÁGICA PARA VERCEL!
// En lugar de hacer app.listen(), exportamos la app
export default app;