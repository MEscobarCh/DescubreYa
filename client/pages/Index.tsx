import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Facebook,
  Instagram,
  MapIcon,
  ChevronDown,
  Mountain,
  Clock,
  Tag,
  Star,
  Zap,
  Store as StoreIcon,
  Globe as GlobeIcon,
  Search,
  Sun,
  Cloud,
  CloudRain,
} from "lucide-react";
import { applyThemeToDOM } from "@/lib/cityThemes";
import { sitiosTuristicos } from "@/lib/turismoData";
import { BUSINESSES } from "@/lib/negociosData";
import { useAuthStore } from "@/store/authStore";
import { GoogleLogin } from '@react-oauth/google';
import { User as UserIcon, LogOut, Mail, Lock, UserPlus } from "lucide-react";
import { FavoriteButton } from "../components/ui/FavoriteButton";
import { Link } from 'react-router-dom';
import { ReviewSection } from '@/components/ui/ReviewSection';
import { useReviewStore } from "@/store/reviewStore"

// Piloto enfocado exclusivamente en 4 ciudades controladas
const CITIES = ["Tingo María", "Huánuco", "Tarapoto", "Cusco"];

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// 1. Objeto de Temas Maestro (Centralizado sin Lima)
const CITY_THEMES: Record<string, { turismo: string; rutaLocal: string; accent: string; button: string; bg: string }> = {
  "Tingo María": {
    turismo: "from-emerald-400 to-green-600",
    rutaLocal: "from-green-600 to-emerald-800",
    accent: "text-emerald-600 border-emerald-400",
    button: "from-emerald-500 to-green-600",
    bg: "from-emerald-50/50 to-white"
  },
  "Huánuco": {
    turismo: "from-sky-400 to-blue-600",
    rutaLocal: "from-blue-600 to-indigo-800",
    accent: "text-sky-600 border-sky-400",
    button: "from-sky-500 to-blue-600",
    bg: "from-sky-50/50 to-white"
  },
  "Tarapoto": {
    turismo: "from-teal-400 to-cyan-600",
    rutaLocal: "from-cyan-600 to-teal-800",
    accent: "text-teal-600 border-teal-400",
    button: "from-teal-500 to-cyan-600",
    bg: "from-teal-50/50 to-white"
  },
  "Cusco": {
    turismo: "from-amber-400 to-orange-600",
    rutaLocal: "from-orange-600 to-amber-800",
    accent: "text-amber-600 border-amber-400",
    button: "from-amber-500 to-orange-600",
    bg: "from-amber-50/50 to-white"
  }
};

// 3. Coordenadas para el Clima
const CITY_COORDINATES: Record<string, { lat: number; lon: number }> = {
  "Tingo María": { lat: -9.2977, lon: -76.0052 },
  "Huánuco": { lat: -9.9306, lon: -76.2422 },
  "Tarapoto": { lat: -6.4878, lon: -76.3597 },
  "Cusco": { lat: -13.5226, lon: -71.9673 }
};

// 2. Categorías Optimizadas (Propuesta A)
const BUSINESS_CATEGORIES = [
  { id: 1, name: "Restaurantes", icon: "🍽️" },
  { id: 2, name: "Hoteles", icon: "🏨" },
  { id: 3, name: "Panaderías y Cafés", icon: "☕" },
  { id: 4, name: "Bares y Discotecas", icon: "🍹" },
  { id: 5, name: "Deporte y Recreación", icon: "⚽" },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Acceso Fácil": 
      return "bg-emerald-100 text-emerald-700"; // Verde
    case "Caminata Moderada": 
      return "bg-amber-100 text-amber-700"; // Ámbar
    case "Ruta Exigente": 
      return "bg-red-100 text-red-700"; // Rojo (¡Contraste perfecto!)
    default: 
      return "bg-gray-100 text-gray-700";
  }
};

