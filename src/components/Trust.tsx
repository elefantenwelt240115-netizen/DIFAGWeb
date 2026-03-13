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
    icon: "/images/Google.png",
    rating: 4.9,
    count: "10.000+",
    link: "https://www.google.com/maps/place/Deutsche+Investitions-+und+F%C3%B6rderberatung+AG/@51.2562,6.7898,17z/data=!4m8!3m7!1s0x47b8ca0c3906b4a1:0x2e4e6a3b0d4f8c7a!8m2!3d51.2562!4d6.7898!9m1!1b1!16s",
  },
  {
    platform: "Trustpilot",
    icon: "/images/Trustpilot.png",
    rating: 4.8,
    count: "561",
    link: "https://de.trustpilot.com/review/deutsche-foerderberatung.de",
  },
];

export default function Trust() {
  return (
    <section id="vertrauen" className="pt-6 pb-24 lg:pt-8 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Vertrauen & Qualität
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Von Kund:innen empfohlen
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://verbraucherschutz.de/deutsche-investitions-und-foerderberatung/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-1 flex items-center gap-3 sm:gap-4"
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
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-1 flex items-center gap-3 sm:gap-4 sm:min-w-[250px]"
            >
              <Image
                src={r.icon}
                alt={r.platform}
                width={120}
                height={48}
                className="h-10 w-auto object-contain flex-shrink-0"
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
      </div>
    </section>
  );
}
