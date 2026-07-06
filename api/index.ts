import express from 'express';
import authRoutes from '../server/routes/auth.js';
import favoritesRoutes from '../server/routes/favorites.js';
import reviewsRoutes from '../server/routes/reviews.js';
import businessesRoutes from '../server/routes/businesses.js';
import tourismRoutes from '../server/routes/tourism.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/api/businesses', businessesRoutes);
app.use('/api/tourism', tourismRoutes);

export default app;