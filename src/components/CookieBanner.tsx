"use client";

import { useState, useEffect } from "react";

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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 animate-slide-up">
      <div className="mx-auto max-w-xl bg-white rounded-xl shadow-2xl border border-gray-100 px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between gap-3">
        <p className="text-navy/70 text-xs sm:text-sm">
          Wir nutzen Cookies.{" "}
          <a href="/datenschutz" className="text-gold underline">
            Mehr
          </a>
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-3 py-1.5 text-xs font-medium text-navy/50 hover:text-navy rounded-full border border-gray-200 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-3 py-1.5 text-xs font-bold text-navy bg-gold hover:bg-gold-light rounded-full transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
