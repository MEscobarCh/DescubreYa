import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapIcon, Mountain, Store as StoreIcon, HeartOff } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { sitiosTuristicos } from '@/lib/turismoData';
import { BUSINESSES } from '@/lib/negociosData';
import { FavoriteButton } from '../components/ui/FavoriteButton';


export default function Perfil() {
  const navigate = useNavigate();
  const { user, token, favorites, setFavorites } = useAuthStore();

  // Forzar la descarga de favoritos al entrar al perfil
  useEffect(() => {
    const fetchFavorites = async () => {
      if (user && token) {
        try {
          const res = await fetch('/api/favorites', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          if (res.ok) {
            const data = await res.json();
            setFavorites(data);
          }
        } catch (error) {
          console.error('Error al descargar favoritos:', error);
        }
      }
    };
    fetchFavorites();
  }, [user, token, setFavorites]);
  const [activeTab, setActiveTab] = useState<'turismo' | 'negocio'>('turismo');

  // Si alguien intenta entrar sin iniciar sesión, lo devolvemos al inicio
  if (!user) {
    navigate('/');
    return null;
  }

  // Filtramos la data real cruzándola con los IDs guardados en Zustand
  const misLugaresTuristicos = sitiosTuristicos.filter(sitio => 
    favorites.some(f => f.item_type === 'turismo' && f.item_id === sitio.id)
  );

  const misNegocios = BUSINESSES.filter(negocio => 
    favorites.some(f => f.item_type === 'negocio' && f.item_id === negocio.id)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header del Perfil */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-black text-slate-800">Mi Itinerario</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800">{user.name}</p>
              <p className="text-xs text-slate-500 font-medium">Explorador</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Pestañas de Navegación */}
        <div className="flex p-1 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-sm mb-8 mx-auto sm:mx-0">
          <button
            onClick={() => setActiveTab('turismo')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'turismo' 
                ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <Mountain className="w-4 h-4" /> Turismo ({misLugaresTuristicos.length})
          </button>
          <button
            onClick={() => setActiveTab('negocio')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'negocio' 
                ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <StoreIcon className="w-4 h-4" /> Local ({misNegocios.length})
          </button>
        </div>

        {/* Contenido: Turismo */}
        {activeTab === 'turismo' && (
          misLugaresTuristicos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {misLugaresTuristicos.map(sitio => (
                <div key={sitio.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <div className="relative h-48">
                    <img src={sitio.imagen} alt={sitio.nombre} className="w-full h-full object-cover" />
                    <FavoriteButton itemId={sitio.id} itemType="turismo" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-black uppercase text-indigo-700 shadow-sm">
                      {sitio.ciudad}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-slate-800 text-lg mb-2">{sitio.nombre}</h3>
                    <button
                      onClick={() => window.open(sitio.mapUrl, "_blank")}
                      className="w-full py-2.5 bg-slate-50 hover:bg-indigo-50 text-indigo-600 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                    >
                      <MapIcon className="w-4 h-4" /> Ver en Mapa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="Aún no has guardado ningún destino turístico." />
          )
        )}

        {/* Contenido: Negocios */}
        {activeTab === 'negocio' && (
          misNegocios.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {misNegocios.map(negocio => (
                <div key={negocio.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <div className="relative h-48">
                    <img src={negocio.image} alt={negocio.name} className="w-full h-full object-cover" />
                    <FavoriteButton itemId={negocio.id} itemType="negocio" />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-black uppercase text-indigo-700 shadow-sm">
                      {negocio.ciudad}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-slate-800 text-lg mb-2">{negocio.name}</h3>
                    <button
                      onClick={() => window.open(negocio.mapUrl, "_blank")}
                      className="w-full py-2.5 bg-slate-50 hover:bg-indigo-50 text-indigo-600 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200"
                    >
                      <MapIcon className="w-4 h-4" /> Ubicar Local
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="Aún no has guardado negocios o locales." />
          )
        )}
      </main>
    </div>
  );
}

// Subcomponente para cuando no hay datos
const EmptyState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in duration-500">
    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
      <HeartOff className="w-10 h-10 text-slate-400" />
    </div>
    <h3 className="text-xl font-black text-slate-700 mb-2">Lista vacía</h3>
    <p className="text-slate-500 max-w-sm">{message}</p>
  </div>
);