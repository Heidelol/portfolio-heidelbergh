export interface ProjectLink {
  type: 'github' | 'demo' | 'external';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  featured: boolean;
  statusLabel: string;
  needSolved: string;
  description: string;
  verifiedFeatures: string[];
  technologies: string[];
  technicalDecision: string;
  personalContribution: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  link?: ProjectLink;
  demoUrl?: string;
  githubUrl?: string;
  contextNote?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface ComplementaryExperience {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
}

export interface CompetenceGroup {
  groupName: string;
  summary: string;
  items: {
    name: string;
    context: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface LanguageItem {
  language: string;
  level: string;
}

export const PROFILE_DATA = {
  fullName: "Heidelbergh Oliver Canto",
  title: "Desarrollador Front End",
  subtitle: "Experiencia Front End y Full Stack",
  location: "Quintana Roo, México",
  statement:
    "Desarrollador Front End con experiencia Full Stack desde 2021, enfocado en React, Next.js y TypeScript. Construyo interfaces legibles, eficientes y accesibles, con experiencia comprobada en integración de APIs REST y GraphQL, autenticación con Supabase, manejo de datos y diseño responsive adaptado a móvil.",
  contact: {
    email: "heideloliver@gmail.com",
    emailLink: "mailto:heideloliver@gmail.com",
    phoneDisplay: "+52 983 171 7204",
    phoneTel: "tel:+529831717204",
    whatsappUrl: "https://wa.me/529831717204",
    linkedinUrl: "https://www.linkedin.com/in/heidelol/",
    githubUrl: "https://github.com/Heidelol",
    githubHandle: "Heidelol"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "kansol",
    title: "Kansol",
    year: "2026",
    category: "Catálogo y Showroom Digital",
    featured: true,
    statusLabel: "Demostración pública disponible",
    needSolved:
      "Digitalización del catálogo de revestimientos arquitectónicos para agilizar la consulta técnica de contratistas y facilitar la cotización directa de materiales.",
    description:
      "Catálogo comercial y showroom visual de acabados (lambrín, piedra flexible, paneles PVC tipo mármol, pisos SPC, deck exterior y luminarias). Diseñado para consulta ágil de especificaciones técnicas y enlace directo a cotización personalizada por WhatsApp.",
    technicalDecision:
      "Renderizado estático optimizado con Vite/Vinext y Next.js, implementando filtrado en memoria sin recargas para asegurar respuesta instantánea en dispositivos móviles en obra.",
    personalContribution:
      "Desarrollo completo de la interfaz en Next.js, carrusel editorial interactivo con imágenes de alta definición, sistema de filtros dinámicos por categoría y generador paramétrico de enlaces comerciales a WhatsApp por código SKU.",
    verifiedFeatures: [
      "Filtrado instantáneo en memoria de productos y colecciones por categoría técnica.",
      "Generador de mensajes de cotización vinculados al SKU del material seleccionado.",
      "Carrusel editorial responsivo con carga diferida de imágenes y navegación accesible.",
      "Optimización de empaquetado y entrega estática de recursos en el edge."
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
    demoUrl: "https://kansol.vercel.app",
    link: {
      type: "demo",
      url: "https://kansol.vercel.app",
      label: "Ver proyecto"
    }
  },
  {
    id: "cfch-control",
    title: "CFCH Control",
    year: "2026",
    category: "Panel Administrativo / CRM Deportivo",
    featured: false,
    statusLabel: "Demostración pública disponible",
    needSolved:
      "Administración integral de socios, cobro de mensualidades por planes y registro de punto de venta (POS) para centros deportivos, eliminando registros manuales en papel.",
    description:
      "Panel de administración interactivo para gestión de gimnasios y centros funcionales. Permite consultar el estado de membresías de socios (al corriente, por vencer, vencidas), registrar pagos, operar el punto de venta de mostrador y registrar asistencia diaria con persistencia demostrativa local.",
    technicalDecision:
      "Arquitectura SPA modular en JavaScript estructurada con separación de dominio, servicios de validación desacoplados, máquina de estado centralizada e interfaz reactiva sin dependencias externas pesadas.",
    personalContribution:
      "Arquitectura de componentes de interfaz (AppShell, diálogos modales, tablas de datos con ordenamiento), gestión de estado en memoria y flujos de cobro con cálculo de vigencias.",
    verifiedFeatures: [
      "Tablero de control con métricas en tiempo real de socios activos, asistencias y ventas del día.",
      "Módulo de socios con búsqueda por nombre y filtros por vigencia de membresía.",
      "Punto de venta (POS) para consumibles e insumos deportivos con control de stock.",
      "Registro de pagos con cálculo automático de días de extensión según plan seleccionado."
    ],
    technologies: [
      "JavaScript ES6+",
      "HTML5 Semántico",
      "CSS3 Modular",
      "Web Components / SPA",
      "Vercel"
    ],
    image: {
      src: "/images/projects/cfch-control-preview.png",
      alt: "Captura del panel administrativo de CFCH Control mostrando tablero de socios y métricas de cobro",
      width: 1280,
      height: 800
    },
    demoUrl: "https://cfch-control.vercel.app",
    link: {
      type: "demo",
      url: "https://cfch-control.vercel.app",
      label: "Ver proyecto"
    }
  },
  {
    id: "menu-marea",
    title: "Menú Marea",
    year: "2026",
    category: "Menú Digital y Pedidos",
    featured: false,
    statusLabel: "Demostración pública disponible",
    needSolved:
      "Catálogo digital accesible para restaurantes que permite a los comensales seleccionar platillos y formalizar pedidos directos sin intermediarios ni comisiones de plataformas.",
    description:
      "Demostración interactiva de menú digital para restaurantes y cafeterías. Integra catálogo fotográfico organizado por categorías gastronómicas, selector de porciones y notas especiales, carrito de compra flotante con cálculo en vivo y generador de resumen para pedido directo.",
    technicalDecision:
      "Maquetación editorial ligera en HTML5 semántico y Vanilla JavaScript, garantizando carga inmediata bajo conexiones móviles lentas y experiencia táctil fluida con drawer deslizable.",
    personalContribution:
      "Desarrollo del flujo interactivo de carrito en el cliente: cálculo reactivo de totales, persistencia de notas de comensal, apertura/cierre accesible del drawer y formateo de texto de orden.",
    verifiedFeatures: [
      "Catálogo fotográfico con navegación rápida por categorías y estados activos.",
      "Carrito interactivo con controles de adición, sustracción y desglose de precio.",
      "Drawer lateral de resumen de orden con cálculo automático y notas de preparación.",
      "Diseño adaptable optimizado para dispositivos móviles y navegación táctil."
    ],
    technologies: [
      "HTML5 Semántico",
      "CSS3 Moderno",
      "JavaScript Nativo",
      "Diseño Responsive",
      "Vercel"
    ],
    image: {
      src: "/images/projects/menu-marea-preview.jpg",
      alt: "Captura de la demo interactiva de Menú Marea con catálogo de platillos y carrito de compra",
      width: 1280,
      height: 800
    },
    demoUrl: "https://menu-marea.vercel.app/demo/",
    link: {
      type: "demo",
      url: "https://menu-marea.vercel.app/demo/",
      label: "Ver proyecto"
    }
  },
  {
    id: "boda-diana-raul",
    title: "Invitación de boda",
    year: "2026",
    category: "Aplicación Web de Eventos",
    featured: false,
    statusLabel: "Demostración pública disponible",
    needSolved:
      "Gestión de invitaciones digitales para eventos con confirmación de asistencia en tiempo real, asignación personalizada de cupos y acceso administrativo protegido.",
    description:
      "Sitio web para evento con experiencia multimedia: carrusel a pantalla completa, reproductor de música ambiental, cuenta regresiva dinámica, visor fotográfico en lightbox y formulario RSVP demostrativo con control estricto de cupos.",
    technicalDecision:
      "Arquitectura desacoplada en JavaScript Vanilla modular con cliente Supabase en el panel administrativo, permitiendo una experiencia de usuario rápida y liviana en la invitación pública junto con acceso restringido para los anfitriones.",
    personalContribution:
      "Construcción completa de la interfaz con HTML5 semántico, CSS3 modular y JavaScript orientado a eventos; integración del cliente Supabase para consulta en panel de gestión privada.",
    verifiedFeatures: [
      "Formulario RSVP con validación de invitados, opción de confirmación y selección de pases asignados.",
      "Panel de administración privado con autenticación Supabase JS para consulta de confirmados.",
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
    demoUrl: "https://boda-diana-raul.vercel.app",
    link: {
      type: "demo",
      url: "https://boda-diana-raul.vercel.app",
      label: "Ver proyecto"
    }
  },
  {
    id: "con-fe",
    title: "Con Fe",
    year: "2026",
    category: "Aplicación Web Full-Stack",
    featured: false,
    statusLabel: "En desarrollo",
    needSolved:
      "Acompañamiento personal guiado a través de experiencias de oración estructuradas, eliminando la fricción y distracciones para el usuario en momentos de silencio y contemplación.",
    description:
      "Aplicación web de oración y acompañamiento contemplativo por etapas. Proporciona un catálogo temático de reflexiones con audio sincronizado, el módulo interactivo 'Camino' para registrar y categorizar intenciones personales, y sesiones autenticadas persistentes mediante Supabase SSR. Presentado como proyecto en desarrollo con código fuente público en GitHub.",
    technicalDecision:
      "Implementación de Next.js App Router combinando Server Components para la carga inicial de datos con Client Components en las sesiones interactivas, reduciendo la sobrecarga de estado en el cliente y manteniendo la sincronización de sesión con cookies HTTP-only vía @supabase/ssr.",
    personalContribution:
      "Arquitectura completa del front-end en Next.js (React 19, TypeScript), diseño de componentes modulares con Tailwind CSS, gestión de estado con contextos React e integración de autenticación persistente.",
    verifiedFeatures: [
      "Flujo guiado de oración por etapas con controles multimedia libres de fricción.",
      "Módulo 'Camino' para gestión de intenciones con filtros de estado (orando, agradecida, pausada).",
      "Protección de rutas autenticadas y sincronización de sesiones mediante Supabase SSR.",
      "Diseño adaptable para móvil con foco visible, contraste verificado y paleta sobria."
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
      alt: "Captura real de la interfaz en desarrollo de Con Fe con la oración del día y momentos espirituales",
      width: 1170,
      height: 1800
    },
    githubUrl: "https://github.com/Heidelol/con-fe",
    link: {
      type: "github",
      url: "https://github.com/Heidelol/con-fe",
      label: "Ver código"
    }
  },
  {
    id: "kaizenzo-ecommerce",
    title: "E-commerce y Panel Administrativo",
    year: "2021–2025",
    category: "Plataforma Web Comercial (Kaizenzo)",
    featured: false,
    statusLabel: "Proyecto profesional en equipo",
    needSolved:
      "Gestión integral de catálogo de productos, procesamiento de órdenes, administración de inventarios y control de acceso seguro mediante panel administrativo.",
    description:
      "Plataforma de comercio electrónico con panel administrativo privado desarrollado dentro de un equipo ágil de tres ingenieros en Kaizenzo. Incluye exploración y filtrado dinámico de productos, gestión de tablas relacionales, operaciones CRUD completas y autenticación con control de roles.",
    technicalDecision:
      "Uso de Next.js junto a Supabase y Node.js para desacoplar las operaciones públicas del catálogo de las transacciones protegidas del panel administrativo con JWT, garantizando validación de esquemas en servidor y consultas relacionales eficientes.",
    personalContribution:
      "Desarrollo colaborativo de vistas de catálogo y componentes de administración en React y TypeScript, consumo de endpoints REST/GraphQL, diseño de interfaces responsive con Tailwind CSS y validación funcional con Jest y Postman.",
    verifiedFeatures: [
      "Catálogo público de productos con búsqueda en tiempo real y filtros combinados.",
      "Panel administrativo con tablas de datos, relaciones y operaciones CRUD seguras.",
      "Autenticación de usuarios y administradores basada en JWT.",
      "Optimización y manejo de recursos visuales para carga rápida de productos."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Supabase / PostgreSQL",
      "Tailwind CSS",
      "GraphQL & REST",
      "Jest"
    ]
  }
];

export const TECHNICAL_EXPERIENCE: WorkExperience[] = [
  {
    role: "Desarrollador Front End / Full Stack",
    company: "Kaizenzo",
    period: "Noviembre 2021 – Enero 2025",
    location: "Canadá (Remoto)",
    description:
      "Participación en seis proyectos web dentro de equipos ágiles de tres desarrolladores Full Stack, colaborando en el ciclo completo de desarrollo, testing y entrega continua.",
    responsibilities: [
      "Implementación de interfaces de usuario y servicios backend utilizando React, Next.js, Node.js, GraphQL y Supabase.",
      "Diagnóstico y resolución de incidencias en código mediante análisis de consola, logs de servidor y depuración estructurada.",
      "Validación de componentes y flujos de datos mediante pruebas unitarias con Jest, React Testing Library y pruebas de endpoints con Postman.",
      "Colaboración mediante control de versiones con Git, gestión de ramas y revisiones de código (pull requests) en equipo."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "Supabase",
      "Jest",
      "React Testing Library",
      "Postman",
      "Git"
    ]
  },
  {
    role: "Desarrollador Web Freelance",
    company: "Autónomo",
    period: "Enero 2021 – Actualidad",
    location: "México",
    description:
      "Desarrollo independiente de sitios web, catálogos digitales y aplicaciones interactivas orientadas a las necesidades específicas de clientes y negocios locales.",
    responsibilities: [
      "Construcción de interfaces responsive y accesibles con React, Next.js y Tailwind CSS.",
      "Integración de APIs REST y servicios cloud (Supabase, Vercel) para autenticación y persistencia de datos.",
      "Gestión integral del código con Git y GitHub, configurando despliegues automáticos y optimización de rendimiento.",
      "Relevamiento de requerimientos con clientes y entrega de soluciones a la medida."
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "APIs REST",
      "Supabase",
      "Git / GitHub",
      "Vercel"
    ]
  }
];

export const COMPLEMENTARY_EXPERIENCE: ComplementaryExperience[] = [
  {
    role: "Asesor Jurídico / Auxiliar Jurídico",
    organization: "Ayuntamiento de Bacalar",
    period: "2024 – 2026",
    location: "Bacalar, Quintana Roo",
    summary:
      "Apoyo y asesoría jurídica para regidor municipal, revisión de acuerdos, análisis normativo y redacción de documentos oficiales."
  },
  {
    role: "Administración y Operación",
    organization: "Taller mecánico propio",
    period: "2022 – 2023",
    location: "Cancún, Quintana Roo",
    summary:
      "Gestión integral de negocio: elaboración de cotizaciones, adquisición de insumos, coordinación operativa del equipo y atención directa a clientes."
  },
  {
    role: "Gerente General",
    organization: "Blue Bird Hotel",
    period: "Enero 2017 – Junio 2022",
    location: "Bacalar, Quintana Roo",
    summary:
      "Coordinación de un equipo de 10 personas, control de turnos, gestión de reservaciones, relación con proveedores, inventarios, facturación, arqueos de caja y presentación de reportes financieros."
  },
  {
    role: "Supervisor de Flotilla",
    organization: "Airportcab",
    period: "2015 – 2017",
    location: "Cancún, Quintana Roo",
    summary:
      "Coordinación de servicios de transporte, seguimiento operativo de órdenes, compras de insumos, gestión de inventarios y atención a usuarios."
  }
];

export const COMPETENCES_DATA: CompetenceGroup[] = [
  {
    groupName: "Front End",
    summary: "Desarrollo de interfaces de usuario modulares, dinámicas y accesibles.",
    items: [
      { name: "React & Next.js", context: "App Router, Server/Client Components, hooks y estado sincronizado." },
      { name: "TypeScript & JavaScript", context: "Tipado estricto, manipulación del DOM y estándares ES6+." },
      { name: "HTML5 Semántico & CSS3", context: "Estructuras accesibles, maquetación flexible y diseño responsive." },
      { name: "Tailwind CSS", context: "Diseño utilitario y sistemas de diseño sin sobrecarga de estilos." }
    ]
  },
  {
    groupName: "Backend y Datos",
    summary: "Integración de servicios, APIs y persistencia de información.",
    items: [
      { name: "Node.js & APIs REST/GraphQL", context: "Consumo de endpoints, consultas estructuradas y manejo de respuestas." },
      { name: "Supabase & SQL", context: "Modelado relacional, autenticación SSR/JWT y operaciones CRUD seguras." }
    ]
  },
  {
    groupName: "Calidad, Control de Versiones y Entrega",
    summary: "Buenas prácticas de desarrollo, pruebas y flujo de colaboración en equipo.",
    items: [
      { name: "Git & GitHub", context: "Control de versiones, ramas, commits semánticos y revisión de pull requests." },
      { name: "Pruebas (Testing)", context: "Pruebas de componentes con Jest y React Testing Library; pruebas de endpoints con Postman." },
      { name: "Despliegue & Metodología", context: "Despliegues en Vercel, optimización de variables de entorno y trabajo en equipo con Scrum." }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Estudios parciales de Ingeniería de Software",
    institution: "Universidad Anáhuac",
    period: "Desde 2015",
    status: "Estudios universitarios"
  },
  {
    degree: "Bootcamp de Desarrollo Web",
    institution: "Kodemia",
    period: "2020 – 2021",
    status: "Formación intensiva Full Stack"
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Avanzado (oral y escrito)" }
];
