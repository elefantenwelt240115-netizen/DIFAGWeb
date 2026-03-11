"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [showYouTube, setShowYouTube] = useState(false);

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
            {showYouTube ? (
              <iframe
                src="https://www.youtube.com/embed/2MnVsF-XVsc?autoplay=1&start=323"
                title="Deutsche Investitions- und Förderberatung AG"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <>
                <video
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster=""
                  className="absolute inset-0 w-full h-full object-cover"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                >
                  <source src="/images/YouTube.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                  <button
                    onClick={() => setShowYouTube(true)}
                    className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="h-16 w-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-7 w-7 text-navy fill-navy ml-1" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      Video ansehen
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
