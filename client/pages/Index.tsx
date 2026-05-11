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
  MapPinIcon,
  Tag,
  Star,
  Zap,
} from "lucide-react";
import { applyThemeToDOM } from "@/lib/cityThemes";
import { sitiosTuristicos } from "@/lib/turismoData";

const CITIES = ["Tingo María", "Huánuco", "La Unión", "Tarapoto", "Cusco", "Lima"];

const TOURISM_DESTINATIONS = [
  {
    id: 1,
    name: "Tingo María",
    category: "Pueblo Montañoso",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description:
      "Un hermoso pueblo montañoso conocido por sus impresionantes paisajes naturales y misteriosas cuevas.",
    difficulty: "Moderada",
    mapUrl: "https://maps.google.com/maps/search/Tingo+Maria+Peru",
  },
  {
    id: 2,
    name: "Castillo de Leoncio Prado",
    category: "Sitio Histórico",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    description: "Fortaleza histórica que ofrece vistas panorámicas de toda la región.",
    difficulty: "Fácil",
    mapUrl: "https://maps.google.com/maps/search/Castillo+Leoncio+Prado",
  },
  {
    id: 3,
    name: "Cueva de la Bella Durmiente",
    category: "Maravilla Natural",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    description:
      "Formaciones de cuevas misteriosas con formas rocosas impresionantes. Tours guiados disponibles.",
    difficulty: "Moderada",
    mapUrl: "https://maps.google.com/maps/search/Bella+Durmiente+Cave",
  },
  {
    id: 4,
    name: "Valle del Río Pucallpa",
    category: "Aventura",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description:
      "Valle escénico perfecto para senderismo, trekking y exploración profunda de la naturaleza.",
    difficulty: "Difícil",
    mapUrl: "https://maps.google.com/maps/search/Pucallpa+River",
  },
];

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
  {
    id: 2,
    name: "Hotel Bosque Amazónico",
    category: "Hoteles",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    phone: "+51 998 888 888",
    whatsapp: "51998888888",
    instagram: "hotelbosque",
    facebook: "HotelBosqueAmazonico",
    mapUrl: "https://maps.google.com",
    status: "Abierto ahora",
    tags: ["WiFi gratis", "Piscina", "Desayuno incluido"],
  },
  {
    id: 3,
    name: "Club de Billar Premium",
    category: "Billar",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop",
    phone: "+51 997 777 777",
    whatsapp: "51997777777",
    instagram: "billarclubtm",
    facebook: "ClubBillarPremium",
    mapUrl: "https://maps.google.com",
    status: "Abierto ahora",
    tags: ["Aire acondicionado", "Comida disponible", "Torneos"],
  },
  {
    id: 4,
    name: "Game Zone Tingo",
    category: "Videojuegos",
    image: "https://images.unsplash.com/photo-1538481143081-91852e401c61?w=400&h=300&fit=crop",
    phone: "+51 996 666 666",
    whatsapp: "51996666666",
    instagram: "gamezonetm",
    facebook: "GameZoneTingo",
    mapUrl: "https://maps.google.com",
    status: "Abierto ahora",
    tags: ["Consolas últimas", "Sillas cómodas", "Snacks"],
  },
  {
    id: 5,
    name: "Paintball Amazonía",
    category: "Deportes",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
    phone: "+51 995 555 555",
    whatsapp: "51995555555",
    instagram: "paintballamazonia",
    facebook: "PaintballAmazonia",
    mapUrl: "https://maps.google.com",
    status: "Abierto ahora",
    tags: ["Descuento grupos", "Equipo incluido", "Estacionamiento"],
  },
  {
    id: 6,
    name: "Licorería San José",
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&h=300&fit=crop",
    phone: "+51 994 444 444",
    whatsapp: "51994444444",
    instagram: "licoreria_sj",
    facebook: "LicoreriaSanJose",
    mapUrl: "https://maps.google.com",
    status: "Cierra a las 10 PM",
    tags: ["Amplia selección", "Bebidas frías", "Atención rápida"],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Fácil":
      return "bg-emerald-100 text-emerald-700";
    case "Moderada":
      return "bg-amber-100 text-amber-700";
    case "Difícil":
      return "bg-orange-100 text-orange-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function Index() {
  const [isTourism, setIsTourism] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Tingo María");
  const [selectedCategory, setSelectedCategory] = useState("Restaurantes");

  useEffect(() => {
    applyThemeToDOM(selectedCity);
  }, [selectedCity]);

  const filteredBusinesses = BUSINESSES.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--theme-bg-gradient-start))] to-[hsl(var(--theme-bg-gradient-end))]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] flex items-center justify-center text-white font-bold">
                🌍
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[hsl(var(--theme-primary))]">
                ¡Descubre
                <span
                  className={`transition-all duration-300 inline-block ml-1 ${
                    isTourism
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))]"
                      : "text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--theme-accent-alt))] to-[hsl(var(--theme-accent))]"
                  }`}
                >
                  YA
                </span>
                !
              </h1>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center md:max-w-2xl">
              {/* City Selector */}
              <div className="relative flex-1 md:flex-none">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="appearance-none w-full md:w-48 px-3 sm:px-4 py-2.5 pr-8 border-2 border-gray-200 rounded-lg bg-white text-[hsl(var(--theme-primary))] font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[hsl(var(--theme-accent))] transition-all hover:border-[hsl(var(--theme-accent))]"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setIsTourism(!isTourism)}
                  className={`relative inline-flex h-11 w-24 md:h-12 md:w-28 items-center rounded-full transition-all duration-300 flex-shrink-0 shadow-md hover:shadow-lg ${
                    isTourism
                      ? "bg-gradient-to-r from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))]"
                      : "bg-gradient-to-r from-[hsl(var(--theme-accent-alt))] to-[hsl(var(--theme-accent))]"
                  }`}
                  aria-label="Alternar entre vista de turismo y negocios"
                >
                  <span
                    className={`inline-block h-9 w-9 md:h-10 md:w-10 transform rounded-full bg-white transition-all duration-300 flex items-center justify-center text-lg shadow-md flex-shrink-0 ${
                      isTourism ? "translate-x-1 md:translate-x-1" : "translate-x-12 md:translate-x-16"
                    }`}
                  >
                    {isTourism ? "⛰️" : "🏪"}
                  </span>
                </button>

                <div className="text-xs sm:text-sm font-bold text-[hsl(var(--theme-primary))] hidden sm:block min-w-20 text-center">
                  {isTourism ? "Turismo" : "Negocios"}
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:flex-shrink-0 md:w-32" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {isTourism ? (
    // Vista de Turismo Dinámica
    <section className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Mountain className="w-6 h-6 text-[hsl(var(--theme-accent))]" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[hsl(var(--theme-primary))]">
            Explora {selectedCity}
          </h2>
        </div>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
          Descubre destinos increíbles, atracciones turísticas y aventuras que no olvidarás.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ahora mapeamos sobre los datos reales de turismoData.ts */}
        {sitiosTuristicos.map((sitio) => (
          <div
            key={sitio.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
          >
            {/* Contenedor de Imagen */}
            <div className="relative h-56 overflow-hidden bg-gray-300">
              <img
                src={sitio.imagen}
                alt={sitio.nombre}
                loading="lazy" // <-- Esto hace que la imagen solo se descargue cuando está por aparecer en pantalla
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Contenido */}
            <div className="p-5 sm:p-6">
              <div className="flex justify-between items-start mb-3">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(var(--theme-accent))]/20 to-[hsl(var(--theme-accent-alt))]/20 text-[hsl(var(--theme-accent))] text-xs font-bold rounded-full border border-[hsl(var(--theme-accent))]/30">
                  {sitio.categoria}
                </span>
                {/* Nuevo: Badge de precio */}
                <span className="text-[hsl(var(--theme-primary))] text-xs font-black">
                  {sitio.precioEntrada}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[hsl(var(--theme-primary))] mb-2 line-clamp-2">
                {sitio.nombre}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {sitio.descripcion}
              </p>

              {/* Dificultad */}
              <div className={`mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold ${getDifficultyColor(sitio.dificultad)}`}>
                <Zap className="w-3 h-3" />
                {sitio.dificultad}
              </div>

              {/* Botón de Mapa Dinámico */}
              <button
                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${sitio.coordenadas}`, "_blank")}
                className="w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <MapIcon className="w-4 h-4" />
                Trazar Ruta
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
        ) : (
          // Business View
          <section className="space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-[hsl(var(--theme-accent))]" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[hsl(var(--theme-primary))]">
                  Directorio de Negocios
                </h2>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                Encuentra los mejores servicios y negocios en {selectedCity}
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pb-6">
              {BUSINESS_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`p-4 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 flex flex-col items-center gap-2 transform hover:scale-110 active:scale-95 border-2 ${
                    selectedCategory === category.name
                      ? `bg-gradient-to-br from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] text-white shadow-xl border-transparent`
                      : "bg-white text-[hsl(var(--theme-primary))] hover:bg-gradient-to-br hover:from-[hsl(var(--theme-accent))]/10 hover:to-[hsl(var(--theme-accent-alt))]/10 border-gray-200 hover:border-[hsl(var(--theme-accent))]"
                  }`}
                >
                  <div className="text-3xl">{category.icon}</div>
                  <span className="text-center leading-tight">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Business Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.length > 0 ? (
                filteredBusinesses.map((business) => (
                  <div
                    key={business.id}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col border-2 border-gray-100 hover:border-[hsl(var(--theme-accent))]/30"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden bg-gray-300">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg ${
                            business.status === "Abierto ahora"
                              ? "bg-gradient-to-r from-emerald-400 to-green-500 text-white"
                              : "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          {business.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-5">
                        <h3 className="text-lg sm:text-xl font-black text-[hsl(var(--theme-primary))] mb-1 line-clamp-2">
                          {business.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-[hsl(var(--theme-accent))] uppercase tracking-wide">
                          {business.category}
                        </p>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex gap-2 mb-4">
                        <button
                          onClick={() =>
                            window.open(
                              `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
                                "Hola, me gustaría hacer una reserva."
                              )}`,
                              "_blank"
                            )
                          }
                          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all font-bold text-xs sm:text-sm min-h-[44px] sm:min-h-auto"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </button>
                        <button
                          onClick={() => (window.location.href = `tel:${business.phone}`)}
                          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-xl hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all font-bold text-xs sm:text-sm min-h-[44px] sm:min-h-auto"
                          title="Llamar"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="hidden sm:inline">Llamar</span>
                        </button>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2 mb-5">
                        {business.instagram && (
                          <button
                            onClick={() =>
                              window.open(`https://instagram.com/${business.instagram}`, "_blank")
                            }
                            className="flex-1 p-3 sm:p-2 bg-gradient-to-br from-pink-400 to-rose-500 text-white rounded-xl hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all min-h-[44px] sm:min-h-auto flex items-center justify-center"
                            title="Instagram"
                          >
                            <Instagram className="w-4 h-4" />
                          </button>
                        )}
                        {business.facebook && (
                          <button
                            onClick={() =>
                              window.open(`https://facebook.com/${business.facebook}`, "_blank")
                            }
                            className="flex-1 p-3 sm:p-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl hover:shadow-lg hover:-translate-y-1 active:translate-y-0 transition-all min-h-[44px] sm:min-h-auto flex items-center justify-center"
                            title="Facebook"
                          >
                            <Facebook className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Maps Button */}
                      <button
                        onClick={() => window.open(business.mapUrl, "_blank")}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 text-white rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 mb-5 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 bg-gradient-to-r from-[hsl(var(--theme-accent))] to-[hsl(var(--theme-accent-alt))] min-h-[44px] sm:min-h-auto`}
                      >
                        <MapIcon className="w-4 h-4" />
                        Ruta en Google Maps
                      </button>

                      {/* Tags */}
                      {business.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {business.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-gradient-to-r from-[hsl(var(--theme-accent))]/10 to-[hsl(var(--theme-accent-alt))]/10 text-[hsl(var(--theme-primary))] px-3 py-1.5 rounded-full font-semibold inline-flex items-center gap-1 border border-[hsl(var(--theme-accent))]/20"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <p className="text-gray-500 text-lg font-semibold">
                    No hay negocios disponibles en esta categoría.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
