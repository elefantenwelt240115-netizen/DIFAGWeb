import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteUrl = "https://deutsche-foerderberatung.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Deutsche Investitions- und Förderberatung AG | Staatliche Förderung & Zuschüsse",
    template: "%s | Deutsche Investitions- und Förderberatung AG",
  },
  description:
    "Ihr Partner für staatliche Förderungen seit über 30 Jahren. Wir prüfen Ihren Anspruch auf Zuschüsse, Fördermittel & KfW-Darlehen – kostenlos & unverbindlich. Über 30.000 zufriedene Kund:innen.",
  keywords: [
    "staatliche Förderung",
    "Förderberatung",
    "Fördermittel",
    "Zuschüsse",
    "KfW-Darlehen",
    "Kindergeld",
    "Elterngeld",
    "Baukindergeld",
    "Wohn-Riester",
    "Vermögenswirksame Leistungen",
    "Förderberatung Düsseldorf",
    "Deutsche Investitions- und Förderberatung AG",
    "DIFAG",
    "Fördermittelberatung",
    "Investitionsförderung",
    "Familienförderung",
    "Immobilienförderung",
  ],
  authors: [{ name: "Deutsche Investitions- und Förderberatung AG" }],
  creator: "Deutsche Investitions- und Förderberatung AG",
  publisher: "Deutsche Investitions- und Förderberatung AG",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/difag.png",
    apple: "/images/difag.png",
  },
  openGraph: {
    title: "Deutsche Investitions- und Förderberatung AG",
    description:
      "Ihr Partner für staatliche Förderungen. 30 Jahre Erfahrung, über 30.000 zufriedene Kund:innen. Kostenlose Anspruchsprüfung.",
    url: siteUrl,
    siteName: "Deutsche Investitions- und Förderberatung AG",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/difag.png",
        width: 512,
        height: 512,
        alt: "Deutsche Investitions- und Förderberatung AG Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutsche Investitions- und Förderberatung AG",
    description:
      "Staatliche Förderungen nutzen – kostenlos & unverbindlich. 30+ Jahre Erfahrung.",
    images: ["/images/difag.png"],
  },
  category: "finance",
};

// JSON-LD Structured Data (static content, no user input)
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Deutsche Investitions- und Förderberatung AG",
      alternateName: "DIFAG",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/difag.png`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+49-211-980701-10",
          contactType: "customer service",
          availableLanguage: "German",
          areaServed: "DE",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/company/deutsche-foerderberatung/",
        "https://www.instagram.com/deutsche_foerderberatung/",
        "https://www.tiktok.com/@deutsche_foerderberatung",
        "https://www.youtube.com/@Deutsche_F%C3%B6rderberatung",
      ],
      foundingDate: "1994",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 150,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Deutsche Investitions- und Förderberatung AG",
      image: `${siteUrl}/images/difag.png`,
      url: siteUrl,
      telephone: "+49-211-980701-10",
      email: "info@deutsche-foerderberatung.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Opitzstr. 12",
        addressLocality: "Düsseldorf",
        postalCode: "40470",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.2562,
        longitude: 6.7898,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "08:45",
          closes: "16:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "08:45",
          closes: "13:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "10000",
        bestRating: "5",
      },
      priceRange: "Kostenlose Erstberatung",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Deutsche Investitions- und Förderberatung AG",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "de-DE",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Deutsche Investitions- und Förderberatung AG | Staatliche Förderung & Zuschüsse",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      description:
        "Ihr Partner für staatliche Förderungen seit über 30 Jahren. Kostenlose Anspruchsprüfung für Zuschüsse, Fördermittel & KfW-Darlehen.",
      inLanguage: "de-DE",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
