// client/lib/negociosData.ts

export interface Business {
  id: number;
  ciudad: string;
  category: "Restaurantes" | "Hoteles" | "Panaderías y Cafés" | "Bares y Discotecas" | "Deporte y Recreación";
  name: string;
  image: string;
  tags: string[];
  whatsapp: string;
  mapUrl: string;
  phone: string;
}

export const BUSINESSES: Business[] = [
  // =========================================================================
  // TINGO MARÍA (15 Negocios Reales)
  // =========================================================================
  
  // --- 1. RESTAURANTES ---
  {
    id: 1,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "El Encanto De La Selva",
    image: "/images/negocio/tingo_maria/restaurantes/encanto_de_la_selva.webp",
    tags: ["Comida Típica", "Tacacho con Cecina", "Juane"],
    whatsapp: "51946884196",
    mapUrl: "https://maps.app.goo.gl/gL4DapscH15W3uz17",
    phone: "946884196"
  },
  {
    id: 2,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Polleria El Super Dorado",
    image: "/images/negocio/tingo_maria/restaurantes/super_dorado.webp",
    tags: ["Pollos a la Brasa", "Familiar", "Papas Nativas"],
    whatsapp: "51900900427",
    mapUrl: "https://maps.app.goo.gl/mPxiLD2T9bfENRtX9",
    phone: "900900427"
  },
  {
    id: 3,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "El Carbon Restobar",
    image: "/images/negocio/tingo_maria/restaurantes/el_carbon.webp",
    tags: ["Almuerzos", "Platos a la Carta", "Carnes"],
    whatsapp: "51995080872",
    mapUrl: "https://maps.app.goo.gl/1TEHVUEVP4nLeuQ9A",
    phone: "995080872"
  },

  // --- 2. HOTELES ---
  {
    id: 4,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Hotel Madera Verde",
    image: "/images/negocio/tingo_maria/hoteles/madera_verde.webp",
    tags: ["Bungalows", "Piscina", "Turismo Eco"],
    whatsapp: "51996319048",
    mapUrl: "https://maps.app.goo.gl/XuPpctUksdUu7Wtt6",
    phone: "996319048"
  },
  {
    id: 5,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Hotel Oro Verde",
    image: "/images/negocio/tingo_maria/hoteles/oro_verde.webp",
    tags: ["Confort", "Céntrico", "Instalaciones Modernas"],
    whatsapp: "51962689002",
    mapUrl: "https://maps.app.goo.gl/8vxVfMPreormeE7s8",
    phone: "962689002"
  },
  {
    id: 6,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Hotel Green Paradise",
    image: "/images/negocio/tingo_maria/hoteles/green_paradise.webp",
    tags: ["Bungalows", "Turismo Eco", "Servicio Ejecutivo"],
    whatsapp: "51993294249",
    mapUrl: "https://maps.app.goo.gl/F74kHb53Y3JBWQ1YA",
    phone: "993294249"
  },

  // --- 3. PANADERÍAS Y CAFÉS ---
  {
    id: 7,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Panadería y Pastelería Fenix",
    image: "/images/negocio/tingo_maria/panaderias_cafes/fenix.webp",
    tags: ["Café Local", "Pastelería", "Desayunos"],
    whatsapp: "062284284",
    mapUrl: "https://maps.app.goo.gl/r5X3LSFMK4TZbTqN9",
    phone: "062-284284"
  },
  {
    id: 8,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Pasteleria Miski",
    image: "/images/negocio/tingo_maria/panaderias_cafes/miski.webp",
    tags: ["Tortas", "Tortas De Cumpleaños", "Postres Finos"],
    whatsapp: "51932501154",
    mapUrl: "https://maps.app.goo.gl/Ks9m4JL2aAqP6fwC8",
    phone: "932501154"
  },
  {
    id: 9,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Pastelería y Licorería Bella Selva",
    image: "/images/negocio/tingo_maria/panaderias_cafes/bella_selva.webp",
    tags: ["Pasteles", "Tortas De Cumpleaños", "licores"],
    whatsapp: "51925198688",
    mapUrl: "https://maps.app.goo.gl/qb3rQ4GdY73h6UBm7",
    phone: "925198688"
  },

  // --- 4. BARES Y DISCOTECAS ---
  {
    id: 10,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Restobar La Choza del Abuelo",
    image: "/images/negocio/tingo_maria/bares_discotecas/la_choza_del_abuelo.jpg",
    tags: ["Tragos Regionales", "Urcututo", "Música en Vivo"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com/?q=La+Choza+del+Abuelo+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 11,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Discoteca Anaconda",
    image: "/images/negocio/tingo_maria/bares_discotecas/anaconda.jpg",
    tags: ["Clásico Tingalés", "Gran Pista de Baile", "Zonas VIP"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com/?q=Discoteca+Anaconda+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 12,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "La Cabaña Restobar",
    image: "/images/negocio/tingo_maria/bares_discotecas/la_cabana.jpg",
    tags: ["Cocteles", "Piqueos", "Buen Ambiente"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com/?q=La+Cabana+Restobar+Tingo+Maria",
    phone: "995830154"
  },

  // --- 5. DEPORTE Y RECREACIÓN ---
  {
    id: 13,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Complejo Deportivo El Golazo",
    image: "/images/negocio/tingo_maria/deporte_recreacion/el_golazo.jpg",
    tags: ["Gras Sintético", "Fulbito", "Pichangas"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com/?q=Complejo+El+Golazo+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 14,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Complejo Deportivo La Bombonera",
    image: "/images/negocio/tingo_maria/deporte_recreacion/la_bombonera.jpg",
    tags: ["Alquiler de Canchas", "Vóley", "Estacionamiento"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com/?q=La+Bombonera+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 15,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Billares El Compadre",
    image: "/images/negocio/tingo_maria/deporte_recreacion/billares_el_compadre.jpg",
    tags: ["Mesas de Billar", "Snooker", "Bebidas Heladas"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.google.com/?q=Billares+El+Compadre+Tingo+Maria",
    phone: "995830154"
  }
];