import { COMPETENCES_DATA } from "@/data/projects";

export function SkillsSection() {
  return (
    <section id="competencias" className="py-20 border-b border-[#E7E5E4]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
            Habilidades Técnicas
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            Competencias
          </h2>
          <p className="mt-2 text-base text-[#57534E] leading-relaxed">
            Organización de capacidades técnicas basadas en experiencia profesional y proyectos desarrollados.
          </p>
        </div>

        <div className="space-y-12">
          {COMPETENCES_DATA.map((group, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pt-8 border-t border-[#E7E5E4] first:border-t-0 first:pt-0"
            >
              {/* Título y descripción del grupo */}
              <div className="lg:col-span-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] tracking-tight mb-2">
                  {group.groupName}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {group.summary}
                </p>
              </div>

              {/* Lista limpia de competencias */}
              <div className="lg:col-span-7 space-y-4">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="pb-3 border-b border-[#E7E5E4]/60 last:border-b-0">
                    <h4 className="text-sm font-semibold text-[#1C1917] mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {item.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Nota sobre herramientas de asistencia en desarrollo */}
          <div className="pt-8 border-t border-[#E7E5E4] max-w-3xl">
            <h4 className="text-sm font-semibold text-[#1C1917] mb-1">
              Herramientas de apoyo en el flujo de trabajo
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Integración de herramientas como Codex y Claude como apoyo en análisis de requerimientos, scaffolding de código, depuración y revisión técnica, manteniendo siempre la toma de decisiones, arquitectura y criterio bajo responsabilidad personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
