import { create } from 'zustand';

export interface Review {
  id: number;
  rating: number;
  comment: string;
  created_at: string;
  name: string;
  avatar_url: string | null;
  user_id: string;
  image_url?: string | null; // 👇 NUEVO: Le avisamos que puede venir una foto
}

interface ReviewStats {
  average: number;
  total: number;
}

interface ReviewStore {
  reviews: Review[];
  stats: ReviewStats;
  currentPage: number;
  hasMore: boolean;
  isLoading: boolean;
  // 👇 NUEVO: Para las tarjetas del Index
  globalRatings: Record<string, ReviewStats>; 
  fetchAllRatings: () => Promise<void>; 
  // 👆 --------------------------------
  fetchReviews: (placeId: string, page?: number) => Promise<void>;
  submitReview: (placeId: string, rating: number, comment: string, token: string, imageUrl?: string | null) => Promise<boolean>;
  deleteReview: (placeId: string, token: string) => Promise<boolean>;
  resetReviews: () => void;
}

export const useReviewStore = create<ReviewStore>((set, get) => ({
  reviews: [],
  stats: { average: 0, total: 0 },
  currentPage: 1,
  hasMore: false,
  isLoading: false,
  globalRatings: {}, // <-- Inicializamos vacío

  // 👇 NUEVO: Descarga todos los promedios de golpe para el Index
  fetchAllRatings: async () => {
    try {
      const res = await fetch('/api/reviews');
      if (res.ok) {
        const data = await res.json();
        set({ globalRatings: data });
      }
    } catch (error) {
      console.error("Error fetching all ratings:", error);
    }
  },

  fetchReviews: async (placeId, page = 1) => {
    set({ isLoading: true });
    try {
      const res = await fetch(`/api/reviews/${placeId}?page=${page}`);
      if (!res.ok) throw new Error("Error al obtener reseñas");
      const data = await res.json();
      
      set((state) => ({
        reviews: page === 1 ? data.reviews : [...state.reviews, ...data.reviews],
        stats: data.stats,
        currentPage: data.currentPage,
        hasMore: data.hasMore,
        isLoading: false
      }));
    } catch (error) {
      console.error("Error fetching reviews:", error);
      set({ isLoading: false });
    }
  },

  submitReview: async (placeId, rating, comment, token, imageUrl = null) => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ place_id: placeId, rating, comment, image_url: imageUrl })
      });

      if (!res.ok) throw new Error("Error al guardar reseña");
      
      await get().fetchReviews(placeId, 1);
      await get().fetchAllRatings(); // <-- NUEVO: Actualizar tarjetas automáticamente
      return true;
    } catch (error) {
      console.error("Error submitting review:", error);
      return false;
    }
  },

  deleteReview: async (placeId, token) => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ place_id: placeId })
      });

      if (!res.ok) throw new Error("Error al eliminar reseña");
      
      await get().fetchReviews(placeId, 1);
      await get().fetchAllRatings(); // Actualizamos las tarjetas
      return true;
    } catch (error) {
      console.error("Error deleting review:", error);
      return false;
    }
  },

  resetReviews: () => set({ 
    reviews: [], 
    stats: { average: 0, total: 0 }, 
    currentPage: 1, 
    hasMore: false 
  })
}));