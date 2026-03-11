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

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
          {strengths.slice(0, 4).map((s, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.icon}
                  alt=""
                  className="h-20 w-20"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-navy/60 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Last item centered full width */}
        <div className="mt-14 max-w-xl mx-auto">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={strengths[4].icon}
                alt=""
                className="h-20 w-20"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">{strengths[4].title}</h3>
              <p className="text-navy/60 leading-relaxed">{strengths[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
