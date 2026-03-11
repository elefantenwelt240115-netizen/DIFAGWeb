import Image from "next/image";

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

        {/* Mobile: Simple stacked cards */}
        <div className="md:hidden space-y-4">
          {strengths.map((s, i) => (
            <div key={i} className="bg-bg rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <Image src={s.icon} alt={s.title} width={48} height={48} className="h-12 w-12" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1">{s.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto hidden md:block">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-px" />

          {strengths.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative mb-12 last:mb-0">
                {/* Numbered circle on the line */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 h-12 w-12 rounded-full bg-gold text-navy font-bold text-lg flex items-center justify-center shadow-lg border-4 border-white">
                  {i + 1}
                </div>

                {/* Card */}
                <div
                  className={`w-[calc(50%-3rem)] ${
                    isLeft ? "mr-auto pr-0" : "ml-auto pl-0"
                  }`}
                >
                  <div className="bg-bg rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <Image src={s.icon} alt={s.title} width={56} height={56} className="h-14 w-14 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold text-navy mb-1">{s.title}</h3>
                        <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector line from circle to card */}
                <div
                  className="absolute top-5 h-px bg-gold/20 w-8"
                  style={isLeft ? { left: "calc(50% - 3.5rem)" } : { left: "calc(50% + 1.5rem)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
