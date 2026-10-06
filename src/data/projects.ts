export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  featured: boolean; // true para el proyecto principal destacado
  status: 'published' | 'in_development' | 'proposal_demo';
  statusLabel: string;
  summary: string;
  personalContribution: string;
  verifiedFeatures: string[];
  technologies: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  repository?: {
    available: boolean;
    url?: string;
    branch?: string;
    label: string;
    note?: string;
  };
  liveDemo?: {
    available: boolean;
    url?: string;
    label?: string;
    note?: string;
  };
  pendingItems?: string[];
}

export interface TechnicalCompetence {
  area: string;
  description: string;
  items: {
    title: string;
    evidence: string;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "con-fe",
    title: "Con Fe",
    year: "2026",
    category: "Aplicación Web Full-Stack",
    featured: true,
    status: "in_development",
    statusLabel: "En desarrollo",
    summary:
      "Plataforma de acompañamiento espiritual y oración contemplativa estructurada por momentos. Integra catálogo temático de oraciones con audio sincronizado, el módulo interactivo 'Camino' para registrar y actualizar intenciones, y sesiones autenticadas mediante Supabase SSR.",
    personalContribution:
      "Arquitectura completa del front-end en Next.js (App Router, React 19, TypeScript), diseño adaptable para móvil y escritorio, persistencia de estado mediante contextos React e integración de autenticación y sesiones con Supabase (@supabase/ssr).",
    verifiedFeatures: [
      "Flujo guiado de oración por etapas con controles multimedia libres de fricción.",
      "Módulo 'Camino' para gestión de intenciones con filtros de estado (orando, agradecida, pausada).",
      "Protección de rutas autenticadas y sincronización de sesiones en servidor y cliente con Supabase.",
      "Interfaz adaptada a móvil con foco visible, contraste verificado y paleta sobria."
    ],
    technologies: [
      "React 19",
      "Next.js 16 (App Router)",
      "TypeScript 5",
      "@supabase/ssr",
      "Tailwind CSS 4"
    ],
    image: {
      src: "/images/projects/con-fe-preview.png",
      alt: "Captura de la pantalla principal de Con Fe con la oración del día y momentos espirituales",
      width: 1170,
      height: 1800
    },
    repository: {
      available: false,
      label: "Código en repositorio local",
      note: "Código verificado en entorno de trabajo; pendiente de sincronización a repositorio público."
    },
    liveDemo: {
      available: false,
      note: "Servidor local comprobado. Pendiente de asignación de dominio y variables de producción."
    },
    pendingItems: [
      "Sincronizar a repositorio GitHub remoto.",
      "Desplegar a producción con variables de entorno de Supabase configuradas."
    ]
  },
  {
    id: "kansol",
    title: "Kansol",
    year: "2026",
    category: "Catálogo y Showroom Digital",
    featured: false,
    status: "published",
    statusLabel: "Publicado",
    summary:
      "Catálogo visual de acabados y revestimientos arquitectónicos (lambrín, piedra flexible, paneles PVC, pisos SPC, deck exterior y luminarias). Diseñado para consulta rápida de especificaciones técnicas y enlace directo a cotización personalizada por WhatsApp.",
    personalContribution:
      "Desarrollo de la interfaz de usuario con Next.js y Vinext, carrusel editorial interactivo con imágenes de alta definición, sistema de filtros dinámicos por categoría sin recargas y generador paramétrico de enlaces comerciales a WhatsApp por código SKU.",
    verifiedFeatures: [
      "Filtrado instantáneo en memoria de productos y colecciones por categoría técnica.",
      "Generador de mensajes de cotización vinculados al SKU del material seleccionado.",
      "Carrusel editorial responsivo con carga diferida de imágenes y navegación accesible.",
      "Optimización de empaquetado y renderizado estático en el edge."
    ],
    technologies: [
      "React 19",
      "Next.js 16",
      "TypeScript 5",
      "Vinext / Vite",
      "Tailwind CSS 4"
    ],
    image: {
      src: "/images/projects/kansol-preview.jpg",
      alt: "Captura del catálogo digital de Kansol destacando revestimientos de interiores",
      width: 1400,
      height: 900
    },
    repository: {
      available: true,
      url: "https://github.com/Heidelol/kansol",
      branch: "main",
      label: "Ver código en GitHub"
    },
    liveDemo: {
      available: false,
      note: "Compilación de producción generada en workspace; dominio público pendiente de confirmación."
    },
    pendingItems: [
      "Confirmar URL pública del dominio definitivo de producción."
    ]
  },
  {
    id: "boda-diana-raul",
    title: "Invitación de Boda Sofía & Raúl",
    year: "2026",
    category: "Aplicación Web de Eventos",
    featured: false,
    status: "published",
    statusLabel: "Publicado",
    summary:
      "Sitio web de evento con diseño editorial y experiencia multimedia: carrusel a pantalla completa, reproductor de música ambiental, cuenta regresiva en tiempo real, visor de galería en lightbox y formulario de confirmación de asistencia con control estricto de cupos y panel administrativo privado.",
    personalContribution:
      "Implementación de la interfaz con HTML5 semántico, CSS3 modular y JavaScript orientado a eventos; integración del cliente Supabase para autenticación y consulta en panel de gestión privada (admin.html) y control de confirmaciones.",
    verifiedFeatures: [
      "Formulario RSVP con validación de invitados, opción de confirmación y selección de pases asignados.",
      "Panel administrativo privado con autenticación Supabase JS para consulta de confirmados.",
      "Cuenta regresiva en vivo y visor de fotos con navegación lightbox accesible.",
      "Reproductor de música con estado persistente e indicación visual de audio."
    ],
    technologies: [
      "JavaScript ES6+",
      "HTML5 Semántico",
      "CSS3 Modular",
      "@supabase/supabase-js 2",
      "Vercel"
    ],
    image: {
      src: "/images/projects/boda-diana-raul-preview.jpg",
      alt: "Captura de la invitación digital destacando la apertura al atardecer y detalles del evento",
      width: 1200,
      height: 800
    },
    repository: {
      available: true,
      url: "https://github.com/Heidelol/boda-diana-raul",
      branch: "main",
      label: "Ver código en GitHub"
    },
    liveDemo: {
      available: false,
      note: "Configuración para Vercel (vercel.json) incluida en el repositorio. URL personalizada sujeta a verificación de los novios."
    },
    pendingItems: [
      "Documentar URL oficial de despliegue en Vercel una vez validada con los anfitriones."
    ]
  },
  {
    id: "dra-ilse-villanueva",
    title: "Dra. Ilse Villanueva",
    year: "2026",
    category: "Propuesta Web / Salud",
    featured: false,
    status: "proposal_demo",
    statusLabel: "Propuesta local",
    summary:
      "Maqueta interactiva de alta fidelidad diseñada para presentar servicios médicos y tratamientos estéticos de manera sobria y profesional. Incluye bento-grid adaptable de tratamientos, filtrado por área clínica, diseño editorial con paleta marfil y arena, y navegación optimizada para personas con preferencia de movimiento reducido.",
    personalContribution:
      "Diseño y desarrollo front-end con CSS moderno y JavaScript nativo (IntersectionObserver), arquitectura de componentes accesibles (foco visible, alto contraste, semántica médica clara) y comprobación integral mediante suite de tests con node --test.",
    verifiedFeatures: [
      "Catálogo interactivo con filtrado por categoría clínica (Facial, Corporal, Regenerativa, Antienvejecimiento).",
      "Revelación progresiva de elementos con IntersectionObserver y degradación elegante si no está soportado.",
      "Respeto estricto a prefers-reduced-motion para accesibilidad visual.",
      "Diseño adaptable bento a columna única en dispositivos móviles."
    ],
    technologies: [
      "HTML5 Semántico",
      "CSS3 Moderno",
      "JavaScript Nativo",
      "Node.js Test Runner"
    ],
    image: {
      src: "/images/projects/dra-ilse-hero.jpg",
      alt: "Fotografía y composición visual de la propuesta médica para la Dra. Ilse Villanueva",
      width: 1200,
      height: 800
    },
    repository: {
      available: false,
      label: "Propuesta en entorno local",
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

export const TECHNICAL_COMPETENCES: TechnicalCompetence[] = [
  {
    area: "Desarrollo Front End con React & Next.js",
    description:
      "Construcción de interfaces modulares con TypeScript estricto, gestión de rutas con App Router y sincronización de estado sin sobrecargar el cliente.",
    items: [
      {
        title: "React 19 & Arquitectura de Componentes",
        evidence: "Uso de hooks, useMemo y separación modular en Con Fe y Kansol."
      },
      {
        title: "Next.js (App Router, Server y Client Components)",
        evidence: "Renderizado estático y dinámico optimizado en Con Fe y Kansol."
      },
      {
        title: "TypeScript Estricto",
        evidence: "Modelado de datos tipado y comprobación en tiempo de compilación sin errores 'any'."
      }
    ]
  },
  {
    area: "Integración de APIs y Autenticación",
    description:
      "Conexión con servicios externos, manejo seguro de sesiones en servidor y protección de vistas sensibles.",
    items: [
      {
        title: "Autenticación & Supabase SSR",
        evidence: "Gestión de sesiones persistentes y protección de rutas en Con Fe (@supabase/ssr)."
      },
      {
        title: "Consumo de Datos y Filtrado en Tiempo Real",
        evidence: "Filtrado en memoria de catálogos y persistencia de intenciones personales."
      },
      {
        title: "Protección de Paneles Privados",
        evidence: "Autenticación de acceso a panel administrativo en Boda Sofía & Raúl."
      }
    ]
  },
  {
    area: "Diseño Responsive, Accesibilidad & Rendimiento",
    description:
      "Enfoque en usabilidad real: legibilidad, navegación por teclado y rendimiento en dispositivos móviles.",
    items: [
      {
        title: "Diseño Mobile-First Riguroso",
        evidence: "Adaptación probada en 375px, 390px, 768px y escritorio sin desbordamiento horizontal."
      },
      {
        title: "Accesibilidad (A11y)",
        evidence: "HTML semántico, foco visible, contraste adecuado y soporte para prefers-reduced-motion."
      },
      {
        title: "Optimización de Carga y Core Web Vitals",
        evidence: "Imágenes optimizadas con next/image, carga diferida y empaquetado ligero."
      }
    ]
  },
  {
    area: "Control de Versiones y Flujo de Trabajo",
    description:
      "Uso disciplinado de Git para estructurar historial de cambios y colaboración técnica.",
    items: [
      {
        title: "Git & GitHub",
        evidence: "Repositorios versionados con commits estructurados en repositorios comprobados."
      },
      {
        title: "Configuración de Entornos",
        evidence: "Manejo de variables de entorno y archivos de configuración para despliegue en Vercel."
      }
    ]
  }
];

export const PROFILE_DATA = {
  name: "Heidelbergh",
  title: "Desarrollador Front End",
  location: "México",
  statement:
    "Desarrollador Front End enfocado en React, Next.js y TypeScript. Construyo interfaces legibles, rápidas y accesibles, con experiencia comprobada en integración de APIs, autenticación con Supabase y diseño responsive adaptado a móvil.",
  github: {
    handle: "Heidelol",
    url: "https://github.com/Heidelol"
  }
};
