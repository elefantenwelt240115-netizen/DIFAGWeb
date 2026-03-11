import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Deutsche Investitions- und Förderberatung AG",
};

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          1. Datenschutz auf einen Blick
        </h2>
        <h3 className="text-lg font-semibold text-navy mb-2">
          Allgemeine Hinweise
        </h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          2. Verantwortliche Stelle
        </h2>
        <p>
          Deutsche Investitions- und Förderberatung AG
          <br />
          Opitzstr. 12
          <br />
          40470 Düsseldorf
          <br />
          Telefon: 0211-980701-10
          <br />
          E-Mail: info@deutsche-foerderberatung.de
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          3. Datenerfassung auf dieser Website
        </h2>
        <h3 className="text-lg font-semibold text-navy mb-2">Cookies</h3>
        <p>
          Unsere Webseite verwendet Cookies. Dabei handelt es sich um kleine
          Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies
          helfen uns dabei, unser Angebot nutzerfreundlicher und effektiver zu
          gestalten. Sie können Ihre Browser-Einstellung entsprechend Ihren
          Wünschen konfigurieren.
        </p>

        <h3 className="text-lg font-semibold text-navy mb-2 mt-4">
          Kontaktformular
        </h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          4. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und
          den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          5. Analyse-Tools und Werbung
        </h2>
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen. Detaillierte Informationen zu diesen
          Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
        </p>
      </section>

      <p className="text-sm text-navy/40 mt-8 italic">
        Hinweis: Diese Datenschutzerklärung ist ein Platzhalter und muss von
        einem Rechtsberater an die spezifischen Gegebenheiten angepasst werden.
      </p>
    </LegalLayout>
  );
}
