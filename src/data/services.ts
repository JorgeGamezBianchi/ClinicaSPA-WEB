export interface Service {
  id: string;
  name: string;
  tagline: string;
  category: "faciales" | "aparatologia" | "corporales" | "medicina-estetica";
  categoryLabel: string;
  price: string;
  duration: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
  badge?: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "scarlet-s",
    name: "Scarlet S (Microneedling + Radiofrecuencia)",
    tagline: "Efecto tensor inmediato y regeneración de colágeno sin cirugía",
    category: "aparatologia",
    categoryLabel: "Aparatología Avanzada",
    price: "Desde $2,400 MXN",
    duration: "60 - 75 min",
    description: "Tecnología de punta que combina microagujas de oro con radiofrecuencia fraccionada bipolar. Estimula la producción de colágeno y elastina a nivel profundo para tensar la piel, reducir flacidez, cerrar poros dilatados y atenuar cicatrices de acné.",
    benefits: [
      "Efecto lifting facial no invasivo",
      "Reducción de flacidez en rostro, cuello y escote",
      "Mejora visible en cicatrices de acné y textura",
      "Mínimo tiempo de recuperación"
    ],
    recommendedFor: "Piel con signos de envejecimiento, flacidez y cicatrices de acné.",
    badge: "Tratamiento Estrella",
    image: "https://images.unsplash.com/photo-1512290900672-1f408933b49e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hidrofacial",
    name: "Hidrofacial Clínico Profundo",
    tagline: "Limpieza, extracción profunda e hidratación antioxidante",
    category: "faciales",
    categoryLabel: "Faciales Médicos",
    price: "$950 MXN",
    duration: "60 min",
    description: "Tratamiento de hidrodermoabrasión indoloro con sueros activos a base de ácido salicílico y glicólico. Limpia impurezas de poros, exfolia células muertas e infunde nutrientes y péptidos hidratantes para un cutis luminoso al instante.",
    benefits: [
      "Extracción profunda sin dolor ni marcas",
      "Piel hidratada, suave y con brillo natural",
      "Regulación de exceso de grasa y puntos negros",
      "Apto para pieles sensibles, secas o grasas"
    ],
    recommendedFor: "Personas que buscan renovar su piel antes de un evento o como rutina mensual.",
    badge: "Más Solicitado",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "viora-v10",
    name: "V10 de Viora (Modelado y Reafirmación)",
    tagline: "Radiofrecuencia multifocal para contorno corporal y celulitis",
    category: "aparatologia",
    categoryLabel: "Aparatología Avanzada",
    price: "Desde $1,800 MXN",
    duration: "45 - 60 min",
    description: "Sistema innovador no quirúrgico que combina radiofrecuencia con vacío para activar la lipólisis celular, mejorar la circulación y compactar los tejidos dérmicos. Ideal para reducir volumen y tensar áreas con flacidez.",
    benefits: [
      "Atenúa celulitis y piel de naranja",
      "Reafirma abdomen, muslos, glúteos y brazos",
      "Estimula drenaje linfático natural",
      "Tratamiento indoloro y relajante"
    ],
    recommendedFor: "Flacidez corporal, celulitis y moldeado de silueta sin cirugía.",
    badge: "Tecnología Médica",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "coolifting",
    name: "Coolifting Gun Facial",
    tagline: "La pistola de belleza: lifting express con flujo de CO2",
    category: "faciales",
    categoryLabel: "Faciales Médicos",
    price: "$1,450 MXN",
    duration: "45 min",
    description: "Revolucionario tratamiento que proyecta sobre los tejidos faciales un potente flujo de CO2 a muy baja temperatura y alta presión, combinado con una elevada concentración de activos nebulizados (ácido hialurónico y extractos botánicos).",
    benefits: [
      "Efecto tensor inmediato en solo 5 minutos",
      "Hidratación intensiva e iluminación dérmica",
      "Estimulación de la microcirculación",
      "Ideal antes de eventos especiales o bodas"
    ],
    recommendedFor: "Quienes desean un resultado flash deslumbrante sin inyecciones.",
    badge: "Efecto Flash",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "depilacion-laser",
    name: "Depilación Láser Diodo",
    tagline: "Eliminación progresiva y definitiva del vello no deseado",
    category: "aparatologia",
    categoryLabel: "Aparatología Avanzada",
    price: "Desde $450 MXN por zona",
    duration: "20 - 45 min",
    description: "Tecnología láser de diodo con cabezal de enfriamiento continuo que protege la epidermis y destruye selectivamente el folículo piloso. Es seguro para diferentes fototipos de piel y muestra resultados drásticos desde la primera sesión.",
    benefits: [
      "Elimina foliculitis (vellos encarnados)",
      "Piel suave, sin irritaciones ni manchas por rastrillo",
      "Sesiones rápidas, cómodas y prácticamente indoloras",
      "Planes y paquetes por zonas o cuerpo completo"
    ],
    recommendedFor: "Cualquier persona que busque despedirse del vello corporal o facial.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "microneedling-stem-cells",
    name: "Microneedling con Células Madre y Factores de Crecimiento",
    tagline: "Regeneración celular intensiva facial o capilar",
    category: "faciales",
    categoryLabel: "Faciales Médicos",
    price: "$1,650 MXN",
    duration: "60 min",
    description: "Mediante microcanales controlados en la piel, se aplican factores de crecimiento dérmicos y activos biotecnológicos para inducir la regeneración de colágeno, atenuar líneas finas, emparejar el tono y revitalizar zonas capilares.",
    benefits: [
      "Poderosa bioestimulación celular natural",
      "Atenúa líneas de expresión y manchas solares",
      "Mejora la densidad cutánea y capilar",
      "Recuperación acelerada"
    ],
    recommendedFor: "Pieles desvitalizadas, manchas difusas, poros abiertos o pérdida de densidad.",
    image: "https://images.unsplash.com/photo-1512290903048-791eaa2a430f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cavitacion-ultrasonido",
    name: "Cavitación y Ultrasonido Terapéutico / Post-Quirúrgico",
    tagline: "Disolución de grasa localizada y apoyo post-operatorio",
    category: "corporales",
    categoryLabel: "Corporales & Masajes",
    price: "$850 MXN",
    duration: "50 min",
    description: "Ondas ultrasónicas de baja frecuencia que licúan el tejido adiposo para que el organismo lo deseche naturalmente. También se utiliza en modo terapéutico para reducir fibrosis y acelerar la recuperación tras cirugías como liposucciones.",
    benefits: [
      "Reducción de medidas en zonas rebeldes",
      "Alivio y prevención de fibrosis post-quirúrgica",
      "Desinflamación de tejidos y mejor oxigenación",
      "Sin dolor ni tiempo de inactividad"
    ],
    recommendedFor: "Personas con grasa rebelde o en etapa de recuperación post-cirugía plástica.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "masajes-reductivos-drenaje",
    name: "Masajes Reductivos y Drenaje Linfático",
    tagline: "Moldeado manual de cintura, caderas y desintoxicación celular",
    category: "corporales",
    categoryLabel: "Corporales & Masajes",
    price: "$650 MXN",
    duration: "50 min",
    description: "Técnicas manuales precisas con maniobras de activación circulatoria y evacuación linfática. Ayuda a depurar líquidos retenidos, estimular el sistema inmune, tonificar los contornos y disminuir la hinchazón.",
    benefits: [
      "Alivio inmediato de piernas cansadas y retención",
      "Favorece la eliminación de toxinas",
      "Mejora la apariencia de la celulitis edematosa",
      "Tonifica y perfila la silueta"
    ],
    recommendedFor: "Retención de líquidos, pesadez corporal o planes de reducción de tallas.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "masaje-relajante-spa",
    name: "Masaje Relajante Holístico con Aromaterapia",
    tagline: "Desconexión total, alivio de estrés y descanso mental",
    category: "corporales",
    categoryLabel: "Corporales & Masajes",
    price: "$750 MXN",
    duration: "60 - 90 min",
    description: "Experiencia sensorial completa que integra aceites esenciales puros de lavanda y eucalipto, toallas calientes y maniobras suaves y envolventes que disuelven la tensión muscular acumulada por el ritmo diario.",
    benefits: [
      "Disminución profunda del estrés y la ansiedad",
      "Alivio de sobrecarga muscular en espalda y cuello",
      "Mejora la calidad del sueño nocturno",
      "Sensación de renovación y paz interior"
    ],
    recommendedFor: "Personas sometidas a altos niveles de estrés o fatiga crónica.",
    badge: "Bienestar Puro",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "toxina-botulinica",
    name: "Toxina Botulínica (Armonización Médica)",
    tagline: "Relajación muscular selectiva para suavizar líneas de expresión",
    category: "medicina-estetica",
    categoryLabel: "Medicina Estética",
    price: "Valoración previa requerida",
    duration: "30 - 45 min",
    description: "Aplicación médica precisa realizada por profesionales certificados para suavizar arrugas dinámicas en frente, entrecejo y patas de gallo, manteniendo la naturalidad de tus expresiones y previniendo el envejecimiento prematuro.",
    benefits: [
      "Resultados naturales sin perder expresividad",
      "Prevención efectiva de arrugas profundas",
      "Procedimiento seguro de rápida aplicación",
      "Duración promedio de 4 a 6 meses"
    ],
    recommendedFor: "Prevención y corrección de arrugas de expresión en el tercio superior facial.",
    badge: "Médico Certificado",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rellenos-acido-hialuronico",
    name: "Rellenos con Ácido Hialurónico",
    tagline: "Restauración de volúmenes, perfilado labial e hidratación dérmica",
    category: "medicina-estetica",
    categoryLabel: "Medicina Estética",
    price: "Valoración previa requerida",
    duration: "45 min",
    description: "Gel biocompatible y reabsorbible de la más alta pureza médica que hidrata, redefine el contorno mandibular, proyecta mentón o pómulos y devuelve volumen y definición a los labios de manera armónica.",
    benefits: [
      "Volumen sutil y definición estética equilibrada",
      "Hidratación profunda de capas internas",
      "Resultados visibles de manera inmediata",
      "Seguridad comprobada con marcas líderes globales"
    ],
    recommendedFor: "Pérdida de volumen facial, líneas peribucales y perfilado de labios.",
    badge: "Médico Certificado",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "peeling-quimico",
    name: "Peeling Químico Dermatológico",
    tagline: "Exfoliación médica controlada para manchas, poros y acné",
    category: "faciales",
    categoryLabel: "Faciales Médicos",
    price: "$1,100 MXN",
    duration: "45 min",
    description: "Soluciones dermatológicas formuladas a la medida (ácido mandélico, láctico, glicólico o salicílico) que eliminan capas celulares superficiales dañadas para revelar una piel tersa, uniforme y libre de imperfecciones.",
    benefits: [
      "Atenúa manchas provocadas por el sol y melasma",
      "Controla brotes de acné y disminuye secuelas",
      "Unifica el tono y la luminosidad de la piel",
      "Acelera la regeneración celular"
    ],
    recommendedFor: "Manchas, secuelas de acné, poros obstruidos y textura irregular.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
  }
];
