import { PROFILE_INFO } from "@/data/projects";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold text-base">
              {PROFILE_INFO.name} · {PROFILE_INFO.role}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Desarrollado con Next.js, React, TypeScript y Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub (@{PROFILE_INFO.githubUsername})
            </a>
            <span className="text-slate-700">·</span>
            <a href="#inicio" className="text-slate-400 hover:text-white transition-colors">
              Volver arriba ↑
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} {PROFILE_INFO.name}. Todos los proyectos documentan contribución comprobada.</p>
          <p className="text-[11px] text-slate-400">
            Diseñado con foco accesible y respeto a movimiento reducido.
          </p>
        </div>
      </div>
    </footer>
  );
}
