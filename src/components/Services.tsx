import { CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Familienförderung",
    description: "Kindergeld, Elterngeld, Kinderzuschlag und mehr – wir sichern, was Ihrer Familie zusteht.",
    features: ["Kindergeld-Optimierung", "Elterngeld-Beratung", "Kinderzuschlag"],
  },
  {
    title: "Immobilienförderung",
    description: "Von KfW-Darlehen bis Baukindergeld – wir finden die beste Förderung für Ihr Zuhause.",
    features: ["KfW-Fördermittel", "Wohn-Riester", "Baukindergeld"],
  },
  {
    title: "Investitionsförderung",
    description: "Staatliche Zulagen und Steuervorteile für Ihre Investments – rechtssicher und optimiert.",
    features: ["Riester-Zulagen", "Vermögenswirksame Leistungen", "Steuervorteile"],
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Unsere Leistungen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Förderung, die passt
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Prüfung, Konzept, Antrag – wir erledigen alles für Sie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-bg rounded-2xl p-8 hover:bg-navy transition-all duration-500 cursor-pointer border border-gray-100 hover:border-navy"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors">
                {s.title}
              </h3>
              <p className="text-navy/60 group-hover:text-white/70 mb-6 transition-colors leading-relaxed">
                {s.description}
              </p>
              <ul className="space-y-3 mb-8">
                {s.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-navy/70 group-hover:text-white/80 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 text-gold font-semibold text-sm group-hover:text-gold-light transition-colors"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
