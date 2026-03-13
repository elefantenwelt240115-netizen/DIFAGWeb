import { CheckCircle, Clock, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "100% kostenlose Erstprüfung",
    description:
      "Wir analysieren Ihre Situation und zeigen Ihnen alle Förderungen, die Ihnen zustehen – komplett kostenlos und unverbindlich.",
  },
  {
    icon: Clock,
    title: "Alles aus einer Hand",
    description:
      "Von der Analyse über die Antragstellung bis zur Auszahlung – wir übernehmen den gesamten Prozess für Sie.",
  },
  {
    icon: HeadphonesIcon,
    title: "Persönliche Betreuung",
    description:
      "Kein Callcenter, kein Bot. Ihr persönlicher Förderexperte begleitet Sie von Anfang bis Ende.",
  },
];

export default function Benefits() {
  return (
    <section id="vorteile" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Warum DIFAG?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Ihre Vorteile auf einen Blick
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {benefits.map((b, i) => (
            <div key={i} className="text-center">
              <div className="h-16 w-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <b.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{b.title}</h3>
              <p className="text-navy/60 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
