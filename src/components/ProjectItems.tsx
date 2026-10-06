import Image from "next/image";
import { Project } from "@/data/projects";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="border-b border-[#E7E5E4] pb-12 lg:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Captura destacada */}
        <div className="lg:col-span-7 group">
          {project.image && (
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
          )}
          <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-[#78716C]">
            <span>Captura real de interfaz</span>
            <span>{project.category} · {project.year}</span>
          </div>
        </div>

        {/* Información editorial */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0A2540] font-semibold">
              Proyecto Destacado
            </span>
            <span className="text-[#D6D3D1]">·</span>
            <span className="text-xs font-mono text-[#78716C]">
              {project.statusLabel}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] mb-2">
            {project.title}
          </h3>

          <p className="text-base text-[#57534E] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Decisión técnica */}
          <div className="mb-4 border-l-2 border-[#0A2540] pl-3 py-0.5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1C1917] block mb-1">
              Decisión técnica
            </span>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              {project.technicalDecision}
            </p>
          </div>

          {/* Contribución personal */}
          <div className="mb-4 text-xs sm:text-sm text-[#57534E] leading-relaxed">
            <strong className="text-[#1C1917] block mb-1">Mi trabajo:</strong>
            <p>{project.personalContribution}</p>
          </div>

          {/* Tecnologías */}
          <div className="mb-5">
            <span className="text-xs font-mono text-[#78716C] mr-2">Stack:</span>
            <span className="text-xs font-mono text-[#1C1917] tracking-tight">
              {project.technologies.join(" · ")}
            </span>
          </div>

          {/* Enlaces a proyecto */}
          <div className="pt-4 border-t border-[#E7E5E4] flex flex-wrap items-center gap-4">
            {project.link?.url && (
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-semibold text-[#0A2540]"
              >
                {project.link.label} ↗
              </a>
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
    <article className="border-b border-[#E7E5E4] pb-10 pt-8">
      <div className={`grid grid-cols-1 ${project.image ? "md:grid-cols-12" : ""} gap-6 md:gap-8 items-start`}>
        {/* Captura si existe */}
        {project.image && (
          <div className="md:col-span-5 group">
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
        )}

        {/* Detalles del proyecto */}
        <div className={`${project.image ? "md:col-span-7" : "max-w-3xl"} flex flex-col justify-between`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-[#78716C]">
                {project.statusLabel}
              </span>
              <span className="text-[#D6D3D1]">·</span>
              <span className="text-xs font-mono text-[#78716C]">
                {project.category} · {project.year}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] mb-2">
              {project.title}
            </h3>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed mb-3">
              {project.description}
            </p>

            {/* Decisión técnica */}
            {project.technicalDecision && (
              <div className="mb-3 pl-3 border-l-2 border-[#D6D3D1]">
                <span className="text-xs font-mono text-[#1C1917] font-medium block mb-0.5">
                  Decisión técnica:
                </span>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {project.technicalDecision}
                </p>
              </div>
            )}

            {/* Contribución */}
            {project.personalContribution && (
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-3">
                <strong className="text-[#1C1917] font-medium">Mi trabajo:</strong> {project.personalContribution}
              </p>
            )}

            <div className="mb-3">
              <span className="text-xs font-mono text-[#78716C] mr-2">Stack:</span>
              <span className="text-xs font-mono text-[#1C1917]">
                {project.technologies.join(" · ")}
              </span>
            </div>
          </div>

          {/* Enlace público o código */}
          {project.link?.url && (
            <div className="pt-3 border-t border-[#E7E5E4] flex flex-wrap items-center gap-4">
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-semibold text-[#0A2540]"
              >
                {project.link.label} ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
