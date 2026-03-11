const strengths = [
  {
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_icons_1.svg",
    title: "Fördermittel- & Zuschussprüfung",
    description:
      "Wir analysieren Ihre Situation und prüfen, welche staatlichen Förderungen Ihnen zustehen – transparent, individuell und vollständig.",
  },
  {
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_icons_2.svg",
    title: "Anspruchsermittlung & rechtliche Ausgestaltung",
    description:
      "Wir klären, ob Sie Anspruch haben und wie dieser rechtlich abgesichert werden kann.",
  },
  {
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_icons_3.svg",
    title: "Antragstellung & Behördenkorrespondenz",
    description:
      "Wir übernehmen den gesamten Prozess – vom Ausfüllen der Anträge bis zur Kommunikation mit den zuständigen Stellen.",
  },
  {
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_icons_4.svg",
    title: "Finanz- & Vermögensplanung",
    description:
      "Zusätzlich entwickeln wir langfristige Strategien, sodass Sie mit staatlicher Unterstützung Vermögen aufbauen können.",
  },
  {
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2025/11/deutsche_investitionsberatung_website_icons_5.svg",
    title: "Risikomanagement",
    description:
      "Wir entwickeln individuelle Lösungen, die Ihre finanzielle Zukunft absichern und Ihnen Stabilität geben.",
  },
];

export default function Strengths() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Unser Vorgehen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Unsere Stärken für Ihre finanzielle Zukunft
          </h2>
        </div>

        {/* Zigzag steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {strengths.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative md:flex md:items-center md:min-h-[160px]">
                  {/* Step dot on center line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex h-10 w-10 rounded-full bg-gold text-navy font-bold text-sm items-center justify-center shadow-md">
                    {i + 1}
                  </div>

                  {/* Left side */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                    {(isLeft || typeof window === "undefined") && (
                      <div className={`flex gap-5 items-start bg-bg rounded-2xl p-6 border border-gray-100 ${isLeft ? "" : "md:hidden"}`}>
                        {/* Mobile step number */}
                        <div className="flex-shrink-0 md:hidden h-8 w-8 rounded-full bg-gold text-navy font-bold text-xs flex items-center justify-center">
                          {i + 1}
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.icon} alt="" className="h-16 w-16 flex-shrink-0 hidden md:block" />
                        <div>
                          <h3 className="text-lg font-bold text-navy mb-1">{s.title}</h3>
                          <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>
                        </div>
                      </div>
                    )}
                    {!isLeft && (
                      <div className="hidden md:block" />
                    )}
                  </div>

                  {/* Right side */}
                  <div className={`md:w-1/2 ${isLeft ? "md:order-2 md:pl-16" : "md:pr-16"}`}>
                    {!isLeft && (
                      <div className="flex gap-5 items-start bg-bg rounded-2xl p-6 border border-gray-100">
                        <div className="flex-shrink-0 md:hidden h-8 w-8 rounded-full bg-gold text-navy font-bold text-xs flex items-center justify-center">
                          {i + 1}
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.icon} alt="" className="h-16 w-16 flex-shrink-0 hidden md:block" />
                        <div>
                          <h3 className="text-lg font-bold text-navy mb-1">{s.title}</h3>
                          <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
