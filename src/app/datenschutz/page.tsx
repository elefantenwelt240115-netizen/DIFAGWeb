import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Deutsche Investitions- und Förderberatung AG.",
  robots: { index: false, follow: true },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-navy mb-3 mt-8">{children}</h2>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-navy mb-2 mt-4">{children}</h3>;
}

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <H2>1. Datenschutz auf einen Blick</H2>

      <H3>Allgemeine Hinweise</H3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
      </p>

      <H3>Datenerfassung auf dieser Website</H3>
      <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
      </p>

      <p className="mt-3"><strong>Wie erfassen wir Ihre Daten?</strong></p>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
      </p>

      <p className="mt-3"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.
      </p>

      <p className="mt-3"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
      </p>

      <H3>Analyse-Tools und Tools von Drittanbietern</H3>
      <p>
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
      </p>

      <H2>2. Hosting</H2>
      <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

      <H3>Strato</H3>
      <p>
        Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato"). Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
      </p>
      <p className="mt-2">
        Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato:{" "}
        <a href="https://www.strato.de/datenschutz/" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          https://www.strato.de/datenschutz/
        </a>
      </p>
      <p className="mt-2">
        Die Verwendung von Strato erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
      </p>

      <H3>Auftragsverarbeitung</H3>
      <p>
        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
      </p>

      <H2>3. Allgemeine Hinweise und Pflichtinformationen</H2>

      <H3>Datenschutz</H3>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
      </p>

      <H3>Hinweis zur verantwortlichen Stelle</H3>
      <p>
        Deutsche Investitions- und Förderberatung AG
        <br />Opitzstraße 12
        <br />40470 Düsseldorf
        <br />Telefon: +49 211 980 701 – 10
        <br />E-Mail: info@deutsche-foerderberatung.de
      </p>

      <H3>Speicherdauer</H3>
      <p>
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
      </p>

      <H3>Allgemeine Hinweise zu den Rechtsgrundlagen</H3>
      <p>
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
      </p>

      <H3>Datenschutzbeauftragter</H3>
      <p>
        Wir haben einen Datenschutzbeauftragten benannt.
      </p>
      <p className="mt-2">
        Dipl.-Kfm. Guido Babinsky
        <br />basucon GmbH
        <br />Röntgenstraße 44a
        <br />D-86368 Gersthofen
        <br />E-Mail: datenschutz@deutsche-foerderberatung.de
      </p>

      <H3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</H3>
      <p>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <H3>Widerspruchsrecht (Art. 21 DSGVO)</H3>
      <p className="font-semibold text-navy uppercase text-sm">
        Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen.
      </p>
      <p className="font-semibold text-navy uppercase text-sm mt-2">
        Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung einzulegen. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet.
      </p>

      <H3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</H3>
      <p>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
      </p>

      <H3>Recht auf Datenübertragbarkeit</H3>
      <p>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
      </p>

      <H3>Auskunft, Berichtigung und Löschung</H3>
      <p>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
      </p>

      <H3>Recht auf Einschränkung der Verarbeitung</H3>
      <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Das Recht besteht in folgenden Fällen:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung zu verlangen.</li>
        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung zu verlangen.</li>
      </ul>

      <H3>SSL- bzw. TLS-Verschlüsselung</H3>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>

      <H2>4. Datenerfassung auf dieser Website</H2>

      <H3>Cookies</H3>
      <p>
        Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
      </p>
      <p className="mt-2">
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Optimierung der Website erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Sofern eine Einwilligung zur Speicherung von Cookies abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
      </p>

      <H3>Einwilligung mit Borlabs Cookie</H3>
      <p>
        Unsere Website nutzt die Consent-Technologie von Borlabs Cookie, um Ihre Einwilligung zur Speicherung bestimmter Cookies in Ihrem Browser einzuholen und diese datenschutzkonform zu dokumentieren. Anbieter ist die Borlabs GmbH, Hamburger Str. 11, 22083 Hamburg.
      </p>
      <p className="mt-2">
        Der Einsatz der Borlabs-Cookie-Consent-Technologie erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz von Cookies einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO. Details:{" "}
        <a href="https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/
        </a>
      </p>

      <H3>Server-Log-Dateien</H3>
      <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p className="mt-2">
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
      </p>

      <H3>Kontaktformular</H3>
      <p>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      <p className="mt-2">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
      </p>

      <H3>Anfrage per E-Mail, Telefon oder Telefax</H3>
      <p>
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <H3>Kommunikation via WhatsApp</H3>
      <p>
        Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
      </p>
      <p className="mt-2">
        Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch Zugriff auf Metadaten, die im Zuge des Kommunikationsvorgangs entstehen (z. B. Absender, Empfänger und Zeitpunkt).
      </p>
      <p className="mt-2">
        Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven Kommunikation (Art. 6 Abs. 1 lit. f DSGVO). Details:{" "}
        <a href="https://www.whatsapp.com/legal/#privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          WhatsApp Datenschutzrichtlinie
        </a>
      </p>
      <p className="mt-2">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF):{" "}
        <a href="https://www.dataprivacyframework.gov/participant/7735" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          DPF-Zertifizierung
        </a>
      </p>
      <p className="mt-2">
        Wir nutzen WhatsApp in der Variante „WhatsApp Business". Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt:{" "}
        <a href="https://www.whatsapp.com/legal/business-data-transfer-addendum" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          Details
        </a>
      </p>

      <H3>HubSpot CRM</H3>
      <p>
        Wir nutzen HubSpot CRM auf dieser Website. Anbieter ist HubSpot Inc. 25 Street, Cambridge, MA 02141 USA. HubSpot CRM ermöglicht es uns unter anderem, bestehende und potenzielle Kunden sowie Kundenkontakte zu verwalten. Mit Hilfe von HubSpot CRM sind wir in der Lage, Kundeninteraktionen per E-Mail, Social Media oder Telefon über verschiedene Kanäle hinweg zu erfassen, zu sortieren und zu analysieren.
      </p>
      <p className="mt-2">
        Die Verwendung von HubSpot CRM erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst effizienten Kundenverwaltung und Kundenkommunikation.
      </p>
      <p className="mt-2">
        Details:{" "}
        <a href="https://legal.hubspot.com/de/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          HubSpot Datenschutzerklärung
        </a>
        {" "}| DPF-Zertifizierung:{" "}
        <a href="https://www.dataprivacyframework.gov/participant/5812" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          DPF
        </a>
      </p>

      <H2>5. Plugins und Tools</H2>

      <H3>Google Fonts (lokales Hosting)</H3>
      <p>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
      </p>
      <p className="mt-2">
        Weitere Informationen:{" "}
        <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          Google Fonts FAQ
        </a>
        {" "}und{" "}
        <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-gold underline">
          Google Datenschutzerklärung
        </a>
      </p>
    </LegalLayout>
  );
}
