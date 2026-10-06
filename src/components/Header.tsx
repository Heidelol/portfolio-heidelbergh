"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PROFILE_DATA } from "@/data/projects";

const SECTIONS = [
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "competencias", label: "Competencias" },
  { id: "formacion", label: "Formación" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sections = ["inicio", "proyectos", "experiencia", "competencias", "formacion", "contacto"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#E7E5E4] transition-colors duration-200">
      <div className="container-editorial flex items-center justify-between h-16">
        <Link
          href="#inicio"
          className="group flex items-baseline gap-2 text-[#1C1917] no-underline focus-visible:outline-none flex-shrink-0"
          aria-label={`Ir al inicio - ${PROFILE_DATA.fullName}`}
        >
          <span className="font-semibold tracking-tight text-base sm:text-lg group-hover:text-[#0A2540] transition-colors duration-200 whitespace-nowrap flex-shrink-0">
            {PROFILE_DATA.fullName}
          </span>
          <span className="text-xs text-[#78716C] font-mono tracking-normal hidden xl:inline whitespace-nowrap flex-shrink-0">
            / Front End
          </span>
        </Link>

        {/* Navegación Desktop (visible a partir de lg: 1024px) */}
        <nav
          className="hidden lg:flex items-center gap-6 flex-shrink-0"
          aria-label="Navegación principal"
        >
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`text-sm tracking-tight transition-editorial py-1 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "text-[#0A2540] font-semibold border-b-2 border-[#0A2540]"
                    : "text-[#57534E] hover:text-[#1C1917]"
                }`}
              >
                {sec.label}
              </a>
            );
          })}

          <a
            href={PROFILE_DATA.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-medium text-[#1C1917] hover:text-[#0A2540] px-2.5 py-1 rounded border border-[#D6D3D1] hover:border-[#1C1917] transition-editorial whitespace-nowrap flex-shrink-0"
            aria-label="Perfil de GitHub (abre en nueva pestaña)"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Botón menú móvil (visible por debajo de lg) con espacio táctil amplio (min 44x44px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 text-[#1C1917] hover:bg-[#F5F5F4] rounded transition-editorial flex-shrink-0"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú principal"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 16.5h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E5E4] bg-[#FAFAF9] px-6 py-4 space-y-3">
          {SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={closeMenu}
              className="block py-2 text-base font-medium text-[#1C1917] hover:text-[#0A2540] transition-editorial"
            >
              {sec.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E7E5E4] flex flex-col gap-2">
            <a
              href={PROFILE_DATA.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-1.5 py-2 text-sm font-mono text-[#57534E] hover:text-[#1C1917]"
            >
              github.com/{PROFILE_DATA.contact.githubHandle} ↗
            </a>
            <a
              href={PROFILE_DATA.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-1.5 py-2 text-sm font-mono text-[#57534E] hover:text-[#1C1917]"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
