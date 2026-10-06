import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Heidelbergh · Desarrollador Front End | React, TypeScript & Next.js",
  description:
    "Portafolio profesional de Heidelbergh, desarrollador Front End especializado en React, Next.js, TypeScript, integración de APIs seguras, autenticación con Supabase y diseño responsive.",
  keywords: [
    "Desarrollador Front End",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Web Developer",
    "Frontend México"
  ],
  authors: [{ name: "Heidelbergh", url: "https://github.com/Heidelol" }],
  creator: "Heidelbergh",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Heidelbergh · Desarrollador Front End",
    description:
      "Portafolio técnico enfocado en desarrollo de aplicaciones web con React, TypeScript, APIs y diseño accesible.",
    siteName: "Portafolio Front End — Heidelbergh",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-900">
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
