import { PROFILE_DATA } from "@/data/projects";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#0A2540] font-semibold mb-2">
            Contacto
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mb-4">
            Conversemos sobre vacantes y proyectos Front End
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed mb-8">
            Disponible para oportunidades laborales en desarrollo Front End y Full Stack. Puedes comunicarte directamente a través de correo electrónico, teléfono o redes profesionales.
          </p>

          {/* Canales de contacto directos con enlaces activos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-[#F5F5F4]/60 border border-[#E7E5E4] rounded-sm">
              <span className="text-xs font-mono text-[#78716C] block mb-1">
                Correo electrónico
              </span>
              <a
                href={PROFILE_DATA.contact.emailLink}
                className="link-editorial text-sm font-semibold"
              >
                {PROFILE_DATA.contact.email} ↗
              </a>
            </div>

            <div className="p-4 bg-[#F5F5F4]/60 border border-[#E7E5E4] rounded-sm">
              <span className="text-xs font-mono text-[#78716C] block mb-1">
                Teléfono y llamadas directas
              </span>
              <a
                href={PROFILE_DATA.contact.phoneTel}
                className="link-editorial text-sm font-semibold"
              >
                {PROFILE_DATA.contact.phoneDisplay} ↗
              </a>
            </div>

            <div className="p-4 bg-[#F5F5F4]/60 border border-[#E7E5E4] rounded-sm">
              <span className="text-xs font-mono text-[#78716C] block mb-1">
                WhatsApp
              </span>
              <a
                href={PROFILE_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-semibold"
              >
                Mensaje directo por WhatsApp ↗
              </a>
            </div>

            <div className="p-4 bg-[#F5F5F4]/60 border border-[#E7E5E4] rounded-sm">
              <span className="text-xs font-mono text-[#78716C] block mb-1">
                LinkedIn
              </span>
              <a
                href={PROFILE_DATA.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-semibold"
              >
                linkedin.com/in/heidelol ↗
              </a>
            </div>
          </div>

          {/* Perfil en GitHub y ubicación */}
          <div className="pt-6 border-t border-[#E7E5E4] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 text-xs font-mono text-[#78716C]">
            <div>
              <span className="text-[#1C1917] font-semibold">GitHub:</span>{" "}
              <a
                href={PROFILE_DATA.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A2540] underline hover:text-[#1C1917] transition-editorial"
              >
                github.com/{PROFILE_DATA.contact.githubHandle}
              </a>
            </div>
            <div>
              <span>Ubicación:</span>{" "}
              <span className="text-[#1C1917]">{PROFILE_DATA.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
