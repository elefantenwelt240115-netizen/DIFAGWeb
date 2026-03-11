"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/images/difag.png"
            alt="DIFAG Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <p
              className={`text-sm font-bold leading-tight transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              Deutsche Investitions-
            </p>
            <p
              className={`text-sm font-bold leading-tight transition-colors ${
                scrolled ? "text-navy" : "text-white"
              }`}
            >
              und Förderberatung AG
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#vorteile"
            className={`text-sm font-medium transition-colors hover:text-gold ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Vorteile
          </a>
          <a
            href="#leistungen"
            className={`text-sm font-medium transition-colors hover:text-gold ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Leistungen
          </a>
          <a
            href="#vertrauen"
            className={`text-sm font-medium transition-colors hover:text-gold ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Referenzen
          </a>
          <a
            href="#kontakt"
            className={`text-sm font-medium transition-colors hover:text-gold ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            Kontakt
          </a>
        </nav>

        {/* Right side: Ansprechpartner + Phone + CTA */}
        <div className="flex items-center gap-4">
          <Image
            src="https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_navigation_ansprechpartner.png"
            alt="Ihre Ansprechpartner"
            width={80}
            height={40}
            className="hidden lg:block h-10 w-auto rounded-full"
          />
          <a
            href="tel:021198070110"
            suppressHydrationWarning
            className={`hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            <span suppressHydrationWarning>0211-980701-10</span>
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <nav className="flex flex-col px-6 py-4 gap-3">
            <a
              href="#vorteile"
              onClick={() => setMenuOpen(false)}
              className="text-navy font-medium py-2 hover:text-gold transition-colors"
            >
              Vorteile
            </a>
            <a
              href="#leistungen"
              onClick={() => setMenuOpen(false)}
              className="text-navy font-medium py-2 hover:text-gold transition-colors"
            >
              Leistungen
            </a>
            <a
              href="#vertrauen"
              onClick={() => setMenuOpen(false)}
              className="text-navy font-medium py-2 hover:text-gold transition-colors"
            >
              Referenzen
            </a>
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="text-navy font-medium py-2 hover:text-gold transition-colors"
            >
              Kontakt
            </a>
            <a
              href="tel:021198070110"
              className="flex items-center gap-2 text-navy font-semibold py-2"
            >
              <Phone className="h-4 w-4" />
              0211-980701-10
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
