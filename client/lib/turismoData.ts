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

export const sitiosTuristicos: SitioTuristico[] = [
  {
    id: 1,
    nombre: "Cueva de las Lechuzas",
    categoria: "Aventura",
    descripcion: "Enorme gruta caliza en el Parque Nacional Tingo María, hogar de guácharos y formaciones rocosas únicas.",
    dificultad: "Fácil",
    coordenadas: "-9.3245,-75.9876",
    precioEntrada: "S/ 15.00",
    imagen: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" // Cambia por tus fotos locales luego
  },
  {
    id: 2,
    nombre: "Catarata Velo de la Ninfa",
    categoria: "Aventura",
    descripcion: "Un circuito de trekking y escalada que termina en una impresionante caída de agua.",
    dificultad: "Difícil",
    coordenadas: "-9.3521,-75.9142",
    precioEntrada: "Gratis",
    imagen: "https://images.unsplash.com/photo-1433086566205-c08769c1109b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    nombre: "Laguna de los Milagros",
    categoria: "Relax",
    descripcion: "Aguas tranquilas ideales para paseos en bote y desconexión total rodeado de selva.",
    dificultad: "Fácil",
    coordenadas: "-9.2435,-76.0123",
    precioEntrada: "S/ 5.00",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
  }
];