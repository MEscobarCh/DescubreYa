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
  Store as StoreIcon,
  Globe as GlobeIcon
} from "lucide-react";
import { applyThemeToDOM } from "@/lib/cityThemes";
import { sitiosTuristicos } from "@/lib/turismoData";
import { BUSINESSES } from "@/lib/negociosData";

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

  const theme = CITY_THEMES[selectedCity] || CITY_THEMES["Tingo María"];

  // Filtrado de negocios en tiempo real por ciudad y categoría modular
  const filteredBusinesses = BUSINESSES.filter(
    (b) => b.ciudad === selectedCity && b.category === selectedCategory
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

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-500`}>
      
      {/* Header Adaptativo */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-1">
            
            {/* Logo */}
            <div className="flex items-center gap-2 justify-center w-full sm:w-auto">
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${theme.button} flex-shrink-0 flex items-center justify-center text-sm shadow-sm`}>
                🌍
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[hsl(var(--theme-primary))] tracking-tight">
                ¡Descubre<span className={theme.accent.split(' ')[0]}>YA</span>!
              </h1>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-center gap-3 w-full sm:w-auto border-t sm:border-t-0 pt-2 sm:pt-0 border-gray-50">
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className={`appearance-none w-[115px] sm:w-44 px-3 py-1.5 pr-8 border-2 rounded-xl bg-white text-[hsl(var(--theme-primary))] font-bold text-[11px] sm:text-sm focus:outline-none transition-all ${theme.accent.split(' ')[1]}`}
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <div className="flex items-center gap-2">
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
                <span className={`text-[10px] sm:text-sm font-black uppercase tracking-tighter transition-colors duration-500 ${theme.accent.split(' ')[0]}`}>
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
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mountain className={`w-6 h-6 ${theme.accent.split(' ')[0]}`} />
                <h2 className="text-3xl sm:text-5xl font-black text-[hsl(var(--theme-primary))]">Explora {selectedCity}</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm sm:text-lg">Descubre destinos increíbles y aventuras que no olvidarás.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sitiosTuristicos
                .filter((sitio) => sitio.ciudad === selectedCity)
                .map((sitio) => (
                <div key={sitio.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative h-52 overflow-hidden">
                    <img src={sitio.imagen} alt={sitio.nombre} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${theme.accent.split(' ')[0]}`}>{sitio.categoria}</span>
                    <h3 className="text-lg font-black text-[hsl(var(--theme-primary))] mt-1 mb-2">{sitio.nombre}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4">{sitio.descripcion}</p>
                    <div className={`mb-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold ${getDifficultyColor(sitio.difficulty || sitio.dificultad)}`}>
                      <Zap className="w-3 h-3" /> {sitio.difficulty || sitio.dificultad}
                    </div>
                    <button
                      onClick={() => {
                        trackRutaClick(sitio.nombre, sitio.categoria);
                        const googleMapsUrl = `http://googleusercontent.com/maps.google.com/${sitio.coordenadas}`;
                        window.open(googleMapsUrl, "_blank");
                      }}
                      className={`w-full py-3 bg-gradient-to-r text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95 ${theme.button}`}
                    >
                      <MapIcon className="w-4 h-4" /> Trazar Ruta
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="space-y-10 animate-in fade-in duration-700">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className={`w-6 h-6 ${theme.accent.split(' ')[0]}`} />
                <h2 className="text-3xl sm:text-5xl font-black text-[hsl(var(--theme-primary))]">Ruta Local</h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-sm sm:text-lg">Descubre comercios, servicios y el motor económico de {selectedCity}.</p>
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

            {/* Listado de Negocios Filtrados */}
            {filteredBusinesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinesses.map((negocio) => (
                  <div key={negocio.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-between p-5 hover:shadow-2xl transition-all duration-500">
                    <div>
                      {/* Contenedor de Imagen Limpio sin Badge de Estado Erróneo */}
                      <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                        <img src={negocio.image} alt={negocio.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-1">{negocio.name}</h3>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {negocio.tags.map((tag, idx) => (
                          <span key={idx} className="bg-slate-50 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded-md border border-slate-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Botones de Acción */}
                    <div className="space-y-2 pt-4 border-t border-gray-50">
                      <div className="flex gap-2">
                        {/* WhatsApp con Mensaje Predefinido */}
                        <a 
                          href={`https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(
                            `Hola ${negocio.name}, los encontré mediante ¡DescubreYA! 🌍 Estoy consultando sobre sus servicios en ${selectedCity}.`
                          )}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-95"
                        >
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                        
                        {/* Ubicación */}
                        <a 
                          href={negocio.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`flex-1 py-2.5 bg-gradient-to-r text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${theme.button}`}
                        >
                          <MapIcon className="w-4 h-4" /> Ubicar
                        </a>
                      </div>

                      {/* Teléfono Fijo/Celular */}
                      <a 
                        href={`tel:${negocio.phone}`}
                        className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-slate-200"
                      >
                        <Phone className="w-4 h-4" /> {negocio.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Estado Vacío de Respaldo */
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
    </div>
  );
}