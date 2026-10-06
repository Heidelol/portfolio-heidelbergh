import { PROFILE_INFO } from "@/data/projects";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-700 mb-2">
            Contacto & Enlaces Profesionales
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Conversemos sobre vacantes Front End
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Puedes explorar el código fuente, la estructura de commits y el historial de desarrollo de mis proyectos directamente a través de GitHub.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* GitHub Verificado */}
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm"
              aria-label="Ir al perfil de GitHub de Heidelbergh (abre en nueva pestaña)"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub: github.com/{PROFILE_INFO.githubUsername}
            </a>
          </div>

          {/* Tarjeta de estado de datos de contacto */}
          <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 text-left max-w-lg mx-auto shadow-2xs">
            <div className="flex items-start gap-3">
              <span className="p-1 rounded bg-sky-50 text-sky-700 font-mono text-xs font-bold mt-0.5">
                INFO
              </span>
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-semibold text-slate-800">
                  Canales de contacto directo:
                </p>
                <p>
                  Por política de veracidad de este portafolio, el correo electrónico y perfil de LinkedIn se encuentran actualmente reservados y pendientes de confirmación para su publicación abierta.
                </p>
                <p className="text-slate-500 pt-1">
                  Para reclutamiento y contacto inicial, utiliza la mensajería de GitHub en{" "}
                  <a
                    href={PROFILE_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sky-700 underline hover:text-sky-900"
                  >
                    @Heidelol
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
