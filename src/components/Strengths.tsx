import { Search, Scale, FileText, TrendingUp, ShieldCheck, type LucideIcon } from "lucide-react";

const strengths: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Search,
    title: "Fördermittel- & Zuschussprüfung",
    description:
      "Wir analysieren Ihre Situation und prüfen, welche staatlichen Förderungen Ihnen zustehen – transparent, individuell und vollständig.",
  },
  {
    icon: Scale,
    title: "Anspruchsermittlung & rechtliche Ausgestaltung",
    description:
      "Wir klären, ob Sie Anspruch haben und wie dieser rechtlich abgesichert werden kann.",
  },
  {
    icon: FileText,
    title: "Antragstellung & Behördenkorrespondenz",
    description:
      "Wir übernehmen den gesamten Prozess – vom Ausfüllen der Anträge bis zur Kommunikation mit den zuständigen Stellen.",
  },
  {
    icon: TrendingUp,
    title: "Finanz- & Vermögensplanung",
    description:
      "Zusätzlich entwickeln wir langfristige Strategien, sodass Sie mit staatlicher Unterstützung Vermögen aufbauen können.",
  },
  {
    icon: ShieldCheck,
    title: "Risikomanagement",
    description:
      "Wir entwickeln individuelle Lösungen, die Ihre finanzielle Zukunft absichern und Ihnen Stabilität geben.",
  },
];

export default function Strengths() {
  return (
    <section className="py-20 lg:py-28">
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
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-gold" />
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
                {/* Icon circle on the line */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 h-12 w-12 rounded-full bg-gold text-navy flex items-center justify-center shadow-lg border-4 border-bg">
                  <s.icon className="h-5 w-5" />
                </div>

                {/* Card */}
                <div
                  className={`w-[calc(50%-3rem)] ${
                    isLeft ? "mr-auto pr-0" : "ml-auto pl-0"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{s.description}</p>
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
