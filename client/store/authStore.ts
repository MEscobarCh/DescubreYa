import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  name: string;
  email: string;
  auth_provider: string;
}

export interface FavoriteItem {
  item_id: number;
  item_type: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  favorites: FavoriteItem[];
  login: (user: User, token: string) => void;
  logout: () => void;
  setFavorites: (favorites: FavoriteItem[]) => void;
  toggleFavoriteState: (item_id: number, item_type: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      favorites: [], // Iniciamos con la lista vacía
      login: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null, favorites: [] }),
      setFavorites: (favorites) => set({ favorites }),
      
      // Lógica inmediata para llenar/vaciar el corazón en la UI
      toggleFavoriteState: (item_id, item_type) => set((state) => {
        const exists = state.favorites.some(f => f.item_id === item_id && f.item_type === item_type);
        if (exists) {
          return { favorites: state.favorites.filter(f => !(f.item_id === item_id && f.item_type === item_type)) };
        }
        return { favorites: [...state.favorites, { item_id, item_type }] };
      })
    }),
    {
      name: 'auth-storage',
    }
  )
);