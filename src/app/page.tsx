import { Header } from "@/components/Header";
import { FeaturedProject, CompactProject } from "@/components/ProjectItems";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PROJECTS_DATA, PROFILE_DATA } from "@/data/projects";

export default function Home() {
  const featured = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];
  const compactProjects = PROJECTS_DATA.filter((p) => p.id !== featured.id);

  return (
    <>
      <Header />

      <main id="contenido-principal" className="flex-1">
        {/* ========================================================
            1. PRESENTACIÓN / APERTURA EDITORIAL
            Nombre, especialidad y acceso inmediato al trabajo
           ======================================================== */}
        <section id="inicio" className="pt-16 sm:pt-24 pb-16 border-b border-[#E7E5E4]">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block mb-3">
                Portafolio Front End
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight leading-[1.15]">
                {PROFILE_DATA.name}
              </h1>

              <p className="text-xl sm:text-2xl font-semibold text-[#0A2540] tracking-tight mt-1 mb-6">
                {PROFILE_DATA.title}
              </p>

              <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl font-normal mb-8">
                {PROFILE_DATA.statement}
              </p>

              {/* Acceso inmediato al trabajo con enlaces editoriales */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <a
                  href="#proyectos"
                  className="link-editorial text-sm font-semibold text-[#1C1917]"
                >
                  Ver proyectos destacados ↓
                </a>
                <a
                  href="#experiencia"
                  className="link-editorial text-sm font-medium text-[#57534E]"
                >
                  Habilidades técnicas →
                </a>
                <a
                  href={PROFILE_DATA.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#78716C] hover:text-[#1C1917] transition-editorial"
                >
                  GitHub: @{PROFILE_DATA.github.handle} ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. PROYECTOS: VARIACIÓN DE ESCALA Y COMPOSICIÓN
            1 Proyecto Destacado (Con Fe) + 3 Proyectos Compactos
           ======================================================== */}
        <section id="proyectos" className="py-20 border-b border-[#E7E5E4]">
          <div className="container-editorial">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
                Trabajo Reciente
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
                Proyectos verificados
              </h2>
              <p className="mt-2 text-base text-[#57534E] leading-relaxed">
                Capturas reales, funcionalidades comprobadas en código fuente y desglose de contribución personal.
              </p>
            </div>

            {/* 1. Proyecto Destacado a gran escala */}
            <FeaturedProject project={featured} />

            {/* 2. Proyectos compactos */}
            <div className="space-y-4">
              {compactProjects.map((project) => (
                <CompactProject key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. EXPERIENCIA TÉCNICA
           ======================================================== */}
        <SkillsSection />

        {/* ========================================================
            4. CONTACTO Y ENLACES
           ======================================================== */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
