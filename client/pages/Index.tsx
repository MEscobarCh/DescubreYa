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
  Store,
  Clock,
  MapPinIcon,
  Tag,
} from "lucide-react";
import { applyThemeToDOM } from "@/lib/cityThemes";

const CITIES = ["Tingo María", "Huánuco", "La Unión", "Tarapoto"];

const TOURISM_DESTINATIONS = [
  {
    id: 1,
    name: "Tingo María",
    category: "Mountain Town",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description:
      "A beautiful mountain town known for its stunning natural landscape and mysterious caves.",
    difficulty: "Moderate",
    mapUrl: "https://maps.google.com/maps/search/Tingo+Maria+Peru",
  },
  {
    id: 2,
    name: "Castillo de Leoncio Prado",
    category: "Historic Site",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    description: "Historic fortress offering panoramic views of the entire region.",
    difficulty: "Easy",
    mapUrl: "https://maps.google.com/maps/search/Castillo+Leoncio+Prado",
  },
  {
    id: 3,
    name: "Bella Durmiente Cave",
    category: "Natural Wonder",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    description:
      "Mysterious cave formations with striking rock shapes and guided tours available.",
    difficulty: "Moderate",
    mapUrl: "https://maps.google.com/maps/search/Bella+Durmiente+Cave",
  },
  {
    id: 4,
    name: "Pucallpa River Valley",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description:
      "Scenic valley perfect for hiking, trekking, and deep nature exploration.",
    difficulty: "Hard",
    mapUrl: "https://maps.google.com/maps/search/Pucallpa+River",
  },
];

const BUSINESS_CATEGORIES = [
  { id: 1, name: "Restaurants", icon: "🍽️", label: "Food & Dining" },
  { id: 2, name: "Hotels", icon: "🏨", label: "Lodging" },
  { id: 3, name: "Billiards", icon: "🎱", label: "Billiards" },
  { id: 4, name: "PlayStation", icon: "🎮", label: "Gaming" },
  { id: 5, name: "Paintball", icon: "🎨", label: "Sports" },
  { id: 6, name: "Liquor Stores", icon: "🍷", label: "Beverages" },
  { id: 7, name: "Bookstores", icon: "📚", label: "Books" },
];

