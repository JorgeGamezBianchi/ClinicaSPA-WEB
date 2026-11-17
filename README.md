# 🌸 Plantilla Web Estática para Clínica de Spa & Medicina Estética (Astro)

Sitio web estático moderno, ultra rápido y responsivo desarrollado con **[Astro](https://astro.build)**. Diseñado específicamente para clínicas dermatológicas, spas médicos y centros de bienestar estético.

Inspirado en la estructura de servicios, tecnología y productos de **Crisalis Spa**, con una arquitectura 100% modular y configurable para ser utilizado como plantilla genérica para cualquier cliente o proyecto futuro.

---

## ✨ Características Principales

- **Arquitectura Modular con Astro:** Carga ultrarrápida, cero JavaScript innecesario en el cliente y SEO optimizado desde el primer render.
- **Configuración Centralizada (`src/data/siteConfig.ts`):** Cambia el nombre de la clínica, logotipo, números de teléfono, enlaces de WhatsApp, horarios y ubicación en un solo archivo.
- **Catálogo Interactivo de Tratamientos (`src/data/services.ts`):** Filtro reactivo por categorías (*Faciales Médicos, Aparatología Avanzada, Corporales & Masajes, Medicina Estética*), con precios, duraciones, beneficios y botón directo para agendar en WhatsApp con mensaje precargado.
- **Vitrina de Aparatología y Seguridad Médica (`src/components/TechShowcase.astro`):** Destaca tecnologías de grado médico como *Scarlet S (Microneedling + RF), V10 de Viora, Láser Diodo y Coolifting Gun*.
- **Paquetes y Membresías Especiales (`src/data/packages.ts`):** Paquetes integrales con precios de oferta, desglose de sesiones y ahorros visibles.
- **Farmacia Dermatológica / Cosmética (`src/data/products.ts`):** Catálogo de productos cosmecéuticos y dermatológicos con ingredientes activos, modo de uso y pedido directo por WhatsApp.
- **Sección Nosotros & Filosofía (`src/components/About.astro`):** Cabinas privadas, aval de especialistas certificados y normas sanitarias.
- **Testimonios y Reseñas (`src/data/testimonials.ts`):** Opiniones de pacientes con estrellas y tratamiento realizado.
- **Preguntas Frecuentes Interactiva (`src/components/FAQ.astro`):** Acordeón dinámico accesible.
- **Formulario de Citas & Google Maps (`src/components/Contact.astro`):** Formulario que construye el mensaje personalizado y abre WhatsApp al instante.
- **Botón Flotante Permanente de WhatsApp:** Con animación de pulso y llamada a la acción en todas las vistas.
- **Diseño Estético de Lujo:** Paleta de colores terracota cálido, dorado suave y eucalipto, con tipografías *Cormorant Garamond* y *Plus Jakarta Sans*.

---

## 📁 Estructura del Proyecto

```text
CrissalisSPA-WEB/
├── public/                     # Archivos estáticos e imágenes
├── src/
│   ├── components/             # Componentes Astro reutilizables
│   │   ├── About.astro         # Filosofía y cabinas clínicas
│   │   ├── Contact.astro       # Formulario, horarios y mapa
│   │   ├── FAQ.astro           # Acordeón de preguntas frecuentes
│   │   ├── Footer.astro        # Pie de página y enlaces
│   │   ├── Hero.astro          # Portada principal con estadísticas
│   │   ├── Navbar.astro        # Barra de navegación y menú móvil
│   │   ├── Packages.astro      # Paquetes y promociones
│   │   ├── Products.astro      # Farmacia dermatológica
│   │   ├── Services.astro      # Catálogo de servicios con filtros
│   │   ├── TechShowcase.astro  # Aparatología médica de vanguardia
│   │   ├── Testimonials.astro  # Reseñas de pacientes
│   │   └── WhatsAppButton.astro# Botón flotante de WhatsApp
│   ├── data/                   # Archivos de datos personalizables
│   │   ├── siteConfig.ts       # Datos generales (nombre, tel, mapa)
│   │   ├── services.ts         # Lista de servicios y precios
│   │   ├── products.ts         # Catálogo de farmacia
│   │   ├── packages.ts         # Paquetes promocionales
│   │   └── testimonials.ts     # Reseñas y preguntas frecuentes
│   ├── layouts/
│   │   └── Layout.astro        # Plantilla base HTML, fuentes y SEO
│   ├── pages/
│   │   └── index.astro         # Página de inicio
│   └── styles/
│       └── global.css          # Variables CSS y diseño de spa
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🛠️ Cómo Personalizar la Plantilla

### 1. Datos Generales y Marca
Edita el archivo [src/data/siteConfig.ts](file:///C:/1.BoolDev/3.Projects/CrissalisSPA-WEB/src/data/siteConfig.ts):
- `name`: Nombre completo de la clínica.
- `shortName`: Nombre abreviado para el logotipo.
- `phone` y `phoneDisplay`: Teléfono de atención.
- `whatsapp`: Número con lada internacional (ej. `524615141157`).
- `address`: Dirección física y enlace de Google Maps.
- `schedule`: Horarios de apertura.

### 2. Modificar Servicios y Precios
Edita [src/data/services.ts](file:///C:/1.BoolDev/3.Projects/CrissalisSPA-WEB/src/data/services.ts). Puedes agregar, editar o quitar tratamientos con sus beneficios, duración y fotos.

### 3. Modificar Productos de Farmacia
Edita [src/data/products.ts](file:///C:/1.BoolDev/3.Projects/CrissalisSPA-WEB/src/data/products.ts).

---

## 🚀 Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción (sitio estático en /dist)
npm run build

# Previsualizar la compilación de producción
npm run preview
```
