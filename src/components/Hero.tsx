import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-silk">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-in-up">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Finanzielle Freiheit
              <br />
              genießen –
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
      <div className="absolute bottom-0 left-0 right-0 z-10">
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
