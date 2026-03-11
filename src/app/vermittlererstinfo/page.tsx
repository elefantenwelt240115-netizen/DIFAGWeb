import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Vermittlererstinfo",
  description:
    "Kundeninformation gemäß § 15 VersVermV der Deutsche Investitions- und Förderberatung AG.",
  robots: { index: false, follow: true },
};

export default function Vermittlererstinfo() {
  return (
    <LegalLayout title="Kundeninformation zur Erfüllung der gesetzlichen Informationspflicht gemäß § 15 VersVermV">
      <section>
        <h2 className="text-xl font-bold text-navy mb-3">1. Name, Anschrift und Kontaktdaten</h2>
        <p>
          Deutsche Investitions- und Förderberatung AG
          <br />Opitzstraße 12
          <br />D-40470 Düsseldorf
          <br />Tel: 0211 – 980 701 10
          <br />E-Mail: info@deutsche-foerderberatung.de
        </p>
        <p className="mt-2">
          Geschäftsführer: Andreas Bitner
          <br />Registernummer: HRB 81556
          <br />Amtsgericht Düsseldorf
          <br />Sitz der Gesellschaft: Düsseldorf
          <br />Umsatz-Steuer ID: DE322637736
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">2. Tätigkeitsart</h2>
        <p>
          Gemeldet bei der IHK Düsseldorf als Versicherungsmakler mit einer Erlaubnis nach § 34d Abs. 1 der Gewerbeordnung.
        </p>
        <p className="mt-2">Register Nr. IHK: D-F49K-4SD1X-30</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">3. Beratungsangebot</h2>
        <p>
          Dem Kunden wird eine Beratung über den gewünschten Versicherungsschutz vor einer Vertragsvermittlung oder dem Abschluss eines Versicherungsvertrages angeboten. Ob der Kunde eine Beratung gewünscht und erhalten hatte, ergibt sich aus der Beratungsdokumentation oder einer Beratungsverzichtserklärung des Kunden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          4. Offenlegung direkter oder indirekter Beteiligungen
        </h2>
        <p>
          Der Versicherungsvermittler hält keine unmittelbare oder mittelbare Beteiligung von mehr als 10 % der Stimmrechte oder des Kapitals an einem Versicherungsunternehmen.
        </p>
        <p className="mt-2">
          Ein Versicherungsunternehmen hält keine mittelbare oder unmittelbare Beteiligung von mehr als 10 % der Stimmrechte oder des Kapitals am Versicherungsvermittler.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          5. Vergütungsinformation – Versicherungsvermittlung
        </h2>
        <h3 className="text-lg font-semibold text-navy mb-2">(1) Kostenfreie Beratung für den Kunden</h3>
        <p>
          Der Vermittler erhält für die Vermittlung eines Versicherungsvertrages eine Courtage/Provision von dem Produktanbieter/Versicherer. Der Kunde schuldet dem Vermittler keine gesonderte Vergütung.
        </p>
        <h3 className="text-lg font-semibold text-navy mb-2 mt-4">(2) Vergütungsvereinbarung mit dem Kunden</h3>
        <p>
          In Ausnahmefällen und nur nach vorheriger Absprache ergibt sich die Höhe der Vergütung des Vermittlers aus einer gesonderten Vereinbarung mit dem Kunden für die erfolgreiche Vertragsvermittlung des vom Kunden gewünschten Vertrages. Der Vermittler erhält in diesem Fall in der Regel vom Produktanbieter/Versicherer keine Vermittlungsvergütung oder sonstige Vergütung/Honorar.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          6. Vergütungsinformation – Finanzanlagenvermittlung
        </h2>
        <p>
          Vergütungen von beiden Vertragsparteien. Im Zusammenhang mit der Anlageberatung oder -vermittlung kann die Vergütung hierfür durch den Anleger oder durch Dritte (Produktgeber) in Kombination erfolgen. Dies ist abhängig von den Wünschen und Bedürfnissen des Anlegers und den Finanzprodukten, welche eventuell vermittelt werden. Soweit die Vergütungsbestandteile insofern durch den Anleger gezahlt werden, erfolgt dies Rechnungslegung mit dem Kunden. Soweit Zuwendungen im Zusammenhang mit der Anlageberatung oder -vermittlung insofern von Dritten (Produktgebern) erbracht werden, dürfen diese behalten werden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">7. Vermögensschadenhaftpflicht</h2>
        <p>
          Es besteht eine gesetzeskonforme Vermögensschadenhaftpflicht, diese wurde der IHK nachgewiesen. Die Registrierung erfolgte über die IHK Düsseldorf, Ernst-Schneider-Platz 1, 40212 Düsseldorf, Telefon: 0211/35 57-0
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">
          8. Gemeinsame Registerstelle nach § 11a Abs. 1 GewO
        </h2>
        <p>
          Vermittlerregisternummer Versicherungsvermittlung: D-F49K-4SD1X-30
        </p>
        <p className="mt-2">
          IHK Düsseldorf
          <br />Ernst-Schneider-Platz 1
          <br />40212 Düsseldorf
          <br />Telefon: 0211/35 57-0
          <br />
          <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            www.vermittlerregister.info
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">9. Anschriften der Schlichtungsstellen</h2>
        <p>
          <strong>Versicherungsombudsmann e.V.</strong>
          <br />Postfach 08 06 32
          <br />10006 Berlin
          <br />Tel.: 0800 3696000 (kostenfrei aus deutschen Telefonnetzen)
          <br />Fax: 0800 3699000 (kostenfrei aus deutschen Telefonnetzen)
          <br />
          <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            www.versicherungsombudsmann.de
          </a>
        </p>
        <p className="mt-4">
          <strong>Ombudsmann für die Private Kranken- und Pflegeversicherung</strong>
          <br />Postfach 06 02 22
          <br />10052 Berlin
          <br />Tel.: 0800 2550444 (kostenfrei aus deutschen Telefonnetzen)
          <br />Fax: 030 20458931
          <br />
          <a href="https://www.pkv-ombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            www.pkv-ombudsmann.de
          </a>
        </p>
        <p className="mt-4">
          <strong>Online-Streitbeilegung via EU</strong>
          <br />
          <a href="https://webgate.ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-gold underline">
            https://webgate.ec.europa.eu/odr
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy mb-3">10. Beschwerdemanagement</h2>
        <p>
          Falls Sie einmal nicht mit unserer Tätigkeit zufrieden sein sollten, bitten wir Sie sehr gern um Ihre Verbesserungsvorschläge.
        </p>
        <p className="mt-2">
          Sie können aber auch jederzeit per Post oder Mail eine Beschwerde über unsere Geschäftsanschrift einreichen. Erhalten wir von Ihnen eine formelle Beschwerde, bestätigen wir Ihnen unverzüglich deren Eingang und unterrichten Sie unverzüglich über unsere weitere Beschwerdebearbeitung. Sollten wir feststellen, dass Ihre Beschwerde eine Angelegenheit betrifft, für die wir nicht zuständig sind, informieren wir Sie umgehend hierüber und teilen Ihnen die möglichen zuständigen Ansprechpartner mit.
        </p>
        <p className="mt-2">
          Wir werden Ihre Beschwerde umfassend prüfen und Ihnen zeitnah eine Stellungnahme aussprechen. Sollte dies einmal nicht binnen 14 Tagen möglich sein, unterrichten wir Sie über die Gründe der Verzögerung und darüber, wann unsere Prüfung voraussichtlich abgeschlossen sein wird. Sofern wir Ihrem Anliegen nicht oder nicht vollständig nachkommen können, erläutern wir Ihnen die Gründe hierfür und weisen Sie auf etwaig bestehende Möglichkeiten hin, wie Sie Ihre Interessen und Ziele weiterverfolgen können.
        </p>
        <p className="mt-4">
          <strong>Kontakt für Beschwerden:</strong>
          <br />Tel: 0211-980701 – 10
          <br />Fax: 0211-980701 – 99
          <br />E-Mail: info@deutsche-foerderberatung.de
        </p>
      </section>
    </LegalLayout>
  );
}
