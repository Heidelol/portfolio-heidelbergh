import { Header } from "@/components/Header";
import { FeaturedProject, CompactProject } from "@/components/ProjectItems";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PROJECTS_DATA, PROFILE_DATA } from "@/data/projects";

export default function Home() {
  const featured = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const otherProjects = PROJECTS_DATA.filter((p) => p.id !== featured.id);

  return (
    <>
      <Header />

      <main id="contenido-principal" className="flex-1">
        {/* ========================================================
            1. PRESENTACIÓN / APERTURA EDITORIAL
            Nombre completo, especialidad y acceso inmediato al trabajo
           ======================================================== */}
        <section id="inicio" className="pt-16 sm:pt-24 pb-16 border-b border-[#E7E5E4]">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block mb-3">
                Portafolio Front End
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-[1.12]">
                {PROFILE_DATA.fullName}
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-[#0A2540] tracking-tight mt-1 mb-2">
                {PROFILE_DATA.title}
              </p>

              <p className="text-xs font-mono text-[#78716C] mb-6">
                {PROFILE_DATA.location} · Experiencia desde 2021
              </p>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl font-normal mb-8">
                {PROFILE_DATA.statement}
              </p>

              {/* Acceso inmediato a proyectos y secciones clave */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="#proyectos"
                  className="link-editorial text-sm font-semibold text-[#1C1917]"
                >
                  Ver proyectos seleccionados ↓
                </a>
                <a
                  href="#experiencia"
                  className="link-editorial text-sm font-medium text-[#57534E]"
                >
                  Experiencia profesional →
                </a>
                <a
                  href="#contacto"
                  className="link-editorial text-sm font-medium text-[#57534E]"
                >
                  Contacto directo →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. PROYECTOS SELECCIONADOS
            1 Proyecto Destacado (Kansol) + Proyectos con detalle
           ======================================================== */}
        <section id="proyectos" className="py-20 border-b border-[#E7E5E4]">
          <div className="container-editorial">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
                Trabajo Seleccionado
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                Proyectos
              </h2>
              <p className="mt-2 text-base text-[#57534E] leading-relaxed">
                Casos de desarrollo que muestran la solución implementada, decisiones técnicas y mi trabajo en cada interfaz.
              </p>
            </div>

            {/* Proyecto principal destacado */}
            <FeaturedProject project={featured} />

            {/* Proyectos complementarios */}
            <div className="space-y-4">
              {otherProjects.map((project) => (
                <CompactProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. EXPERIENCIA PROFESIONAL (TÉCNICA + COMPLEMENTARIA)
           ======================================================== */}
        <ExperienceSection />

        {/* ========================================================
            4. COMPETENCIAS TÉCNICAS
           ======================================================== */}
        <SkillsSection />

        {/* ========================================================
            5. FORMACIÓN E IDIOMAS
           ======================================================== */}
        <EducationSection />

        {/* ========================================================
            6. CONTACTO DIRECTO
           ======================================================== */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
