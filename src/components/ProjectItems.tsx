import Image from "next/image";
import { Project } from "@/data/projects";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="border-b border-[#E7E5E4] pb-16 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Imagen destacada de gran presencia */}
        <div className="lg:col-span-7 group">
          <div className="relative w-full aspect-[16/10] bg-[#F5F5F4] border border-[#E7E5E4] overflow-hidden">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top project-image-hover"
              priority
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-[#78716C]">
            <span>Captura real de interfaz</span>
            <span>{project.category} · {project.year}</span>
          </div>
        </div>

        {/* Información editorial del proyecto destacado */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0A2540] font-semibold">
              Proyecto Principal
            </span>
            <span className="text-[#D6D3D1]">·</span>
            <span className="text-xs font-mono text-[#78716C]">
              {project.statusLabel}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mb-3">
            {project.title}
          </h3>

          <p className="text-base text-[#57534E] leading-relaxed mb-6">
            {project.summary}
          </p>

          {/* Contribución Front End */}
          <div className="mb-6 border-l-2 border-[#0A2540] pl-4 py-0.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1C1917] block mb-1">
              Contribución técnica
            </span>
            <p className="text-sm text-[#57534E] leading-relaxed">
              {project.personalContribution}
            </p>
          </div>

          {/* Tecnologías en texto/mono limpio sin píldoras de colores */}
          <div className="mb-6">
            <span className="text-xs font-mono text-[#78716C] block mb-2">
              Tecnologías en código:
            </span>
            <p className="text-sm font-mono text-[#1C1917] tracking-tight">
              {project.technologies.join("  /  ")}
            </p>
          </div>

          {/* Funcionalidades clave */}
          <div className="mb-8">
            <span className="text-xs font-mono text-[#78716C] block mb-2">
              Funcionalidades comprobadas:
            </span>
            <ul className="space-y-1.5 text-sm text-[#57534E]">
              {project.verifiedFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#0A2540] select-none">—</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces reales o nota de estado */}
          <div className="pt-4 border-t border-[#E7E5E4] flex flex-wrap items-center gap-4">
            {project.repository?.available && project.repository.url ? (
              <a
                href={project.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-semibold"
              >
                {project.repository.label} ↗
              </a>
            ) : (
              <span className="text-xs font-mono text-[#78716C]">
                {project.repository?.label || "Código local verificado"}
              </span>
            )}

            {project.pendingItems && project.pendingItems.length > 0 && (
              <details className="text-xs font-mono text-[#78716C] cursor-pointer">
                <summary className="hover:text-[#1C1917] transition-editorial">
                  Ver pendientes de despliegue ({project.pendingItems.length})
                </summary>
                <ul className="mt-2 space-y-1 text-[#57534E] pl-2 border-l border-[#D6D3D1]">
                  {project.pendingItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

interface CompactProjectProps {
  project: Project;
}

export function CompactProject({ project }: CompactProjectProps) {
  return (
    <article className="group border-b border-[#E7E5E4] pb-12 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Captura real compacta */}
        <div className="md:col-span-5">
          <div className="relative w-full aspect-[16/10] bg-[#F5F5F4] border border-[#E7E5E4] overflow-hidden">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top project-image-hover"
              loading="lazy"
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs font-mono text-[#78716C]">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Detalles del proyecto compacto */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#78716C]">
                {project.statusLabel}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] mb-2">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-4">
              {project.summary}
            </p>

            <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed mb-4">
              <strong className="text-[#1C1917] font-medium">Aporte:</strong> {project.personalContribution}
            </p>

            <div className="mb-4">
              <span className="text-xs font-mono text-[#78716C] mr-2">Stack:</span>
              <span className="text-xs font-mono text-[#1C1917]">
                {project.technologies.join(" · ")}
              </span>
            </div>
          </div>

          {/* Enlaces directos verificados */}
          <div className="pt-3 border-t border-[#E7E5E4] flex flex-wrap items-center gap-4">
            {project.repository?.available && project.repository.url ? (
              <a
                href={project.repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-semibold"
              >
                {project.repository.label} ↗
              </a>
            ) : (
              <span className="text-xs font-mono text-[#78716C]">
                {project.repository?.label || "Código local verificado"}
              </span>
            )}

            {project.pendingItems && project.pendingItems.length > 0 && (
              <details className="text-xs font-mono text-[#78716C] cursor-pointer">
                <summary className="hover:text-[#1C1917] transition-editorial">
                  Pendientes ({project.pendingItems.length})
                </summary>
                <ul className="mt-2 space-y-1 text-[#57534E] pl-2 border-l border-[#D6D3D1]">
                  {project.pendingItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
