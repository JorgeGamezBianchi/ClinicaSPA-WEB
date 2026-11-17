// =========================================================================
// CONFIGURACIÓN GENERAL DEL SITIO (PLANTILLA GENÉRICA)
// Edita estos valores para personalizar la clínica de spa para cualquier cliente
// =========================================================================

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    googleMapsEmbedUrl: string;
    googleMapsLink: string;
  };
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    tiktok?: string;
  };
  stats: Array<{
    number: string;
    label: string;
    sublabel?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "AURA | Spa Clínico & Estética",
  shortName: "AURA SPA",
  tagline: "Medicina Estética, Alta Tecnología y Bienestar Integral",
  description: "Clínica especializada en tratamientos dermatológicos, faciales clínicos, aparatología de última generación, masajes terapéuticos y medicina estética en un ambiente de confort y exclusividad.",
  phone: "+525610853383",
  phoneDisplay: "(56) 1085-3383",
  whatsapp: "525610853383", // Número de WhatsApp internacional sin símbolos
  whatsappDisplay: "+52 56 1085 3383",
  whatsappDefaultMessage: "¡Hola! Me gustaría solicitar información sobre sus tratamientos y agendar una cita de valoración.",
  email: "contacto@auraspaclinico.com",
  address: {
    street: "Av. Francisco Juárez #907, Col. Los Ángeles",
    city: "Celaya",
    state: "Guanajuato",
    country: "México",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.275551945377!2d-100.8252!3d20.5255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMxJzMxLjgiTiAxMDDCsDQ5JzMwLjciVw!5e0!3m2!1ses!2smx!4v1680000000000!5m2!1ses!2smx",
    googleMapsLink: "https://maps.google.com/?q=Av.+Francisco+Juarez+907+Col+Los+Angeles"
  },
  schedule: {
    weekdays: "Lunes a Viernes: 9:00 AM – 7:00 PM",
    saturday: "Sábados: 9:00 AM – 3:00 PM",
    sunday: "Domingos: Previa Cita / Cerrado"
  },
  social: {
    facebook: "https://www.facebook.com/crisalisspa/?locale=es_LA",
    instagram: "https://instagram.com/crisalisspa",
    whatsapp: "https://wa.me/525610853383",
    tiktok: "https://tiktok.com"
  },
  stats: [
    { number: "+12", label: "Años de Experiencia", sublabel: "Cuidado profesional" },
    { number: "+15K", label: "Sesiones Realizadas", sublabel: "Pacientes atendidos" },
    { number: "99%", label: "Satisfacción", sublabel: "Opiniones positivas" },
    { number: "100%", label: "Equipo Certificado", sublabel: "Médicos y terapeutas" }
  ]
};
