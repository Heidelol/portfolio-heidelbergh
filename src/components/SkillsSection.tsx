import { TECHNICAL_COMPETENCES } from "@/data/projects";

export function SkillsSection() {
  return (
    <section id="experiencia" className="py-20 border-b border-[#E7E5E4]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
            Habilidades Técnicas
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            Experiencia técnica respaldada por proyectos
          </h2>
          <p className="mt-3 text-base text-[#57534E] leading-relaxed">
            Cada área refleja soluciones implementadas directamente en el código de los proyectos presentados. Sin tecnologías no acreditadas ni autoevaluaciones abstractas.
          </p>
        </div>

        <div className="space-y-12">
          {TECHNICAL_COMPETENCES.map((comp, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pt-8 border-t border-[#E7E5E4] first:border-t-0 first:pt-0"
            >
              {/* Título y descripción del área */}
              <div className="lg:col-span-5">
                <h3 className="text-lg sm:text-xl font-bold text-[#1C1917] tracking-tight mb-2">
                  {comp.area}
                </h3>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {comp.description}
                </p>
              </div>

              {/* Lista limpia de elementos comprobados */}
              <div className="lg:col-span-7 space-y-4">
                {comp.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="pb-3 border-b border-[#E7E5E4]/60 last:border-b-0">
                    <h4 className="text-sm font-semibold text-[#1C1917] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      <span className="text-[#78716C] font-mono mr-1">Evidencia:</span>
                      {item.evidence}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
