// client/lib/turismoData.ts

export interface SitioTuristico {
  id: number;
  nombre: string;
  categoria: "Aventura" | "Naturaleza" | "Relax" | "Cultura";
  descripcion: string;
  dificultad: "Fácil" | "Moderada" | "Difícil";
  coordenadas: string;
  precioEntrada: string;
  imagen: string;
}

export interface SitioTuristico {
  id: number;
  nombre: string;
  categoria: "Aventura" | "Naturaleza" | "Relax" | "Cultura";
  descripcion: string;
  dificultad: "Fácil" | "Moderada" | "Difícil";
  coordenadas: string;
  precioEntrada: string;
  imagen: string;
}

// lib/turismoData.ts

// lib/turismoData.ts

export const sitiosTuristicos = [
  {
    id: 1,
    ciudad: "Tingo María",
    nombre: "Cueva de las Lechuzas",
    categoria: "Maravilla Natural",
    imagen: "/images/turismo/cueva.webp",
    descripcion: "Impresionante sistema de cuevas hogar de guácharos y formaciones rocosas únicas.",
    dificultad: "Fácil",
    precioEntrada: "S/ 15.00",
    coordenadas: "-9.329111,-76.026833"
  },
  {
    id: 2,
    ciudad: "Tingo María",
    nombre: "Mirador de la Cruz",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/mirador.webp",
    descripcion: "El mejor punto para observar la ciudad de Tingo María y la silueta de la Bella Durmiente.",
    dificultad: "Fácil",
    precioEntrada: "Gratis",
    coordenadas: "-9.289639,-75.997389"
  },
  {
    id: 3,
    ciudad: "Tingo María",
    nombre: "Catarata de Santa Carmen",
    categoria: "Aventura",
    imagen: "/images/turismo/catarata.webp",
    descripcion: "Hermosas caídas de agua cristalina perfectas para un refrescante baño en la selva.",
    dificultad: "Moderada",
    precioEntrada: "S/ 5.00",
    coordenadas: "-9.349723,-75.968348"
  },
  {
    id: 4,
    ciudad: "Tingo María",
    nombre: "Laguna de los Milagros",
    categoria: "Naturaleza",
    imagen: "/images/turismo/laguna.webp",
    descripcion: "Lugar místico ideal para paseos en bote y conexión espiritual con la naturaleza.",
    dificultad: "Fácil",
    precioEntrada: "S/ 10.00",
    coordenadas: "-9.144612174624013,-75.99545179189995"
  },
  {
    id: 5,
    ciudad: "Tingo María",
    nombre: "Balneario de las Pavas",
    categoria: "Recreación",
    imagen: "/images/turismo/pavas.webp",
    descripcion: "Tradicional punto de reunión local para disfrutar de las frescas aguas del río.",
    dificultad: "Fácil",
    precioEntrada: "Gratis",
    coordenadas: "-9.374169747666473,-75.96131434126399"
  },

  // --- HUÁNUCO ---
  {
    id: 6,
    ciudad: "Huánuco",
    nombre: "Kotosh (Manos Cruzadas)",
    categoria: "Arqueológico",
    imagen: "/images/turismo/kotosh.webp",
    descripcion: "Uno de los templos más antiguos de América, famoso por su escultura de las Manos Cruzadas.",
    dificultad: "Fácil",
    coordenadas: "-9.930438,-76.279822"
  },
  {
    id: 7,
    ciudad: "Huánuco",
    nombre: "Puente Calicanto",
    categoria: "Histórico",
    imagen: "/images/turismo/puente_calicanto.webp",
    descripcion: "Majestuosa obra del siglo XIX construida con cal y canto sobre el río Huallaga.",
    dificultad: "Fácil",
    coordenadas: "-9.932468,-76.236616"
  },
  {
    id: 8,
    ciudad: "Huánuco",
    nombre: "Plaza de Armas",
    categoria: "Cultural",
    imagen: "/images/turismo/plaza_armas_huanuco.webp",
    descripcion: "El corazón de la ciudad, con su pileta de piedra granito y la moderna Catedral.",
    dificultad: "Fácil",
    coordenadas: "-9.930607,-76.240417"
  },
  {
    id: 9,
    ciudad: "Huánuco",
    nombre: "Pilco Mozo",
    categoria: "Mirador Natural",
    imagen: "/images/turismo/pillco_mozo.webp",
    descripcion: "Formación pétrea que asemeja a un hombre dormido, guardián eterno de la ciudad.",
    dificultad: "Moderada",
    coordenadas: "-9.948256,-76.216390"
  },
  {
    id: 10,
    ciudad: "Huánuco",
    nombre: "Tomayquichua",
    categoria: "Tradicional",
    imagen: "/images/turismo/tomayquichua.webp",
    descripcion: "Pintoresco pueblo cuna de 'La Perricholi', famoso por sus paisajes y chicherías.",
    dificultad: "Fácil",
    coordenadas: "-10.057766,-76.195655"
  }
];