export default function Index() {
  // --- ESTADOS DE AUTENTICACIÓN ---
  // 1. Actualizamos la llamada al store
  const { user, token, login, logout, setFavorites } = useAuthStore();
  const { globalRatings, fetchAllRatings } = useReviewStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // 2. Agregamos el efecto de descarga automática
  useEffect(() => {
    fetchAllRatings();
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
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authName, setAuthName] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // 1. Iniciamos leyendo la memoria del navegador (por defecto true para Turismo)
  const [isTourism, setIsTourism] = useState(() => {
    const saved = localStorage.getItem('isTourismMode');
    return saved !== null ? saved === 'true' : true; // Convierte el texto guardado a booleano
  });

  // 2. Guardamos en memoria automáticamente cada vez que cambies de vista
  useEffect(() => {
    localStorage.setItem('isTourismMode', isTourism.toString());
  }, [isTourism]);
  // 3. Memoria para la Ciudad
  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem('ciudadGuardada') || "Tingo María";
  });

  useEffect(() => {
    localStorage.setItem('ciudadGuardada', selectedCity);
  }, [selectedCity]);

  // 4. Memoria para la Categoría de Negocios
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem('categoriaGuardada') || "Restaurantes";
  });

  useEffect(() => {
    localStorage.setItem('categoriaGuardada', selectedCategory);
  }, [selectedCategory]);
  const [emailInput, setEmailInput] = useState("");
  const [activeReviewItem, setActiveReviewItem] = useState<{id: string, name: string} | null>(null);
