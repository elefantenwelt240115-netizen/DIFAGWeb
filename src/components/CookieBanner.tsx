"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
            <Cookie className="h-5 w-5 text-gold" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-navy text-sm mb-1">
              Cookie-Einstellungen
            </p>
            <p className="text-navy/60 text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf
              unserer Webseite zu bieten.{" "}
              <a href="#" className="text-gold underline">
                Mehr erfahren
              </a>
            </p>
          </div>
          <button
            onClick={decline}
            className="p-1 text-navy/30 hover:text-navy/60 transition-colors"
            aria-label="Schließen"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={decline}
            className="px-5 py-2.5 text-sm font-semibold text-navy/60 hover:text-navy rounded-full border border-gray-200 hover:border-gray-300 transition-all"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm font-bold text-navy bg-gold hover:bg-gold-light rounded-full transition-all"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
