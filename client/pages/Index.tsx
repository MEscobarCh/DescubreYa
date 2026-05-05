import { useState } from "react";
import { MapPin, Phone, MessageCircle, Facebook, Instagram, MapIcon, ChevronDown } from "lucide-react";

const CITIES = ["Tingo María", "Huánuco", "La Unión", "Rupa Rupa"];

const TOURISM_DESTINATIONS = [
  {
    id: 1,
    name: "Tingo María",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "A beautiful mountain town known for its stunning natural landscape and caves.",
    difficulty: "Moderate",
  },
  {
    id: 2,
    name: "Castillo de Leoncio Prado",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
    description: "Historic fortress offering panoramic views of the region.",
    difficulty: "Easy",
  },
  {
    id: 3,
    name: "Bella Durmiente Cave",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    description: "Mysterious cave formations with guided tours available.",
    difficulty: "Moderate",
  },
  {
    id: 4,
    name: "Pucallpa River Valley",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    description: "Scenic valley perfect for hiking and nature exploration.",
    difficulty: "Hard",
  },
];

const BUSINESS_CATEGORIES = [
  { id: 1, name: "Restaurants", icon: "🍽️" },
  { id: 2, name: "Hotels", icon: "🏨" },
  { id: 3, name: "Billiards", icon: "🎱" },
  { id: 4, name: "PlayStation", icon: "🎮" },
  { id: 5, name: "Paintball", icon: "🎨" },
  { id: 6, name: "Liquor Stores", icon: "🍷" },
  { id: 7, name: "Bookstores", icon: "📚" },
];

const BUSINESSES = [
  {
    id: 1,
    name: "El Comedor Tradicional",
    category: "Restaurants",
    phone: "+51999999999",
    whatsapp: "+51999999999",
    instagram: "elcomedor_tingo",
    facebook: "ElComedorTradicional",
    mapUrl: "https://maps.google.com",
    tags: ["Parking available", "Pet-friendly"],
  },
  {
    id: 2,
    name: "Hotel Bosque Amazónico",
    category: "Hotels",
    phone: "+51998888888",
    whatsapp: "+51998888888",
    instagram: "hotelbosque",
    facebook: "HotelBosqueAmazonico",
    mapUrl: "https://maps.google.com",
    tags: ["WiFi", "Swimming pool"],
  },
  {
    id: 3,
    name: "Club de Billar Premium",
    category: "Billiards",
    phone: "+51997777777",
    whatsapp: "+51997777777",
    instagram: "billarclubtm",
    facebook: "ClubBillarPremium",
    mapUrl: "https://maps.google.com",
    tags: ["AC", "Food available"],
  },
  {
    id: 4,
    name: "Game Zone Tingo",
    category: "PlayStation",
    phone: "+51996666666",
    whatsapp: "+51996666666",
    instagram: "gamezonetm",
    facebook: "GameZoneTingo",
    mapUrl: "https://maps.google.com",
    tags: ["Latest consoles", "Comfortable seats"],
  },
  {
    id: 5,
    name: "Paintball Amazonía",
    category: "Paintball",
    phone: "+51995555555",
    whatsapp: "+51995555555",
    instagram: "paintballamazonia",
    facebook: "PaintballAmazonia",
    mapUrl: "https://maps.google.com",
    tags: ["Group discount", "Equipment included"],
  },
  {
    id: 6,
    name: "Licorería San José",
    category: "Liquor Stores",
    phone: "+51994444444",
    whatsapp: "+51994444444",
    instagram: "licoreria_sj",
    facebook: "LicoreriaSanJose",
    mapUrl: "https://maps.google.com",
    tags: ["Wide selection", "Cold drinks"],
  },
];

export default function Index() {
  const [isTourism, setIsTourism] = useState(true);
  const [selectedCity, setSelectedCity] = useState("Tingo María");
  const [selectedCategory, setSelectedCategory] = useState("Restaurants");

  const filteredBusinesses = BUSINESSES.filter(
    (b) => b.category === selectedCategory
  );

  const accentColor = isTourism ? "bg-accent" : "bg-accent-alt";
  const accentColorHover = isTourism ? "hover:bg-yellow-400" : "hover:bg-orange-400";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                ¡Descubre<span className={isTourism ? "text-accent" : "text-accent-alt"}>YA</span>!
              </h1>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-4 flex-1 justify-center max-w-md">
              {/* City Selector */}
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="appearance-none w-40 px-4 py-2 pr-8 border border-gray-300 rounded-lg bg-white text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <MapPin className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => setIsTourism(!isTourism)}
                className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors ${
                  isTourism ? "bg-accent" : "bg-accent-alt"
                }`}
              >
                <span
                  className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform ${
                    isTourism ? "translate-x-1" : "translate-x-11"
                  }`}
                />
              </button>

              <span className="text-sm font-medium text-primary w-32 text-right">
                {isTourism ? "Explore Tourism" : "Business Directory"}
              </span>
            </div>

            {/* Spacer for balance */}
            <div className="flex-shrink-0 w-32" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isTourism ? (
          // Tourism View
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Explore {selectedCity}
            </h2>
            <p className="text-gray-600 mb-8">
              Discover amazing destinations and attractions in {selectedCity}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TOURISM_DESTINATIONS.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {destination.description}
                    </p>

                    <div className="mb-4 flex items-center justify-between text-sm">
                      <span className="font-semibold text-primary">
                        Access: {destination.difficulty}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        window.open(
                          "https://maps.google.com",
                          "_blank"
                        )
                      }
                      className={`w-full py-2 px-3 rounded-lg font-semibold text-white transition-colors ${accentColor} ${accentColorHover}`}
                    >
                      How to Get There
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Business Directory View
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">
              Business Directory
            </h2>
            <p className="text-gray-600 mb-8">
              Find services and businesses in {selectedCity}
            </p>

            {/* Category Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
              {BUSINESS_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`p-4 rounded-lg font-semibold text-sm transition-all ${
                    selectedCategory === category.name
                      ? `${accentColor} text-white`
                      : "bg-gray-100 text-primary hover:bg-gray-200"
                  }`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Business Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBusinesses.length > 0 ? (
                filteredBusinesses.map((business) => (
                  <div
                    key={business.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {business.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent">
                        {business.category}
                      </p>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-3 mb-4">
                      <button
                        onClick={() =>
                          window.open(
                            `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                              "Hello, I would like to make a reservation."
                            )}`,
                            "_blank"
                          )
                        }
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-semibold text-sm"
                        title="WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                      <button
                        onClick={() => window.location.href = `tel:${business.phone}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors font-semibold text-sm"
                        title="Call"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">Call</span>
                      </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2 mb-4">
                      {business.instagram && (
                        <button
                          onClick={() =>
                            window.open(
                              `https://instagram.com/${business.instagram}`,
                              "_blank"
                            )
                          }
                          className="p-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors"
                          title="Instagram"
                        >
                          <Instagram className="w-4 h-4" />
                        </button>
                      )}
                      {business.facebook && (
                        <button
                          onClick={() =>
                            window.open(
                              `https://facebook.com/${business.facebook}`,
                              "_blank"
                            )
                          }
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Maps Button */}
                    <button
                      onClick={() => window.open(business.mapUrl, "_blank")}
                      className={`w-full flex items-center justify-center gap-2 py-2 px-3 ${accentColor} text-white rounded-lg ${accentColorHover} transition-colors font-semibold text-sm mb-4`}
                    >
                      <MapIcon className="w-4 h-4" />
                      Route on Maps
                    </button>

                    {/* Tags */}
                    {business.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {business.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-gray-500 text-lg">
                    No businesses found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
