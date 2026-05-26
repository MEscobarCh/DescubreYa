// client/lib/turismoData.ts

export interface SitioTuristico {
  id: number;
  ciudad: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  dificultad: "Fácil" | "Moderada" | "Difícil";
  imagen: string;
  mapUrl: string;
}

export const sitiosTuristicos: SitioTuristico[] = [
  // --- TINGO MARÍA ---
  {
    id: 1,
    ciudad: "Tingo María",
    nombre: "Cueva de las Lechuzas",
    categoria: "Maravilla Natural",
    imagen: "/images/turismo/tingo_maria/cueva.webp",
    descripcion: "Impresionante sistema de cuevas hogar de guácharos y formaciones rocosas únicas.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.329111,-76.026833"
  },
  {
    id: 2,
    ciudad: "Tingo María",
    nombre: "Mirador de la Cruz",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tingo_maria/mirador.webp",
    descripcion: "El mejor punto para observar la ciudad de Tingo María y la silueta de la Bella Durmiente.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.289639,-75.997389"
  },
  {
    id: 3,
    ciudad: "Tingo María",
    nombre: "Catarata de Santa Carmen",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/catarata.webp",
    descripcion: "Hermosas caídas de agua cristalina perfectas para un refrescante baño en la selva.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.349723,-75.968348"
  },
  {
    id: 4,
    ciudad: "Tingo María",
    nombre: "Laguna de los Milagros",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/laguna.webp",
    descripcion: "Lugar místico ideal para paseos en bote y conexión espiritual con la naturaleza.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.144612174624013,-75.99545179189995"
  },
  {
    id: 5,
    ciudad: "Tingo María",
    nombre: "Balneario de las Pavas",
    categoria: "Recreación",
    imagen: "/images/turismo/tingo_maria/pavas.webp",
    descripcion: "Tradicional punto de reunión local para disfrutar de las frescas aguas del río.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.374169747666473,-75.96131434126399"
  },
  {
    id: 6,
    ciudad: "Tingo María",
    nombre: "Parque Nacional Tingo María",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/parque_nacional.webp",
    descripcion: "Área natural protegida que alberga la emblemática cadena montañosa de la Bella Durmiente.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.308611,-76.001389"
  },
  {
    id: 7,
    ciudad: "Tingo María",
    nombre: "Catarata de Gloriapata",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/gloriapata.webp",
    descripcion: "Caída de agua de más de 50 metros rodeada de densa vegetación en el corazón de la selva.",
    dificultad: "Difícil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.359306,-75.960040"
  },
  {
    id: 8,
    ciudad: "Tingo María",
    nombre: "Jardín Botánico de Tingo María",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/jardin_botanico.webp",
    descripcion: "Colección de plantas medicinales, orquídeas y especies tropicales de la Amazonía peruana.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.296944,-75.998611"
  },
  {
    id: 9,
    ciudad: "Tingo María",
    nombre: "Serpentario Tingo María",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/serpentario.webp",
    descripcion: "Centro de conservación donde se puede apreciar diversas especies de serpientes y reptiles de la selva.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.308889,-75.997222"
  },
  {
    id: 10,
    ciudad: "Tingo María",
    nombre: "Catarata Velo de la Novia",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/velo_novia.webp",
    descripcion: "Cascada de aguas blancas con una caída elegante que asemeja el velo de una novia.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.302500,-75.962500"
  },

  // --- HUÁNUCO ---
  {
    id: 11,
    ciudad: "Huánuco",
    nombre: "Kotosh (Manos Cruzadas)",
    categoria: "Arqueológico",
    imagen: "/images/turismo/huanuco/kotosh.webp",
    descripcion: "Uno de los templos más antiguos de América, famoso por su escultura de las Manos Cruzadas.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.930438,-76.279822"
  },
  {
    id: 12,
    ciudad: "Huánuco",
    nombre: "Puente Calicanto",
    categoria: "Histórico",
    imagen: "/images/turismo/huanuco/puente_calicanto.webp",
    descripcion: "Majestuosa obra del siglo XIX construida con cal y canto sobre el río Huallaga.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.932468,-76.236616"
  },
  {
    id: 13,
    ciudad: "Huánuco",
    nombre: "Plaza de Armas",
    categoria: "Cultural",
    imagen: "/images/turismo/huanuco/plaza_armas_huanuco.webp",
    descripcion: "El corazón de la ciudad, con su pileta de piedra granito y la moderna Catedral.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.930607,-76.240417"
  },
  {
    id: 14,
    ciudad: "Huánuco",
    nombre: "Pilco Mozo",
    categoria: "Mirador Natural",
    imagen: "/images/turismo/huanuco/pillco_mozo.webp",
    descripcion: "Formación pétrea que asemeja a un hombre dormido, guardián eterno de la ciudad.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.948256,-76.216390"
  },
  {
    id: 15,
    ciudad: "Huánuco",
    nombre: "Tomayquichua",
    categoria: "Tradicional",
    imagen: "/images/turismo/huanuco/tomayquichua.webp",
    descripcion: "Pintoresco pueblo cuna de 'La Perricholi', famoso por sus paisajes y chicherías.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-10.057766,-76.195655"
  },
  {
    id: 16,
    ciudad: "Huánuco",
    nombre: "Complejo Arqueológico de Huánuco Pampa",
    categoria: "Arqueológico",
    imagen: "/images/turismo/huanuco/huanuco_pampa.webp",
    descripcion: "Antiguo centro administrativo inca con un impresionante ushnu piramidal y kallankas.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.866667,-76.816667"
  },
  {
    id: 17,
    ciudad: "Huánuco",
    nombre: "Catedral de Huánuco",
    categoria: "Cultura",
    imagen: "/images/turismo/huanuco/catedral.webp",
    descripcion: "Imponente templo de estilo neoclásico ubicado en la Plaza de Armas con hermosos vitrales.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.931111,-76.240833"
  },
  {
    id: 18,
    ciudad: "Huánuco",
    nombre: "Malecón del Río Huallaga",
    categoria: "Recreación",
    imagen: "/images/turismo/huanuco/malecon_huallaga.webp",
    descripcion: "Paseo ribereño ideal para caminatas y ciclismo con vistas al majestuoso río Huallaga.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.934167,-76.232500"
  },
  {
    id: 19,
    ciudad: "Huánuco",
    nombre: "Laguna de Pichgacocha",
    categoria: "Naturaleza",
    imagen: "/images/turismo/huanuco/pichgacocha.webp",
    descripcion: "Sistema de cinco lagunas altoandinas de aguas cristalinas rodeadas de ichu y fauna silvestre.",
    dificultad: "Difícil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.978056,-76.063333"
  },
  {
    id: 20,
    ciudad: "Huánuco",
    nombre: "Museo Regional de Huánuco",
    categoria: "Cultura",
    imagen: "/images/turismo/huanuco/museo_regional.webp",
    descripcion: "Exhibe piezas prehispánicas de las culturas Yarowilca, Inca y colonial de la región.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.930556,-76.240000"
  },

  // --- TARAPOTO ---
  {
    id: 21,
    ciudad: "Tarapoto",
    nombre: "Cascadas de Ahuashiyacu",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/ahuashiyacu.webp",
    descripcion: "Impresionante caída de agua de 40 metros rodeada de exuberante vegetación selvática.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.487455,-76.359743"
  },
  {
    id: 22,
    ciudad: "Tarapoto",
    nombre: "Laguna Azul (Sauce)",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tarapoto/laguna_sauce.webp",
    descripcion: "Hermosa laguna de aguas azuladas, ideal para paseos en bote y observación de aves.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.690857,-76.216965"
  },
  {
    id: 23,
    ciudad: "Tarapoto",
    nombre: "Castillo de Lamas",
    categoria: "Cultura",
    imagen: "/images/turismo/tarapoto/castillo_lamas.webp",
    descripcion: "Construcción estilo medieval con impresionantes vistas panorámicas del valle.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.503722,-76.522346"
  },
  {
    id: 24,
    ciudad: "Tarapoto",
    nombre: "Cataratas de huacamaillo",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/huacamaillo.webp",
    descripcion: "Sistema de cascadas naturales con refrescantes pozas para nadar en medio de la selva.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.401197,-76.328447"
  },
  {
    id: 25,
    ciudad: "Tarapoto",
    nombre: "Mirador del Cerro Escalera",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tarapoto/mirador_escalera.webp",
    descripcion: "Espectacular mirador con vista de 360° de Tarapoto y la Cordillera Escalera.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.472986,-76.331307"
  },
  {
    id: 26,
    ciudad: "Tarapoto",
    nombre: "Baños Termales de San Mateo",
    categoria: "Relax",
    imagen: "/images/turismo/tarapoto/banos_termales.webp",
    descripcion: "Aguas termales medicinales de origen volcánico, perfectas para el descanso y bienestar.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.450538,-76.350402"
  },
  {
    id: 27,
    ciudad: "Tarapoto",
    nombre: "Reserva Nacional Cordillera Azul",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tarapoto/cordillera_azul.webp",
    descripcion: "Área natural protegida con una biodiversidad única de flora y fauna amazónica.",
    dificultad: "Difícil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-7.114772,-76.053524"
  },
  {
    id: 28,
    ciudad: "Tarapoto",
    nombre: "Petroglifos de Polish",
    categoria: "Cultura",
    imagen: "/images/turismo/tarapoto/petroglifos_polish.webp",
    descripcion: "Misterioso arte rupestre ancestral tallado en piedra por culturas precolombinas.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.574378,-76.427563"
  },
  {
    id: 29,
    ciudad: "Tarapoto",
    nombre: "Plaza de Armas de Tarapoto",
    categoria: "Cultural",
    imagen: "/images/turismo/tarapoto/plaza_tarapoto.webp",
    descripcion: "El vibrante centro de la ciudad con su pileta central y rodeado de palmeras.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.488698,-76.359784"
  },
  {
    id: 30,
    ciudad: "Tarapoto",
    nombre: "Catarata de Tununtunumba",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/tununtunumba.webp",
    descripcion: "Espectacular cascada de tres niveles con pozas color esmeralda en la profundidad de la selva.",
    dificultad: "Difícil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.534856,-76.342178"
  },

  // --- CUSCO ---
  {
    id: 31,
    ciudad: "Cusco",
    nombre: "Machu Picchu",
    categoria: "Cultura",
    imagen: "/images/turismo/cusco/machu_picchu.webp",
    descripcion: "Icónica ciudadela inca reconocida como Maravilla del Mundo y Patrimonio de la Humanidad.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.163141,-72.544963"
  },
  {
    id: 32,
    ciudad: "Cusco",
    nombre: "Plaza de Armas del Cusco",
    categoria: "Cultura",
    imagen: "/images/turismo/cusco/plaza_armas_cusco.webp",
    descripcion: "El vibrante corazón histórico de la ciudad, rodeado de iglesias coloniales y portales de piedra.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.516675,-71.980354"
  },
  {
    id: 33,
    ciudad: "Cusco",
    nombre: "Sacsayhuamán",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/sacsayhuaman.webp",
    descripcion: "Fortaleza ceremonial con enormes muros de piedras talladas que desafían la ingeniería moderna.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.509102,-71.982353"
  },
  {
    id: 34,
    ciudad: "Cusco",
    nombre: "Pisac",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/pisac.webp",
    descripcion: "Espectacular complejo arqueológico con andenes incas y el mercado artesanal más famoso de la región.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.422000,-71.849000"
  },
  {
    id: 35,
    ciudad: "Cusco",
    nombre: "Montaña de 7 Colores (Vinicunca)",
    categoria: "Aventura",
    imagen: "/images/turismo/cusco/vinicunca.webp",
    descripcion: "Espectacular montaña con franjas multicolores creadas por la sedimentación de minerales.",
    dificultad: "Difícil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.870218,-71.303509"
  },
  {
    id: 36,
    ciudad: "Cusco",
    nombre: "Laguna Humantay",
    categoria: "Naturaleza",
    imagen: "/images/turismo/cusco/laguna_humantay.webp",
    descripcion: "Laguna glacial de intenso color turquesa al pie del nevado Humantay.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.282745,-72.616182"
  },
  {
    id: 37,
    ciudad: "Cusco",
    nombre: "Moray",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/moray.webp",
    descripcion: "Increíbles andenes circulares incas que funcionaban como laboratorio agrícola experimental.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.329500,-72.210472"
  },
  {
    id: 38,
    ciudad: "Cusco",
    nombre: "Salineras de Maras",
    categoria: "Cultural",
    imagen: "/images/turismo/cusco/salineras_maras.webp",
    descripcion: "Miles de pozos de sal incrustados en la ladera de la montaña, explotados desde la época inca.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.301421,-72.155459"
  },
  {
    id: 39,
    ciudad: "Cusco",
    nombre: "Qenqo",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/qenqo.webp",
    descripcion: "Santuario inca tallado en roca viva con canales zigzagueantes para rituales sagrados.",
    dificultad: "Fácil",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.508638,-71.971850"
  },
  {
    id: 40,
    ciudad: "Cusco",
    nombre: "Bosque Nublado de Machu Picchu",
    categoria: "Naturaleza",
    imagen: "/images/turismo/cusco/bosque_nublado.webp",
    descripcion: "Reserva de neblina con exuberante biodiversidad, hogar del oso de anteojos y orquídeas únicas.",
    dificultad: "Moderada",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.175150,-72.537540"
  }
];