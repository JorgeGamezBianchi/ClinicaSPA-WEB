export interface Package {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  popular?: boolean;
  includes: string[];
  duration: string;
  description: string;
  badge?: string;
}

export const packages: Package[] = [
  {
    id: "pack-glow-express",
    name: "Glow Radiance Express",
    tagline: "Luminosidad y frescura inmediata para tu rostro",
    price: "$1,350 MXN",
    originalPrice: "$1,800 MXN",
    savings: "Ahorra $450 MXN",
    duration: "75 min",
    description: "La combinación perfecta para renovar tu cutis en una sola cita. Desintoxica profundamente los poros y aporta un shock de hidratación antioxidante con luz LED calmante.",
    includes: [
      "1 Sesión de Hidrofacial Clínico Profundo",
      "Aplicación de ampolleta de Vitamina C pura",
      "Terapia con Máscara de Luz LED Rejuvenecedora",
      "Masaje descontracturante de hombros y cuello"
    ],
    badge: "Ideal Primerizos"
  },
  {
    id: "pack-lifting-sin-cirugia",
    name: "Plan Tensor Scarlet S",
    tagline: "El estándar de oro en firmeza y regeneración facial",
    price: "$5,900 MXN",
    originalPrice: "$7,200 MXN",
    savings: "Ahorra $1,300 MXN",
    popular: true,
    duration: "3 Sesiones (1 cada 30 días)",
    description: "Tratamiento intensivo con radiofrecuencia fraccionada y microagujas de oro para tensar pómulos, mandíbula y cuello, devolviendo firmeza sin bisturí.",
    includes: [
      "3 Sesiones completas de Scarlet S (Rostro completo + Papada)",
      "Aplicación de sueros bioestimulantes en cada sesión",
      "1 Mascarilla hidroplástica regenerante post-tratamiento",
      "Seguimiento y valoración fotográfica digital"
    ],
    badge: "Más Vendido"
  },
  {
    id: "pack-silueta-esculpida",
    name: "Silueta Esculpida & Anticelulitis",
    tagline: "Reducción de medidas, drenaje y tonificación dérmica",
    price: "$4,200 MXN",
    originalPrice: "$5,400 MXN",
    savings: "Ahorra $1,200 MXN",
    duration: "6 Sesiones combinadas",
    description: "Protocolo integral que ataca la adiposidad localizada, compacta la piel flácida y desintoxica el sistema linfático.",
    includes: [
      "6 Sesiones de Cavitación ultrasónica en zona a elegir",
      "6 Sesiones de Radiofrecuencia tensora Viora V10",
      "6 Sesiones de Masaje Reductivo o Drenaje Linfático",
      "Plan de pautas de hidratación y cuidado corporal en casa"
    ],
    badge: "Cuerpo Perfecto"
  },
  {
    id: "pack-ritual-spa-duo",
    name: "Ritual Serenidad Spa (Individual o Pareja)",
    tagline: "Desconexión, aromaterapia botánica y relax absoluto",
    price: "$1,600 MXN",
    originalPrice: "$2,100 MXN",
    savings: "Ahorra $500 MXN",
    duration: "90 min",
    description: "Un oasis de calma diseñado para aliviar la sobrecarga física y el estrés mental con productos botánicos de alta gama.",
    includes: [
      "Exfoliación corporal con sales del Himalaya y lavanda",
      "Envoltura hidratante con extractos de cacao y karité",
      "Masaje relajante con piedras volcánicas calientes",
      "Infusión de hierbas relajantes y amenidades en cabina privada"
    ],
    badge: "Bienestar & Relax"
  }
];
