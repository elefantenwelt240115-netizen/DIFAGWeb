import Image from "next/image";

const benefits = [
  "Über 30 Jahre Erfahrung & 30.000+ zufriedene Kund:innen.",
  "Zugriff auf alle relevanten staatlichen Förderprogramme.",
  "Persönliche Betreuung auf Augenhöhe – in Ihrem Tempo.",
  "Von der Anspruchsprüfung bis zur Auszahlung – ohne Bürokratie-Stress.",
];

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
              Ihre Vorteile
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              Warum Sie mit uns mehr rausholen
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-8">
              Statt pauschaler Standardlösungen erhalten Sie bei uns eine
              transparente Beratung – unabhängig und 100 % in Ihrem Interesse.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="h-3.5 w-3.5 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-navy/70 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-navy/60 leading-relaxed">
              Jede:r Kund:in ist einzigartig. Wir sorgen dafür, dass Sie genau
              die Förderungen und Lösungen bekommen, die zu Ihrer Situation
              passen.
            </p>
          </div>

          {/* Right: Advisor card */}
          <div className="relative overflow-hidden sm:overflow-visible">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              {/* Decorative quote mark */}
              <svg
                className="h-12 w-12 text-gold/30 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="text-navy/70 text-lg leading-relaxed italic mb-8">
                Unsere Kund:innen stehen im Mittelpunkt. Wir nehmen uns die Zeit,
                Ihre individuelle Situation zu verstehen, damit wir die besten
                Fördermöglichkeiten für Sie finden können.
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/Telefonisten/sarah.jpg"
                  alt="Sarah – Beraterin bei Deutsche Investitions- und Förderberatung AG"
                  width={60}
                  height={60}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-navy">Sarah</p>
                  <p className="text-navy/50 text-sm">
                    Beraterin bei Deutsche Investitions- und Förderberatung AG
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gold/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
