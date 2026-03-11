import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum – Deutsche Investitions- und Förderberatung AG",
};

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Angaben gemäß § 5 TMG
        </h2>
        <p>
          Deutsche Investitions- und Förderberatung AG
          <br />
          Opitzstr. 12
          <br />
          40470 Düsseldorf
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Kontakt</h2>
        <p>
          Telefon: 0211-980701-10
          <br />
          Telefax: 0211-980701-99
          <br />
          E-Mail: info@deutsche-foerderberatung.de
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Handelsregister</h2>
        <p>
          Registergericht: Amtsgericht Düsseldorf
          <br />
          Registernummer: [HRB-Nummer einfügen]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Umsatzsteuer-Identifikationsnummer
        </h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a
          Umsatzsteuergesetz:
          <br />
          [USt-IdNr. einfügen]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Vorstand</h2>
        <p>[Vorstandsmitglieder einfügen]</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Aufsichtsrat</h2>
        <p>[Aufsichtsratsvorsitzende/r einfügen]</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
        </h2>
        <p>
          Deutsche Investitions- und Förderberatung AG
          <br />
          Opitzstr. 12
          <br />
          40470 Düsseldorf
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
          verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </LegalLayout>
  );
}
