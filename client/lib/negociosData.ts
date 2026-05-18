// client/lib/negociosData.ts

export interface Business {
  id: number;
  ciudad: string;
  category: "Restaurantes" | "Hoteles" | "Panaderías y Cafés" | "Bares y Discotecas" | "Deporte y Recreación";
  name: string;
  image: string;
  status: string;
  tags: string[];
  whatsapp: string;
  mapUrl: string;
  phone: string;
}

export const BUSINESSES: Business[] = [
  // === 1. RESTAURANTES ===
  {
    id: 1,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Pollería El Horno",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Pollos a la Brasa", "Familiar", "Tradición"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "062-562020"
  },
  {
    id: 2,
    ciudad: "Huánuco",
    category: "Restaurantes",
    name: "Chifa Taiwán",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Chifa", "Tipakai", "Kam Lu Wantan"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "062-512345"
  },
  {
    id: 3,
    ciudad: "Tarapoto",
    category: "Restaurantes",
    name: "La Patarashca",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Comida Amazónica", "Juane", "Tacacho"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "042-522505"
  },

  // === 2. HOTELES ===
  {
    id: 4,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Hotel Madera Verde",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=cover",
    status: "Disponible",
    tags: ["Bungalows", "Piscina", "Turismo Eco"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "062-561822"
  },
  {
    id: 5,
    ciudad: "Huánuco",
    category: "Hoteles",
    name: "Grand Hotel Huánuco",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=cover",
    status: "Disponible",
    tags: ["Plaza de Armas", "Premium", "Confort"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "062-514210"
  },
  {
    id: 6,
    ciudad: "Cusco",
    category: "Hoteles",
    name: "Palacio del Inka",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=cover",
    status: "Disponible",
    tags: ["Histórico", "De Lujo", "Centro"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "084-231961"
  },

  // === 3. PANADERÍAS Y CAFÉS ===
  {
    id: 7,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Panadería y Pastelería Bella Durmiente",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Café Local", "Pastelería", "Desayunos"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "995830154"
  },
  {
    id: 8,
    ciudad: "Huánuco",
    category: "Panaderías y Cafés",
    name: "Panadería Tradicional San Carlos",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Pan Artesanal", "Lonches", "Tradición Huanuqueña"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "062-513987"
  },

  // === 4. BARES Y DISCOTECAS ===
  {
    id: 10,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Restobar La Choza del Abuelo",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Tragos Regionales", "Urcututo", "Música en Vivo"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "995830154"
  },
  {
    id: 11,
    ciudad: "Huánuco",
    category: "Bares y Discotecas",
    name: "Discoteca Kilombo",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=500&auto=format&fit=cover",
    status: "Abierto Night",
    tags: ["Cocteles", "Pillco Mozo Shot", "Zonas VIP"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "995830154"
  },
  {
    id: 12,
    ciudad: "Cusco",
    category: "Bares y Discotecas",
    name: "Chinitas Pisco Bar",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Pisco Sour", "Artesanal", "Plaza Regocijo"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "084-254125"
  },

  // === 5. DEPORTE Y RECREACIÓN ===
  {
    id: 13,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Complejo Deportivo El Golazo",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Gras Sintético", "Fulbito", "Pichangas"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "995830154"
  },
  {
    id: 14,
    ciudad: "Huánuco",
    category: "Deporte y Recreación",
    name: "Club de Billar Master's",
    image: "https://images.unsplash.com/photo-1609141202897-40082f6a9e67?w=500&auto=format&fit=cover",
    status: "Abierto",
    tags: ["Mesas de Billar", "Snooker", "Amigos/Ocio"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com",
    phone: "995830154"
  }
];