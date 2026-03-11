import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/images/difag.png"
              alt="DIFAG Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-bold text-navy leading-tight">
                Deutsche Investitions-
              </p>
              <p className="text-xs font-bold text-navy leading-tight">
                und Förderberatung AG
              </p>
            </div>
          </a>
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-navy/60 hover:text-navy transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-8">
          {title}
        </h1>
        <div className="prose prose-navy max-w-none text-navy/70 leading-relaxed space-y-6">
          {children}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-navy text-white/50 text-sm py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-3">
          <p>© 2026 Deutsche Investitions- und Förderberatung AG</p>
          <div className="flex gap-4">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="/vermittlererstinfo" className="hover:text-white transition-colors">
              Vermittlererstinfo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
