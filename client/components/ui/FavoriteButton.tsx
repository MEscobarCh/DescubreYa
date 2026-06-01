import { Heart } from 'lucide-react';
import { useAuthStore } from "../../store/authStore";
import { useState } from 'react';

export const FavoriteButton = ({ itemId, itemType }: { itemId: number, itemType: string }) => {
  const { user, token, favorites, toggleFavoriteState } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  // Verificamos si este lugar exacto ya está en la memoria global
  const isFavorite = favorites.some(f => f.item_id === itemId && f.item_type === itemType);

  const handleToggle = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que la tarjeta haga otra acción al hacer clic en el corazón
    
    if (!user || !token) {
      alert("Debes iniciar sesión para guardar favoritos.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/favorites/toggle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Autenticación estricta
        },
        body: JSON.stringify({ itemId, itemType })
      });

      if (res.ok) {
        toggleFavoriteState(itemId, itemType); // Actualiza la UI al instante
      } else {
        console.error("Error al guardar favorito en la base de datos");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button 
      onClick={handleToggle}
      disabled={isLoading}
      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md shadow-sm transition-all hover:scale-110 active:scale-95 z-10 ${
        isFavorite ? 'bg-white/90 text-red-500' : 'bg-white/50 text-gray-500 hover:bg-white/80'
      }`}
    >
      <Heart className={`w-5 h-5 transition-all ${isFavorite ? 'fill-current scale-110' : ''} ${isLoading ? 'opacity-50 animate-pulse' : ''}`} />
    </button>
  );
};