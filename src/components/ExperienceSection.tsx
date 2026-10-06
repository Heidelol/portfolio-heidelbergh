import { TECHNICAL_EXPERIENCE, COMPLEMENTARY_EXPERIENCE } from "@/data/projects";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20 border-b border-[#E7E5E4]">
      <div className="container-editorial">
        {/* Encabezado de sección */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
            Trayectoria
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            Experiencia profesional
          </h2>
          <p className="mt-2 text-base text-[#57534E] leading-relaxed">
            Experiencia en desarrollo Front End y Full Stack desde 2021, colaborando en equipos ágiles remotos y proyectos freelance.
          </p>
        </div>

        {/* 1. Experiencia técnica principal */}
        <div className="space-y-12 mb-16">
          {TECHNICAL_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pt-8 border-t border-[#E7E5E4] first:border-t-0 first:pt-0"
            >
              {/* Columna izquierda: Rol, empresa, periodo */}
              <div className="lg:col-span-5">
                <span className="text-xs font-mono text-[#78716C] block mb-1">
                  {exp.period} · {exp.location}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-[#0A2540] mt-0.5 mb-3">
                  {exp.company}
                </p>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {exp.description}
                </p>

                {exp.technologies && (
                  <div className="mt-4">
                    <span className="text-xs font-mono text-[#78716C] block mb-1">
                      Stack utilizado:
                    </span>
                    <p className="text-xs font-mono text-[#1C1917]">
                      {exp.technologies.join(" · ")}
                    </p>
                  </div>
                )}
              </div>

              {/* Columna derecha: Responsabilidades y logros técnicos */}
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-[#78716C] block mb-2">
                  Responsabilidades:
                </span>
                <ul className="space-y-2.5 text-sm text-[#57534E]">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-[#0A2540] select-none">—</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Experiencia complementaria (compacta y secundaria) */}
        <div className="pt-10 border-t border-[#E7E5E4]">
          <div className="max-w-2xl mb-8">
            <h3 className="text-lg font-bold text-[#1C1917] tracking-tight mb-1">
              Experiencia complementaria
            </h3>
            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
              Experiencia adicional en gestión y coordinación de equipos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPLEMENTARY_EXPERIENCE.map((comp, cIdx) => (
              <div
                key={cIdx}
                className="p-4 bg-[#F5F5F4]/60 border border-[#E7E5E4] rounded-sm"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4 className="text-sm font-semibold text-[#1C1917]">
                    {comp.role}
                  </h4>
                  <span className="text-xs font-mono text-[#78716C] flex-shrink-0">
                    {comp.period}
                  </span>
                </div>
                <p className="text-xs font-medium text-[#0A2540] mb-2">
                  {comp.organization} · {comp.location}
                </p>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {comp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
