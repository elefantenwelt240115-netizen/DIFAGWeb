"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_landingpage_slider_01.jpg",
  "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_landingpage_slider_02.jpg",
  "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_landingpage_slider_03.jpg",
];

// Each slide gets a different Ken Burns direction
const kenBurns = [
  "origin-center scale-100 group-data-[active]:scale-110",
  "origin-top-left scale-110 group-data-[active]:scale-100",
  "origin-bottom-right scale-100 group-data-[active]:scale-[1.12]",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-silk">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.2] mb-6">
              Finanzielle Freiheit genießen
              <br />
              <span className="text-gold">mit staatlicher Förderung.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              Wir finden alle staatlichen Förderungen, die Ihnen zustehen –
              komplett kostenlos und unverbindlich!
            </p>

            {/* Benefit checklist */}
            <div className="space-y-4 mb-10">
              {[
                "Top-Expertise im Förderdschungel",
                "Beratung, die zu Ihrer Situation passt",
                "Clever sparen, Vermögen aufbauen",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <svg className="h-3.5 w-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-bold rounded-full text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Unverbindliches Gespräch vereinbaren
            </a>

            {/* Trust badge with profile pictures */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/images/Profile (${i}).jpg`}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border-2 border-white/30 object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Über 30.000 Kund:innen
                </p>
                <p className="text-white/60 text-xs">
                  vertrauen unseren Förderexpert:innen
                </p>
              </div>
            </div>
          </div>

          {/* Hero Image Slider with Ken Burns */}
          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              {slides.map((src, i) => (
                <div
                  key={i}
                  className="group absolute inset-0"
                  data-active={i === current ? "" : undefined}
                >
                  <Image
                    src={src}
                    alt="Förderberatung"
                    fill
                    className={`object-cover transition-all duration-[6000ms] ease-linear ${kenBurns[i]} ${
                      i === current ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-1000`}
                    style={{
                      transitionProperty: "opacity, transform",
                      transitionDuration: i === current ? "1000ms, 6000ms" : "1000ms, 6000ms",
                    }}
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute -bottom-1 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: "120px" }}>
          <path
            d="M0,50 C360,110 720,0 1080,50 C1260,75 1380,65 1440,50 L1440,150 L0,150 Z"
            fill="#f0f5f9"
          />
        </svg>
      </div>
    </section>
  );
}
