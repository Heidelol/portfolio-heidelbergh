import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PROJECTS_DATA, PROFILE_INFO } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Header />

      <main id="contenido-principal" className="flex-1">
        {/* ========================================================
            1. SECCIÓN DE PRESENTACIÓN (HERO SOBRIO Y PROFESIONAL)
           ======================================================== */}
        <section id="inicio" className="py-20 sm:py-28 bg-white border-b border-slate-200">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold tracking-wide uppercase mb-6 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                Portafolio Front End Profesional
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                {PROFILE_INFO.name}
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 mt-2">
                  {PROFILE_INFO.role}
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                {PROFILE_INFO.bio}
              </p>

              {/* Tecnologías clave verificadas */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Stack principal con implementación comprobada
                </p>
                <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-700">
                  <span className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200">
                    React 19 & Next.js
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200">
                    TypeScript
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200">
                    Supabase Auth & SSR
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200">
                    Tailwind CSS 4
                  </span>
                  <span className="px-3 py-1.5 rounded-md bg-slate-100 border border-slate-200">
                    Diseño Responsive & A11y
                  </span>
                </div>
              </div>

              {/* Llamados a la acción */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#proyectos"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
                >
                  Explorar proyectos destacados
                </a>
                <a
                  href="#experiencia"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors border border-slate-200"
                >
                  Ver experiencia técnica
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. PROYECTOS DESTACADOS
           ======================================================== */}
        <section id="proyectos" className="py-20 bg-slate-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
                  Casos de estudio & Código
                </p>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                  Proyectos destacados
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  Proyectos auditados con capturas reales de su interfaz, especificaciones técnicas verificadas en código fuente y desglose explícito de la contribución realizada.
                </p>
              </div>

              <div className="text-xs text-slate-500 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-2xs self-start md:self-auto">
                <span className="font-semibold text-slate-700">Auditados en workspace:</span> 4 proyectos (2 en producción/código GitHub, 1 en desarrollo activo, 1 propuesta maquetada)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {PROJECTS_DATA.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. EXPERIENCIA TÉCNICA
           ======================================================== */}
        <SkillsSection />

        {/* ========================================================
            4. CONTACTO Y ENLACES PROFESIONALES
           ======================================================== */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
