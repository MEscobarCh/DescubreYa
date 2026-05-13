// client/lib/turismoData.ts

export interface SitioTuristico {
  id: number;
  nombre: string;
  categoria: "Aventura" | "Naturaleza" | "Relax" | "Cultura";
  descripcion: string;
  dificultad: "Fácil" | "Moderada" | "Difícil";
  coordenadas: string;
  imagen: string;
}

export const sitiosTuristicos = [
  // --- TINGO MARÍA ---
  {
    id: 1,
    ciudad: "Tingo María",
    nombre: "Cueva de las Lechuzas",
    categoria: "Maravilla Natural",
    imagen: "/images/turismo/tingo_maria/cueva.webp",
    descripcion: "Impresionante sistema de cuevas hogar de guácharos y formaciones rocosas únicas.",
    dificultad: "Fácil",
    coordenadas: "-9.329111,-76.026833"
  },
  {
    id: 2,
    ciudad: "Tingo María",
    nombre: "Mirador de la Cruz",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tingo_maria/mirador.webp",
    descripcion: "El mejor punto para observar la ciudad de Tingo María y la silueta de la Bella Durmiente.",
    dificultad: "Fácil",
    coordenadas: "-9.289639,-75.997389"
  },
  {
    id: 3,
    ciudad: "Tingo María",
    nombre: "Catarata de Santa Carmen",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/catarata.webp",
    descripcion: "Hermosas caídas de agua cristalina perfectas para un refrescante baño en la selva.",
    dificultad: "Moderada",
    coordenadas: "-9.349723,-75.968348"
  },
  {
    id: 4,
    ciudad: "Tingo María",
    nombre: "Laguna de los Milagros",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/laguna.webp",
    descripcion: "Lugar místico ideal para paseos en bote y conexión espiritual con la naturaleza.",
    dificultad: "Fácil",
    coordenadas: "-9.144612174624013,-75.99545179189995"
  },
  {
    id: 5,
    ciudad: "Tingo María",
    nombre: "Balneario de las Pavas",
    categoria: "Recreación",
    imagen: "/images/turismo/tingo_maria/pavas.webp",
    descripcion: "Tradicional punto de reunión local para disfrutar de las frescas aguas del río.",
    dificultad: "Fácil",
    coordenadas: "-9.374169747666473,-75.96131434126399"
  },

  // --- HUÁNUCO ---
  {
    id: 6,
    ciudad: "Huánuco",
    nombre: "Kotosh (Manos Cruzadas)",
    categoria: "Arqueológico",
    imagen: "/images/turismo/huanuco/kotosh.webp",
    descripcion: "Uno de los templos más antiguos de América, famoso por su escultura de las Manos Cruzadas.",
    dificultad: "Fácil",
    coordenadas: "-9.930438,-76.279822"
  },
  {
    id: 7,
    ciudad: "Huánuco",
    nombre: "Puente Calicanto",
    categoria: "Histórico",
    imagen: "/images/turismo/huanuco/puente_calicanto.webp",
    descripcion: "Majestuosa obra del siglo XIX construida con cal y canto sobre el río Huallaga.",
    dificultad: "Fácil",
    coordenadas: "-9.932468,-76.236616"
  },
  {
    id: 8,
    ciudad: "Huánuco",
    nombre: "Plaza de Armas",
    categoria: "Cultural",
    imagen: "/images/turismo/huanuco/plaza_armas_huanuco.webp",
    descripcion: "El corazón de la ciudad, con su pileta de piedra granito y la moderna Catedral.",
    dificultad: "Fácil",
    coordenadas: "-9.930607,-76.240417"
  },
  {
    id: 9,
    ciudad: "Huánuco",
    nombre: "Pilco Mozo",
    categoria: "Mirador Natural",
    imagen: "/images/turismo/huanuco/pillco_mozo.webp",
    descripcion: "Formación pétrea que asemeja a un hombre dormido, guardián eterno de la ciudad.",
    dificultad: "Moderada",
    coordenadas: "-9.948256,-76.216390"
  },
  {
    id: 10,
    ciudad: "Huánuco",
    nombre: "Tomayquichua",
    categoria: "Tradicional",
    imagen: "/images/turismo/huanuco/tomayquichua.webp",
    descripcion: "Pintoresco pueblo cuna de 'La Perricholi', famoso por sus paisajes y chicherías.",
    dificultad: "Fácil",
    coordenadas: "-10.057766,-76.195655"
  },

  // --- TARAPOTO ---
  {
    id: 11,
    ciudad: "Tarapoto",
    nombre: "Cascadas de Ahuashiyacu",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/ahuashiyacu.webp",
    descripcion: "Impresionante caída de agua de 40 metros rodeada de exuberante vegetación selvática.",
    dificultad: "Fácil",
    coordenadas: "-6.487455,-76.359743"
  },
  {
    id: 12,
    ciudad: "Tarapoto",
    nombre: "Laguna Azul (Sauce)",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tarapoto/laguna_sauce.webp",
    descripcion: "Hermosa laguna de aguas azuladas, ideal para paseos en bote y observación de aves.",
    dificultad: "Fácil",
    coordenadas: "-6.690857,-76.216965"
  },
  {
    id: 13,
    ciudad: "Tarapoto",
    nombre: "Castillo de Lamas",
    categoria: "Cultura",
    imagen: "/images/turismo/tarapoto/castillo_lamas.webp",
    descripcion: "Construcción estilo medieval con impresionantes vistas panorámicas del valle.",
    dificultad: "Fácil",
    coordenadas: "-6.503722,-76.522346"
  },
  {
    id: 14,
    ciudad: "Tarapoto",
    nombre: "Cataratas de Huacamillo",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/huacamillo.webp",
    descripcion: "Sistema de cascadas naturales con refrescantes pozas para nadar en medio de la selva.",
    dificultad: "Moderada",
    coordenadas: "-6.401197,-76.328447"
  },
  {
    id: 15,
    ciudad: "Tarapoto",
    nombre: "Mirador del Cerro Escalera",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tarapoto/mirador_escalera.webp",
    descripcion: "Espectacular mirador con vista de 360° de Tarapoto y la Cordillera Escalera.",
    dificultad: "Moderada",
    coordenadas: "-6.472986,-76.331307"
  },
  {
    id: 16,
    ciudad: "Tarapoto",
    nombre: "Baños Termales de San Mateo",
    categoria: "Relax",
    imagen: "/images/turismo/tarapoto/banos_termales.webp",
    descripcion: "Aguas termales medicinales de origen volcánico, perfectas para el descanso y bienestar.",
    dificultad: "Fácil",
    coordenadas: "-6.450538,-76.350402"
  },
  {
    id: 17,
    ciudad: "Tarapoto",
    nombre: "Reserva Nacional Cordillera Azul",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tarapoto/cordillera_azul.webp",
    descripcion: "Área natural protegida con una biodiversidad única de flora y fauna amazónica.",
    dificultad: "Difícil",
    coordenadas: "-7.114772,-76.053524"
  },
  {
    id: 18,
    ciudad: "Tarapoto",
    nombre: "Petroglifos de Polish",
    categoria: "Cultura",
    imagen: "/images/turismo/tarapoto/petroglifos_polish.webp",
    descripcion: "Misterioso arte rupestre ancestral tallado en piedra por culturas precolombinas.",
    dificultad: "Fácil",
    coordenadas: "-6.574378,-76.427563"
  },
  {
    id: 19,
    ciudad: "Tarapoto",
    nombre: "Plaza de Armas de Tarapoto",
    categoria: "Cultural",
    imagen: "/images/turismo/tarapoto/plaza_tarapoto.webp",
    descripcion: "El vibrante centro de la ciudad con su pileta central y rodeado de palmeras.",
    dificultad: "Fácil",
    coordenadas: "-6.488698,-76.359784"
  },
  {
    id: 20,
    ciudad: "Tarapoto",
    nombre: "Catarata de Tununtunumba",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/tununtunumba.webp",
    descripcion: "Espectacular cascada de tres niveles con pozas color esmeralda en la profundidad de la selva.",
    dificultad: "Difícil",
    coordenadas: "-6.534856,-76.342178"
  },

  // --- CUSCO ---
  {
    id: 21,
    ciudad: "Cusco",
    nombre: "Machu Picchu",
    categoria: "Cultura",
    imagen: "/images/turismo/cusco/machu_picchu.webp",
    descripcion: "Icónica ciudadela inca reconocida como Maravilla del Mundo y Patrimonio de la Humanidad.",
    dificultad: "Moderada",
    coordenadas: "-13.163141,-72.544963"
  },
  {
    id: 22,
    ciudad: "Cusco",
    nombre: "Plaza de Armas del Cusco",
    categoria: "Cultura",
    imagen: "/images/turismo/cusco/plaza_armas_cusco.webp",
    descripcion: "El vibrante corazón histórico de la ciudad, rodeado de iglesias coloniales y portales de piedra.",
    dificultad: "Fácil",
    coordenadas: "-13.516675,-71.980354"
  },
  {
    id: 23,
    ciudad: "Cusco",
    nombre: "Sacsayhuamán",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/sacsayhuaman.webp",
    descripcion: "Fortaleza ceremonial con enormes muros de piedras talladas que desafían la ingeniería moderna.",
    dificultad: "Fácil",
    coordenadas: "-13.509102,-71.982353"
  },
  {
    id: 24,
    ciudad: "Cusco",
    nombre: "Pisac",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/pisac.webp",
    descripcion: "Espectacular complejo arqueológico con andenes incas y el mercado artesanal más famoso de la región.",
    dificultad: "Fácil",
    coordenadas: "-13.422000,-71.849000"
  },
  {
    id: 25,
    ciudad: "Cusco",
    nombre: "Montaña de 7 Colores (Vinicunca)",
    categoria: "Aventura",
    imagen: "/images/turismo/cusco/vinicunca.webp",
    descripcion: "Espectacular montaña con franjas multicolores creadas por la sedimentación de minerales.",
    dificultad: "Difícil",
    coordenadas: "-13.870218,-71.303509"
  },
  {
    id: 26,
    ciudad: "Cusco",
    nombre: "Laguna Humantay",
    categoria: "Naturaleza",
    imagen: "/images/turismo/cusco/laguna_humantay.webp",
    descripcion: "Laguna glacial de intenso color turquesa al pie del nevado Humantay.",
    dificultad: "Moderada",
    coordenadas: "-13.282745,-72.616182"
  },
  {
    id: 27,
    ciudad: "Cusco",
    nombre: "Moray",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/moray.webp",
    descripcion: "Increíbles andenes circulares incas que funcionaban como laboratorio agrícola experimental.",
    dificultad: "Fácil",
    coordenadas: "-13.329500,-72.210472"
  },
  {
    id: 28,
    ciudad: "Cusco",
    nombre: "Salineras de Maras",
    categoria: "Cultural",
    imagen: "/images/turismo/cusco/salineras_maras.webp",
    descripcion: "Miles de pozos de sal incrustados en la ladera de la montaña, explotados desde la época inca.",
    dificultad: "Fácil",
    coordenadas: "-13.301421,-72.155459"
  },
  {
    id: 29,
    ciudad: "Cusco",
    nombre: "Qenqo",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/qenqo.webp",
    descripcion: "Santuario inca tallado en roca viva con canales zigzagueantes para rituales sagrados.",
    dificultad: "Fácil",
    coordenadas: "-13.508638,-71.971850"
  },
  {
    id: 30,
    ciudad: "Cusco",
    nombre: "Bosque Nublado de Machu Picchu",
    categoria: "Naturaleza",
    imagen: "/images/turismo/cusco/bosque_nublado.webp",
    descripcion: "Reserva de neblina con exuberante biodiversidad, hogar del oso de anteojos y orquídeas únicas.",
    dificultad: "Moderada",
    coordenadas: "-13.175150,-72.537540"
  },
  // --- LIMA ---
  {
    id: 31,
    ciudad: "Lima",
    nombre: "Centro Histórico de Lima",
    categoria: "Cultura",
    imagen: "/images/turismo/lima/centro_historico.webp",
    descripcion: "Patrimonio de la Humanidad con balcones coloniales, la Catedral y el Palacio de Gobierno.",
    dificultad: "Fácil",
    coordenadas: "-12.045124,-77.030706"
  },
  {
    id: 32,
    ciudad: "Lima",
    nombre: "Circuito Mágico del Agua",
    categoria: "Recreación",
    imagen: "/images/turismo/lima/parque_aguas.webp",
    descripcion: "Espectacular parque con fuentes de agua danzantes, luces láser y un túnel de agua.",
    dificultad: "Fácil",
    coordenadas: "-12.070486,-77.034344"
  },
  {
    id: 33,
    ciudad: "Lima",
    nombre: "Huaca Pucllana",
    categoria: "Arqueológico",
    imagen: "/images/turismo/lima/huaca_pucllana.webp",
    descripcion: "Impresionante pirámide prehispánica construida en adobe en pleno corazón de Miraflores.",
    dificultad: "Fácil",
    coordenadas: "-12.110831,-77.033758"
  },
  {
    id: 34,
    ciudad: "Lima",
    nombre: "Malecón de Miraflores",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/lima/malecon_miraflores.webp",
    descripcion: "Hermoso circuito de parques frente al océano Pacífico ideal para caminatas y ciclismo.",
    dificultad: "Fácil",
    coordenadas: "-12.123779,-77.037101"
  },
  {
    id: 35,
    ciudad: "Lima",
    nombre: "Barranco",
    categoria: "Cultura",
    imagen: "/images/turismo/lima/barranco.webp",
    descripcion: "Bohemio distrito con murales artísticos, galerías, el Puente de los Suspiros y música en vivo.",
    dificultad: "Fácil",
    coordenadas: "-12.144500,-77.022500"
  },
  {
    id: 36,
    ciudad: "Lima",
    nombre: "Islas Palomino",
    categoria: "Aventura",
    imagen: "/images/turismo/lima/islas_palomino.webp",
    descripcion: "Islas del Callao donde se puede nadar con lobos marinos en su hábitat natural.",
    dificultad: "Moderada",
    coordenadas: "-12.073333,-77.193333"
  },
  {
    id: 37,
    ciudad: "Lima",
    nombre: "Parque de las Leyendas",
    categoria: "Naturaleza",
    imagen: "/images/turismo/lima/parque_leyendas.webp",
    descripcion: "Zoológico y jardín botánico con más de 2,000 animales y zonas arqueológicas.",
    dificultad: "Fácil",
    coordenadas: "-12.069706,-77.088169"
  },
  {
    id: 38,
    ciudad: "Lima",
    nombre: "Santuario de Pachacamac",
    categoria: "Arqueológico",
    imagen: "/images/turismo/lima/pachacamac.webp",
    descripcion: "Antiguo oráculo prehispánico con templos, pirámides y un museo de sitio.",
    dificultad: "Fácil",
    coordenadas: "-12.257500,-76.901111"
  },
  {
    id: 39,
    ciudad: "Lima",
    nombre: "Lomas de Lachay",
    categoria: "Naturaleza",
    imagen: "/images/turismo/lima/lomas_lachay.webp",
    descripcion: "Reserva con neblinas que forma un oasis de vegetación entre el desierto costero.",
    dificultad: "Fácil",
    coordenadas: "-11.358333,-77.380833"
  },
  {
    id: 40,
    ciudad: "Lima",
    nombre: "Museo Larco",
    categoria: "Cultura",
    imagen: "/images/turismo/lima/museo_larco.webp",
    descripcion: "Fascinante museo de arte precolombino con más de 45,000 piezas arqueológicas.",
    dificultad: "Fácil",
    coordenadas: "-12.072500,-77.070833"
  }
];