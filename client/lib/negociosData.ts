// client/lib/negociosData.ts

export interface Business {
  id: string; // Cambiado de number a string para soportar los prefijos
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
    id: "NEG-1",
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
    id: "NEG-2",
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
    id: "NEG-3",
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
    id: "NEG-4",
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
    id: "NEG-5",
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Chifa Mey Chan",
    image: "/images/negocio/tingo_maria/restaurantes/meychan.webp",
    tags: ["Sabor Oriental", "Arroz Chaufa", "Platos Taypá"],
    whatsapp: "51945123456",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chifa+Mey+Chan+Tingo+Maria",
    phone: "945123456"
  },
  {
    id: "NEG-6",
    ciudad: "Tingo María",
    category: "Restaurantes",
    name: "Fuego & Sazon",
    image: "/images/negocio/tingo_maria/restaurantes/fuegoy.webp",
    tags: ["Parrillas", "Bebidas", "Carnes"],
    whatsapp: "51984112233",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Fuego+y+Sazon+Tingo+Maria",
    phone: "984112233"
  },

  // --- 2. HOTELES ---
  {
    id: "NEG-7",
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
    id: "NEG-8",
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
    id: "NEG-9",
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
    id: "NEG-10",
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
    id: "NEG-11",
    ciudad: "Tingo María",
    category: "Hoteles",
    name: "Caruzo Hotel and Suites",
    image: "/images/negocio/tingo_maria/hoteles/caruzo.webp",
    tags: ["Confort", "Piscina", "Instalaciones Modernas"],
    whatsapp: "51996319000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Caruzo+Hotel+and+Suites+Tingo+Maria",
    phone: "996319000"
  },
  {
    id: "NEG-12",
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
    id: "NEG-13",
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Panadería y Pastelería Fenix",
    image: "/images/negocio/tingo_maria/panaderias_cafes/fenix.webp",
    tags: ["Café Local", "Pastelería", "Desayunos"],
    whatsapp: "062284284",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Panaderia+y+Pasteleria+Fenix+Tingo+Maria",
    phone: "062-284284"
  },
  {
    id: "NEG-14",
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
    id: "NEG-15",
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Pastelería y Licorería Bella Selva",
    image: "/images/negocio/tingo_maria/panaderias_cafes/bella_selva.webp",
    tags: ["Pasteles", "Tortas De Cumpleaños", "licores"],
    whatsapp: "51925198688",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasteleria+y+Licorerica+Bella+Selva+Tingo+Maria",
    phone: "925198688"
  },
  {
    id: "NEG-16",
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Cafetería Puro Aroma",
    image: "/images/negocio/tingo_maria/panaderias_cafes/puro_aroma.webp",
    tags: ["Café de Especialidad", "Postres de Café", "Fundado por Unasinos"],
    whatsapp: "51932501000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Cafeteria+Puro+Aroma+Tingo+Maria",
    phone: "932501000"
  },
  {
    id: "NEG-17",
    ciudad: "Tingo María",
    category: "Panaderías y Cafés",
    name: "Pastelería La Rica Fruta",
    image: "/images/negocio/tingo_maria/panaderias_cafes/rica_fruta.webp",
    tags: ["Tortas Frescas", "Postres", "Av. Alameda Perú"],
    whatsapp: "51950968223",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pasteleria+La+Rica+Fruta+Tingo+Maria",
    phone: "950968223"
  },
  {
    id: "NEG-18",
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
    id: "NEG-19",
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Restobar La Choza",
    image: "/images/negocio/tingo_maria/bares_discotecas/la_choza_resto.webp",
    tags: ["Tragos Regionales", "Urcututo", "Música en Vivo"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Restobar+La+Choza+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: "NEG-20",
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "La Kabaña",
    image: "/images/negocio/tingo_maria/bares_discotecas/kabana.webp",
    tags: ["Clásico Tingalés", "Gran Pista de Baile", "Zonas VIP"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Kabana+Restobar+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: "NEG-21",
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "El Carbon Resto Bar",
    image: "/images/negocio/tingo_maria/bares_discotecas/el_carbon_resto.webp",
    tags: ["Cocteles", "Piqueos", "Buen Ambiente"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=El+Carbon+Resto+Bar+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: "NEG-22",
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Shushupe Bar & Karaoke",
    image: "/images/negocio/tingo_maria/bares_discotecas/shushupe_bar.webp",
    tags: ["Karaoke", "Tragos Regionales", "Piqueos de la Selva"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Shushupe+Bar+and+Karaoke+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: "NEG-23",
    ciudad: "Tingo María",
    category: "Bares y Discotecas",
    name: "Trapiche Bar",
    image: "/images/negocio/tingo_maria/bares_discotecas/trapiche.webp",
    tags: ["Cocteles", "Centro de Tingo", "Música Variada"],
    whatsapp: "51995830200",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Trapiche+Bar+Tingo+Maria",
    phone: "995830200"
  },
  {
    id: "NEG-24",
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
    id: "NEG-25",
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Grass Sintetico El Peruano",
    image: "/images/negocio/tingo_maria/deporte_recreacion/el_peruano.webp",
    tags: ["Gras Sintético", "Fulbito", "Pichangas"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grass+Sintetico+El+Peruano+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: "NEG-26",
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Centro Recreacional Potokar",
    image: "/images/negocio/tingo_maria/deporte_recreacion/potokar.webp",
    tags: ["Alquiler de Canchas", "Vóley", "Estacionamiento"],
    whatsapp: "51995830154",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Centro+Recreacional+Potokar+Tingo+Maria",
    phone: "995830154"
  },
  {
    id: "NEG-27",
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
    id: "NEG-28",
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Complejo Deportivo Jefftaro",
    image: "/images/negocio/tingo_maria/deporte_recreacion/jefftaro.webp",
    tags: ["Gras Sintético", "Alquiler de Canchas", "Fulbito"],
    whatsapp: "51995830400",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Complejo+Deportivo+Jefftaro+Tingo+Maria",
    phone: "995830400"
  },
  {
    id: "NEG-29",
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
    id: "NEG-30",
    ciudad: "Tingo María",
    category: "Deporte y Recreación",
    name: "Billar la REJA",
    image: "/images/negocio/tingo_maria/deporte_recreacion/larejaa.webp",
    tags: ["Mesas de Billar", "Bebidas", "Amigos"],
    whatsapp: "51995830600",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Billar+la+REJA+Tingo+Maria",
    phone: "995830600"
  }
];