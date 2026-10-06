"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="container-custom flex items-center justify-between h-16">
        <Link
          href="#inicio"
          className="group flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-lg hover:text-sky-700 transition-colors"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-white font-mono text-sm font-bold group-hover:bg-sky-600 transition-colors">
            H
          </span>
          <span className="font-semibold text-slate-900">
            Heidelbergh
            <span className="text-xs font-normal text-slate-500 block -mt-1 sm:inline sm:ml-2 sm:mt-0 sm:pl-2 sm:border-l sm:border-slate-300">
              Front End
            </span>
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Navegación principal"
        >
          <a
            href="#proyectos"
            className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          >
            Habilidades Técnicas
          </a>
          <a
            href="#contacto"
            className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
          >
            Contacto & GitHub
          </a>
          <a
            href="https://github.com/Heidelol"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-md border border-slate-300/80 transition-colors"
            aria-label="Perfil de GitHub de Heidelbergh (abre en nueva pestaña)"
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
            GitHub
          </a>
        </nav>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú principal"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
          <a
            href="#proyectos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Proyectos
          </a>
          <a
            href="#experiencia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Habilidades Técnicas
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Contacto & GitHub
          </a>
          <div className="pt-2">
            <a
              href="https://github.com/Heidelol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md"
            >
              Ver perfil en GitHub (@Heidelol)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
