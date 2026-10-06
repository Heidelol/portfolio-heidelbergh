import type { Metadata, Viewport } from "next";
import { Manrope, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fontManrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
});

const fontGeist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  weight: ["400", "500", "600"],
});

const fontGeistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Heidelbergh · Desarrollador Front End | React, TypeScript & Next.js",
  description:
    "Portafolio técnico de Heidelbergh. Proyectos verificados en React, Next.js, TypeScript, integración de APIs y autenticación con Supabase.",
  keywords: [
    "Heidelbergh",
    "Desarrollador Front End",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase"
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
      "Portafolio Front End personal centrado en proyectos: React, TypeScript, APIs y diseño responsive.",
    siteName: "Heidelbergh · Portafolio",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fontManrope.variable} ${fontGeist.variable} ${fontGeistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAF9] text-[#1C1917] selection:bg-sky-100 selection:text-sky-950 antialiased">
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0F172A] focus:text-white focus:text-sm focus:font-medium focus:rounded-sm focus:shadow-md focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
