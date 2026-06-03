export interface SitioTuristico {
  id: string; // Cambiado a string para soportar el formato "TUR-X"
  ciudad: string;
  nombre: string;
  categoria: string;
  descripcion: string;
  dificultad: "Acceso Fácil" | "Caminata Moderada" | "Ruta Exigente";
  imagen: string; // Portada principal (mantiene tu diseño actual intacto)
  galeria: string[]; // NUEVO: Arreglo para guardar múltiples fotos de los usuarios
  mapUrl: string;
}

export const sitiosTuristicos: SitioTuristico[] = [
  // --- TINGO MARÍA (IDs TUR-1 al TUR-1000) ---
  {
    id: "TUR-1",
    ciudad: "Tingo María",
    nombre: "Cueva de las Lechuzas",
    categoria: "Maravilla Natural",
    imagen: "/images/turismo/tingo_maria/cueva.webp",
    descripcion: "Impresionante sistema de cuevas hogar de guácharos y formaciones rocosas únicas.",
    dificultad: "Acceso Fácil",
    galeria: [
      "/images/turismo/tingo_maria/cueva.webp",
      "https://images.unsplash.com/photo-1518081461904-b715e4f9b5c4?auto=format&fit=crop&w=1080&q=80", // Foto de prueba 1
      "https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1080&q=80"  // Foto de prueba 2
    ],
    mapUrl: "https://maps.app.goo.gl/PKf9ry9RZeE8V5Dd8"
  },
  {
    id: "TUR-2",
    ciudad: "Tingo María",
    nombre: "Mirador de la Cruz",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tingo_maria/mirador.webp",
    descripcion: "El mejor punto para observar la ciudad de Tingo María y la silueta de la Bella Durmiente.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.289639,-75.997389"
  },
  {
    id: "TUR-3",
    ciudad: "Tingo María",
    nombre: "Catarata de Santa Carmen",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/catarata.webp",
    descripcion: "Hermosas caídas de agua cristalina perfectas para un refrescante baño en la selva.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/FeZaYJhVEnZustRc9"
  },
  {
    id: "TUR-4",
    ciudad: "Tingo María",
    nombre: "Laguna de los Milagros",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/laguna.webp",
    descripcion: "Lugar místico ideal para paseos en bote y conexión espiritual con la naturaleza.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/dbgyZA4wV7f1ZuXi8"
  },
  {
    id: "TUR-5",
    ciudad: "Tingo María",
    nombre: "Balneario de las Pavas",
    categoria: "Recreación",
    imagen: "/images/turismo/tingo_maria/pavas.webp",
    descripcion: "Tradicional punto de reunión local para disfrutar de las frescas aguas del río.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/vDfD2uRpA9rDX9yC7"
  },
  {
    id: "TUR-6",
    ciudad: "Tingo María",
    nombre: "Parque Nacional Tingo María",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/parque_nacional.webp",
    descripcion: "Área natural protegida que alberga la emblemática cadena montañosa de la Bella Durmiente.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/9oBsy5jcsi4a92AL8"
  },
  {
    id: "TUR-7",
    ciudad: "Tingo María",
    nombre: "Catarata de Gloriapata",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/gloriapata.webp",
    descripcion: "Caída de agua de más de 50 metros rodeada de densa vegetación en el corazón de la selva.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/nqJF6gbLLhaCPJab7"
  },
  {
    id: "TUR-8",
    ciudad: "Tingo María",
    nombre: "Jardín Botánico de Tingo María",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/jardin_botanico.webp",
    descripcion: "Colección de plantas medicinales, orquídeas y especies tropicales de la Amazonía peruana.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/ypXLfjXh5jFFSZMG6"
  },
  {
    id: "TUR-9",
    ciudad: "Tingo María",
    nombre: "Serpentario Tingo María",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/serpentario.webp",
    descripcion: "Centro de conservación donde se puede apreciar diversas especies de serpientes y reptiles de la selva.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/ptVRTJgsz6RW3qpq8"
  },
  {
    id: "TUR-10",
    ciudad: "Tingo María",
    nombre: "Catarata Velo de la Novia",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/velo_novia.webp",
    descripcion: "Cascada de aguas blancas con una caída elegante que asemeja el velo de una novia.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/TZKnj7922zbYAx3R7"
  },
  {
    id: "TUR-11",
    ciudad: "Tingo María",
    nombre: "Cueva Huayna Cápac",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/cueva_huayna_capac.webp",
    descripcion: "Misteriosa caverna con impresionantes formaciones de estalactitas y estalagmitas, ideal para los amantes de la espeleología.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/YZBHdrq5Y1aep5Js5"
  },
  {
    id: "TUR-12",
    ciudad: "Tingo María",
    nombre: "Cueva Mil Encantos",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/cueva_mil_encantos.webp",
    descripcion: "Un recorrido subterráneo fascinante lleno de pasadizos naturales y una atmósfera mística en medio de la selva.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/RiAxBme9rTJhQ1SP7"
  },
  {
    id: "TUR-13",
    ciudad: "Tingo María",
    nombre: "Cueva del Chullachaqui",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/cueva_chullachaqui.webp",
    descripcion: "Lugar rodeado de mitos y leyendas locales sobre el guardián del bosque. Ofrece una experiencia de exploración única.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/9JSywpqqLuru8vCs8"
  },
  {
    id: "TUR-14",
    ciudad: "Tingo María",
    nombre: "Cascada El Encanto de las Sirenas",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/cascada_sirenas.webp",
    descripcion: "Hermosa y relajante caída de agua que forma una poza natural perfecta para nadar y desconectar.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/TBH4qyKyXDE8hvnn6"
  },
  {
    id: "TUR-15",
    ciudad: "Tingo María",
    nombre: "Jacuzzi Manco Cápac",
    categoria: "Relax",
    imagen: "/images/turismo/tingo_maria/jacuzzi_manco_capac.webp",
    descripcion: "Formaciones rocosas en el cauce del río que crean pozas naturales burbujeantes al estilo de un jacuzzi.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/B2XPWaub4YCe3ZFW7"
  },
  {
    id: "TUR-16",
    ciudad: "Tingo María",
    nombre: "Cascada de los Deseos",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/cascada_deseos.webp",
    descripcion: "Encantadora cascada escondida en la vegetación. La tradición local dice que si pides un deseo al bañarte, se cumple.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/kAEfnno475TTwhqM9"
  },
  {
    id: "TUR-17",
    ciudad: "Tingo María",
    nombre: "Cueva de los Pumas",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/cueva_pumas.webp",
    descripcion: "Caverna profunda y desafiante que requiere espíritu aventurero. Su nombre proviene de antiguas leyendas felinas.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/xwnwnqFS344ivcun8"
  },
  {
    id: "TUR-18",
    ciudad: "Tingo María",
    nombre: "Cascada Velo de las Ninfas",
    categoria: "Aventura",
    imagen: "/images/turismo/tingo_maria/velo_ninfas.webp",
    descripcion: "Ruta espectacular para practicar barranquismo y escalar a través de una serie de hermosas caídas de agua.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/DVuqRbeqK2KaZQZ46"
  },
  {
    id: "TUR-19",
    ciudad: "Tingo María",
    nombre: "Catarata Sol Naciente",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tingo_maria/catarata_sol_naciente.webp",
    descripcion: "Hermosa caída de agua rodeada de exuberante selva, perfecta para refrescarse tras una caminata y disfrutar de la naturaleza en su estado puro.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/a6ki49GCjitPX95U7"
  },
  {
    id: "TUR-20",
    ciudad: "Tingo María",
    nombre: "Playa Tulumayo",
    categoria: "Recreación",
    imagen: "/images/turismo/tingo_maria/playa_tulumayo.webp",
    descripcion: "Hermosa ribera de aguas cristalinas y frescas, ideal para disfrutar de un día de sol, nadar y relajarse en familia.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/Cev4KGekHvkQHFae7"
  },
  {
    id: "TUR-21",
    ciudad: "Tingo María",
    nombre: "Mirador de Supte",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tingo_maria/mirador_supte_nuevo.webp",
    descripcion: "Impresionante mirador natural que ofrece una vista privilegiada del verdor de la selva alta y los landscapes de Supte.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mirador+de+Supte+Tingo+Maria"
  },
  {
    id: "TUR-22",
    ciudad: "Tingo María",
    nombre: "Mirador Pérez",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tingo_maria/mirador_perez.webp",
    descripcion: "Un excelente punto de observación para contemplar la belleza paisajística de la zona, ideal para tomar fotos del atardecer y relajarse.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/vERVABND7MLjvP779"
  },
  {
    id: "TUR-23",
    ciudad: "Tingo María",
    nombre: "Mirador Cotomono",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tingo_maria/mirador_cotomono.webp",
    descripcion: "Atracción paisajística que destaca por su entorno natural y la posibilidad de avistar aves.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://maps.app.goo.gl/LSHWug57zb5cRTu97"
  },

  // --- HUÁNUCO (IDs TUR-1001 al TUR-2000) ---
  {
    id: "TUR-1001",
    ciudad: "Huánuco",
    nombre: "Kotosh (Manos Cruzadas)",
    categoria: "Arqueológico",
    imagen: "/images/turismo/huanuco/kotosh.webp",
    descripcion: "Uno de los templos más antiguos de América, famoso por su escultura de las Manos Cruzadas.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.930438,-76.279822"
  },
  {
    id: "TUR-1002",
    ciudad: "Huánuco",
    nombre: "Puente Calicanto",
    categoria: "Histórico",
    imagen: "/images/turismo/huanuco/puente_calicanto.webp",
    descripcion: "Majestuosa obra del siglo XIX construida con cal y canto sobre el río Huallaga.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.932468,-76.236616"
  },
  {
    id: "TUR-1003",
    ciudad: "Huánuco",
    nombre: "Plaza de Armas",
    categoria: "Cultural",
    imagen: "/images/turismo/huanuco/plaza_armas_huanuco.webp",
    descripcion: "El corazón de la ciudad, con su pileta de piedra granito y la moderna Catedral.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.930607,-76.240417"
  },
  {
    id: "TUR-1004",
    ciudad: "Huánuco",
    nombre: "Pilco Mozo",
    categoria: "Mirador Natural",
    imagen: "/images/turismo/huanuco/pillco_mozo.webp",
    descripcion: "Formación pétrea que asemeja a un hombre dormido, guardián eterno de la ciudad.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.948256,-76.216390"
  },
  {
    id: "TUR-1005",
    ciudad: "Huánuco",
    nombre: "Tomayquichua",
    categoria: "Tradicional",
    imagen: "/images/turismo/huanuco/tomayquichua.webp",
    descripcion: "Pintoresco pueblo cuna de 'La Perricholi', famoso por sus paisajes y chicherías.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-10.057766,-76.195655"
  },
  {
    id: "TUR-1006",
    ciudad: "Huánuco",
    nombre: "Complejo Arqueológico de Huánuco Pampa",
    categoria: "Arqueológico",
    imagen: "/images/turismo/huanuco/huanuco_pampa.webp",
    descripcion: "Antiguo centro administrativo inca con un impresionante ushnu piramidal y kallankas.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.866667,-76.816667"
  },
  {
    id: "TUR-1007",
    ciudad: "Huánuco",
    nombre: "Catedral de Huánuco",
    categoria: "Cultura",
    imagen: "/images/turismo/huanuco/catedral.webp",
    descripcion: "Imponente templo de estilo neoclásico ubicado en la Plaza de Armas con hermosos vitrales.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.931111,-76.240833"
  },
  {
    id: "TUR-1008",
    ciudad: "Huánuco",
    nombre: "Malecón del Río Huallaga",
    categoria: "Recreación",
    imagen: "/images/turismo/huanuco/malecon_huallaga.webp",
    descripcion: "Paseo ribereño ideal para caminatas y ciclismo con vistas al majestuoso río Huallaga.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.934167,-76.232500"
  },
  {
    id: "TUR-1009",
    ciudad: "Huánuco",
    nombre: "Laguna de Pichgacocha",
    categoria: "Naturaleza",
    imagen: "/images/turismo/huanuco/pichgacocha.webp",
    descripcion: "Sistema de cinco lagunas altoandinas de aguas cristalinas rodeadas de ichu y fauna silvestre.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.978056,-76.063333"
  },
  {
    id: "TUR-1010",
    ciudad: "Huánuco",
    nombre: "Museo Regional de Huánuco",
    categoria: "Cultura",
    imagen: "/images/turismo/huanuco/museo_regional.webp",
    descripcion: "Exhibe piezas prehispánicas de las culturas Yarowilca, Inca y colonial de la región.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-9.930556,-76.240000"
  },

  // --- TARAPOTO (IDs TUR-2001 al TUR-3000) ---
  {
    id: "TUR-2001",
    ciudad: "Tarapoto",
    nombre: "Cascadas de Ahuashiyacu",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/ahuashiyacu.webp",
    descripcion: "Impresionante caída de agua de 40 metros rodeada de exuberante vegetación selvática.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.487455,-76.359743"
  },
  {
    id: "TUR-2002",
    ciudad: "Tarapoto",
    nombre: "Laguna Azul (Sauce)",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tarapoto/laguna_sauce.webp",
    descripcion: "Hermosa laguna de aguas azuladas, ideal para paseos en bote y observación de aves.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.690857,-76.216965"
  },
  {
    id: "TUR-2003",
    ciudad: "Tarapoto",
    nombre: "Castillo de Lamas",
    categoria: "Cultura",
    imagen: "/images/turismo/tarapoto/castillo_lamas.webp",
    descripcion: "Construcción estilo medieval con impresionantes vistas panorámicas del valle.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.503722,-76.522346"
  },
  {
    id: "TUR-2004",
    ciudad: "Tarapoto",
    nombre: "Cataratas de huacamaillo",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/huacamaillo.webp",
    descripcion: "Sistema de cascadas naturales con refrescantes pozas para nadar en medio de la selva.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.401197,-76.328447"
  },
  {
    id: "TUR-2005",
    ciudad: "Tarapoto",
    nombre: "Mirador del Cerro Escalera",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/tarapoto/mirador_escalera.webp",
    descripcion: "Espectacular mirador con vista de 360° de Tarapoto y la Cordillera Escalera.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.472986,-76.331307"
  },
  {
    id: "TUR-2006",
    ciudad: "Tarapoto",
    nombre: "Baños Termales de San Mateo",
    categoria: "Relax",
    imagen: "/images/turismo/tarapoto/banos_termales.webp",
    descripcion: "Aguas termales medicinales de origen volcánico, perfectas para el descanso y bienestar.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.450538,-76.350402"
  },
  {
    id: "TUR-2007",
    ciudad: "Tarapoto",
    nombre: "Reserva Nacional Cordillera Azul",
    categoria: "Naturaleza",
    imagen: "/images/turismo/tarapoto/cordillera_azul.webp",
    descripcion: "Área natural protegida con una biodiversidad única de flora y fauna amazónica.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-7.114772,-76.053524"
  },
  {
    id: "TUR-2008",
    ciudad: "Tarapoto",
    nombre: "Petroglifos de Polish",
    categoria: "Cultura",
    imagen: "/images/turismo/tarapoto/petroglifos_polish.webp",
    descripcion: "Misterioso arte rupestre ancestral tallado en piedra por culturas precolombinas.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.574378,-76.427563"
  },
  {
    id: "TUR-2009",
    ciudad: "Tarapoto",
    nombre: "Plaza de Armas de Tarapoto",
    categoria: "Cultural",
    imagen: "/images/turismo/tarapoto/plaza_tarapoto.webp",
    descripcion: "El vibrante centro de la ciudad con su pileta central y rodeado de palmeras.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.488698,-76.359784"
  },
  {
    id: "TUR-2010",
    ciudad: "Tarapoto",
    nombre: "Catarata de Tununtunumba",
    categoria: "Aventura",
    imagen: "/images/turismo/tarapoto/tununtunumba.webp",
    descripcion: "Espectacular cascada de tres niveles con pozas color esmeralda en la profundidad de la selva.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.534856,-76.342178"
  },

  // --- CUSCO (IDs TUR-3001 al TUR-4000) ---
  {
    id: "TUR-3001",
    ciudad: "Cusco",
    nombre: "Machu Picchu",
    categoria: "Cultura",
    imagen: "/images/turismo/cusco/machu_picchu.webp",
    descripcion: "Icónica ciudadela inca reconocida como Maravilla del Mundo y Patrimonio de la Humanidad.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.163141,-72.544963"
  },
  {
    id: "TUR-3002",
    ciudad: "Cusco",
    nombre: "Plaza de Armas del Cusco",
    categoria: "Cultura",
    imagen: "/images/turismo/cusco/plaza_armas_cusco.webp",
    descripcion: "El vibrante corazón histórico de la ciudad, rodeado de iglesias coloniales y portales de piedra.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.516675,-71.980354"
  },
  {
    id: "TUR-3003",
    ciudad: "Cusco",
    nombre: "Sacsayhuamán",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/sacsayhuaman.webp",
    descripcion: "Fortaleza ceremonial con enormes muros de piedras talladas que desafían la ingeniería moderna.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.509102,-71.982353"
  },
  {
    id: "TUR-3004",
    ciudad: "Cusco",
    nombre: "Pisac",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/pisac.webp",
    descripcion: "Espectacular complejo arqueológico con andenes incas y el mercado artesanal más famoso de la región.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.422000,-71.849000"
  },
  {
    id: "TUR-3005",
    ciudad: "Cusco",
    nombre: "Montaña de 7 Colores (Vinicunca)",
    categoria: "Aventura",
    imagen: "/images/turismo/cusco/vinicunca.webp",
    descripcion: "Espectacular montaña con franjas multicolores creadas por la sedimentación de minerales.",
    dificultad: "Ruta Exigente",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.870218,-71.303509"
  },
  {
    id: "TUR-3006",
    ciudad: "Cusco",
    nombre: "Laguna Humantay",
    categoria: "Naturaleza",
    imagen: "/images/turismo/cusco/laguna_humantay.webp",
    descripcion: "Laguna glacial de intenso color turquesa al pie del nevado Humantay.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.282745,-72.616182"
  },
  {
    id: "TUR-3007",
    ciudad: "Cusco",
    nombre: "Moray",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/moray.webp",
    descripcion: "Increíbles andenes circulares incas que funcionaban como laboratorio agrícola experimental.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.329500,-72.210472"
  },
  {
    id: "TUR-3008",
    ciudad: "Cusco",
    nombre: "Salineras de Maras",
    categoria: "Cultural",
    imagen: "/images/turismo/cusco/salineras_maras.webp",
    descripcion: "Miles de pozos de sal incrustados en la ladera de la montaña, explotados desde la época inca.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.301421,-72.155459"
  },
  {
    id: "TUR-3009",
    ciudad: "Cusco",
    nombre: "Qenqo",
    categoria: "Arqueológico",
    imagen: "/images/turismo/cusco/qenqo.webp",
    descripcion: "Santuario inca tallado en roca viva con canales zigzagueantes para rituales sagrados.",
    dificultad: "Acceso Fácil",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.508638,-71.971850"
  },
  {
    id: "TUR-3010",
    ciudad: "Cusco",
    nombre: "Bosque Nublado de Machu Picchu",
    categoria: "Naturaleza",
    imagen: "/images/turismo/cusco/bosque_nublado.webp",
    descripcion: "Reserva de neblina con exuberante biodiversidad, hogar del oso de anteojos y orquídeas únicas.",
    dificultad: "Caminata Moderada",
    galeria: [],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-13.175150,-72.537540"
  }
];