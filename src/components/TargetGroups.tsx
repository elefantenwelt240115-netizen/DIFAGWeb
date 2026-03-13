"use client";

import { useState } from "react";
import { Users, Home, PiggyBank, Briefcase, ArrowRight, type LucideIcon } from "lucide-react";

const groups: {
  icon: LucideIcon;
  title: string;
  label: string;
  highlight: string;
  description: string;
  examples: string[];
}[] = [
  {
    icon: Users,
    label: "Familien",
    title: "Förderungen für Familien",
    highlight: "bis zu 12.480€/Jahr",
    description:
      "Kindergeld, Elterngeld, Kinderzuschlag, Bildungspakete – viele Familien schöpfen ihre Ansprüche nicht aus. Wir prüfen jede Möglichkeit.",
    examples: ["Kindergeld-Optimierung", "Elterngeld Plus", "Kinderzuschlag", "Bildungs- & Teilhabepaket"],
  },
  {
    icon: Home,
    label: "Immobilien",
    title: "Förderungen für Immobilien",
    highlight: "bis zu 150.000€ KfW-Kredit",
    description:
      "Ob Kauf, Neubau oder Sanierung – staatliche Förderprogramme senken Ihre Kosten erheblich. Wir finden das passende Programm.",
    examples: ["KfW-Wohneigentumsprogramm", "BAFA-Zuschüsse", "Wohn-Riester", "Energetische Sanierung"],
  },
  {
    icon: PiggyBank,
    label: "Sparer",
    title: "Förderungen für Sparer & Anleger",
    highlight: "bis zu 3.848€/Jahr Zulagen",
    description:
      "Vermögenswirksame Leistungen, Arbeitnehmersparzulage, Riester – der Staat belohnt Sparen. Wir maximieren Ihre Zulagen.",
    examples: ["Vermögenswirksame Leistungen", "Arbeitnehmersparzulage", "Riester-Zulagen", "Steuervergünstigungen"],
  },
  {
    icon: Briefcase,
    label: "Unternehmer",
    title: "Förderungen für Unternehmer",
    highlight: "bis zu 500.000€ Förderkredite",
    description:
      "Gründungszuschuss, Investitionszulagen, Förderkredite – gezielte Unterstützung für Wachstum und Innovation.",
    examples: ["Gründungszuschuss", "ERP-Förderkredite", "Investitionszulagen", "Innovationsförderung"],
  },
];

export default function TargetGroups() {
  const [active, setActive] = useState(0);
  const g = groups[active];

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Passgenau für Sie
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Staatliche Förderung für Ihre Situation
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {groups.map((group, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-navy text-white shadow-lg shadow-navy/20"
                  : "bg-white text-navy/70 border border-gray-200 hover:border-gold hover:text-navy"
              }`}
            >
              <group.icon className={`h-4 w-4 ${active === i ? "text-gold" : ""}`} />
              {group.label}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Info */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-3">
              {g.title}
            </h3>
            <p className="text-4xl lg:text-5xl font-bold text-gold mb-6">
              {g.highlight}
            </p>
            <p className="text-navy/60 text-lg leading-relaxed mb-8">
              {g.description}
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy font-bold rounded-full hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              Kostenlos prüfen lassen
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Right: Examples */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <p className="text-sm font-semibold text-navy/40 uppercase tracking-widest mb-6">
              Fördermöglichkeiten
            </p>
            <div className="space-y-4">
              {g.examples.map((ex, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg hover:bg-gold/5 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-navy font-medium">{ex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
