const mediaLogos = [
  { name: "WAZ", src: "/images/logos/waz.png", href: "https://www.waz.de/advertorials/foerderung-fuer-familien.html" },
  { name: "finanzen.net", src: "/images/logos/finanzennet.png", href: null },
  { name: "ntv", src: "/images/logos/ntv.png", href: "https://unternehmen.n-tv.de/staatliche-foerderungen.html" },
  { name: "WELT", src: "/images/logos/welt.png", href: "https://unternehmen.welt.de/finanzen-immobilien/staatliche-foerderungen.html" },
  { name: "FOCUS online", src: "/images/logos/focusonline.jpg", href: "https://unternehmen.focus.de/foerderung-fuer-kinder.html" },
  { name: "Handelsblatt", src: "/images/logos/handelsblatt.png", href: "https://www.handelsblatt.com/adv/firmen/foerderberatung.html" },
  { name: "Finanzen100", src: "/images/logos/finanzen100.png", href: "https://unternehmen.finanzen100.de/foerderung-fuer-immobilien.html" },
  { name: "WirtschaftsWoche", src: "/images/logos/wirtschaftswoche.png", href: null },
];

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center">
      {mediaLogos.map((logo, i) => {
        const inner = (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={logo.src} alt={`Bekannt aus ${logo.name}`} width={120} height={40} className="h-8 sm:h-10 w-auto" />
        );
        return logo.href ? (
          <a
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 sm:mx-10 shrink-0 opacity-40 pointer-events-none"
          >
            {inner}
          </a>
        ) : (
          <div key={i} className="mx-8 sm:mx-10 shrink-0 opacity-40 pointer-events-none">
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export default function BekanntAus() {
  return (
    <section className="py-10 lg:py-14 bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-navy/50 font-medium text-sm tracking-widest uppercase">
            Bekannt aus
          </p>
        </div>

        <div className="relative overflow-hidden py-6 ">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />

          <div className="flex whitespace-nowrap animate-marquee ">
            <LogoSet />
            <LogoSet />
          </div>
        </div>
      </div>
    </section>
  );
}
