"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/global.css";
import Link from "next/link";
import { useState } from "react";
import { Menu, Close } from "@mui/icons-material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadatas: Metadata = {
  title: "CoddeX Spaceships",
  description: "Explore as categorias e modelos de espaçonaves da CoddeX."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-50 min-h-screen flex flex-col`}
      >
        {/* NAVBAR */}
        <nav className="flex justify-between items-center w-full px-6 sm:px-10 py-4 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-md border-b border-blue-100 dark:border-gray-800 sticky top-0 z-50">
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-blue-700 dark:text-blue-400 select-none">
            CoddeX{" "}
            <span className="text-gray-900 dark:text-gray-50">Spaceships</span>
          </h1>

          {/* Links (Desktop) */}
          <div className="hidden sm:flex flex-wrap gap-3 sm:gap-5 text-sm sm:text-base font-medium">
            <Link
              href="/"
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              href="/models"
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              Categorias
            </Link>
            <Link
              href="/models/spaceship/1"
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              Espaçonaves
            </Link>
          </div>

          {/* Botão Menu (Mobile) */}
          <button
            className="sm:hidden text-blue-700 dark:text-blue-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
          </button>
        </nav>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div
            className="sm:hidden flex top-17 z-50 w-full fixed flex-col items-center gap-3 bg-white/90 dark:bg-gray-900/90 border-b border-blue-100 dark:border-gray-800 py-4 animate-fade-in-down"
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 w-11/12 text-center rounded-md font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              href="/models"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 w-11/12 text-center rounded-md font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              Categorias
            </Link>
            <Link
              href="/models/spaceship/1"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 w-11/12 text-center rounded-md font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
            >
              Espaçonaves
            </Link>
          </div>
        )}

        {/* CONTEÚDO */}
        <main className="flex-1 w-full flex flex-col items-center justify-start pt-6 px-4 sm:px-8">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="mt-auto py-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-blue-100 dark:border-gray-800">
          <p>
            © {new Date().getFullYear()} CoddeX Spaceships — Criado por{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Gabriel Rodrigues
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
