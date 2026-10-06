# Portafolio Profesional — Heidelbergh Oliver Canto

Portafolio web profesional de Heidelbergh Oliver Canto, Desarrollador Front End con experiencia Full Stack desde 2021. Diseñado con una composición editorial sobria y contemporánea, enfocado en casos de estudio técnicos reales, decisiones de arquitectura y demostraciones funcionales.

---

## Tecnologías Utilizadas

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) con React 19 y Turbopack.
- **Tipado estricto:** [TypeScript 5](https://www.typescriptlang.org/).
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/) con diseño utilitario y variables de color semánticas.
- **Tipografía:** [Geist Sans & Geist Mono](https://vercel.com/font) combinadas con [Manrope](https://fonts.google.com/specimen/Manrope) cargadas mediante `next/font`.
- **Accesibilidad (a11y):** HTML5 semántico, foco visible en navegación por teclado y respeto a preferencias de movimiento reducido (`prefers-reduced-motion`).

---

## Proyectos Destacados

1. **Kansol:** Catálogo y showroom digital de acabados arquitectónicos con filtrado dinámico en memoria y cotización paramétrica por WhatsApp.
2. **CFCH Control:** Panel administrativo y CRM deportivo para control de membresías, asistencias y punto de venta (POS).
3. **Menú Marea:** Demostración interactiva de menú digital para restaurantes con catálogo fotográfico, selector de porciones y carrito reactivo.
4. **Invitación de boda:** Aplicación web para evento con experiencia multimedia, cuenta regresiva, reproductor musical y confirmación RSVP con control de cupos.
5. **Con Fe (En desarrollo):** Aplicación de acompañamiento espiritual y oración contemplativa por etapas en Next.js 16 y Supabase SSR ([código en GitHub](https://github.com/Heidelol/con-fe)).
6. **E-commerce y Panel Administrativo (Kaizenzo):** Plataforma comercial y panel privado con consultas GraphQL/REST y autenticación JWT desarrollada en equipo.

---

## Instalación y Ejecución Local

### Requisitos previos:
- [Node.js](https://nodejs.org/) v20 o superior.
- [pnpm](https://pnpm.io/) v9 o superior (o npm/yarn).

### Pasos:

```bash
# 1. Clonar el repositorio
git clone https://github.com/Heidelol/portfolio-heidelbergh.git
cd portfolio-heidelbergh

# 2. Instalar dependencias
pnpm install

# 3. Iniciar el servidor de desarrollo
pnpm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Comprobaciones Disponibles

```bash
# Verificación de linter (ESLint)
pnpm run lint

# Verificación de tipos TypeScript
pnpm exec tsc --noEmit

# Compilación de producción
pnpm run build

# Iniciar servidor de producción local
pnpm run start
```
