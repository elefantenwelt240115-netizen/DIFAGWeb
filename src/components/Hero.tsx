"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/hero/explaining-project-points.jpg",
    blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAjEAACAAUCBwAAAAAAAAAAAAABAgADBAUREiETIjFBYYGx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQADAQEAAAAAAAAAAAAAAAAAASECEf/aAAwDAQACEQMRAD8AqppE1qmtqZZZm0cNJRblYHbP2ErctUlMyKqKJY0pkddu/uCLa7La5pViCAuCD5h6zktQAk5JJ3MTl9FyH//Z",
  },
  {
    src: "/images/hero/close-up-smiley-people-work.jpg",
    blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBf/EAB8QAAIBBAIDAAAAAAAAAAAAAAECAwAEERIhMUFCUf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAXEQEBAQEAAAAAAAAAAAAAAAABABES/9oADAMBAAIRAxEAPwAbJao1rJkPyze2oPNRTsstsUiTYIoOx4ZGHRyfBrRs0WV3aRQ7fWGTTLuNGEuyKdtQcjuj4DI6Uv/Z",
  },
  {
    src: "/images/hero/medium-shot-family-video-conference.jpg",
    blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwT/xAAgEAEAAgICAQUAAAAAAAAAAAABAhEAAxMhMRIyQWGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAQEBAQAAAAAAAAAAAAAAAAEAIVH/2gAMAwEAAhEDEQA/AJDTE6ierZyFK9V84W3VKMm01kdcu797fTX45VvhEg1EPPgwBePYW0IH1hJyUcv/2Q==",
  },
  {
    src: "/images/hero/portrait-young-blond-smiling-woman-studying-home-remote-education-concept-connects-online.jpg",
    blur: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAED/8QAIRAAAgICAgEFAAAAAAAAAAAAAQIDEQAEBRNBExQhMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AMo9n2sIIj7lifjEbR7a6biXSqWMTGr/AA4rhI45NKJpEVz0+2F+Tk5VV9AChRkIIrwFNZWVKFZ//9k=",
  },
];

// Each slide gets a different Ken Burns direction
const kenBurns = [
  { from: "scale(1)", to: "scale(1.12)", origin: "center" },
  { from: "scale(1.1)", to: "scale(1)", origin: "top left" },
  { from: "scale(1)", to: "scale(1.12)", origin: "bottom right" },
  { from: "scale(1.1)", to: "scale(1)", origin: "center right" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay so first slide starts from "from" and transitions to "to"
    const kickoff = requestAnimationFrame(() => {
      requestAnimationFrame(() => setMounted(true));
    });
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      cancelAnimationFrame(kickoff);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-silk">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-6">
              Finanzielle Freiheit genießen
              <br />
              <span className="text-gold">mit staatlicher Förderung.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-8 max-w-xl leading-relaxed">
              Wir finden alle staatlichen Förderungen, die Ihnen zustehen –
              komplett kostenlos und unverbindlich!
            </p>

            {/* Benefit checklist */}
            <div className="space-y-3 mb-8">
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
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gold text-navy font-bold rounded-full text-base sm:text-lg hover:bg-gold-light transition-[background-color,box-shadow,transform] duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Unverbindliches Gespräch vereinbaren
            </a>

            {/* Trust badge with profile pictures */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Image
                    key={i}
                    src={`/images/Kunden/Profile (${i}).jpg`}
                    alt="Zufriedene Kund:innen der DIFAG"
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full border-2 border-white/30 object-cover"
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
              {slides.map((slide, i) => {
                const active = i === current;
                const kb = kenBurns[i];
                const shouldAnimate = active && mounted;
                return (
                  <div key={i} className="absolute inset-0">
                    <Image
                      src={slide.src}
                      alt="Förderberatung – Beratungsgespräch für staatliche Zuschüsse"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={slide.blur}
                      style={{
                        opacity: active ? 1 : 0,
                        transform: shouldAnimate ? kb.to : kb.from,
                        transformOrigin: kb.origin,
                        transition: active
                          ? "opacity 1s ease, transform 6s linear"
                          : "opacity 1s ease, transform 0s linear",
                      }}
                      priority={i === 0}
                    />
                  </div>
                );
              })}
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
