import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Vermittlererstinfo – Deutsche Investitions- und Förderberatung AG",
};

export default function Vermittlererstinfo() {
  return (
    <LegalLayout title="Erstinformation für Vermittler">
      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Statusbezogene Informationen
        </h2>
        <p>
          Gemäß § 15 Versicherungsvermittlungsverordnung (VersVermV) teilen wir
          Ihnen folgende Informationen mit:
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Name und Anschrift
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
          Art der Tätigkeit
        </h2>
        <p>
          [Bitte Art der Vermittlertätigkeit einfügen, z.B.
          Versicherungsvermittler mit Erlaubnis nach § 34d GewO]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Registrierung</h2>
        <p>
          [Registrierungsnummer und zuständige Registrierungsstelle einfügen]
        </p>
        <p className="mt-2">
          Gemeinsames Registerportal der Industrie- und Handelskammern:{" "}
          <a
            href="https://www.vermittlerregister.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            www.vermittlerregister.info
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          Schlichtungsstellen
        </h2>
        <p>
          Versicherungsombudsmann e.V.
          <br />
          Postfach 080632
          <br />
          10006 Berlin
        </p>
        <p className="mt-2">
          Ombudsmann für die Private Kranken- und Pflegeversicherung
          <br />
          Postfach 060222
          <br />
          10052 Berlin
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">Beratung</h2>
        <p>
          Ob wir vor Abgabe einer Vertragserklärung eine Beratung anbieten und
          ggf. in welchem Umfang, teilen wir Ihnen rechtzeitig vor Abschluss
          eines Versicherungsvertrags mit.
        </p>
      </section>

      <p className="text-sm text-navy/40 mt-8 italic">
        Hinweis: Diese Erstinformation ist ein Platzhalter und muss von einem
        Rechtsberater an die spezifischen Gegebenheiten angepasst werden.
      </p>
    </LegalLayout>
  );
}
