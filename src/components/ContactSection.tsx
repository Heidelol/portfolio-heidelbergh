import { PROFILE_DATA } from "@/data/projects";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
            Contacto & GitHub
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mb-4">
            Conversación sobre vacantes Front End
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed mb-8">
            Puedes consultar el código fuente de los proyectos, la estructura modular y los registros de commits directamente en mi perfil de GitHub.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-10">
            <a
              href={PROFILE_DATA.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-editorial text-lg font-semibold"
              aria-label="Perfil de GitHub @Heidelol (abre en nueva pestaña)"
            >
              github.com/{PROFILE_DATA.github.handle} ↗
            </a>
            <span className="text-xs font-mono text-[#78716C]">
              (Canal público verificado para revisión de código)
            </span>
          </div>

          <div className="border-t border-[#E7E5E4] pt-6 text-xs text-[#78716C] leading-relaxed">
            <span className="font-mono text-[#1C1917] block mb-1">
              Nota sobre datos de contacto:
            </span>
            <p>
              El correo electrónico personal y el perfil de LinkedIn se encuentran reservados para revisión y no se despliegan como enlaces ficticios. Para contacto inicial sobre oportunidades laborales, puedes utilizar la mensajería de GitHub en{" "}
              <a
                href={PROFILE_DATA.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1917] underline hover:text-[#0A2540] transition-editorial"
              >
                @{PROFILE_DATA.github.handle}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
