import { Users, FileCheck, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Ihr Partner für bare Vorteile",
    items: [
      "30.000+ Kund:innen",
      "30 Jahre Erfahrung & Know-How",
      "150 Förderexpert:innen und Wirtschaftsplaner:innen",
    ],
  },
  {
    icon: FileCheck,
    title: "Von Analyse bis Auszahlung",
    description:
      "Prüfung, Konzept, Antrag – wir erledigen alles für Sie. Kein Papierkram, kein Stress.",
    cta: { label: "Leistungen entdecken", href: "#leistungen" },
  },
  {
    icon: ShieldCheck,
    title: "Förderung, die passt",
    description:
      "Familien, Immobilien, Investments – wir sichern, was zu Ihrem Leben passt.",
    cta: { label: "Produkte ansehen", href: "#leistungen" },
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

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-14 w-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <b.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{b.title}</h3>

              {b.items && (
                <ul className="space-y-3">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-navy/70">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {b.description && (
                <p className="text-navy/70 leading-relaxed mb-6">
                  {b.description}
                </p>
              )}

              {b.cta && (
                <a
                  href={b.cta.href}
                  className="inline-flex items-center text-gold font-semibold text-sm hover:text-gold-light transition-colors group/link"
                >
                  {b.cta.label}
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
