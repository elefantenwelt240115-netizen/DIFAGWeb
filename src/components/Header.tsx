"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

function getAvailability(): { available: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  const openTime = 8 * 60 + 45; // 8:45
  const closeWeekday = 16 * 60; // 16:00
  const closeFriday = 13 * 60;  // 13:00

  // Check if currently within business hours
  if (day >= 1 && day <= 4 && time >= openTime && time < closeWeekday) {
    return { available: true, label: "Jetzt erreichbar" };
  }
  if (day === 5 && time >= openTime && time < closeFriday) {
    return { available: true, label: "Jetzt erreichbar" };
  }

  // Outside hours - determine next business day
  if (day === 5 && time >= closeFriday) {
    return { available: false, label: "Montag erreichbar" };
  }
  if (day === 6) {
    return { available: false, label: "Montag erreichbar" };
  }
  if (day === 0) {
    return { available: false, label: "Montag erreichbar" };
  }
  // Weekday before opening or after closing
  if (time < openTime) {
    return { available: false, label: "Heute erreichbar" };
  }
  // After close Mon-Thu
  return { available: false, label: "Morgen erreichbar" };
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [availability, setAvailability] = useState<{ available: boolean; label: string } | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    setAvailability(getAvailability());
    const interval = setInterval(() => setAvailability(getAvailability()), 60000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
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

        {/* Right side: Ansprechpartner + Phone + Status */}
        <div className="flex items-center gap-4">
          <Image
            src="https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_navigation_ansprechpartner.png"
            alt="Ihre persönlichen Ansprechpartner bei der DIFAG"
            width={100}
            height={40}
            className="hidden lg:block h-10 w-auto"
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
          </a>
          {availability && (
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-medium">
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  availability.available
                    ? "bg-emerald-400"
                    : "bg-orange-400"
                }`}
              />
              <span className={scrolled ? "text-navy/60" : "text-white/70"}>
                {availability.label}
              </span>
            </span>
          )}

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
              {availability && (
                <span className="flex items-center gap-1.5 text-xs font-medium text-navy/60">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${
                      availability.available ? "bg-emerald-400" : "bg-orange-400"
                    }`}
                  />
                  {availability.label}
                </span>
              )}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
