"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

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
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-navy cursor-pointer group"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              onEnded={() => setPlaying(false)}
            >
              <source src="/images/YouTube.webm" type="video/webm" />
            </video>

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              } bg-navy/40`}
            >
              <div className="h-20 w-20 rounded-full bg-gold flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                {playing ? (
                  <Pause className="h-8 w-8 text-navy fill-navy" />
                ) : (
                  <Play className="h-8 w-8 text-navy fill-navy ml-1" />
                )}
              </div>
            </div>
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
