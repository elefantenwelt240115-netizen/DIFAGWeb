"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#kontakt"
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-3 bg-navy text-white pl-4 pr-5 py-3 rounded-l-full shadow-2xl transition-all duration-300 hover:bg-navy-light group ${
        visible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-10 w-10 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
        <Phone className="h-5 w-5 text-navy" />
      </div>
      <span className="font-semibold text-sm whitespace-nowrap hidden sm:inline">
        Gespräch vereinbaren
      </span>
    </a>
  );
}
