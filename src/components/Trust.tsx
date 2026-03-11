import { Star } from "lucide-react";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

const reviews = [
  {
    platform: "Google",
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2026/02/google_g_icon_download.png",
    rating: 4.9,
    count: "6.000+",
    link: "https://www.google.com/search?q=Deutsche+Investitions-+und+F%C3%B6rderberatung+AG+Rezensionen&rflfq=1&tbm=lcl#lkt=LocalPoiReviews",
  },
  {
    platform: "Trustpilot",
    icon: "https://deutsche-foerderberatung.de/wp-content/uploads/2026/03/white-SVG-Generic-logo-sticker-L.svg",
    rating: 4.8,
    count: "561",
    link: "https://de.trustpilot.com/review/deutsche-foerderberatung.de",
  },
];

const mediaLogos = [
  { name: "WAZ", src: "/images/logos/waz.svg", href: "https://www.waz.de/advertorials/foerderung-fuer-familien.html" },
  { name: "finanzen.net", src: "/images/logos/finanzen-net.svg", href: null },
  { name: "ntv", src: "/images/logos/ntv.svg", href: "https://unternehmen.n-tv.de/staatliche-foerderungen.html" },
  { name: "WELT", src: "/images/logos/welt.svg", href: "https://unternehmen.welt.de/finanzen-immobilien/staatliche-foerderungen.html" },
  { name: "FOCUS online", src: "/images/logos/focus-online.svg", href: "https://unternehmen.focus.de/foerderung-fuer-kinder.html" },
  { name: "Handelsblatt", src: "/images/logos/handelsblatt.svg", href: "https://www.handelsblatt.com/adv/firmen/foerderberatung.html" },
  { name: "Finanzen100", src: "/images/logos/finanzen100.svg", href: "https://unternehmen.finanzen100.de/foerderung-fuer-immobilien.html" },
  { name: "WirtschaftsWoche", src: "/images/logos/wirtschaftswoche.svg", href: null },
];

export default function Trust() {
  return (
    <section id="vertrauen" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Vertrauen & Qualität
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Von Kund:innen empfohlen
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="https://verbraucherschutz.de/deutsche-investitions-und-foerderberatung/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
          >
            <Image
              src="https://deutsche-foerderberatung.de/wp-content/uploads/2026/02/deutsche_investitionsberatung_website_siegel_verbraucherschutz.jpg"
              alt="Verbraucherschutz.de Siegel"
              width={80}
              height={100}
              className="h-20 w-auto rounded-lg"
            />
            <div>
              <p className="font-bold text-navy text-sm">Verbraucherschutz.de</p>
              <p className="text-navy/50 text-xs">Service Versprechen</p>
            </div>
          </a>

          {reviews.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 min-w-[250px]"
            >
              <Image
                src={r.icon}
                alt={r.platform}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-contain bg-gray-50 p-1"
              />
              <div>
                <p className="font-bold text-navy text-sm mb-1">{r.platform}</p>
                <StarRating rating={Math.round(r.rating)} />
                <p className="text-navy/50 text-xs mt-1">
                  {r.rating}/5 · {r.count} Bewertungen
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bekannt aus - Marquee */}
        <div className="text-center mb-8">
          <p className="text-navy/50 font-medium text-sm tracking-widest uppercase">
            Bekannt aus
          </p>
        </div>

        <div className="relative overflow-hidden py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...mediaLogos, ...mediaLogos].map((logo, i) => {
              const inner = (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={logo.src} alt={logo.name} className="h-8 sm:h-10 w-auto" />
              );
              return logo.href ? (
                <a
                  key={i}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-10 flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity"
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="mx-10 flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
