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
    nombre: "Cueva de las Lechuzas",
    categoria: "Maravilla Natural",
    imagen: "/images/turismo/cueva.webp",
    descripcion: "Impresionante sistema de cuevas hogar de guácharos y formaciones rocosas únicas.",
    dificultad: "Fácil",
    precioEntrada: "S/ 15.00",
    coordenadas: "-9.329097247585798,-76.02683018874892"
  },
  {
    id: 2,
    nombre: "Mirador de la Cruz",
    categoria: "Vista Panorámica",
    imagen: "/images/turismo/mirador.webp",
    descripcion: "El mejor punto para observar la ciudad de Tingo María y la silueta de la Bella Durmiente.",
    dificultad: "Fácil",
    precioEntrada: "Gratis",
    coordenadas: "-9.289642811481917,-75.99739071943851"
  },
  {
    id: 3,
    nombre: "Catarata de Santa Carmen",
    categoria: "Aventura",
    imagen: "/images/turismo/catarata.webp",
    descripcion: "Hermosas caídas de agua cristalina perfectas para un refrescante baño en la selva.",
    dificultad: "Moderada",
    precioEntrada: "S/ 5.00",
    coordenadas: "-9.348384583743066,-75.96885660875995"
  },
  {
    id: 4,
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
    nombre: "Balneario de las Pavas",
    categoria: "Recreación",
    imagen: "/images/turismo/pavas.webp",
    descripcion: "Tradicional punto de reunión local para disfrutar de las frescas aguas del río.",
    dificultad: "Fácil",
    precioEntrada: "Gratis",
    coordenadas: "-9.374169747666473,-75.96131434126399"
  }
];