import { Search, Scale, FileText, TrendingUp, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Fördercheck",
    description: "Wir analysieren Ihre Situation und prüfen alle verfügbaren Förderprogramme.",
  },
  {
    icon: Scale,
    number: "02",
    title: "Anspruchsprüfung",
    description: "Wir klären Ihren Anspruch und sichern alles rechtlich ab.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Antragstellung",
    description: "Wir übernehmen den Papierkram – von Anträgen bis Behördenkommunikation.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Vermögensplanung",
    description: "Wir entwickeln langfristige Strategien für Ihren Vermögensaufbau.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Absicherung",
    description: "Wir schützen Ihre finanzielle Zukunft mit individuellen Lösungen.",
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
            In 5 Schritten zu Ihrer Förderung
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Von der ersten Analyse bis zur Auszahlung – wir begleiten Sie durch den gesamten Prozess.
          </p>
        </div>

        {/* Desktop: Horizontal stepper */}
        <div className="hidden lg:block">
          {/* Progress bar */}
          <div className="relative mb-12">
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gray-200" />
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold to-gold-light" />
            <div className="relative flex justify-between px-[5%]">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center w-1/5">
                  <div className="h-12 w-12 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-sm shadow-lg shadow-gold/20 mb-4 relative z-10">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-gold font-bold text-xs tracking-widest mb-2">{step.number}</span>
                  <h3 className="text-navy font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed max-w-[180px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical numbered steps */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-sm shadow-lg shadow-gold/20 flex-shrink-0">
                  <step.icon className="h-5 w-5" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-gold to-gold/20 mt-2" />
                )}
              </div>
              <div className="pb-6">
                <span className="text-gold font-bold text-xs tracking-widest">{step.number}</span>
                <h3 className="text-navy font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
