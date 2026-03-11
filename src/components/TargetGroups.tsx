import { Users, Home, PiggyBank, Briefcase } from "lucide-react";

const groups = [
  {
    icon: Users,
    title: "Für Familien",
    description:
      "Zuschüsse für Kinder, Ausbildung und Alltag – wir prüfen, was Ihnen wirklich zusteht.",
  },
  {
    icon: Home,
    title: "Für Immobilienbesitzer",
    description:
      "Zuschüsse für Kauf, energetische Sanierung oder Neubau.",
  },
  {
    icon: PiggyBank,
    title: "Für Sparer & Anleger",
    description:
      "Investieren mit staatlicher Förderung – langfristig, sicher und steueroptimiert.",
  },
  {
    icon: Briefcase,
    title: "Für Unternehmer & Selbstständige",
    description:
      "Gezieltes Wachstum mit Zuschüssen und Förderkrediten.",
  },
];

export default function TargetGroups() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Passgenau für Sie
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
            Staatliche Förderung für Ihre Situation
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g, i) => (
            <a
              key={i}
              href="#kontakt"
              className="group bg-bg rounded-2xl p-7 hover:bg-navy border border-gray-100 hover:border-navy transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-14 w-14 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors">
                <g.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy group-hover:text-white mb-2 transition-colors">
                {g.title}
              </h3>
              <p className="text-navy/60 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {g.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
