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

export const metadata: Metadata = {
  title: "Deutsche Investitions- und Förderberatung AG",
  description:
    "Für mehr Geld, weniger Stress und echte Lebensqualität. Lassen Sie uns gemeinsam Ihren staatlichen Förderanspruch prüfen – komplett kostenlos und unverbindlich!",
  openGraph: {
    title: "Deutsche Investitions- und Förderberatung AG",
    description:
      "Ihr Partner für staatliche Förderungen. 30 Jahre Erfahrung, über 30.000 zufriedene Kund:innen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
