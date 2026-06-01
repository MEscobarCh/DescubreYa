import { useState, useEffect } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { useAuthStore } from '@/store/authStore'; // Ajusta la ruta si es necesario
import { useReviewStore } from '@/store/reviewStore'; // Ajusta la ruta si es necesario

export function ReviewSection({ placeId }: { placeId: string }) {
  const { user, token } = useAuthStore();
  const { reviews, stats, hasMore, currentPage, isLoading, fetchReviews, submitReview, resetReviews, deleteReview } = useReviewStore();

  // Estados locales para el formulario
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [comment, setComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Saber si el usuario ya comentó
  const hasReviewed = reviews.some(r => r.user_id === user?.id);

  // Ordenar para que el comentario del usuario SIEMPRE salga primero
  const sortedReviews = [...reviews].sort((a, b) => {
    if (user && a.user_id === user.id) return -1;
    if (user && b.user_id === user.id) return 1;
    return 0;
  });

  // 1. Cargar las reseñas al entrar al sitio
  useEffect(() => {
    fetchReviews(placeId, 1);
    return () => resetReviews(); // Limpiar al salir
  }, [placeId]);

  // 2. Si el usuario ya comentó antes, autocompletamos el formulario para que lo edite
  useEffect(() => {
    if (user) {
      const myReview = reviews.find(r => r.user_id === user.id);
      if (myReview) {
        setRating(myReview.rating);
        setComment(myReview.comment);
      }
    }
  }, [reviews, user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || rating === 0) return;
    
    setIsSubmitting(true);
    const success = await submitReview(placeId, rating, comment, token);
    if (success) {
      setIsEditing(false); // <-- Oculta el formulario tras guardar
    }
    setIsSubmitting(false);
  };

  const handleDelete = async () => {
    if (!token) return;
    if (window.confirm('¿Estás seguro de que deseas eliminar tu reseña permanentemente?')) {
      setIsSubmitting(true);
      const success = await deleteReview(placeId, token);
      if (success) {
        setRating(0);
        setComment('');
        setIsEditing(false); // <-- Asegura que el formulario se resetee
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      {/* --- CABECERA: PROMEDIO --- */}
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
        <div className="flex flex-col items-center justify-center bg-green-50 rounded-xl p-4 min-w-[100px]">
          <span className="text-3xl font-black text-green-700">{stats.average.toFixed(1)}</span>
          <div className="flex text-yellow-400 mt-1">
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">Reseñas de viajeros</h3>
          <p className="text-sm text-gray-500">Basado en {stats.total} opiniones</p>
        </div>
      </div>

      {/* --- FORMULARIO DE RESEÑA --- */}
      {user ? (
        (!hasReviewed || isEditing) ? (
          <form onSubmit={handleSubmit} className="mb-8 bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-sm font-semibold text-gray-700 mb-2">Tu calificación</p>
            
            {/* ... MANTÉN TUS BOTONES DE ESTRELLAS Y TEXTAREA EXACTAMENTE IGUAL AQUÍ ... */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="focus:outline-none transition-transform hover:scale-110"
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => setRating(star)}
                >
                  <Star className={`w-8 h-8 ${star <= (hoveredStar || rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} transition-colors`} />
                </button>
              ))}
            </div>
            
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="¿Qué te pareció este lugar? Comparte tu experiencia..."
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none h-24 text-sm"
              required
            />

            {/* 👇 BOTONES ACTUALIZADOS 👇 */}
            <div className="mt-3 flex gap-3">
              <button
                type="submit"
                disabled={rating === 0 || isSubmitting}
                className={`px-6 py-2 rounded-lg text-white font-bold text-sm transition-all flex-1 sm:flex-none ${
                  rating === 0 || isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-md'
                }`}
              >
                {isSubmitting ? 'Procesando...' : (hasReviewed ? 'Actualizar Reseña' : 'Publicar Reseña')}
              </button>
              
              {/* Nuevo botón Cancelar solo si está editando */}
              {hasReviewed && (
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  disabled={isSubmitting}
                  className="px-6 py-2 rounded-lg text-gray-600 font-bold text-sm transition-all bg-gray-200 hover:bg-gray-300"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        ) : null // Ocultamos el formulario si ya comentó y NO está editando
      ) : (
        <div className="mb-8 p-4 bg-gray-50 rounded-xl flex items-center gap-3 text-gray-600 text-sm">
          <MessageSquare className="w-5 h-5 text-gray-400" />
          <p>Debes iniciar sesión para dejar tu experiencia.</p>
        </div>
      )}

      {/* --- LISTA DE COMENTARIOS --- */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-white rounded-xl border border-gray-100 hover:shadow-sm transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {/* Avatar del usuario que comentó */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xs">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(review.created_at).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* 👇 NUEVO: Botones Editar/Eliminar si es el dueño 👇 */}
                {user && user.id === review.user_id && (
                  <div className="flex items-center gap-3 mr-2 border-r border-gray-100 pr-3">
                    <button 
                      onClick={() => {
                        setRating(review.rating);
                        setComment(review.comment);
                        setIsEditing(true); // <-- Abre el formulario
                      }}
                      className="text-[11px] font-bold text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      Editar
                    </button>
                    <button 
                      onClick={handleDelete}
                      className="text-[11px] font-bold text-red-500 hover:text-red-700 transition-colors"
                    >
                      Borrar
                    </button>
                  </div>
                )}
                {/* 👆 ----------------------------------------------- 👆 */}
                
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{review.comment}</p>
          </div>
        ))}

        {/* Botón de Cargar Más */}
        {hasMore && (
          <button
            onClick={() => fetchReviews(placeId, currentPage + 1)}
            disabled={isLoading}
            className="w-full py-3 mt-4 text-sm font-bold text-green-600 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
          >
            {isLoading ? 'Cargando...' : 'Ver más opiniones'}
          </button>
        )}
      </div>
    </div>
  );
}