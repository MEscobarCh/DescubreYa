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

export const sitiosTuristicos: SitioTuristico[] = [
  {
    id: 1,
    nombre: "Cueva de las Lechuzas",
    categoria: "Aventura",
    descripcion: "Impresionante gruta caliza en el Parque Nacional Tingo María, hogar de guácharos y formaciones milenarias.",
    dificultad: "Fácil",
    coordenadas: "-9.3245,-75.9876",
    precioEntrada: "S/ 15.00",
    imagen: "/images/turismo/cueva.webp"
  },
  {
    id: 2,
    nombre: "Catarata Velo de la Ninfa",
    categoria: "Aventura",
    descripcion: "Ruta de trekking y escalada por el cauce de la quebrada que lleva a una hermosa caída de agua.",
    dificultad: "Difícil",
    coordenadas: "-9.3521,-75.9142",
    precioEntrada: "Gratis",
    imagen: "/images/turismo/catarata.webp"
  },
  {
    id: 3,
    nombre: "Laguna de los Milagros",
    categoria: "Relax",
    descripcion: "Espejo de agua rodeado de selva, ideal para paseos en bote, pesca deportiva y picnic.",
    dificultad: "Fácil",
    coordenadas: "-9.2435,-76.0123",
    precioEntrada: "S/ 5.00",
    imagen: "/images/turismo/laguna.webp"
  },
  {
    id: 4,
    nombre: "Cueva de las Pavas",
    categoria: "Relax",
    descripcion: "Balneario natural de aguas frescas y cristalinas, famoso por sus leyendas y entorno acogedor.",
    dificultad: "Fácil",
    coordenadas: "-9.3621,-75.9842",
    precioEntrada: "S/ 3.00",
    imagen: "/images/turismo/pavas.webp"
  },
  {
    id: 5,
    nombre: "Mirador del Cerro",
    categoria: "Cultura",
    descripcion: "Punto estratégico para observar toda la ciudad de Tingo María y la silueta de la Bella Durmiente.",
    dificultad: "Moderada",
    coordenadas: "-9.2980,-76.0012",
    precioEntrada: "Gratis",
    imagen: "/images/turismo/mirador.webp"
  }
];