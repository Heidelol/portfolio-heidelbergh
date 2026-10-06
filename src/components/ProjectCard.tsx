import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusBadge = () => {
    switch (project.status) {
      case "published":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.statusLabel}
          </span>
        );
      case "in_development":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {project.statusLabel}
          </span>
        );
      case "proposal_demo":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            {project.statusLabel}
          </span>
        );
    }
  };

  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Vista previa con captura real */}
      <div className="relative w-full aspect-video bg-slate-100 border-b border-slate-200 overflow-hidden group">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 text-xs font-semibold tracking-wide uppercase bg-slate-900/80 text-white rounded-md backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        {project.image.isRealCapture && (
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="px-2 py-0.5 text-[11px] font-medium bg-white/95 text-slate-700 rounded border border-slate-200/90 shadow-sm backdrop-blur-sm">
              Captura real de interfaz
            </span>
          </div>
        )}
      </div>

      {/* Contenido descriptivo */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-3">{getStatusBadge()}</div>

          <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-500 mb-4">
            {project.subtitle}
          </p>

          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tecnologías comprobadas */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Tecnologías comprobadas en código
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md border border-slate-200"
                >
                  {tech.badge}
                </span>
              ))}
            </div>
          </div>

          {/* Funcionalidades verificadas */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Funcionalidades verificadas
            </h4>
            <ul className="space-y-1.5 text-sm text-slate-600">
              {project.verifiedFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-600 mt-1 flex-shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contribución personal */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 mb-5 text-sm">
            <span className="font-semibold text-slate-900 block mb-1">
              Contribución Front End comprobada:
            </span>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {project.personalContribution}
            </p>
          </div>
        </div>

        {/* Repositorio & Enlaces verificados */}
        <div className="pt-4 border-t border-slate-100 mt-2">
          {project.repository?.available && project.repository.url ? (
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <a
                href={project.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
                aria-label={`Ver repositorio de ${project.title} en GitHub`}
              >
                <svg
                  className="w-4 h-4"
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
                Repositorio en GitHub
              </a>
              <span className="text-xs text-slate-500">
                Rama: <code className="font-mono text-slate-700 bg-slate-100 px-1 py-0.5 rounded">{project.repository.branch || "main"}</code>
              </span>
            </div>
          ) : (
            <div className="p-2.5 rounded bg-amber-50/60 border border-amber-200/60 text-xs text-amber-800">
              <span className="font-semibold block mb-0.5">Estado del código:</span>
              {project.repository?.note || "Código local verificado."}
            </div>
          )}

          {/* Información pendiente documentada */}
          {project.pendingItems && project.pendingItems.length > 0 && (
            <details className="mt-3 text-xs text-slate-500 cursor-pointer">
              <summary className="font-medium text-slate-600 hover:text-slate-900">
                Detalles pendientes de publicación ({project.pendingItems.length})
              </summary>
              <ul className="mt-2 pl-4 list-disc space-y-1 text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200">
                {project.pendingItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
      </div>
    </article>
  );
}
