export interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mariana R.",
    location: "Celaya, GTO",
    treatment: "Scarlet S & Hidrofacial",
    rating: 5,
    comment: "Increíble la diferencia en mi piel desde la primera sesión de Scarlet S. Mis poros están mucho más cerrados y las marcas de acné casi desaparecieron. La atención y la higiene de la clínica son impecables.",
    date: "Hace 2 semanas"
  },
  {
    name: "Gabriela S.",
    location: "Querétaro",
    treatment: "Paquete Silueta Esculpida",
    rating: 5,
    comment: "Tomé el paquete de cavitación y radiofrecuencia Viora. Reduje 5 centímetros en abdomen y la piel quedó muy firme. Las terapeutas explican cada paso con mucha amabilidad y profesionalismo.",
    date: "Hace 1 mes"
  },
  {
    name: "Carlos M.",
    location: "Celaya, GTO",
    treatment: "Depilación Láser Diodo",
    rating: 5,
    comment: "Excelente servicio para hombres. Me realicé depilación láser en barba y espalda. El cabezal frío hace que prácticamente no duela nada y los resultados se notaron rapidísimo.",
    date: "Hace 3 semanas"
  },
  {
    name: "Lorena V.",
    location: "San Miguel de Allende",
    treatment: "Coolifting & Masaje Holístico",
    rating: 5,
    comment: "Me realicé el Coolifting el día previo a la boda de mi hermana y mi piel lucía radiante, descansada y luminosa. Y el masaje relajante fue de los mejores que he tomado en mi vida.",
    date: "Hace 1 mes"
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "¿Cómo puedo agendar una cita o valoración médica?",
    answer: "Puedes agendar fácilmente dando clic en nuestro botón de WhatsApp o llamando directamente a nuestros teléfonos. Te responderemos en minutos para ofrecerte los horarios disponibles y resolver cualquier duda."
  },
  {
    question: "¿Los tratamientos de aparatología como Scarlet S o Viora requieren tiempo de recuperación?",
    answer: "No requieren tiempo de inactividad médica. Con Scarlet S puede presentarse un ligero enrojecimiento durante las primeras 3 a 5 horas que cede rápidamente con crema calmante y protector solar. Podrás retomar tus actividades cotidianas de inmediato."
  },
  {
    question: "¿Cuántas sesiones de depilación láser son necesarias?",
    answer: "La mayoría de nuestros pacientes obtienen resultados definitivos entre 6 y 8 sesiones realizadas mensualmente. El vello se debilita y disminuye en cantidad y grosor desde la primera sesión."
  },
  {
    question: "¿Tienen paquetes de sesiones o facilidades de pago?",
    answer: "Sí, contamos con paquetes promocionales en todos nuestros tratamientos faciales, corporales y de aparatología que representan un ahorro de hasta el 25%. Aceptamos pagos con tarjeta de crédito, débito, transferencia y efectivo."
  },
  {
    question: "¿Qué medidas de higiene y bioseguridad manejan en las cabinas?",
    answer: "Cumplimos estrictos estándares clínicos: material descartable estéril, sanitización de aparatología con antisépticos de grado médico entre paciente y paciente, y cabinas privadas climatizadas."
  }
];
