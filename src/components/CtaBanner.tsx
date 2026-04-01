import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-silk rounded-3xl relative overflow-hidden">
          <div className="relative z-10 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: CTA Text */}
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Lassen Sie uns gemeinsam Ihren Anspruch prüfen
                </h2>
                <p className="text-white/70 text-lg mb-8">
                  Komplett kostenlos & unverbindlich – so finden wir heraus, welche
                  Förderungen Ihnen zustehen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-gold text-navy font-bold rounded-full text-base sm:text-lg hover:bg-gold-light transition-[background-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-gold/20"
                  >
                    Unverbindliches Gespräch vereinbaren
                  </a>
                </div>
                <p className="text-white/50 text-sm mt-4">
                  Oder rufen Sie uns direkt an – kein Formular, kein Warten.
                </p>
              </div>

              {/* Right: Advisor card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-6">
                  Unsere Förderexpert:innen beraten Sie gerne
                </h3>
                <div className="mb-6">
                  <div className="flex -space-x-2 mb-3">
                    <Image
                      src="/images/Telefonisten/ansprechpartner.jpg"
                      alt="Ansprechpartner"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover border-2 border-white/20"
                    />
                    <Image
                      src="/images/Berater/berater2.jpg"
                      alt="Ansprechpartner"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover border-2 border-white/20"
                    />
                    <Image
                      src="/images/Telefonisten/sarah.jpg"
                      alt="Sarah"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover object-top border-2 border-white/20"
                    />
                    <Image
                      src="/images/Berater/berater.jpg"
                      alt="Berater"
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <p className="text-white/70 text-sm">Ihr persönliches Beraterteam</p>
                </div>
                <div className="space-y-3">
                  <a
                    href="tel:021198070110"
                    className="flex items-center gap-3 text-white hover:text-gold transition-colors"
                  >
                    <Phone className="h-5 w-5 text-gold" />
                    <span className="font-semibold">0211-980701-10</span>
                  </a>
                  <a
                    href="mailto:info@deutsche-foerderberatung.de"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="h-5 w-5 text-gold" />
                    info@deutsche-foerderberatung.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
