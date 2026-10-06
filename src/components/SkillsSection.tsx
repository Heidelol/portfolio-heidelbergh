import { TECHNICAL_EXPERIENCE } from "@/data/projects";

export function SkillsSection() {
  return (
    <section id="experiencia" className="py-20 bg-white border-t border-b border-slate-200">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
            Habilidades comprobadas
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Experiencia técnica respaldada por proyectos
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Cada competencia enumerada aquí proviene directamente de la implementación, arquitectura y resolución de problemas en el código de los proyectos presentados. Sin métricas abstractas ni tecnologías no acreditadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECHNICAL_EXPERIENCE.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                {group.category}
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {group.description}
              </p>

              <div className="space-y-3.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-white rounded-lg border border-slate-200/90 shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-600" aria-hidden="true" />
                        )}
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal">
                      <strong className="text-slate-700">Evidencia:</strong> {skill.context}
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
