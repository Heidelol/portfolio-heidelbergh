export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'published' | 'in_development' | 'proposal_demo';
  statusLabel: string;
  isPublished: boolean;
  description: string;
  personalContribution: string;
  verifiedFeatures: string[];
  technologies: {
    name: string;
    badge: string;
  }[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    isRealCapture: boolean;
  };
  repository?: {
    available: boolean;
    url?: string;
    branch?: string;
    note?: string;
  };
  liveDemo?: {
    available: boolean;
    url?: string;
    note?: string;
  };
  pendingItems?: string[];
}

export interface TechnicalSkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    context: string;
    highlight?: boolean;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "con-fe",
    title: "Con Fe",
    subtitle: "Plataforma web de acompañamiento espiritual y oración contemplativa",
    category: "Aplicación Web Full-Stack",
    status: "in_development",
    statusLabel: "En desarrollo activo (Integración Supabase SSR)",
    isPublished: false,
    description:
      "Aplicación web orientada a la serenidad y la contemplación guiada. Provee experiencias de oración estructuradas por momentos, catálogo temático de oraciones con audio sincronizado, módulo interactivo 'Camino' para gestión personal de intenciones con filtros de estado (orando, agradecida, pausada) y flujos autenticados.",
    personalContribution:
      "Arquitectura front-end en Next.js App Router (React 19, TypeScript), diseño de componentes accesibles adaptados a móvil y escritorio, persistencia y estado mediante contextos React e integración de autenticación segura y persistente con Supabase (@supabase/ssr).",
    verifiedFeatures: [
      "Flujo guiado de oración por etapas con controles multimedia e interfaces libres de fricción.",
      "Módulo de intenciones ('Camino') con categorización, cambio de estados y confirmaciones visuales.",
      "Protección de rutas autenticadas y sincronización de sesiones vía Supabase SSR.",
      "Diseño adaptable 'mobile-first' con paleta cromática sobria e introspectiva (#F7F4EE, #1F3443)."
    ],
    technologies: [
      { name: "React 19", badge: "React 19" },
      { name: "Next.js 16 (App Router)", badge: "Next.js" },
      { name: "TypeScript 5", badge: "TypeScript" },
      { name: "@supabase/ssr & supabase-js", badge: "Supabase" },
      { name: "Tailwind CSS 4", badge: "Tailwind CSS" }
    ],
    image: {
      src: "/images/projects/con-fe-preview.png",
      alt: "Captura real de la interfaz de Con Fe mostrando la pantalla de oración del día y momentos espirituales",
      width: 1170,
      height: 1800,
      isRealCapture: true
    },
    repository: {
      available: false,
      note: "Repositorio local verificado en entorno de trabajo; pendiente de publicación a GitHub remoto."
    },
    liveDemo: {
      available: false,
      note: "Entorno local verificado. Pendiente de despliegue a producción y configuración de variables Supabase."
    },
    pendingItems: [
      "Vincular repositorio a GitHub remoto público u organizacional.",
      "Definir dominio y desplegar en Vercel con variables de entorno de producción.",
      "Completar suite de pruebas end-to-end automatizadas."
    ]
  },
  {
    id: "kansol",
    title: "Kansol",
    subtitle: "Catálogo y showroom digital de materiales arquitectónicos y revestimientos",
    category: "Comercio B2B & Catálogo Digital",
    status: "published",
    statusLabel: "Catálogo publicado / Demostrador en producción",
    isPublished: true,
    description:
      "Plataforma comercial y catálogo visual para una firma de acabados arquitectónicos (lambrín, piedra flexible, paneles PVC tipo mármol, pisos SPC, deck exterior y luminarias). Diseñado para consulta rápida de especificaciones técnicas y cotización directa por WhatsApp.",
    personalContribution:
      "Desarrollo de interfaz de usuario con Next.js y Vinext, carrusel editorial interactivo con imágenes de alta definición, sistema de filtros dinámicos por categoría sin recarga y generación paramétrica de enlaces comerciales directos.",
    verifiedFeatures: [
      "Filtrado instantáneo en memoria de productos y colecciones por categoría técnica.",
      "Generador automático de mensajes y cotizaciones por WhatsApp vinculados a códigos de material (SKU).",
      "Carrusel editorial responsivo con carga diferida de imágenes e hipervínculos a colecciones detalladas.",
      "Optimización para rendimiento y renderizado estático en el edge."
    ],
    technologies: [
      { name: "React 19", badge: "React 19" },
      { name: "Next.js 16", badge: "Next.js" },
      { name: "TypeScript 5", badge: "TypeScript" },
      { name: "Tailwind CSS 4", badge: "Tailwind CSS" },
      { name: "Vinext / Vite", badge: "Vinext" }
    ],
    image: {
      src: "/images/projects/kansol-preview.jpg",
      alt: "Captura del catálogo digital de Kansol destacando revestimientos de interiores y colecciones de acabados",
      width: 1400,
      height: 900,
      isRealCapture: true
    },
    repository: {
      available: true,
      url: "https://github.com/Heidelol/kansol",
      branch: "main",
      note: "Repositorio verificado en GitHub (Heidelol/kansol)."
    },
    liveDemo: {
      available: false,
      note: "Compilación y assets generados (.vercel / dist) comprobados en workspace; URL pública pendiente de confirmación de dominio."
    },
    pendingItems: [
      "Confirmar URL pública del dominio definitivo de producción.",
      "Validar el feed de disponibilidad de inventario con el cliente."
    ]
  },
  {
    id: "boda-diana-raul",
    title: "Invitación de Boda Sofía & Raúl",
    subtitle: "Invitación interactiva con confirmación de asistencia (RSVP) y control de cupos",
    category: "Aplicación Web de Eventos",
    status: "published",
    statusLabel: "Publicado / Código verificado en GitHub",
    isPublished: true,
    description:
      "Sitio web para boda con diseño editorial y experiencia multimedia: carrusel a pantalla completa, reproductor de música ambiental, cuenta regresiva dinámica en tiempo real, visor de galería en lightbox y formulario de confirmación de asistencia con control estricto de cupos y panel administrativo privado.",
    personalContribution:
      "Construcción completa de la interfaz con HTML5 semántico, CSS3 modular y Vanilla JavaScript orientado a eventos; integración del cliente Supabase para autenticación y consulta en panel de gestión privada (`admin.html`) y control de asistencia.",
    verifiedFeatures: [
      "Formulario RSVP con validación de invitados, opción de confirmación y selección de pases asignados.",
      "Panel de administración privado (`admin.html`) con autenticación Supabase JS para consulta de confirmados.",
      "Cuenta regresiva en vivo hasta el evento y visor de fotos con navegación lightbox accesible.",
      "Reproductor de música ambiental con estado persistente e interacción visual de ondas sonoras."
    ],
    technologies: [
      { name: "JavaScript ES6+", badge: "JavaScript" },
      { name: "HTML5 Semántico", badge: "HTML5" },
      { name: "CSS3 Modular", badge: "CSS3" },
      { name: "@supabase/supabase-js 2", badge: "Supabase" },
      { name: "Vercel Deployment", badge: "Vercel" }
    ],
    image: {
      src: "/images/projects/boda-diana-raul-preview.jpg",
      alt: "Captura de la invitación digital para Sofía y Raúl destacando la apertura al atardecer y detalles del evento",
      width: 1200,
      height: 800,
      isRealCapture: true
    },
    repository: {
      available: true,
      url: "https://github.com/Heidelol/boda-diana-raul",
      branch: "main",
      note: "Repositorio verificado en GitHub (Heidelol/boda-diana-raul)."
    },
    liveDemo: {
      available: false,
      note: "Configuración para Vercel (vercel.json) incluida en el repositorio. URL pública personalizada sujeta a verificación de los novios."
    },
    pendingItems: [
      "Documentar URL oficial de despliegue en Vercel una vez validado con los novios.",
      "Configurar credenciales seguras de Supabase en producción."
    ]
  },
  {
    id: "dra-ilse-villanueva",
    title: "Dra. Ilse Villanueva",
    subtitle: "Propuesta de sitio web profesional para clínica de medicina estética",
    category: "Sitio Web Institucional / Salud",
    status: "proposal_demo",
    statusLabel: "Propuesta demostrativa local (Validada en maquetación)",
    isPublished: false,
    description:
      "Maqueta interactiva de alta fidelidad diseñada para presentar servicios médicos y tratamientos estéticos de manera sobria y profesional. Incluye bento-grid adaptable de tratamientos, filtrado por área clínica, diseño editorial con paleta marfil y arena, y navegación optimizada para personas con preferencia de movimiento reducido.",
    personalContribution:
      "Diseño y desarrollo front-end con CSS moderno y JavaScript nativo (`IntersectionObserver`), arquitectura de componentes accesibles (foco visible, alto contraste, semántica médica clara) y comprobación integral mediante suite de tests con `node --test`.",
    verifiedFeatures: [
      "Catálogo interactivo con filtrado por categoría clínica (Facial, Corporal, Regenerativa, Antienvejecimiento).",
      "Revelación progresiva de elementos con `IntersectionObserver` y degradación elegante si no está soportado.",
      "Respeto estricto a `prefers-reduced-motion` para accesibilidad visual.",
      "Diseño adaptable bento a columna única en dispositivos móviles."
    ],
    technologies: [
      { name: "HTML5 Semántico", badge: "HTML5" },
      { name: "CSS3 Moderno", badge: "CSS3" },
      { name: "JavaScript Vanilla", badge: "JavaScript" },
      { name: "Node.js Test Runner", badge: "Node.js Test" }
    ],
    image: {
      src: "/images/projects/dra-ilse-hero.jpg",
      alt: "Fotografía y composición visual de la propuesta médica para la Dra. Ilse Villanueva",
      width: 1200,
      height: 800,
      isRealCapture: true
    },
    repository: {
      available: false,
      note: "Propuesta contenida en carpeta local del proyecto; sujeta a aprobación de marca para repositorio público."
    },
    liveDemo: {
      available: false,
      note: "Verificado en servidor local (puerto 4174). Sin publicación externa previa autorización de cédulas y datos clínicos."
    },
    pendingItems: [
      "Validación formal de cédulas profesionales y acreditaciones médicas antes del lanzamiento.",
      "Reemplazo de datos de prueba por WhatsApp, correo y aviso de privacidad legal de la doctora."
    ]
  }
];