const BUSINESSES = [
  {
    id: 1,
    name: "El Comedor Tradicional",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1552632391-70bc08deaca3?w=400&h=300&fit=crop",
    phone: "+51 999 999 999",
    whatsapp: "51999999999",
    instagram: "elcomedor_tingo",
    facebook: "ElComedorTradicional",
    mapUrl: "https://maps.google.com",
    status: "Abierto ahora",
    tags: ["Parking disponible", "Pet-friendly", "Reservas online"],
  },
  {
    id: 2,
    name: "Hotel Bosque Amazónico",
    category: "Hotels",
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
    category: "Billiards",
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
    category: "PlayStation",
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
    category: "Paintball",
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
    category: "Liquor Stores",
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

export default function Index() {
  const [isTourism, setIsTourism] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Tingo María");
  const [selectedCategory, setSelectedCategory] = useState("Restaurants");

  useEffect(() => {
    applyThemeToDOM(selectedCity);
  }, [selectedCity]);

  const filteredBusinesses = BUSINESSES.filter((b) => b.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(var(--theme-primary))]">
                ¡Descubre
                <span
                  className={`transition-colors duration-300 ${
                    isTourism
                      ? "text-[hsl(var(--theme-accent))]"
                      : "text-[hsl(var(--theme-accent-alt))]"
                  }`}
                >
                  YA
                </span>
                !
              </h1>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center md:max-w-lg">
              {/* City Selector */}
              <div className="relative flex-1 md:flex-none">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="appearance-none w-full md:w-44 px-3 sm:px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white text-[hsl(var(--theme-primary))] font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[hsl(var(--theme-accent))] transition-colors"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setIsTourism(!isTourism)}
                  className={`relative inline-flex h-10 w-20 md:h-12 md:w-24 items-center rounded-full transition-colors duration-300 flex-shrink-0 ${
                    isTourism
                      ? "bg-[hsl(var(--theme-accent))]"
                      : "bg-[hsl(var(--theme-accent-alt))]"
                  }`}
                  aria-label="Toggle between tourism and business view"
                >
                  <span
                    className={`inline-block h-8 w-8 md:h-10 md:w-10 transform rounded-full bg-white transition-transform duration-300 flex items-center justify-center text-lg ${
                      isTourism ? "translate-x-1 md:translate-x-1" : "translate-x-11 md:translate-x-14"
                    }`}
                  >
                    {isTourism ? "⛰️" : "🏪"}
                  </span>
                </button>

                <div className="text-xs sm:text-sm font-semibold text-[hsl(var(--theme-primary))] hidden sm:block min-w-24">
                  {isTourism ? "Turismo" : "Negocios"}
                </div>
              </div>
            </div>

            {/* Spacer for balance */}
            <div className="hidden md:flex-shrink-0 md:w-32" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {isTourism ? (
          // Tourism View
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--theme-primary))] mb-2">
                Explora {selectedCity}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Descubre destinos increíbles y atracciones turísticas en {selectedCity}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOURISM_DESTINATIONS.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 bg-white text-[hsl(var(--theme-accent))] text-xs sm:text-sm font-bold rounded-full shadow-md">
                        {destination.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[hsl(var(--theme-primary))] mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                      {destination.description}
                    </p>

                    {/* Info Row */}
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-xs sm:text-sm font-semibold text-gray-700">
                      <MapPinIcon className="w-4 h-4" />
                      Dificultad: {destination.difficulty}
                    </div>

                    {/* Map Button */}
                    <button
                      onClick={() => window.open(destination.mapUrl, "_blank")}
                      className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-dark-variant))] text-sm sm:text-base active:scale-95`}
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
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[hsl(var(--theme-primary))] mb-2">
                Directorio de Negocios
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Encuentra servicios y negocios en {selectedCity}
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {BUSINESS_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`p-3 sm:p-4 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 flex flex-col items-center gap-2 transform hover:scale-105 ${
                    selectedCategory === category.name
                      ? `bg-[hsl(var(--theme-accent))] text-white shadow-lg`
                      : "bg-gray-100 text-[hsl(var(--theme-primary))] hover:bg-gray-200"
                  }`}
                >
                  <div className="text-2xl sm:text-3xl">{category.icon}</div>
                  <span className="text-center leading-tight">{category.label}</span>
                </button>
              ))}
            </div>

            {/* Business Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.length > 0 ? (
                filteredBusinesses.map((business) => (
                  <div
                    key={business.id}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-200">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 ${
                            business.status === "Abierto ahora"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          {business.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-base sm:text-lg font-bold text-[hsl(var(--theme-primary))] mb-1">
                          {business.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[hsl(var(--theme-accent))]">
                          {business.category}
                        </p>
                      </div>

                      {/* Contact Buttons - Mobile Touch-Friendly (min 44px) */}
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
                          className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-2 px-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 active:scale-95 transition-all font-semibold text-xs sm:text-sm min-h-[44px] sm:min-h-auto"
                          title="WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span className="hidden sm:inline">WhatsApp</span>
                        </button>
                        <button
                          onClick={() => (window.location.href = `tel:${business.phone}`)}
                          className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-2 px-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 active:scale-95 transition-all font-semibold text-xs sm:text-sm min-h-[44px] sm:min-h-auto"
                          title="Call"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="hidden sm:inline">Llamar</span>
                        </button>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-2 mb-4">
                        {business.instagram && (
                          <button
                            onClick={() =>
                              window.open(`https://instagram.com/${business.instagram}`, "_blank")
                            }
                            className="p-3 sm:p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 active:scale-95 transition-all min-h-[44px] sm:min-h-auto flex items-center justify-center"
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
                            className="p-3 sm:p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 active:scale-95 transition-all min-h-[44px] sm:min-h-auto flex items-center justify-center"
                            title="Facebook"
                          >
                            <Facebook className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      {/* Maps Button */}
                      <button
                        onClick={() => window.open(business.mapUrl, "_blank")}
                        className={`w-full flex items-center justify-center gap-2 py-3 px-4 text-white rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 mb-4 hover:brightness-110 active:scale-95 bg-[hsl(var(--theme-accent))] hover:bg-[hsl(var(--theme-dark-variant))] min-h-[44px] sm:min-h-auto`}
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
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full inline-flex items-center gap-1"
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
                <div className="col-span-full py-12 text-center">
                  <p className="text-gray-500 text-lg">No hay negocios en esta categoría.</p>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
