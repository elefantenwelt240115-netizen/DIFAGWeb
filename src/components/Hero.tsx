import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient + image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy/90 z-10" />
        <Image
          src="https://deutsche-foerderberatung.de/wp-content/uploads/2026/02/deutsche_investitionsberatung_website_startseite_header.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Für mehr Geld,
              <br />
              weniger Stress und
              <br />
              <span className="text-gold">echte Lebensqualität.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
              Lassen Sie uns gemeinsam Ihren staatlichen Förderanspruch prüfen –
              komplett kostenlos und unverbindlich!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-bold rounded-full text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                Unverbindliches Gespräch vereinbaren
              </a>
            </div>

            {/* Trust badge inline */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full bg-gradient-to-br from-gold/40 to-gold/20 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {["A", "M", "S", "K", "T"][i - 1]}
                  </div>
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

          {/* Hero Image */}
          <div className="hidden lg:block relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://deutsche-foerderberatung.de/wp-content/uploads/2026/02/deutsche_investitionsberatung_website_startseite_header.jpg"
                alt="Förderberatung im Gespräch"
                width={600}
                height={450}
                className="object-cover w-full h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5">
              <p className="text-3xl font-bold text-navy">30+</p>
              <p className="text-sm text-navy/60">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="#f0f5f9"
          />
        </svg>
      </div>
    </section>
  );
}
