export interface Question {
  id: string;
  lessonId: string;
  type:
    | 'multiple-choice'
    | 'true-false'
    | 'text-input'
    | 'drag-drop'
    | 'matching'
    | 'fill-in-the-blank'
    | 'flashcard'
    | 'sorting'
    | 'code-input';
  question: string;
  options?: string[];
  correctAnswer: string | number | string[];
  explanation: string;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  pairs?: { left: string; right: string }[];
  blanks?: string[];
  flashcardFront?: string;
  flashcardBack?: string;
  codeTemplate?: string;
  hint?: string;
}

export const questions: Question[] = [
  // SQL Questions - Comprehensive
  {
    id: 'sql-q1',
    lessonId: 'sql-1',
    type: 'multiple-choice',
    question: 'Was bedeutet SQL?',
    options: [
      'Structured Query Language',
      'Simple Query Language', 
      'Standard Query Language',
      'System Query Language'
    ],
    correctAnswer: 0,
    explanation: 'SQL steht für Structured Query Language - eine standardisierte Sprache zur Verwaltung relationaler Datenbanken.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'sql-q2',
    lessonId: 'sql-2',
    type: 'multiple-choice',
    question: 'Welcher SQL-Befehl wird verwendet, um Daten aus einer Tabelle abzurufen?',
    options: ['INSERT', 'SELECT', 'UPDATE', 'DELETE'],
    correctAnswer: 1,
    explanation: 'SELECT wird verwendet, um Daten aus einer oder mehreren Tabellen abzurufen.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'sql-q3',
    lessonId: 'sql-4',
    type: 'multiple-choice',
    question: 'Was bewirkt ein INNER JOIN?',
    options: [
      'Gibt alle Datensätze der linken Tabelle zurück',
      'Gibt alle Datensätze der rechten Tabelle zurück',
      'Gibt nur Datensätze zurück, die in beiden Tabellen vorhanden sind',
      'Gibt alle Datensätze beider Tabellen zurück'
    ],
    correctAnswer: 2,
    explanation: 'INNER JOIN gibt nur die Datensätze zurück, für die in beiden Tabellen entsprechende Werte vorhanden sind.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'sql-q4',
    lessonId: 'sql-5',
    type: 'multiple-choice',
    question: 'Was ist der Unterschied zwischen INNER JOIN und LEFT JOIN?',
    options: [
      'Kein Unterschied',
      'LEFT JOIN gibt alle Datensätze der linken Tabelle zurück',
      'INNER JOIN ist schneller',
      'LEFT JOIN funktioniert nur mit Zahlen'
    ],
    correctAnswer: 1,
    explanation: 'LEFT JOIN gibt alle Datensätze der linken Tabelle zurück, auch wenn keine Übereinstimmung in der rechten Tabelle gefunden wird.',
    points: 20,
    difficulty: 'medium'
  },
  {
    id: 'sql-q5',
    lessonId: 'sql-7',
    type: 'multiple-choice',
    question: 'Welche Funktion berechnet die Anzahl der Datensätze?',
    options: ['SUM()', 'AVG()', 'COUNT()', 'MAX()'],
    correctAnswer: 2,
    explanation: 'COUNT() zählt die Anzahl der Datensätze in einer Abfrage.',
    points: 10,
    difficulty: 'easy'
  },

  // BWL Questions - From curriculum
  {
    id: 'bwl-q1',
    lessonId: 'bwl-1',
    type: 'multiple-choice',
    question: 'Was bedeutet SMART im Projektmanagement?',
    options: [
      'Spezifisch, Messbar, Ausführbar, Relevant, Terminiert',
      'Schnell, Modern, Automatisch, Robust, Technisch',
      'Sicher, Machbar, Agil, Realistisch, Tragbar',
      'Standard, Minimal, Aktiv, Rentabel, Testbar'
    ],
    correctAnswer: 0,
    explanation: 'SMART steht für Spezifisch, Messbar, Ausführbar/Akzeptiert, Relevant/Realistisch, Terminiert - Kriterien für gute Ziele.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'bwl-q2',
    lessonId: 'bwl-2',
    type: 'multiple-choice',
    question: 'Was ist eine Prokura?',
    options: [
      'Eine Vollmacht für alle Geschäfte',
      'Eine umfassende Handlungsvollmacht mit Einschränkungen',
      'Eine einfache Vollmacht für den Einkauf',
      'Eine Vollmacht nur für Bankgeschäfte'
    ],
    correctAnswer: 1,
    explanation: 'Prokura ist eine umfassende Handlungsvollmacht, die jedoch bestimmte Einschränkungen hat (z.B. keine Grundstücksveräußerung).',
    points: 20,
    difficulty: 'hard'
  },
  {
    id: 'bwl-q3',
    lessonId: 'bwl-4',
    type: 'multiple-choice',
    question: 'Was ist der Break-Even Point?',
    options: [
      'Der höchste Gewinn',
      'Der Punkt wo Kosten = Erlöse',
      'Der niedrigste Preis',
      'Der maximale Umsatz'
    ],
    correctAnswer: 1,
    explanation: 'Der Break-Even Point ist der Punkt, an dem die Gesamtkosten gleich den Gesamterlösen sind - also kein Gewinn und kein Verlust.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'bwl-q4',
    lessonId: 'bwl-5',
    type: 'multiple-choice',
    question: 'Was versteht man unter ABC-Analyse?',
    options: [
      'Alphabetische Sortierung',
      'Bewertung nach Wichtigkeit (A=sehr wichtig, B=wichtig, C=weniger wichtig)',
      'Drei verschiedene Produkte',
      'Anfang, Beschaffung, Control'
    ],
    correctAnswer: 1,
    explanation: 'Die ABC-Analyse kategorisiert Objekte nach ihrer Wichtigkeit: A-Artikel sind sehr wichtig, B-Artikel wichtig, C-Artikel weniger wichtig.',
    points: 15,
    difficulty: 'medium'
  },

  // HTML Questions
  {
    id: 'html-q1',
    lessonId: 'html-1',
    type: 'multiple-choice',
    question: 'Welches Tag definiert den Dokumenttyp einer HTML5-Seite?',
    options: ['<html>', '<!DOCTYPE html>', '<head>', '<meta>'],
    correctAnswer: 1,
    explanation: '<!DOCTYPE html> definiert den Dokumenttyp für HTML5.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'html-q2',
    lessonId: 'html-2',
    type: 'multiple-choice',
    question: 'Welches HTML-Element wird für Überschriften verwendet?',
    options: ['<header>', '<title>', '<h1>', '<heading>'],
    correctAnswer: 2,
    explanation: '<h1> bis <h6> werden für Überschriften verwendet, wobei <h1> die größte Überschrift ist.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'html-q3',
    lessonId: 'html-7',
    type: 'multiple-choice',
    question: 'Welches Attribut wird für Radiobuttons verwendet?',
    options: ['type="radio"', 'input="radio"', 'form="radio"', 'button="radio"'],
    correctAnswer: 0,
    explanation: 'type="radio" wird verwendet, um Radiobuttons in Formularen zu erstellen.',
    points: 15,
    difficulty: 'medium'
  },

  // CSS Questions
  {
    id: 'css-q1',
    lessonId: 'css-1',
    type: 'multiple-choice',
    question: 'Welche CSS-Eigenschaft ändert die Textfarbe?',
    options: ['background-color', 'color', 'text-color', 'font-color'],
    correctAnswer: 1,
    explanation: 'Die CSS-Eigenschaft "color" wird verwendet, um die Textfarbe zu ändern.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'css-q2',
    lessonId: 'css-4',
    type: 'multiple-choice',
    question: 'Welche Eigenschaft aktiviert Flexbox?',
    options: ['display: block', 'display: flex', 'layout: flex', 'flex: true'],
    correctAnswer: 1,
    explanation: 'display: flex aktiviert das Flexbox-Layout für ein Element.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'css-q3',
    lessonId: 'css-7',
    type: 'multiple-choice',
    question: 'Was sind Media Queries?',
    options: [
      'Datenbankabfragen',
      'CSS-Regeln für verschiedene Geräte/Bildschirmgrößen',
      'JavaScript-Funktionen',
      'HTML-Attribute'
    ],
    correctAnswer: 1,
    explanation: 'Media Queries ermöglichen es, CSS-Regeln basierend auf Geräteeigenschaften wie Bildschirmgröße anzuwenden.',
    points: 20,
    difficulty: 'hard'
  },

  // C# Questions
  {
    id: 'csharp-q1',
    lessonId: 'csharp-1',
    type: 'multiple-choice',
    question: 'Welcher Datentyp wird für ganze Zahlen in C# verwendet?',
    options: ['string', 'int', 'double', 'bool'],
    correctAnswer: 1,
    explanation: 'Der Datentyp "int" wird in C# für ganze Zahlen (Integer) verwendet.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'csharp-q2',
    lessonId: 'csharp-4',
    type: 'multiple-choice',
    question: 'Wie schreibt man eine If-Else Anweisung in C#?',
    options: [
      'if (bedingung) { } else { }',
      'IF bedingung THEN ELSE',
      'if bedingung: else:',
      'wenn (bedingung) sonst'
    ],
    correctAnswer: 0,
    explanation: 'In C# wird die If-Else Syntax mit geschwungenen Klammern verwendet: if (bedingung) { } else { }',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'csharp-q3',
    lessonId: 'csharp-5',
    type: 'multiple-choice',
    question: 'Welche Schleife durchläuft ein Array in C#?',
    options: ['for', 'while', 'foreach', 'Alle drei'],
    correctAnswer: 3,
    explanation: 'Alle drei Schleifentypen (for, while, foreach) können verwendet werden, um durch Arrays zu iterieren.',
    points: 20,
    difficulty: 'hard'
  },

  // WiSo Questions
  {
    id: 'wiso-q1',
    lessonId: 'wiso-1',
    type: 'multiple-choice',
    question: 'Was passiert bei steigender Nachfrage und gleichbleibendem Angebot?',
    options: [
      'Der Preis sinkt',
      'Der Preis steigt', 
      'Der Preis bleibt gleich',
      'Das Angebot steigt automatisch'
    ],
    correctAnswer: 1,
    explanation: 'Bei steigender Nachfrage und gleichbleibendem Angebot steigt der Preis aufgrund der Marktmechanismen.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'wiso-q2',
    lessonId: 'wiso-4',
    type: 'multiple-choice',
    question: 'Was ist ein Arbeitsvertrag?',
    options: [
      'Ein Kaufvertrag für Arbeitsplätze',
      'Ein Vertrag zwischen Arbeitgeber und Arbeitnehmer',
      'Ein Vertrag zwischen Gewerkschaften',
      'Ein staatlicher Vertrag'
    ],
    correctAnswer: 1,
    explanation: 'Ein Arbeitsvertrag ist eine Vereinbarung zwischen Arbeitgeber und Arbeitnehmer über die Arbeitsbedingungen.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'wiso-q3',
    lessonId: 'wiso-7',
    type: 'multiple-choice',
    question: 'Welche Sozialversicherungen gibt es in Deutschland?',
    options: [
      'Nur Kranken- und Rentenversicherung',
      'Kranken-, Renten-, Arbeitslosen-, Unfall- und Pflegeversicherung',
      'Nur private Versicherungen',
      'Nur Unfallversicherung'
    ],
    correctAnswer: 1,
    explanation: 'Die fünf Säulen der Sozialversicherung sind: Kranken-, Renten-, Arbeitslosen-, Unfall- und Pflegeversicherung.',
    points: 20,
    difficulty: 'hard'
  },

  // English Questions
  {
    id: 'english-q1',
    lessonId: 'english-1',
    type: 'multiple-choice',
    question: 'Which tense is used in: "I have worked here for 5 years"?',
    options: ['Past Simple', 'Present Perfect', 'Present Continuous', 'Past Perfect'],
    correctAnswer: 1,
    explanation: 'Present Perfect is used to describe actions that started in the past and continue to the present.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'english-q2',
    lessonId: 'english-2',
    type: 'multiple-choice',
    question: 'Which is a conditional sentence?',
    options: [
      'I am going home.',
      'If it rains, I will stay inside.',
      'She is reading a book.',
      'They have finished work.'
    ],
    correctAnswer: 1,
    explanation: 'Conditional sentences express hypothetical situations using "if" clauses.',
    points: 15,
    difficulty: 'medium'
  },

  // BTI Questions - From curriculum
  {
    id: 'bti-q1',
    lessonId: 'bti-1',
    type: 'multiple-choice',
    question: 'Was bedeutet VoIP?',
    options: [
      'Voice over Internet Protocol',
      'Video over Internet Protocol',
      'Virtual over Internet Protocol',
      'Voice over IP Phone'
    ],
    correctAnswer: 0,
    explanation: 'VoIP steht für Voice over Internet Protocol - Telefonie über das Internet.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'bti-q2',
    lessonId: 'bti-4',
    type: 'multiple-choice',
    question: 'Welches Protokoll wird hauptsächlich für VoIP-Signaling verwendet?',
    options: ['HTTP', 'FTP', 'SIP', 'SMTP'],
    correctAnswer: 2,
    explanation: 'SIP (Session Initiation Protocol) wird für die Signalisierung bei VoIP-Verbindungen verwendet.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'bti-q3',
    lessonId: 'bti-7',
    type: 'multiple-choice',
    question: 'Was ist Unified Communications?',
    options: [
      'Nur E-Mail-Kommunikation',
      'Integration verschiedener Kommunikationsdienste',
      'Nur Telefonie',
      'Nur Videokonferenzen'
    ],
    correctAnswer: 1,
    explanation: 'Unified Communications integriert verschiedene Kommunikationsdienste wie Telefonie, E-Mail, Chat und Video in einer Plattform.',
    points: 20,
    difficulty: 'hard'
  },

  // IPv4 Questions - From curriculum
  {
    id: 'ipv4-q1',
    lessonId: 'ipv4-1',
    type: 'multiple-choice',
    question: 'Wie viele Bits hat eine IPv4-Adresse?',
    options: ['16', '32', '64', '128'],
    correctAnswer: 1,
    explanation: 'Eine IPv4-Adresse besteht aus 32 Bits, aufgeteilt in 4 Oktette zu je 8 Bits.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'ipv4-q2',
    lessonId: 'ipv4-2',
    type: 'multiple-choice',
    question: 'Welcher IPv4-Adressbereich ist für private Netzwerke reserviert?',
    options: [
      '192.168.0.0/16',
      '127.0.0.0/8',
      '224.0.0.0/4',
      '169.254.0.0/16'
    ],
    correctAnswer: 0,
    explanation: '192.168.0.0/16 ist einer der privaten IPv4-Adressbereiche nach RFC 1918.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'ipv4-q3',
    lessonId: 'ipv4-4',
    type: 'multiple-choice',
    question: 'Was bedeutet VLSM?',
    options: [
      'Very Large Scale Memory',
      'Variable Length Subnet Mask',
      'Virtual Local Storage Management',
      'Verified Link State Management'
    ],
    correctAnswer: 1,
    explanation: 'VLSM (Variable Length Subnet Mask) ermöglicht die Verwendung unterschiedlicher Subnetzmasken in einem Netzwerk.',
    points: 20,
    difficulty: 'hard'
  },

  // IPv6 Questions
  {
    id: 'ipv6-q1',
    lessonId: 'ipv6-1',
    type: 'multiple-choice',
    question: 'Wie viele Bits hat eine IPv6-Adresse?',
    options: ['32', '64', '96', '128'],
    correctAnswer: 3,
    explanation: 'Eine IPv6-Adresse besteht aus 128 Bits, deutlich mehr als IPv4 mit 32 Bits.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'ipv6-q2',
    lessonId: 'ipv6-4',
    type: 'multiple-choice',
    question: 'Was bedeutet SLAAC?',
    options: [
      'Stateless Address Autoconfiguration',
      'Static Link Address Assignment Control',
      'Secure Local Area Access Control',
      'Simple LAN Address Allocation Center'
    ],
    correctAnswer: 0,
    explanation: 'SLAAC (Stateless Address Autoconfiguration) ermöglicht die automatische Konfiguration von IPv6-Adressen.',
    points: 20,
    difficulty: 'hard'
  },

  // Netzwerke Questions - From curriculum
  {
    id: 'netzwerke-q1',
    lessonId: 'netzwerke-1',
    type: 'multiple-choice',
    question: 'Wie viele Schichten hat das OSI-Modell?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    explanation: 'Das OSI-Modell besteht aus 7 Schichten: Physical, Data Link, Network, Transport, Session, Presentation, Application.',
    points: 10,
    difficulty: 'easy'
  },
  {
    id: 'netzwerke-q2',
    lessonId: 'netzwerke-2',
    type: 'multiple-choice',
    question: 'Welche Schicht des OSI-Modells ist für das Routing zuständig?',
    options: ['Schicht 2', 'Schicht 3', 'Schicht 4', 'Schicht 5'],
    correctAnswer: 1,
    explanation: 'Schicht 3 (Network Layer) ist für das Routing zwischen verschiedenen Netzwerken zuständig.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'netzwerke-q3',
    lessonId: 'netzwerke-4',
    type: 'multiple-choice',
    question: 'Was ist ein VLAN?',
    options: [
      'Virtual Local Area Network',
      'Very Large Area Network',
      'Variable Link Access Network',
      'Verified Local Access Node'
    ],
    correctAnswer: 0,
    explanation: 'VLAN (Virtual Local Area Network) ermöglicht die logische Segmentierung eines physischen Netzwerks.',
    points: 15,
    difficulty: 'medium'
  },
  {
    id: 'netzwerke-q4',
    lessonId: 'netzwerke-7',
    type: 'multiple-choice',
    question: 'Was ist der Hauptzweck einer Firewall?',
    options: [
      'Daten komprimieren',
      'Netzwerkverkehr filtern und kontrollieren',
      'Internet-Geschwindigkeit erhöhen',
      'E-Mails versenden'
    ],
    correctAnswer: 1,
    explanation: 'Eine Firewall filtert und kontrolliert den Netzwerkverkehr basierend auf Sicherheitsregeln.',
    points: 15,
    difficulty: 'medium'
  },

  // Additional BTI/Netzwerk Questions from detailed curriculum
  {
    id: 'netzwerke-q5',
    lessonId: 'netzwerke-1',
    type: 'multiple-choice',
    question: 'Welche Netzwerktopologie bietet die höchste Ausfallsicherheit?',
    options: ['Stern', 'Ring', 'Bus', 'Mesh'],
    correctAnswer: 3,
    explanation: 'Die Mesh-Topologie bietet die höchste Ausfallsicherheit, da jeder Knoten mit mehreren anderen verbunden ist.',
    points: 20,
    difficulty: 'hard'
  },
  {
    id: 'netzwerke-q6',
    lessonId: 'netzwerke-5',
    type: 'multiple-choice',
    question: 'Was ist Spanning Tree Protocol (STP)?',
    options: [
      'Ein Routing-Protokoll',
      'Ein Protokoll zur Vermeidung von Schleifen in geswitchten Netzwerken',
      'Ein Sicherheitsprotokoll',
      'Ein Protokoll für drahtlose Netzwerke'
    ],
    correctAnswer: 1,
    explanation: 'STP verhindert Schleifen in geswitchten Netzwerken durch das Blockieren redundanter Pfade.',
    points: 20,
    difficulty: 'hard'
  }
];

export const getQuestionsByLesson = (lessonId: string): Question[] => {
  return questions.filter(q => q.lessonId === lessonId);
};

export const getQuestionById = (questionId: string): Question | undefined => {
  return questions.find(q => q.id === questionId);
};
