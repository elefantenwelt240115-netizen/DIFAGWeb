"use client";

import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Einblick
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            So arbeiten wir für Sie
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Erfahren Sie in unserem Video, wie wir Ihren Förderanspruch prüfen und umsetzen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-navy">
            <video
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/YouTube.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>

          {/* Link to full YouTube video */}
          <div className="text-center mt-6">
            <a
              href="https://www.youtube.com/watch?v=2MnVsF-XVsc&t=323s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors group"
            >
              <Play className="h-5 w-5 fill-current" />
              <span className="underline underline-offset-4 decoration-gold/40 group-hover:decoration-gold">
                Vollständiges Video auf YouTube ansehen
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