export const TECHNICAL_EXPERIENCE: TechnicalSkillGroup[] = [
  {
    category: "Desarrollo Front End con React & Next.js",
    description:
      "Experiencia práctica implementando interfaces dinámicas, estructuración con App Router, Server/Client Components y TypeScript riguroso.",
    skills: [
      {
        name: "React 19 & Componentes Modulares",
        context: "Comprobado en Con Fe y Kansol mediante hooks, useMemo y estados sincronizados.",
        highlight: true
      },
      {
        name: "Next.js (App Router & SSR/SSG)",
        context: "Rutas anidadas, renderizado optimizado y separación clara de servidor y cliente en Con Fe y Kansol.",
        highlight: true
      },
      {
        name: "TypeScript Tipado Estricto",
        context: "Definición de modelos de datos, validación tipada y eliminación de errores de runtime en proyectos activos.",
        highlight: true
      }
    ]
  },
  {
    category: "Integración de APIs y Autenticación",
    description:
      "Conexión con backends modernos como Supabase, manejo de tokens y protección de flujos de usuario.",
    skills: [
      {
        name: "Autenticación & Supabase SSR",
        context: "Sesiones autenticadas, protección de vistas y sincronización en Con Fe (@supabase/ssr).",
        highlight: true
      },
      {
        name: "Consumo de APIs & Servicios Externos",
        context: "Gestión de endpoints en cliente, manipulación de respuestas JSON y filtrado en tiempo real.",
        highlight: true
      },
      {
        name: "Seguridad en Cliente & Roles",
        context: "Protección de panel privado administrativo en Boda Sofía & Raúl con Supabase Auth."
      }
    ]
  },
  {
    category: "Diseño Responsive, Accesibilidad & Rendimiento",
    description:
      "Interfaces creadas desde el código con atención al detalle tipográfico, contraste, foco y fluidez.",
    skills: [
      {
        name: "Diseño Mobile-First & Layouts Adaptables",
        context: "Adaptabilidad fluida en 375px, 390px, 768px y 1200px+ sin desbordamiento horizontal en todos los proyectos.",
        highlight: true
      },
      {
        name: "Accesibilidad Web (A11y & WCAG)",
        context: "HTML semántico, foco visible en teclado, etiquetas ARIA y soporte para prefers-reduced-motion.",
        highlight: true
      },
      {
        name: "Optimización de Rendimiento & Core Web Vitals",
        context: "Imágenes con carga diferida (lazy loading), control de LCP y empaquetado eficiente de dependencias."
      }
    ]
  },
  {
    category: "Control de Versiones & Flujo Profesional",
    description:
      "Buenas prácticas en Git, GitHub y despliegue continuo en plataformas de hosting cloud.",
    skills: [
      {
        name: "Git & GitHub",
        context: "Manejo de repositorios versionados, commits estructurados y ramas principales comprobadas en GitHub.",
        highlight: true
      },
      {
        name: "Configuración de Entornos de Despliegue",
        context: "Archivos vercel.json, optimización de variables de entorno y preparación para despliegue continuo."
      }
    ]
  }
];

export const PROFILE_INFO = {
  name: "Heidelbergh",
  role: "Desarrollador Front End",
  location: "México",
  bio: "Desarrollador Front End enfocado en crear aplicaciones web modernas, rápidas y accesibles con React, Next.js y TypeScript. Con experiencia comprobada en integración de APIs, flujos de autenticación segura con Supabase, diseño responsive adaptado a móvil y optimización de rendimiento.",
  githubUsername: "Heidelol",
  githubUrl: "https://github.com/Heidelol",
  // Nota: Los datos de contacto que aún no cuentan con confirmación real por parte del usuario
  // quedan señalados explícitamente en la documentación y no se renderizan como enlaces ficticios.
  pendingContact: {
    email: null,
    linkedin: null
  }
};
