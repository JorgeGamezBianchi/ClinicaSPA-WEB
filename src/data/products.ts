export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "antioxidantes" | "fotoproteccion" | "antiedad" | "limpieza" | "corporal";
  categoryLabel: string;
  price: string;
  size: string;
  description: string;
  keyIngredients: string[];
  howToUse: string;
  badge?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "serum-vit-c",
    name: "C + E Ferulic Intensive Serum",
    brand: "Dermaceuticals Pro",
    category: "antioxidantes",
    categoryLabel: "Antioxidantes & Luminosidad",
    price: "$1,890 MXN",
    size: "30 ml",
    description: "Tratamiento antioxidante avanzado de alta potencia con vitamina C pura al 15%, vitamina E al 1% y ácido ferúlico. Neutraliza los radicales libres causados por la polución y rayos UVA/UVB, aportando luminosidad duradera.",
    keyIngredients: ["15% Ácido L-Ascórbico", "1% Alfa-Tocoferol (Vit E)", "0.5% Ácido Ferúlico"],
    howToUse: "Aplicar 4 a 5 gotas por la mañana sobre la piel limpia y seca de rostro, cuello y escote antes del protector solar.",
    badge: "Top Ventas",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "protector-solar-mineral",
    name: "Invisible Mineral Shield FPS 50+",
    brand: "Clinical SunCare",
    category: "fotoproteccion",
    categoryLabel: "Fotoprotección Médica",
    price: "$820 MXN",
    size: "50 ml",
    description: "Bloqueador solar mineral 100% físico con óxido de zinc micronizado y dióxido de titanio. Acabado toque seco invisible sin rastro blanco ni sensación grasosa, ideal para pieles sensibles o recién tratadas con láser.",
    keyIngredients: ["Óxido de Zinc Micronizado", "Niacinamida al 2%", "Extracto de Té Verde"],
    howToUse: "Aplicar generosamente 15 minutos antes de la exposición solar y reaplicar cada 3 a 4 horas.",
    badge: "Indispensable",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "crema-reafirmante-peptidos",
    name: "Multi-Peptide Matrix Restoring Cream",
    brand: "Dermaceuticals Pro",
    category: "antiedad",
    categoryLabel: "Tratamiento Antiedad",
    price: "$1,640 MXN",
    size: "50 ml",
    description: "Crema emoliente rica en un complejo de 5 péptidos biomiméticos, ceramidas y ácido hialurónico de múltiples pesos moleculares que refuerzan la barrera dérmica y mejoran la firmeza cutánea.",
    keyIngredients: ["Complejo de 5 Péptidos", "Ceramidas NP/AP/EOP", "Ácido Hialurónico Multimolecular"],
    howToUse: "Aplicar por la noche sobre rostro y cuello con movimientos ascendentes.",
    badge: "Recomendado",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gel-limpiador-purificante",
    name: "Clarifying Gentle Cleansing Foam",
    brand: "Pure Derm",
    category: "limpieza",
    categoryLabel: "Limpieza & Preparación",
    price: "$680 MXN",
    size: "150 ml",
    description: "Espuma limpiadora dermatológica sin sulfatos con suave concentración de ácido salicílico vegetal y extracto de caléndula. Remueve impurezas y maquillaje sin alterar el pH natural de la piel.",
    keyIngredients: ["Ácido Salicílico 0.5%", "Caléndula y Manzanilla", "Pantenol (Pro-Vitamina B5)"],
    howToUse: "Masajear sobre el rostro húmedo mañana y noche. Enjuagar con abundante agua templada.",
    image: "https://images.unsplash.com/photo-1556228722-d0b5de70b77b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "contorno-ojos-cafeina",
    name: "Advanced Eye Repair & Brightening Elixir",
    brand: "Dermaceuticals Pro",
    category: "antiedad",
    categoryLabel: "Tratamiento Antiedad",
    price: "$1,150 MXN",
    size: "15 ml",
    description: "Fórmula de alta concentración con cafeína pura, péptidos descongestionantes y vitamina K óxido para drenar bolsas, aclarar ojeras vasculares y pigmentarias y alisar las líneas finas de la mirada.",
    keyIngredients: ["Cafeína Activa al 5%", "Vitamina K Óxido", "Péptido Eyeseryl"],
    howToUse: "Depositar una gota pequeña y masajear con ligeros toques alrededor del contorno ocular.",
    image: "https://images.unsplash.com/photo-1608248597359-0097fef7b538?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gel-reafirmante-corporal",
    name: "Silhouette Firming & Anti-Cellulite Emulsion",
    brand: "Spa Clinical Body",
    category: "corporal",
    categoryLabel: "Cuidado Corporal",
    price: "$980 MXN",
    size: "200 ml",
    description: "Emulsión corporal formulada para complementar tratamientos de cavitación y masajes reductivos. Contiene carnitina, centella asiática y extracto de algas marinas que tonifican y alisan la textura cutánea.",
    keyIngredients: ["L-Carnitina Activa", "Centella Asiática Titulada", "Algas Fucus Vesiculosus"],
    howToUse: "Aplicar dos veces al día en abdomen, muslos o brazos mediante masaje circular vigoroso.",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"
  }
];
