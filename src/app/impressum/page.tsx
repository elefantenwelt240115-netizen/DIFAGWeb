import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Deutsche Investitions- und Förderberatung AG, Opitzstraße 12, 40470 Düsseldorf.",
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Angaben gemäß § 5 TMG</h2>
        <p>
          Deutsche Investitions- und Förderberatung AG
          <br />Opitzstraße 12
          <br />40470 Düsseldorf
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Handelsregister</h2>
        <p>
          Handelsregister: HRB 108764
          <br />Registergericht: Düsseldorf
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Vertreten durch</h2>
        <p>Vorstand: Andreas Bittner</p>
        <p>Vorsitzender des Aufsichtsrats: Dmitri Holz</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Kontakt</h2>
        <p>
          Telefon: +49 211 980 701 – 10
          <br />Fax: 0211-980701 – 99
          <br />E-Mail: info@deutsche-foerderberatung.de
        </p>
        <p className="mt-2">
          <strong>Öffnungszeiten:</strong>
          <br />Mo – Do: 8:45 – 16:00 Uhr
          <br />Fr: 8:45 – 13:00 Uhr
          <br />Und nach Vereinbarung!
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />DE322637736
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Aufsichtsbehörde</h2>
        <p>
          Industrie- und Handelskammer zu Düsseldorf
          <br />Ernst-Schneider-Platz 1
          <br />40212 Düsseldorf
          <br />Telefon: +49 211 3557 – 0
          <br />Telefax: +49 211 3557 – 400
          <br />E-Mail: kundencenter@duesseldorf.ihk.de
          <br />
          <a href="https://www.ihk.de/duesseldorf/" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            www.ihk.de/duesseldorf
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Berufsbezeichnung und berufsrechtliche Regelungen
        </h2>
        <p>
          <strong>Berufsbezeichnung:</strong> Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 Ziffer 2 GewO
          <br /><strong>Verliehen in:</strong> Deutschland
        </p>
        <p className="mt-2">Es gelten folgende berufsrechtliche Regelungen:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>§ 34d Gewerbeordnung (GewO)</li>
          <li>§ 48b Versicherungsaufsichtsgesetz (VAG)</li>
          <li>§§ 59 – 68 Versicherungsvertragsgesetz (VVG)</li>
          <li>Verordnung über die Versicherungsvermittlung und -beratung (VersVermV)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Angaben zur Berufshaftpflichtversicherung
        </h2>
        <p>
          <strong>Name und Sitz des Versicherers:</strong>
          <br />Liberty Mutual Insurance Europe Ltd.
          <br />Direktion für Deutschland
          <br />Im MediaPark 8
          <br />50670 Köln
        </p>
        <p className="mt-2">
          <strong>Geltungsraum der Versicherung:</strong> Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Redaktionell verantwortlich</h2>
        <p>Andreas Bittner</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Bildnachweise</h2>
        <p className="text-sm">
          Navigation oben rechts, Links: Telefonieren und Geschäfte machen – iStock/gpointstudio, Bildnr. 599110188.
          Mitte: Der Manager begrüßt den Mitarbeiter mit einem Handschlag – iStock/edhar, Bildnr. 1022440016.
          Rechts, Kontaktformular-Overlay &amp; Ansprechpartnerin: Porträt einer jungen Geschäftsfrau – iStock/PeopleImages, Bildnr. 1006657822.
          Startseite: Gruppe von Geschäftsleuten – iStock/VioletaStoimenova, Bildnr. 2249499814.
        </p>
      </section>
    </LegalLayout>
  );
}
