import { PROFILE_DATA } from "@/data/projects";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#E7E5E4] py-12 text-xs text-[#78716C] bg-[#FAFAF9]">
      <div className="container-editorial flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div>
          <p className="font-semibold text-[#1C1917]">
            {PROFILE_DATA.fullName} · {PROFILE_DATA.title}
          </p>
          <p className="mt-1 font-mono text-[11px] text-[#78716C]">
            React · Next.js · TypeScript · Supabase · {PROFILE_DATA.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={PROFILE_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#57534E] hover:text-[#1C1917] transition-editorial"
          >
            GitHub
          </a>
          <a
            href={PROFILE_DATA.contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#57534E] hover:text-[#1C1917] transition-editorial"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE_DATA.contact.emailLink}
            className="text-[#57534E] hover:text-[#1C1917] transition-editorial"
          >
            Correo
          </a>
          <a href="#inicio" className="text-[#57534E] hover:text-[#1C1917] transition-editorial">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
