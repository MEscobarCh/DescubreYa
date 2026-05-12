import { useState, useEffect } from "react";
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
} from "lucide-react";
import { applyThemeToDOM } from "@/lib/cityThemes";
import { sitiosTuristicos } from "@/lib/turismoData";

const CITIES = ["Tingo María", "Huánuco", "La Unión", "Tarapoto", "Cusco", "Lima"];

// Tipado para Google Analytics en TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const BUSINESS_CATEGORIES = [
  { id: 1, name: "Restaurantes", icon: "🍽️" },
  { id: 2, name: "Hoteles", icon: "🏨" },
  { id: 3, name: "Billar", icon: "🎱" },
  { id: 4, name: "Videojuegos", icon: "🎮" },
  { id: 5, name: "Deportes", icon: "🎨" },
  { id: 6, name: "Bebidas", icon: "🍷" },
  { id: 7, name: "Libros", icon: "📚" },
];

const BUSINESSES = [
  {
    id: 1,
    name: "El Comedor Tradicional",
    category: "Restaurantes",
    image: "https://images.unsplash.com/photo-1552632391-70bc08deaca3?w=400&h=300&fit=crop",
    phone: "+51 999 999 999",
    whatsapp: "51999999999",
    instagram: "elcomedor_tingo",
    facebook: "ElComedorTradicional",
    mapUrl: "https://maps.google.com",
    status: "Abierto ahora",
    tags: ["Estacionamiento", "Mascotas bienvenidas", "Reservas online"],
  },
  // ... puedes seguir añadiendo negocios aquí
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Fácil": return "bg-emerald-100 text-emerald-700";
    case "Moderada": return "bg-amber-100 text-amber-700";
    case "Difícil": return "bg-orange-100 text-orange-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

export default function Index() {
  const [isTourism, setIsTourism] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Tingo María");
  const [selectedCategory, setSelectedCategory] = useState("Restaurantes");
  const [emailInput, setEmailInput] = useState("");

  // Control de Tema y Google Analytics
  useEffect(() => {
    // 1. Aplicar el tema visual
    applyThemeToDOM(selectedCity);

    // 2. ACTUALIZAR EL TÍTULO DE LA PESTAÑA DINÁMICAMENTE
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

  // Funciones de Rastreo (Analytics)
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
    // 1. Enviamos el dato a nuestro backend
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: emailInput, 
        ciudad: selectedCity 
      }),
    });

    if (response.ok) {
      // 2. Si el servidor responde OK, avisamos a Analytics
      if (window.gtag) {
        window.gtag('event', 'generate_lead', {
          'method': 'footer_form',
          'city_context': selectedCity
        });
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

  const filteredBusinesses = BUSINESSES.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--theme-bg-gradient-start))] to-[hsl(var(--theme-bg-gradient-end))] transition-colors duration-500">
      
      {/* Header Compacto Optimizado */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 py-3">
          <div className="flex items-center justify-between gap-1">
            
            {/* Logo */}
            <div className="flex-shrink flex items-center gap-1 min-w-0">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] flex-shrink-0 flex items-center justify-center text-sm">
                🌍
              </div>
              <h1 className="text-sm sm:text-xl font-black truncate text-[hsl(var(--theme-primary))]">
                ¡Descubre<span className="text-[hsl(var(--theme-accent))]">YA</span>!
              </h1>
            </div>

            {/* Controles Centrales */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="appearance-none w-[105px] sm:w-44 px-2 py-1.5 pr-6 border-2 border-gray-200 rounded-lg bg-white text-[hsl(var(--theme-primary))] font-bold text-[10px] sm:text-sm focus:outline-none"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-600 pointer-events-none" />
              </div>

              {/* Switch Turismo/Negocios */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setIsTourism(!isTourism)}
                  className="relative inline-flex h-8 w-14 sm:h-10 sm:w-20 items-center rounded-full bg-gradient-to-r from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] transition-all duration-300 shadow-sm flex-shrink-0"
                >
                  <span className={`inline-block h-6 w-6 sm:h-8 sm:w-8 transform rounded-full bg-white transition-all duration-300 flex items-center justify-center text-xs ${isTourism ? "translate-x-1" : "translate-x-7 sm:translate-x-11"}`}>
                    {isTourism ? "⛰️" : "🏪"}
                  </span>
                </button>
                <span className="text-[10px] sm:text-xs font-bold text-[hsl(var(--theme-primary))] hidden sm:block min-w-[60px]">
                  {isTourism ? "Turismo" : "Negocios"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {isTourism ? (
          /* Vista de Turismo */
          <section className="space-y-8 animate-in fade-in duration-700">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mountain className="w-6 h-6 text-[hsl(var(--theme-accent))]" />
                <h2 className="text-3xl sm:text-5xl font-black text-[hsl(var(--theme-primary))]">Explora {selectedCity}</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm sm:text-lg">Descubre destinos increíbles y aventuras que no olvidarás en la selva peruana.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sitiosTuristicos.map((sitio) => (
                <div key={sitio.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <img src={sitio.imagen} alt={sitio.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[hsl(var(--theme-primary))] shadow-sm">
                      {sitio.precioEntrada}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-[hsl(var(--theme-accent))] uppercase tracking-widest">{sitio.categoria}</span>
                    <h3 className="text-lg font-black text-[hsl(var(--theme-primary))] mt-1 mb-2">{sitio.nombre}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4">{sitio.descripcion}</p>
                    <div className={`mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold ${getDifficultyColor(sitio.difficulty || sitio.dificultad)}`}>
                      <Zap className="w-3 h-3" /> {sitio.difficulty || sitio.dificultad}
                    </div>
                      <button
                          onClick={() => {
                            // 1. Ejecutamos el rastreo para Analytics
                            trackRutaClick(sitio.nombre, sitio.categoria);
                            
                            // 2. Aplicamos la lógica de tu snippet: usamos la API oficial de búsqueda
                            // sitio.coordenadas ya tiene el formato "-9.xxxx,-75.xxxx"
                            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${sitio.coordenadas}`;
                            
                            window.open(googleMapsUrl, "_blank");
                          }}
                          className="w-full py-3 bg-gradient-to-r from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95"
                        >
                          <MapIcon className="w-4 h-4" /> Trazar Ruta
                      </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Vista de Negocios (Resumida para el ejemplo) */
          <section className="space-y-10 animate-in fade-in duration-700">
             <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-[hsl(var(--theme-accent))]" />
                <h2 className="text-3xl sm:text-5xl font-black text-[hsl(var(--theme-primary))]">Directorio Local</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {BUSINESS_CATEGORIES.map((cat) => (
                <button key={cat.id} onClick={() => setSelectedCategory(cat.name)} className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${selectedCategory === cat.name ? 'bg-[hsl(var(--theme-accent))] text-white border-transparent shadow-lg' : 'bg-white border-gray-100 hover:border-[hsl(var(--theme-accent))]'}`}>
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[10px] font-bold">{cat.name}</span>
                </button>
              ))}
            </div>
            {/* Aquí mapearías filteredBusinesses de forma similar a turismo */}
          </section>
        )}

        {/* Sección Pilot Lead Generation */}
        <section className="mt-20 bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 border-2 border-dashed border-[hsl(var(--theme-accent))]/20 text-center">
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
                className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-[hsl(var(--theme-accent))] outline-none transition-all text-sm font-semibold shadow-inner"
              />
              <button 
                onClick={trackSuscripcion}
                className="px-8 py-4 bg-[hsl(var(--theme-primary))] text-white font-bold rounded-2xl hover:bg-[hsl(var(--theme-accent))] transition-all shadow-lg hover:-translate-y-1 active:translate-y-0"
              >
                Avisarme
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}