import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import authRoutes from "./routes/auth"; 
import favoritesRoutes from "./routes/favorites";
import reviewsRoutes from './routes/reviews';
import uploadUrlRoute from '../api/upload-url';
import businessesRoutes from "./routes/businesses";
import tourismRoutes from "./routes/tourism";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // 2. IMPORTANTE: La ruta debe estar conectada AQUÍ, ANTES del "return app;"
  app.use("/api/auth", authRoutes);
  app.use("/api/favorites", favoritesRoutes);
  app.use('/api/reviews', reviewsRoutes);
  app.post('/api/upload-url', uploadUrlRoute);
  app.use("/api/businesses", businessesRoutes);
  app.use("/api/tourism", tourismRoutes);

  return app;
}