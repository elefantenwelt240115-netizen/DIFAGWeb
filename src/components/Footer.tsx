import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/difag.png"
                alt="DIFAG Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <p className="text-sm font-bold leading-tight">
                  Deutsche Investitions-
                </p>
                <p className="text-sm font-bold leading-tight">
                  und Förderberatung AG
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Ihr Partner für staatliche Förderungen seit über 30 Jahren.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-bold mb-5 text-gold">Kontakt</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a href="tel:021198070110" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-gold" />
                0211-980701-10
              </a>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" />
                <span>Fax: 0211-980701-99</span>
              </div>
              <a href="mailto:info@deutsche-foerderberatung.de" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-gold" />
                info@deutsche-foerderberatung.de
              </a>
            </div>
          </div>

          {/* Adresse & Öffnungszeiten */}
          <div>
            <h4 className="font-bold mb-5 text-gold">Standort</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5" />
                <span>
                  Opitzstr. 12
                  <br />
                  40470 Düsseldorf
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-gold mt-0.5" />
                <span>
                  Mo-Do: 8:45 - 16:00
                  <br />
                  Fr: 8:45 - 13:00
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-5 text-gold">Rechtliches</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a href="/impressum" className="block hover:text-white transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="block hover:text-white transition-colors">
                Datenschutzerklärung
              </a>
              <a href="/vermittlererstinfo" className="block hover:text-white transition-colors">
                Vermittlererstinfo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-sm">
            © 2026 Deutsche Investitions- und Förderberatung AG. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-white/30 text-xs">
            Termine auch außerhalb der Geschäftszeiten nach Vereinbarung
          </p>
        </div>
      </div>
    </footer>
  );
}
