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
  // TINGO MARÍA (30 Negocios Reales)
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=El+Encanto+De+La+Selva+Tingo+Maria",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Polleria+El+Super+Dorado+Tingo+Maria",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=El+Carbon+Restobar+Tingo+Maria",
    phone: "995080872"
  },
  {
    id: 16,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Tinto y Madero",
    image: "/images/negocio/tingo_maria/restaurantes/tinto_y_madero.webp",
    tags: ["Parrillas", "Fusión Amazónica", "Cortes Finos"],
    whatsapp: "51955289525",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tinto+y+Madero+Tingo+Maria",
    phone: "955289525"
  },
  {
    id: 17,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Chifa Mey Chan",
    image: "/images/negocio/tingo_maria/restaurantes/meychan.webp",
    tags: ["Sabor Oriental", "Arroz Chaufa", "Platos Taypá"],
    whatsapp: "51945123456",
    mapUrl: "https://maps.app.goo.gl/iZtyisE6QyHdKbQs8",
    phone: "945123456"
  },
  {
    id: 18,
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Fuego & Sazon",
    image: "/images/negocio/tingo_maria/restaurantes/fuegoy.webp",
    tags: ["Parrillas", "Bebidas", "Carnes"],
    whatsapp: "51984112233",
    mapUrl: "https://maps.app.goo.gl/fjDxNGbpaKhBPEbe7",
    phone: "984112233"
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Madera+Verde+Tingo+Maria",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Oro+Verde+Tingo+Maria",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+Green+Paradise+Tingo+Maria",
    phone: "993294249"
  },
  {
    id: 19,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Shushupe Hotel",
    image: "/images/negocio/tingo_maria/hoteles/shushupe.webp",
    tags: ["Piscina", "Premium", "Restobar Integrado"],
    whatsapp: "51962689000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shushupe+Hotel+Tingo+Maria",
    phone: "962689000"
  },
  {
    id: 20,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Caruzo Hotel and Suites",
    image: "/images/negocio/tingo_maria/hoteles/caruzo.webp",
    tags: ["Confort", "Piscina", "Instalaciones Modernas"],
    whatsapp: "51996319000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Caruzo+Hotel+Tingo+Maria",
    phone: "996319000"
  },
  {
    id: 21,
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Hotel El Ensueño",
    image: "/images/negocio/tingo_maria/hoteles/el_ensueno.webp",
    tags: ["Céntrico", "Económico", "Wi-Fi Libre"],
    whatsapp: "51993294000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+El+Ensueno+Tingo+Maria",
    phone: "993294000"
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Panaderia+Fenix+Tingo+Maria",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasteleria+Miski+Tingo+Maria",
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
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasteleria+Bella+Selva+Tingo+Maria",
    phone: "925198688"
  },
  {
    id: 22,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Cafetería Puro Aroma",
    image: "/images/negocio/tingo_maria/panaderias_cafes/puro_aroma.webp",
    tags: ["Café de Especialidad", "Postres de Café", "Fundado por Unasinos"],
    whatsapp: "51932501000",
    mapUrl: "https://maps.app.goo.gl/L5eEmZaboGWP9Dx97",
    phone: "932501000"
  },
  {
    id: 23,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Pastelería La Rica Fruta",
    image: "/images/negocio/tingo_maria/panaderias_cafes/rica_fruta.webp",
    tags: ["Tortas Frescas", "Postres", "Av. Alameda Perú"],
    whatsapp: "51950968223",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasteleria+La+Rika+Fruta+Tingo+Maria",
    phone: "950968223"
  },
  {
    id: 24,
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Arabica Coffee Cafeteria",
    image: "/images/negocio/tingo_maria/panaderias_cafes/arabica.webp",
    tags: ["Café Tostado", "Desayunos", "Ambiente Confortable"],
    whatsapp: "51925198000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Arabica+Coffee+Cafeteria+Tingo+Maria",
    phone: "925198000"
  },

  // --- 4. BARES Y DISCOTECAS ---
  {
    id: 10,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Restobar La Choza",
    image: "/images/negocio/tingo_maria/bares_discotecas/la_choza_resto.webp",
    tags: ["Tragos Regionales", "Urcututo", "Música en Vivo"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.app.goo.gl/bRhubkg6DiKzJzjG6",
    phone: "995830154"
  },
  {
    id: 11,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "La Kabaña",
    image: "/images/negocio/tingo_maria/bares_discotecas/kabana.webp",
    tags: ["Clásico Tingalés", "Gran Pista de Baile", "Zonas VIP"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Discoteca+Anaconda+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 12,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "El Carbon Resto Bar",
    image: "/images/negocio/tingo_maria/bares_discotecas/el_carbon_resto.webp",
    tags: ["Cocteles", "Piqueos", "Buen Ambiente"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.app.goo.gl/KekuNNArohPcJU1h9",
    phone: "995830154"
  },
  {
    id: 25,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Shushupe Bar & Karaoke",
    image: "/images/negocio/tingo_maria/bares_discotecas/shushupe_bar.webp",
    tags: ["Karaoke", "Tragos Regionales", "Piqueos de la Selva"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shushupe+Bar+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 26,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Trapiche Bar",
    image: "/images/negocio/tingo_maria/bares_discotecas/trapiche.webp",
    tags: ["Cocteles", "Centro de Tingo", "Música Variada"],
    whatsapp: "51995830200",
    mapUrl: "https://maps.app.goo.gl/rSG4xx75nwvKmzcf6",
    phone: "995830200"
  },
  {
    id: 27,
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "La Estación Restobar",
    image: "/images/negocio/tingo_maria/bares_discotecas/la_estacion.webp",
    tags: ["Buen Ambiente", "Cervezas Heladas", "Pichangas de Noche"],
    whatsapp: "51995830300",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Estacion+Restobar+Tingo+Maria",
    phone: "995830300"
  },

  // --- 5. DEPORTE Y RECREACIÓN ---
  {
    id: 13,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Grass Sintetico El Peruano",
    image: "/images/negocio/tingo_maria/deporte_recreacion/el_peruano.webp",
    tags: ["Gras Sintético", "Fulbito", "Pichangas"],
    whatsapp: "51995830154",
    mapUrl: "https://maps.app.goo.gl/kFtheAM6f9tpnaAd9",
    phone: "995830154"
  },
  {
    id: 14,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Centro Recreacional Potokar",
    image: "/images/negocio/tingo_maria/deporte_recreacion/potokar.webp",
    tags: ["Alquiler de Canchas", "Vóley", "Estacionamiento"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Complejo+Deportivo+La+Bombonera+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 15,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Billares El Compadre",
    image: "/images/negocio/tingo_maria/deporte_recreacion/el_compadre.webp",
    tags: ["Mesas de Billar", "Snooker", "Bebidas Heladas"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Billares+El+Compadre+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: 28,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Complejo Deportivo Jefftaro",
    image: "/images/negocio/tingo_maria/deporte_recreacion/jefftaro.webp",
    tags: ["Gras Sintético", "Alquiler de Canchas", "Fulbito"],
    whatsapp: "51995830400",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Complejo+Deportivo+El+Monumental+Tingo+Maria",
    phone: "995830400"
  },
  {
    id: 29,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Gimnasio Mega Force",
    image: "/images/negocio/tingo_maria/deporte_recreacion/force.webp",
    tags: ["Fierros", "Cardio", "Entrenamiento Local"],
    whatsapp: "51995830500",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gimnasio+Mega+Force+Tingo+Maria",
    phone: "995830500"
  },
  {
    id: 30,
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Billar la REJA",
    image: "/images/negocio/tingo_maria/deporte_recreacion/larejaa.webp",
    tags: ["Mesas de Billar", "Bebidas", "Amigos"],
    whatsapp: "51995830600",
    mapUrl: "https://maps.app.goo.gl/ADBEXcshFjTBLsid8",
    phone: "995830600"
  }

  
];