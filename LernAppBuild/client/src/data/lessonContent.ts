export interface LessonContent {
  lessonId: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints: string[];
  practiceExercise?: string;
}

export const lessonContent: LessonContent[] = [
  // SQL Content - Comprehensive
  {
    lessonId: 'sql-1',
    title: 'Was ist SQL?',
    content: `SQL (Structured Query Language) ist eine standardisierte Sprache zur Verwaltung relationaler Datenbanken.

Mit SQL können Sie:
• Daten abfragen (SELECT)
• Daten einfügen (INSERT)
• Daten aktualisieren (UPDATE)
• Daten löschen (DELETE)
• Datenbankstrukturen erstellen und ändern (DDL)

SQL ist eine deklarative Sprache - Sie beschreiben WAS Sie wollen, nicht WIE es gemacht werden soll.

SQL wird in fast allen relationalen Datenbankmanagementsystemen verwendet: MySQL, PostgreSQL, SQL Server, Oracle, SQLite und viele mehr.`,
    examples: [
      'SELECT * FROM kunden;',
      'INSERT INTO produkte VALUES (1, "Laptop", 999.99);',
      'UPDATE kunden SET email = "neu@email.de" WHERE id = 1;',
      'DELETE FROM bestellungen WHERE datum < "2023-01-01";'
    ],
    keyPoints: [
      'SQL ist standardisiert (ANSI SQL)',
      'Deklarative Sprache',
      'Für relationale Datenbanken',
      'Verschiedene SQL-Dialekte existieren',
      'Wichtig für Datenanalyse und -verwaltung'
    ]
  },
  {
    lessonId: 'sql-2',
    title: 'SELECT Statement',
    content: `Das SELECT-Statement ist der wichtigste SQL-Befehl zum Abfragen von Daten.

Grundsyntax:
SELECT spalte1, spalte2 FROM tabelle WHERE bedingung;

Mit SELECT können Sie:
• Bestimmte Spalten auswählen
• Alle Spalten mit * auswählen
• Bedingungen mit WHERE setzen
• Ergebnisse sortieren mit ORDER BY
• Ergebnisse gruppieren mit GROUP BY
• Duplikate entfernen mit DISTINCT

WHERE-Bedingungen können verschiedene Operatoren verwenden: =, !=, <, >, <=, >=, LIKE, IN, BETWEEN`,
    examples: [
      'SELECT name, email FROM kunden;',
      'SELECT * FROM produkte WHERE preis > 100;',
      'SELECT name FROM kunden ORDER BY name ASC;',
      'SELECT DISTINCT kategorie FROM produkte;',
      'SELECT * FROM kunden WHERE name LIKE "Max%";'
    ],
    keyPoints: [
      'SELECT wählt Spalten aus',
      'FROM gibt die Tabelle an',
      'WHERE filtert Datensätze',
      'ORDER BY sortiert Ergebnisse',
      'DISTINCT entfernt Duplikate'
    ],
    practiceExercise: 'Schreiben Sie eine SQL-Abfrage, die alle Produkte mit einem Preis über 50€ anzeigt und nach Preis absteigend sortiert.'
  },

  // BWL Content - From detailed curriculum
  {
    lessonId: 'bwl-1',
    title: 'Was ist BWL?',
    content: `Die Betriebswirtschaftslehre (BWL) beschäftigt sich mit der optimalen Verwendung knapper Ressourcen in Unternehmen.

Hauptbereiche der BWL:
• Marketing (Absatz)
• Produktion (Beschaffung, Fertigung)
• Finanzierung
• Personal
• Organisation
• Controlling

BWL zielt darauf ab, unternehmerische Entscheidungen auf wissenschaftlicher Basis zu treffen.

Wichtige Kennzahlen in der BWL:
• Umsatz = Preis × Menge
• Gewinn = Umsatz - Kosten
• Produktivität = Output / Input
• Wirtschaftlichkeit = Ertrag / Aufwand
• ROI (Return on Investment) = Gewinn / investiertes Kapital`,
    keyPoints: [
      'Optimale Ressourcennutzung',
      'Wissenschaftliche Entscheidungsgrundlagen',
      'Verschiedene Funktionsbereiche',
      'Gewinnmaximierung vs. andere Ziele',
      'Kennzahlen zur Erfolgsmessung'
    ]
  },
  {
    lessonId: 'bwl-2',
    title: 'Unternehmensformen',
    content: `Rechtsformen von Unternehmen bestimmen Haftung, Kapitalaufbringung und Führungsstruktur.

Personengesellschaften:
• Einzelunternehmen - unbeschränkte Haftung
• GbR (Gesellschaft bürgerlichen Rechts)
• OHG (Offene Handelsgesellschaft)
• KG (Kommanditgesellschaft)

Kapitalgesellschaften:
• GmbH (Gesellschaft mit beschränkter Haftung)
• AG (Aktiengesellschaft)
• UG (Unternehmergesellschaft)

Vollmachten:
• Prokura: Umfassende Handlungsvollmacht mit Einschränkungen
• Handlungsvollmacht: Begrenzte Vollmacht für bestimmte Geschäfte`,
    keyPoints: [
      'Haftungsunterschiede beachten',
      'Kapitalanforderungen variieren',
      'Führungsstrukturen unterschiedlich',
      'Steuerliche Auswirkungen',
      'Vollmachten regeln Handlungsbefugnisse'
    ]
  },
  {
    lessonId: 'bwl-4',
    title: 'Doppelte Buchführung',
    content: `Die doppelte Buchführung ist ein System zur vollständigen Erfassung aller Geschäftsvorfälle.

Grundprinzipien:
• Jeder Geschäftsvorfall wird auf mindestens zwei Konten gebucht
• Soll = Haben (Bilanzgleichung)
• Aktiva = Passiva

Wichtige Begriffe:
• Break-Even Point: Punkt wo Kosten = Erlöse
• Deckungsbeitrag: Erlös - variable Kosten
• Handelskalkulation: Preisberechnung im Handel

Kostenarten:
• Fixkosten (zeitabhängig)
• Variable Kosten (mengenabhängig)
• Gemeinkosten / Einzelkosten`,
    examples: [
      'Kauf einer Maschine: Maschinen an Bank',
      'Warenverkauf: Bank an Umsatzerlöse',
      'Gehaltszahlung: Lohnaufwand an Bank'
    ],
    keyPoints: [
      'Vollständige Geschäftserfassung',
      'Bilanzgleichung einhalten',
      'Kosten richtig zuordnen',
      'Break-Even Point berechnen',
      'Deckungsbeitrag ermitteln'
    ]
  },

  // HTML Content
  {
    lessonId: 'html-1',
    title: 'HTML Struktur',
    content: `HTML (HyperText Markup Language) ist die Auszeichnungssprache für Webseiten.

Grundstruktur einer HTML-Seite:
• <!DOCTYPE html> - Dokumenttyp
• <html> - Wurzelelement
• <head> - Metadaten
• <body> - Sichtbarer Inhalt

HTML5 bringt neue semantische Elemente:
• <header> - Kopfbereich
• <nav> - Navigation
• <main> - Hauptinhalt
• <section> - Abschnitte
• <article> - Artikel
• <aside> - Seitenbereich
• <footer> - Fußbereich

HTML verwendet Tags (Markierungen) um Inhalte zu strukturieren.`,
    examples: [
      '<!DOCTYPE html>',
      '<html lang="de">',
      '<head><title>Meine Seite</title></head>',
      '<body><h1>Willkommen</h1><p>Text</p></body>',
      '</html>'
    ],
    keyPoints: [
      'HTML ist eine Auszeichnungssprache',
      'Tags strukturieren Inhalte',
      'Verschachtelte Elemente',
      'Semantische Bedeutung wichtig',
      'HTML5 bringt neue Elemente'
    ]
  },
  {
    lessonId: 'html-7',
    title: 'Form-Elemente',
    content: `HTML-Formulare ermöglichen die Eingabe und Übertragung von Benutzerdaten.

Wichtige Form-Elemente:
• <input type="text"> - Textfeld
• <input type="email"> - E-Mail-Feld
• <input type="password"> - Passwort-Feld
• <input type="radio"> - Radiobutton
• <input type="checkbox"> - Checkbox
• <select> - Dropdown-Liste
• <textarea> - Mehrzeiliger Text
• <button> - Schaltfläche

Formular-Attribute:
• action - Ziel-URL
• method - GET oder POST
• name - Bezeichnung des Elements
• value - Wert des Elements
• required - Pflichtfeld`,
    examples: [
      '<form action="/submit" method="post">',
      '<input type="text" name="name" required>',
      '<input type="radio" name="gender" value="m">',
      '<button type="submit">Absenden</button>',
      '</form>'
    ],
    keyPoints: [
      'Formulare sammeln Benutzereingaben',
      'Verschiedene Input-Typen verfügbar',
      'GET vs POST bei method',
      'Validation mit HTML5',
      'Accessibility beachten'
    ]
  },

  // CSS Content
  {
    lessonId: 'css-1',
    title: 'CSS Syntax',
    content: `CSS (Cascading Style Sheets) definiert das Aussehen von HTML-Elementen.

CSS-Regel Aufbau:
selektor {
  eigenschaft: wert;
}

Arten von Selektoren:
• Element-Selektoren (h1, p, div)
• Klassen-Selektoren (.klasse)
• ID-Selektoren (#id)
• Attribut-Selektoren ([attribute])
• Pseudo-Klassen (:hover, :focus)
• Pseudo-Elemente (::before, ::after)

CSS-Einbindung:
• Inline: style="color: red;"
• Internal: <style> im <head>
• External: <link> zu .css Datei

Spezifität entscheidet bei Konflikten:
ID > Klasse > Element`,
    examples: [
      'h1 { color: blue; }',
      '.highlight { background-color: yellow; }',
      '#header { font-size: 24px; }',
      'input[type="text"] { border: 1px solid #ccc; }',
      'a:hover { text-decoration: underline; }'
    ],
    keyPoints: [
      'Selektor wählt Elemente aus',
      'Eigenschaften definieren Aussehen',
      'Kaskadierung und Vererbung',
      'Spezifität entscheidet bei Konflikten',
      'External CSS ist beste Praxis'
    ]
  },
  {
    lessonId: 'css-7',
    title: 'Media Queries',
    content: `Media Queries ermöglichen responsives Design durch anpassbare CSS-Regeln.

Syntax:
@media (bedingung) {
  /* CSS-Regeln */
}

Häufige Breakpoints:
• Mobile: max-width: 768px
• Tablet: 768px - 1024px
• Desktop: min-width: 1024px

Media Query Typen:
• screen - Bildschirme
• print - Druckansicht
• all - Alle Medien

Eigenschaften:
• width, height - Viewportgröße
• orientation - portrait/landscape
• resolution - Pixeldichte

Mobile First Ansatz:
Erst für mobile Geräte entwickeln, dann für größere Bildschirme erweitern.`,
    examples: [
      '@media (max-width: 768px) { .menu { display: none; } }',
      '@media (min-width: 1024px) { .content { width: 1200px; } }',
      '@media print { .no-print { display: none; } }',
      '@media (orientation: landscape) { .sidebar { width: 300px; } }'
    ],
    keyPoints: [
      'Responsives Design ermöglichen',
      'Mobile First Ansatz',
      'Breakpoints strategisch wählen',
      'Performance beachten',
      'Verschiedene Medientypen unterstützen'
    ]
  },

  // C# Content
  {
    lessonId: 'csharp-1',
    title: 'Variablen deklarieren',
    content: `In C# müssen Variablen vor der Verwendung deklariert werden.

Syntax: datentyp variablenname = wert;

Wichtige Datentypen:
• int - Ganze Zahlen (-2.147.483.648 bis 2.147.483.647)
• double - Kommazahlen (64-bit)
• float - Kommazahlen (32-bit)
• decimal - Präzise Dezimalzahlen
• string - Text
• bool - Wahrheitswerte (true/false)
• char - Einzelne Zeichen
• DateTime - Datum und Zeit

Variablen-Regeln:
• Beginnen mit Buchstabe oder _
• Keine Leerzeichen oder Sonderzeichen
• Groß-/Kleinschreibung beachten
• Keine Keywords verwenden

C# ist typsicher - der Datentyp wird zur Compile-Zeit geprüft.`,
    examples: [
      'int alter = 25;',
      'string name = "Max Mustermann";',
      'bool istAktiv = true;',
      'double preis = 19.99;',
      'DateTime heute = DateTime.Now;',
      'char buchstabe = \'A\';'
    ],
    keyPoints: [
      'Typsichere Sprache',
      'Deklaration vor Verwendung',
      'Verschiedene Datentypen',
      'Initialisierung empfohlen',
      'Naming Conventions beachten'
    ]
  },
  {
    lessonId: 'csharp-4',
    title: 'If-Else Statements',
    content: `If-Else Statements ermöglichen bedingte Programmausführung.

Syntax:
if (bedingung)
{
    // Code wenn wahr
}
else if (weitere_bedingung)
{
    // Code für weitere Bedingung
}
else
{
    // Code wenn alle Bedingungen falsch
}

Vergleichsoperatoren:
• == (gleich)
• != (ungleich)
• < (kleiner)
• > (größer)
• <= (kleiner gleich)
• >= (größer gleich)

Logische Operatoren:
• && (UND)
• || (ODER)
• ! (NICHT)`,
    examples: [
      'if (alter >= 18) { Console.WriteLine("Volljährig"); }',
      'if (note >= 4.0) { status = "bestanden"; } else { status = "durchgefallen"; }',
      'if (name == "Admin" && passwort == "123") { zugang = true; }'
    ],
    keyPoints: [
      'Bedingte Programmausführung',
      'Geschwungene Klammern verwenden',
      'Vergleichsoperatoren richtig nutzen',
      'Logische Operatoren kombinieren',
      'else if für mehrere Bedingungen'
    ]
  },
  {
    lessonId: 'csharp-5',
    title: 'For-Schleifen',
    content: `Schleifen ermöglichen die wiederholte Ausführung von Code.

For-Schleife:
for (initialisierung; bedingung; inkrement)
{
    // Code
}

While-Schleife:
while (bedingung)
{
    // Code
}

Foreach-Schleife:
foreach (typ variable in sammlung)
{
    // Code
}

Do-While-Schleife:
do
{
    // Code
} while (bedingung);

Arrays durchlaufen:
• For-Schleife mit Index
• Foreach für direkte Elementzugriff`,
    examples: [
      'for (int i = 0; i < 10; i++) { Console.WriteLine(i); }',
      'foreach (string name in namen) { Console.WriteLine(name); }',
      'while (count < 100) { count++; }',
      'int[] zahlen = {1, 2, 3, 4, 5};'
    ],
    keyPoints: [
      'Verschiedene Schleifentypen',
      'For für bekannte Anzahl',
      'While für unbekannte Anzahl',
      'Foreach für Collections',
      'Endlosschleifen vermeiden'
    ]
  },

  // BTI Content - Based on curriculum
  {
    lessonId: 'bti-1',
    title: 'TK-Systeme Überblick',
    content: `Telekommunikationssysteme ermöglichen die Übertragung von Sprache, Daten und Video.

Moderne TK-Systeme umfassen:
• Telefonie (analog, ISDN, VoIP)
• Videokonferenzen
• Unified Communications
• Mobile Kommunikation
• Instant Messaging
• E-Mail-Integration

Trend: Konvergenz verschiedener Dienste über IP-Netzwerke.

Wichtige Komponenten:
• PBX (Private Branch Exchange)
• SIP-Server
• Gateways
• Endgeräte (IP-Telefone, Softphones)

Quality of Service (QoS):
• Priorisierung von Sprach-/Videodaten
• Bandbreitenverwaltung
• Latenz minimieren`,
    keyPoints: [
      'Verschiedene Übertragungsmedien',
      'Konvergenz zu IP',
      'Integration verschiedener Dienste',
      'Qualitätsanforderungen (QoS)',
      'Skalierbarkeit und Flexibilität'
    ]
  },

  // IPv4 Content - Based on curriculum
  {
    lessonId: 'ipv4-1',
    title: 'IPv4 Adressformat',
    content: `IPv4-Adressen bestehen aus 32 Bits, dargestellt als 4 Oktette.

Format: xxx.xxx.xxx.xxx (z.B. 192.168.1.1)

Adressklassen (veraltet):
• Klasse A: 1.0.0.0 - 126.255.255.255 (/8)
• Klasse B: 128.0.0.0 - 191.255.255.255 (/16)
• Klasse C: 192.0.0.0 - 223.255.255.255 (/24)

Private Adressbereiche nach RFC 1918:
• 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)
• 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)
• 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)

Spezielle Adressen:
• 127.0.0.1 - Loopback (localhost)
• 0.0.0.0 - Default Route
• 255.255.255.255 - Limited Broadcast

CIDR-Notation: IP-Adresse/Präfix (z.B. 192.168.1.0/24)`,
    keyPoints: [
      '32 Bits = 4 Oktette',
      'Dezimalnotation mit Punkten',
      'Adressklassen veraltet',
      'Private vs. öffentliche Adressen',
      'CIDR-Notation verwenden'
    ]
  },

  // IPv6 Content
  {
    lessonId: 'ipv6-1',
    title: 'IPv6 vs IPv4',
    content: `IPv6 löst die Adressknappheit von IPv4 und bietet neue Features.

Hauptunterschiede:
• 128 Bits vs. 32 Bits Adresslänge
• Hexadezimalnotation vs. Dezimal
• Eingebaute Sicherheit (IPSec)
• Automatische Konfiguration
• Keine NAT erforderlich
• Vereinfachter Header

IPv6 Format: xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx

Adresstypen:
• Unicast - Ein Empfänger
• Multicast - Mehrere Empfänger
• Anycast - Nächster Empfänger

Verkürzungsregeln:
• Führende Nullen weglassen
• Aufeinanderfolgende Nullgruppen mit :: ersetzen`,
    keyPoints: [
      'Praktisch unbegrenzte Adressen',
      'Vereinfachte Konfiguration',
      'Bessere Sicherheit',
      'Koexistenz mit IPv4',
      'Neue Dienste möglich'
    ]
  },

  // Netzwerke Content - OSI Model
  {
    lessonId: 'netzwerke-1',
    title: 'OSI 7-Schichten-Modell',
    content: `Das OSI-Modell strukturiert Netzwerkkommunikation in 7 Schichten.

Schichten (von unten nach oben):
1. Physical - Übertragungsmedium (Kabel, Funk)
2. Data Link - Frames, MAC-Adressen, Switches
3. Network - Routing, IP-Adressen, Router
4. Transport - Segmente, Port-Nummern, TCP/UDP
5. Session - Verbindungen verwalten
6. Presentation - Datendarstellung, Verschlüsselung
7. Application - Anwendungsprotokolle (HTTP, FTP)

Merksatz: "Please Do Not Throw Sausage Pizza Away"

Datenkapselung:
• Jede Schicht fügt Header hinzu
• Am Ziel wird entpackt
• Abstraktion zwischen Schichten

TCP/IP-Modell:
• 4 Schichten (vereinfacht)
• Praktischer als OSI-Modell`,
    keyPoints: [
      '7 Schichten der Kommunikation',
      'Kapselung der Daten',
      'Protokolle pro Schicht',
      'Abstraktion und Modularität',
      'Fehlersuche systematisch'
    ]
  },

  // WiSo Content - From curriculum
  {
    lessonId: 'wiso-1',
    title: 'Angebot und Nachfrage',
    content: `Das Marktmodell von Angebot und Nachfrage erklärt die Preisbildung.

Nachfrage:
• Menge, die Konsumenten zu einem Preis kaufen wollen
• Bei höherem Preis → geringere Nachfrage
• Bei niedrigerem Preis → höhere Nachfrage

Angebot:
• Menge, die Produzenten zu einem Preis verkaufen wollen
• Bei höherem Preis → höheres Angebot
• Bei niedrigerem Preis → geringeres Angebot

Marktgleichgewicht:
• Schnittpunkt von Angebot und Nachfrage
• Gleichgewichtspreis
• Gleichgewichtsmenge

Marktformen:
• Polypol - viele Anbieter und Nachfrager
• Oligopol - wenige Anbieter
• Monopol - ein Anbieter`,
    keyPoints: [
      'Preis bestimmt Angebot und Nachfrage',
      'Marktgleichgewicht als Schnittpunkt',
      'Verschiedene Marktformen',
      'Externe Faktoren beeinflussen Märkte',
      'Preismechanismus als Koordination'
    ]
  },

  // English Content
  {
    lessonId: 'english-1',
    title: 'Present Perfect vs Past Simple',
    content: `Understanding the difference between Present Perfect and Past Simple.

Present Perfect:
• Form: have/has + past participle
• Connection to present
• Unspecified time in the past
• Experience, results, duration

Past Simple:
• Form: verb + -ed (regular) or irregular forms
• Completed action in the past
• Specific time mentioned
• Finished events

Time expressions:
Present Perfect: already, yet, just, ever, never, since, for
Past Simple: yesterday, last week, in 2020, ago

Examples of different meanings:
• "I have been to London" (experience)
• "I went to London last year" (specific time)`,
    examples: [
      'I have worked here for 5 years. (still working)',
      'I worked there from 2015 to 2020. (finished)',
      'Have you ever been to Germany?',
      'Did you go to the meeting yesterday?'
    ],
    keyPoints: [
      'Present Perfect connects past to present',
      'Past Simple for completed actions',
      'Time expressions are important',
      'Context determines which tense to use',
      'Practice with real examples'
    ]
  }
];

export const getLessonContent = (lessonId: string): LessonContent | undefined => {
  return lessonContent.find(content => content.lessonId === lessonId);
};