// --- ESTADOS DE BÚSQUEDA Y FILTROS ---
  const [searchTourism, setSearchTourism] = useState("");
  const [tourismDifficulty, setTourismDifficulty] = useState<string | null>(null); // null = mostrar todos
  const [searchBusiness, setSearchBusiness] = useState("");
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  // --- ESTADOS DE PAGINACIÓN ---
  const [currentPageTourism, setCurrentPageTourism] = useState(1);
  const [currentPageBusiness, setCurrentPageBusiness] = useState(1);
  const ITEMS_PER_PAGE = 8; // Múltiplo de 4 para preservar la simetría de la cuadrícula

  const theme = CITY_THEMES[selectedCity] || CITY_THEMES["Tingo María"];

  // --- REINICIO DE PAGINACIÓN ---
  useEffect(() => {
    setCurrentPageTourism(1);
    setCurrentPageBusiness(1);
  }, [selectedCity, selectedCategory, isTourism, searchTourism, tourismDifficulty, searchBusiness]);

  // --- LÓGICA DE DATOS: TURISMO ---
  const filteredTourism = sitiosTuristicos.filter((sitio) => {
    const matchCity = sitio.ciudad === selectedCity;
    const matchSearch = sitio.nombre.toLowerCase().includes(searchTourism.toLowerCase());
    const matchDifficulty = tourismDifficulty ? sitio.dificultad === tourismDifficulty : true;
    
    return matchCity && matchSearch && matchDifficulty;
  });
  
  const totalTourismPages = Math.ceil(filteredTourism.length / ITEMS_PER_PAGE);
  const paginatedTourism = filteredTourism.slice(
    (currentPageTourism - 1) * ITEMS_PER_PAGE,
    currentPageTourism * ITEMS_PER_PAGE
  );

  // --- LÓGICA DE DATOS: RUTA LOCAL ---
  const filteredBusinesses = BUSINESSES.filter((b) => {
    const matchCity = b.ciudad === selectedCity;
    const matchCategory = b.category === selectedCategory;
    const matchSearch = b.name.toLowerCase().includes(searchBusiness.toLowerCase());
    
    return matchCity && matchCategory && matchSearch;
  });
  
  const totalBusinessPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE);
  const paginatedBusinesses = filteredBusinesses.slice(
    (currentPageBusiness - 1) * ITEMS_PER_PAGE,
    currentPageBusiness * ITEMS_PER_PAGE
  );

  useEffect(() => {
    applyThemeToDOM(selectedCity);
    document.title = `¡DescubreYA! - ${selectedCity}`;

    const gaId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
    if (gaId && !window.gtag) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', gaId);
    }
  }, [selectedCity]);

  // --- LÓGICA DEL CLIMA ---
  useEffect(() => {
    const fetchWeather = async () => {
      const coords = CITY_COORDINATES[selectedCity];
      if (!coords) return;
      
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`);
        const data = await res.json();
        if (data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode
          });
        }
      } catch (error) {
        console.error("Error obteniendo el clima:", error);
      }
    };

    fetchWeather();
  }, [selectedCity]);

  // Función para traducir el código del clima a un ícono visual
  const renderWeatherIcon = (code: number) => {
    if (code <= 2) return <Sun className="w-4 h-4 text-amber-500 fill-current" />; // Despejado / Parcial
    if (code <= 48) return <Cloud className="w-4 h-4 text-gray-400 fill-current" />; // Nublado / Niebla
    return <CloudRain className="w-4 h-4 text-blue-500 fill-current" />; // Lluvia
  };

  const trackRutaClick = (sitioNombre: string, categoria: string) => {
    if (window.gtag) {
      window.gtag('event', 'click_trazar_ruta', {
        'destination_name': sitioNombre,
        'category': categoria,
        'city': selectedCity
      });
    }
  };

  const trackSuscripcion = async () => {
    if (!emailInput.includes("@")) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailInput, ciudad: selectedCity }),
      });
      if (response.ok) {
        if (window.gtag) {
          window.gtag('event', 'generate_lead', { 'method': 'footer_form', 'city_context': selectedCity });
        }
        alert(`¡Viento en popa! Te avisaremos de las novedades en ${selectedCity} ⛵`);
        setEmailInput("");
      } else {
        throw new Error('Error al guardar');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No pudimos guardar tu correo. Inténtalo de nuevo.");
    }
  };

  // --- MANEJADORES DE AUTENTICACIÓN ---
  const handleTraditionalAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    try {
      const endpoint = authMode === 'login' ? '/api/auth/login' : '/api/auth/register';
      const body = authMode === 'login'
        ? { email: authEmail, password: authPassword }
        : { name: authName, email: authEmail, password: authPassword };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      
      const data = await res.json();

      if (res.ok) {
        login(data.user, data.token);
        setIsAuthModalOpen(false);
      } else {
        alert(data.error || 'Error en la autenticación');
      }
    } catch (error) {
      alert('Error de conexión');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      const base64Url = credentialResponse.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      const payload = JSON.parse(jsonPayload);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: payload.email,
          name: payload.name,
        })
      });

      // --- NUEVA LÓGICA DE DETECCIÓN ---
      const textResponse = await res.text(); // Leemos la respuesta cruda primero
      
      if (!textResponse) {
        console.error("El servidor devolvió una respuesta vacía.");
        alert("Error: El servidor no respondió. Revisa la consola de tu terminal.");
        return;
      }

      const data = JSON.parse(textResponse); // Ahora sí la convertimos a JSON

      if (res.ok) {
        login(data.user, data.token);
        setIsAuthModalOpen(false);
      } else {
        alert(data.error || 'Error con Google');
      }
    } catch (error) {
      console.error('Google Auth Error:', error);
      alert('Error procesando el login con Google. Revisa la consola F12.');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-500`}>
      
      {/* Header Adaptativo */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-1">
            
            {/* Logo convertido a botón de inicio */}
            <button 
              onClick={() => {
                setIsTourism(true); // Vuelve a la pestaña de Turismo
                setCurrentPageTourism(1); // Regresa a la página 1 de resultados
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Deslizamiento suave hacia arriba
              }}
              className="flex items-center gap-2 justify-center w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none cursor-pointer"
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.button} flex-shrink-0 flex items-center justify-center text-sm shadow-sm`}>
                🌍
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[hsl(var(--theme-primary))] tracking-tight">
                ¡Descubre<span className={theme.accent.split(' ')[0]}>YA</span>!
              </h1>
            </button>

            {/* Controles y Autenticación */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-50">
              
              {/* Usuario / Botón de Login */}
              {user ? (
                <div className="flex items-center gap-2 mr-2 border-r pr-3 border-gray-200">
                  {/* 👇 NUEVO: MENÚ DESPLEGABLE AVANZADO 👇 */}
                  <div className="relative" ref={menuRef}>
                    {/* Botón Principal (El Avatar) */}
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-white border border-gray-200 hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 group shadow-sm hover:shadow-md"
                      aria-expanded={isMenuOpen}
                      aria-haspopup="true"
                    >
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-r ${theme.button}`}>
                        {user.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="hidden sm:block text-sm font-bold text-slate-700 group-hover:text-slate-900">
                        {user.name.split(' ')[0]}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    {/* El Menú Flotante */}
                    {isMenuOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-[100] border border-gray-100 origin-top-right transform transition-all duration-200">
                        <div className="px-4 py-3 border-b border-gray-50">
                          <p className="text-sm font-semibold text-gray-800 truncate">
                            {user.name}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {user.email || 'Usuario verificado'}
                          </p>
                        </div>
                        <div className="mt-2">
                          <Link
                            to="/perfil"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-50 transition-colors font-medium"
                          >
                            👤 Mi Itinerario
                          </Link>
                          <button
                            onClick={() => {
                              setIsMenuOpen(false);
                              logout();
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors mt-1 font-medium"
                          >
                            🚪 Cerrar Sesión
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* 👆 FIN MENÚ DESPLEGABLE 👆 */}
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className={`flex items-center justify-center gap-1.5 h-8 sm:h-10 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r shadow-sm hover:shadow-md transition-all active:scale-95 mr-1 sm:mr-2 ${theme.button}`}
                >
                  <UserIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Ingresar
                </button>
              )}

              {/* Selector de Ciudad */}
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className={`appearance-none w-[100px] sm:w-44 px-2 sm:px-3 py-1.5 pr-6 sm:pr-8 border-2 rounded-xl bg-white text-[hsl(var(--theme-primary))] font-bold text-[10px] sm:text-sm focus:outline-none transition-all ${theme.accent.split(' ')[1]}`}
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              
              {/* 👇 NUEVO: WIDGET DE CLIMA 👇 */}
              {weather && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-gray-200 rounded-xl shadow-sm transition-all hover:shadow-md animate-in fade-in duration-500">
                  {renderWeatherIcon(weather.code)}
                  <span className="text-[11px] sm:text-sm font-black text-slate-700">
                    {weather.temp}°C
                  </span>
                </div>
              )}
              {/* 👆 FIN WIDGET DE CLIMA 👆 */}

              {/* Toggle Turismo/Ruta Local */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => setIsTourism(!isTourism)}
                  className={`relative inline-flex h-8 w-14 sm:h-10 sm:w-20 items-center rounded-full transition-all duration-500 shadow-md flex-shrink-0 bg-gradient-to-r ${
                    isTourism ? theme.turismo : theme.rutaLocal
                  }`}
                >
                  <span className={`inline-block h-6 w-6 sm:h-8 sm:w-8 transform rounded-full bg-white transition-all duration-300 flex items-center justify-center text-sm shadow-lg ${isTourism ? "translate-x-1" : "translate-x-7 sm:translate-x-11"}`}>
                    {isTourism ? "⛰️" : "🏪"}
                  </span>
                </button>
                <span className={`whitespace-nowrap text-[10px] sm:text-sm font-black uppercase tracking-tighter transition-colors duration-500 ${theme.accent.split(' ')[0]}`}>
                  {isTourism ? "Turismo" : "Ruta Local"}
                </span>
              </div>

            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {isTourism ? (
          <section className="space-y-8 animate-in fade-in duration-700">
            {/* 👇 NUEVO: BUSCADOR Y FILTROS TURISMO 👇 */}
            <div className="flex flex-col xl:flex-row gap-4 py-4">
              {/* Barra de búsqueda */}
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Buscar lugares en ${selectedCity}...`}
                  value={searchTourism}
                  onChange={(e) => setSearchTourism(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 focus:border-${theme.accent.split(' ')[1].replace('border-', '')} outline-none transition-all shadow-sm text-sm font-medium text-slate-700 bg-white`}
                />
              </div>
              
              {/* Pastillas (Pills) de Dificultad */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar items-center pb-2 xl:pb-0">
                <button
                  onClick={() => setTourismDifficulty(null)}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap border-2 ${
                    tourismDifficulty === null
                      ? `bg-slate-800 text-white border-slate-800 shadow-md`
                      : `bg-white text-slate-600 border-gray-100 hover:border-slate-300`
                  }`}
                >
                  Todas
                </button>
                <button
                  onClick={() => setTourismDifficulty("Acceso Fácil")}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border-2 ${
                    tourismDifficulty === "Acceso Fácil"
                      ? `bg-emerald-500 text-white border-emerald-500 shadow-md`
                      : `bg-white text-emerald-700 border-emerald-100 hover:border-emerald-300`
                  }`}
                >
                  <Zap className="w-3 h-3" /> Acceso Fácil
                </button>
                <button
                  onClick={() => setTourismDifficulty("Caminata Moderada")}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border-2 ${
                    tourismDifficulty === "Caminata Moderada"
                      ? `bg-amber-500 text-white border-amber-500 shadow-md`
                      : `bg-white text-amber-700 border-amber-100 hover:border-amber-300`
                  }`}
                >
                  <Zap className="w-3 h-3" /> Caminata Moderada
                </button>
                <button
                  onClick={() => setTourismDifficulty("Ruta Exigente")}
                  className={`px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border-2 ${
                    tourismDifficulty === "Ruta Exigente"
                      ? `bg-red-500 text-white border-red-500 shadow-md`
                      : `bg-white text-red-700 border-red-100 hover:border-red-300`
                  }`}
                >
                  <Zap className="w-3 h-3" /> Ruta Exigente
                </button>
              </div>
            </div>
            {/* 👆 FIN BUSCADOR TURISMO 👆 */}

            {/* Listado Paginado de Turismo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedTourism.map((sitio) => (
                <div key={sitio.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <img src={sitio.imagen} alt={sitio.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* 👇 NUEVA INSIGNIA DE ESTRELLAS FLOTANTE 👇 */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm z-10">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                      <span className="text-xs font-black text-slate-800">
                        {/* Muestra el rating si existe en tus datos, o 4.8 por defecto */}
                        {globalRatings[sitio.id]?.average?.toFixed(1) || '0.0'}
                      </span>
                    </div>
                    {/* 👆 FIN INSIGNIA 👆 */}

                    {/* Botón de favoritos inyectado aquí */}
                    <FavoriteButton itemId={sitio.id} itemType="turismo" />
                  </div>
                  <div className="p-5">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.accent.split(' ')[0]}`}>{sitio.categoria}</span>
                    <h3 className="text-lg font-black text-[hsl(var(--theme-primary))] mt-1 mb-2">{sitio.nombre}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4">{sitio.descripcion}</p>
                    <div className={`mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide ${getDifficultyColor(sitio.dificultad)}`}>
                      <Zap className="w-3 h-3" /> {sitio.dificultad}
                    </div>
                    {/* Botones de acción divididos */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          trackRutaClick(sitio.nombre, sitio.categoria);
                          window.open(sitio.mapUrl, "_blank");
                        }}
                        className={`flex-1 py-3 bg-gradient-to-r text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1 hover:shadow-lg transition-all active:scale-95 ${theme.button}`}
                      >
                        <MapIcon className="w-4 h-4" /> Ruta
                      </button>
                      <button
                        onClick={() => setActiveReviewItem({ id: sitio.id.toString(), name: sitio.nombre })}
                        className="flex-1 py-3 bg-amber-50 text-amber-600 hover:bg-amber-100 border border-amber-200 rounded-xl font-bold text-xs flex items-center justify-center gap-1 transition-all active:scale-95"
                      >
                        <Star className="w-4 h-4 fill-current" /> Reseñas
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de Paginación para Turismo */}
            {totalTourismPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
                <button
                  onClick={() => setCurrentPageTourism(prev => Math.max(prev - 1, 1))}
                  disabled={currentPageTourism === 1}
                  className={`px-4 py-2 rounded-xl font-bold transition-all text-sm ${currentPageTourism === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : `bg-white border-2 hover:shadow-md ${theme.accent.split(' ')[0]} ${theme.accent.split(' ')[1]}`}`}
                >
                  Anterior
                </button>
                
                {/* Generador de Botones Numerados */}
                {Array.from({ length: totalTourismPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPageTourism(pageNum)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all text-sm flex items-center justify-center ${
                      currentPageTourism === pageNum 
                        ? `bg-gradient-to-r text-white shadow-md ${theme.button}` 
                        : `bg-white border-2 hover:shadow-md ${theme.accent.split(' ')[0]} ${theme.accent.split(' ')[1]}`
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPageTourism(prev => Math.min(prev + 1, totalTourismPages))}
                  disabled={currentPageTourism === totalTourismPages}
                  className={`px-4 py-2 rounded-xl font-bold transition-all text-sm ${currentPageTourism === totalTourismPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : `bg-white border-2 hover:shadow-md ${theme.accent.split(' ')[0]} ${theme.accent.split(' ')[1]}`}`}
                >
                  Siguiente
                </button>
              </div>
            )}
          </section>
        ) : (
          <section className="space-y-10 animate-in fade-in duration-700">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className={`w-6 h-6 ${theme.accent.split(' ')[0]}`} />
                <h2 className="text-3xl sm:text-5xl font-black text-[hsl(var(--theme-primary))]">Ruta Local</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm sm:text-lg">Descubre comercios, servicios y que mas hacer en {selectedCity}.</p>
            </div>

            {/* Grid de Categorías Optimizada a 5 Columnas Simétricas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {BUSINESS_CATEGORIES.map((cat) => (
                <button 
                  key={cat.id} 
                  onClick={() => setSelectedCategory(cat.name)} 
                  className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${
                    selectedCategory === cat.name 
                      ? `bg-gradient-to-br ${theme.button} text-white border-transparent shadow-lg scale-105` 
                      : `bg-white border-gray-100 hover:${theme.accent.split(' ')[1]} text-slate-700`
                  }`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[10px] font-bold text-center">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* 👇 NUEVO: BUSCADOR NEGOCIOS 👇 */}
            <div className="relative max-w-md mt-4 mb-2">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Buscar en ${selectedCategory}...`}
                value={searchBusiness}
                onChange={(e) => setSearchBusiness(e.target.value)}
                className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 focus:border-${theme.accent.split(' ')[1].replace('border-', '')} outline-none transition-all shadow-sm text-sm font-medium text-slate-700 bg-white`}
              />
            </div>
            {/* 👆 FIN BUSCADOR NEGOCIOS 👆 */}

            {/* Listado de Negocios Filtrados (Paginado) */}
            {paginatedBusinesses.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedBusinesses.map((negocio) => (
                    <div key={negocio.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between p-5 hover:shadow-2xl transition-all duration-500">
                      <div>
                        <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                          <img src={negocio.image} alt={negocio.name} loading="lazy" className="w-full h-full object-cover" />
                          
                          {/* 👇 NUEVA INSIGNIA DE ESTRELLAS FLOTANTE 👇 */}
                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm z-10">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                            <span className="text-xs font-black text-slate-800">
                              {/* Muestra el rating si existe en tus datos, o 4.5 por defecto */}
                              {globalRatings[negocio.id]?.average?.toFixed(1) || '0.0'}
                            </span>
                          </div>
                          {/* 👆 FIN INSIGNIA 👆 */}

                          {/* Botón de favoritos inyectado aquí */}
                          <FavoriteButton itemId={negocio.id} itemType="negocio" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-1">{negocio.name}</h3>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {negocio.tags.map((tag, idx) => (
                            <span key={idx} className="bg-slate-50 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-md border border-slate-100">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2 pt-4 border-t border-gray-50">
                        <div className="flex gap-2">
                          <a href={`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(`Hola ${negocio.name}, los encontré mediante ¡DescubreYA! 🌍 Estoy consultando sobre sus servicios en ${selectedCity}.`)}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                          </a>
                          <a href={negocio.mapUrl} target="_blank" rel="noopener noreferrer" className={`flex-1 py-2.5 bg-gradient-to-r text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${theme.button}`}>
                            <MapIcon className="w-4 h-4" /> Ubicar
                          </a>
                        </div>
                        {/* Fila inferior: Teléfono y Reseñas */}
                        <div className="flex gap-2 mt-2">
                          <a href={`tel:${negocio.phone}`} className="flex-1 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-slate-200">
                            <Phone className="w-4 h-4" /> {negocio.phone}
                          </a>
                          <button 
                            onClick={() => setActiveReviewItem({ id: negocio.id.toString(), name: negocio.name })} 
                            className="flex-1 py-2 bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-amber-200"
                          >
                            <Star className="w-4 h-4 fill-current" /> Reseñas
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controles de Paginación para Ruta Local */}
                {totalBusinessPages > 1 && (
                  <div className="flex justify-center items-center gap-3 mt-10">
                    <button
                      onClick={() => setCurrentPageBusiness(prev => Math.max(prev - 1, 1))}
                      disabled={currentPageBusiness === 1}
                      className={`px-5 py-2.5 rounded-xl font-bold transition-all text-sm ${currentPageBusiness === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : `bg-white border-2 hover:shadow-md ${theme.accent.split(' ')[0]} ${theme.accent.split(' ')[1]}`}`}
                    >
                      Anterior
                    </button>
                    
                    <span className="text-sm font-bold text-gray-600 min-w-[100px] text-center">
                      Página {currentPageBusiness} de {totalBusinessPages}
                    </span>

                    <button
                      onClick={() => setCurrentPageBusiness(prev => Math.min(prev + 1, totalBusinessPages))}
                      disabled={currentPageBusiness === totalBusinessPages}
                      className={`px-5 py-2.5 rounded-xl font-bold transition-all text-sm ${currentPageBusiness === totalBusinessPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : `bg-white border-2 hover:shadow-md ${theme.accent.split(' ')[0]} ${theme.accent.split(' ')[1]}`}`}
                    >
                      Siguiente
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100">
                <p className="text-gray-500 text-sm font-bold">Próximamente más negocios en esta categoría para {selectedCity} 🏪</p>
              </div>
            )}
          </section>
        )}

        {/* Sección Pilot Lead Generation */}
        <section className={`mt-20 bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border-2 border-dashed ${theme.accent.split(' ')[1].replace('border-', 'border-')}/20 text-center`}>
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl md:text-4xl font-black text-[hsl(var(--theme-primary))]">¡Únete al Piloto! 🚀</h3>
            <p className="text-gray-600 mb-6">
              Estamos en fase piloto. Déjanos tu correo para ser el primero en recibir ofertas exclusivas apenas estemos navegando <strong>a viento en popa</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <input 
                type="email" 
                placeholder="Ingresa tu correo" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className={`flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 focus:${theme.accent.split(' ')[1]} outline-none transition-all text-sm font-semibold shadow-inner`}
              />
              <button 
                onClick={trackSuscripcion}
                className={`px-8 py-4 bg-gradient-to-r text-white font-bold rounded-2xl hover:shadow-xl transition-all shadow-lg hover:-translate-y-1 active:translate-y-0 ${theme.button}`}
              >
                Conocer más del proyecto
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer con Redes Sociales - ¡DescubreYA! */}
      <footer className="mt-auto py-10 border-t border-gray-100 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Información del Proyecto */}
          <div className="text-center md:text-left">
            <h4 className={`text-lg font-black tracking-tight ${theme.accent.split(' ')[0]}`}>
              ¡DescubreYA!
            </h4>
            <p className="text-xs text-gray-500 font-medium mt-1">
              Conectando lo mejor del Perú, ciudad por ciudad. ⛵
            </p>
          </div>

          {/* Botones de Contacto */}
          <div className="flex items-center gap-4">
            {/* WhatsApp con Mensaje Predefinido Dinámico */}
            <a 
              href={`https://wa.me/51995830154?text=${encodeURIComponent(
                `Hola, te escribo desde ¡DescubreYA! 🌍 Tengo una consulta sobre la ciudad de ${selectedCity}.`
              )}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 transition-all hover:shadow-md active:scale-95 ${theme.accent.split(' ')[1]} ${theme.accent.split(' ')[0]}`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-bold">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=61589431358800" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 text-white rounded-xl bg-gradient-to-r shadow-lg transition-all hover:-translate-y-1 active:translate-y-0 ${theme.button}`}
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm font-bold">Facebook</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 font-bold">
            © 2026 ¡DescubreYA! - {selectedCity}
          </div>
        </div>
      </footer>

      {/* 👇 NUEVO: MODAL DE RESEÑAS 👇 */}
      {activeReviewItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 transition-all">
          <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Cabecera del modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-2xl font-black text-gray-800 tracking-tight pr-4">
                {activeReviewItem.name}
              </h3>
              <button 
                onClick={() => setActiveReviewItem(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-red-500 transition-colors flex-shrink-0"
              >
                ✕
              </button>
            </div>
            {/* Contenido (El componente que hicimos) */}
            <div className="overflow-y-auto p-2 sm:p-6 custom-scrollbar">
              <ReviewSection placeId={activeReviewItem.id} />
            </div>
          </div>
        </div>
      )}
      {/* 👆 FIN MODAL DE RESEÑAS 👆 */}

      {/* --- MODAL DE AUTENTICACIÓN --- */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 transition-all">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl ring-1 ring-white/20 animate-in zoom-in-95 duration-300">
            
            {/* Cabecera del Modal con Gradiente Dinámico */}
            <div className={`relative p-8 text-center text-white bg-gradient-to-br ${theme.button} overflow-hidden`}>
              {/* Patrón decorativo sutil de fondo */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner border border-white/30">
                  {authMode === 'login' ? <UserIcon className="w-8 h-8 text-white drop-shadow-sm" /> : <UserPlus className="w-8 h-8 text-white drop-shadow-sm" />}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight drop-shadow-md">
                  {authMode === 'login' ? '¡Hola de nuevo!' : 'Únete a la aventura'}
                </h2>
                <p className="text-sm font-medium text-white/90 drop-shadow-sm">
                  {authMode === 'login' ? 'Ingresa para guardar tus rutas favoritas.' : 'Crea tu cuenta y descubre lo mejor de tu ciudad.'}
                </p>
              </div>

              {/* Botón Cerrar (reubicado para mayor limpieza) */}
              <button 
                onClick={() => setIsAuthModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 text-white hover:bg-black/20 transition-colors z-20"
              >
                ✕
              </button>
            </div>

            {/* Cuerpo del Formulario */}
            <div className="p-6 sm:p-8 bg-white">
              {/* Botón de Google centrado */}
              <div className="flex justify-center mb-6 hover:scale-[1.02] transition-transform">
                <GoogleLogin 
                  onSuccess={handleGoogleSuccess} 
                  onError={() => alert('No se pudo conectar con Google')}
                  useOneTap
                  theme="filled_blue"
                  shape="pill"
                />
              </div>

              <div className="relative flex items-center justify-center my-8">
                <div className="absolute border-t border-gray-100 w-full"></div>
                <span className="relative bg-white px-4 text-[10px] text-gray-400 font-black uppercase tracking-widest">O con correo</span>
              </div>

              {/* Formulario Tradicional */}
              <form onSubmit={handleTraditionalAuth} className="space-y-4">
                {authMode === 'register' && (
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      required 
                      value={authName}
                      onChange={(e) => setAuthName(e.target.value)}
                      className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white focus:bg-white focus:border-${theme.accent.split(' ')[1].replace('border-', '')} outline-none transition-all text-sm font-medium text-gray-700`}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    required 
                    value={authEmail}
                    onChange={(e) => setAuthEmail(e.target.value)}
                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white focus:bg-white focus:border-${theme.accent.split(' ')[1].replace('border-', '')} outline-none transition-all text-sm font-medium text-gray-700`}
                    placeholder="tu@correo.com"
                  />
                </div>
                
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" 
                    required 
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50/50 hover:bg-white focus:bg-white focus:border-${theme.accent.split(' ')[1].replace('border-', '')} outline-none transition-all text-sm font-medium text-gray-700`}
                    placeholder="••••••••"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={authLoading}
                  className={`w-full py-4 mt-2 rounded-2xl text-white font-black text-sm tracking-widest transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex justify-center bg-gradient-to-r ${theme.button} ${authLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {authLoading ? 'PROCESANDO...' : (authMode === 'login' ? 'INICIAR SESIÓN' : 'CREAR CUENTA')}
                </button>
              </form>

              {/* Selector de Modo (Login/Registro) */}
              <p className="text-center mt-8 text-sm text-gray-500 font-medium">
                {authMode === 'login' ? '¿Aún no tienes cuenta?' : '¿Ya eres parte de la aventura?'}
                <button 
                  type="button"
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className={`ml-1.5 font-black transition-colors ${theme.accent.split(' ')[0]} hover:underline`}
                >
                  {authMode === 'login' ? 'Regístrate aquí' : 'Inicia Sesión'}
                </button>
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}