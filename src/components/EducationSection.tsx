import { EDUCATION_DATA, LANGUAGES_DATA } from "@/data/projects";

export function EducationSection() {
  return (
    <section id="formacion" className="py-20 border-b border-[#E7E5E4]">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
            Preparación
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            Formación e idiomas
          </h2>
          <p className="mt-2 text-base text-[#57534E] leading-relaxed">
            Formación académica y técnica enfocada en desarrollo web y capacidades lingüísticas profesionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Educación formal y bootcamps */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#78716C] mb-4">
              Estudios
            </h3>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="pb-5 border-b border-[#E7E5E4] last:border-b-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold text-[#1C1917]">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono text-[#78716C] flex-shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#0A2540] mb-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-[#57534E]">
                  {edu.status}
                </p>
              </div>
            ))}
          </div>

          {/* Idiomas */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#78716C] mb-4">
              Idiomas
            </h3>
            <div className="space-y-4">
              {LANGUAGES_DATA.map((lang, idx) => (
                <div key={idx} className="p-4 bg-[#F5F5F4]/60 border border-[#E7E5E4] rounded-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1C1917]">
                      {lang.language}
                    </span>
                    <span className="text-xs font-mono text-[#0A2540] font-semibold">
                      {lang.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
