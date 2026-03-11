import { Search, Scale, FileText, TrendingUp, Shield } from "lucide-react";

const strengths = [
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
    icon: Shield,
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <div
              key={i}
              className={`relative bg-bg rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                i >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
              }`}
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-navy/5">
                {i + 1}
              </span>

              <div className="h-14 w-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <s.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
