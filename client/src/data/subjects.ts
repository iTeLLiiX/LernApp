export interface Lesson {
  id: string;
  title: string;
  type: 'theory' | 'practice' | 'quiz';
  completed: boolean;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  completed: boolean;
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  sections: Section[];
}

export const subjects: Subject[] = [
  {
    id: 'sql',
    title: 'SQL',
    description: 'Database queries and management',
    color: 'bg-blue-500',
    icon: '🗃️',
    sections: [
      {
        id: 'sql-grundlagen',
        title: 'SQL Grundlagen',
        description: 'SELECT, FROM, WHERE Statements',
        completed: false,
        lessons: [
          { id: 'sql-1', title: 'Was ist SQL?', type: 'theory', completed: false },
          { id: 'sql-2', title: 'SELECT Statement', type: 'practice', completed: false },
          { id: 'sql-3', title: 'Grundlagen Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'sql-joins',
        title: 'JOINs',
        description: 'Tabellen verknüpfen',
        completed: false,
        lessons: [
          { id: 'sql-4', title: 'INNER JOIN', type: 'theory', completed: false },
          { id: 'sql-5', title: 'LEFT JOIN', type: 'practice', completed: false },
          { id: 'sql-6', title: 'JOIN Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'sql-funktionen',
        title: 'Funktionen',
        description: 'Aggregat- und Skalarfunktionen',
        completed: false,
        lessons: [
          { id: 'sql-7', title: 'COUNT, SUM, AVG', type: 'theory', completed: false },
          { id: 'sql-8', title: 'Funktionen üben', type: 'practice', completed: false },
          { id: 'sql-9', title: 'Funktionen Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'bwl',
    title: 'BWL',
    description: 'Betriebswirtschaftslehre',
    color: 'bg-green-500',
    icon: '📊',
    sections: [
      {
        id: 'bwl-grundlagen',
        title: 'BWL Grundlagen',
        description: 'Unternehmen und Märkte',
        completed: false,
        lessons: [
          { id: 'bwl-1', title: 'Was ist BWL?', type: 'theory', completed: false },
          { id: 'bwl-2', title: 'Unternehmensformen', type: 'practice', completed: false },
          { id: 'bwl-3', title: 'Grundlagen Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'bwl-rechnungswesen',
        title: 'Rechnungswesen',
        description: 'Buchführung und Bilanzierung',
        completed: false,
        lessons: [
          { id: 'bwl-4', title: 'Doppelte Buchführung', type: 'theory', completed: false },
          { id: 'bwl-5', title: 'Buchungssätze', type: 'practice', completed: false },
          { id: 'bwl-6', title: 'Rechnungswesen Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'bwl-marketing',
        title: 'Marketing',
        description: 'Marketing-Mix und Strategien',
        completed: false,
        lessons: [
          { id: 'bwl-7', title: '4P Marketing-Mix', type: 'theory', completed: false },
          { id: 'bwl-8', title: 'Marketingstrategien', type: 'practice', completed: false },
          { id: 'bwl-9', title: 'Marketing Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'html',
    title: 'HTML',
    description: 'HyperText Markup Language',
    color: 'bg-orange-500',
    icon: '🌐',
    sections: [
      {
        id: 'html-grundlagen',
        title: 'HTML Grundlagen',
        description: 'Struktur und Tags',
        completed: false,
        lessons: [
          { id: 'html-1', title: 'HTML Struktur', type: 'theory', completed: false },
          { id: 'html-2', title: 'Erste Webseite', type: 'practice', completed: false },
          { id: 'html-3', title: 'HTML Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'html-elemente',
        title: 'HTML Elemente',
        description: 'Text, Listen, Links',
        completed: false,
        lessons: [
          { id: 'html-4', title: 'Überschriften und Text', type: 'theory', completed: false },
          { id: 'html-5', title: 'Links und Bilder', type: 'practice', completed: false },
          { id: 'html-6', title: 'Elemente Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'html-formulare',
        title: 'Formulare',
        description: 'Input-Felder und Buttons',
        completed: false,
        lessons: [
          { id: 'html-7', title: 'Form-Elemente', type: 'theory', completed: false },
          { id: 'html-8', title: 'Kontaktformular', type: 'practice', completed: false },
          { id: 'html-9', title: 'Formulare Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Cascading Style Sheets',
    color: 'bg-purple-500',
    icon: '🎨',
    sections: [
      {
        id: 'css-grundlagen',
        title: 'CSS Grundlagen',
        description: 'Selektoren und Eigenschaften',
        completed: false,
        lessons: [
          { id: 'css-1', title: 'CSS Syntax', type: 'theory', completed: false },
          { id: 'css-2', title: 'Erste Styles', type: 'practice', completed: false },
          { id: 'css-3', title: 'CSS Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'css-layout',
        title: 'Layout',
        description: 'Flexbox und Grid',
        completed: false,
        lessons: [
          { id: 'css-4', title: 'Flexbox Basics', type: 'theory', completed: false },
          { id: 'css-5', title: 'Grid Layout', type: 'practice', completed: false },
          { id: 'css-6', title: 'Layout Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'css-responsive',
        title: 'Responsive Design',
        description: 'Media Queries und Mobile First',
        completed: false,
        lessons: [
          { id: 'css-7', title: 'Media Queries', type: 'theory', completed: false },
          { id: 'css-8', title: 'Mobile Navigation', type: 'practice', completed: false },
          { id: 'css-9', title: 'Responsive Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'csharp',
    title: 'C#',
    description: 'C# Programmierung',
    color: 'bg-indigo-500',
    icon: '💻',
    sections: [
      {
        id: 'csharp-grundlagen',
        title: 'C# Grundlagen',
        description: 'Variablen und Datentypen',
        completed: false,
        lessons: [
          { id: 'csharp-1', title: 'Variablen deklarieren', type: 'theory', completed: false },
          { id: 'csharp-2', title: 'Erstes Programm', type: 'practice', completed: false },
          { id: 'csharp-3', title: 'Grundlagen Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'csharp-kontrollstrukturen',
        title: 'Kontrollstrukturen',
        description: 'If-Else, Schleifen',
        completed: false,
        lessons: [
          { id: 'csharp-4', title: 'If-Else Statements', type: 'theory', completed: false },
          { id: 'csharp-5', title: 'For-Schleifen', type: 'practice', completed: false },
          { id: 'csharp-6', title: 'Kontrollstrukturen Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'csharp-oop',
        title: 'Objektorientierung',
        description: 'Klassen und Objekte',
        completed: false,
        lessons: [
          { id: 'csharp-7', title: 'Klassen definieren', type: 'theory', completed: false },
          { id: 'csharp-8', title: 'Objekte erstellen', type: 'practice', completed: false },
          { id: 'csharp-9', title: 'OOP Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'wiso',
    title: 'WiSo',
    description: 'Wirtschafts- und Sozialkunde',
    color: 'bg-red-500',
    icon: '⚖️',
    sections: [
      {
        id: 'wiso-wirtschaft',
        title: 'Wirtschaftslehre',
        description: 'Markt und Preisbildung',
        completed: false,
        lessons: [
          { id: 'wiso-1', title: 'Angebot und Nachfrage', type: 'theory', completed: false },
          { id: 'wiso-2', title: 'Preisbildung', type: 'practice', completed: false },
          { id: 'wiso-3', title: 'Wirtschaft Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'wiso-recht',
        title: 'Rechtslehre',
        description: 'Arbeits- und Sozialrecht',
        completed: false,
        lessons: [
          { id: 'wiso-4', title: 'Arbeitsvertrag', type: 'theory', completed: false },
          { id: 'wiso-5', title: 'Kündigungsschutz', type: 'practice', completed: false },
          { id: 'wiso-6', title: 'Recht Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'wiso-soziales',
        title: 'Sozialkunde',
        description: 'Sozialversicherung und Staat',
        completed: false,
        lessons: [
          { id: 'wiso-7', title: 'Sozialversicherungen', type: 'theory', completed: false },
          { id: 'wiso-8', title: 'Demokratie', type: 'practice', completed: false },
          { id: 'wiso-9', title: 'Soziales Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'english',
    title: 'English B2',
    description: 'English Upper Intermediate Level',
    color: 'bg-teal-500',
    icon: '🇬🇧',
    sections: [
      {
        id: 'english-grammar',
        title: 'Grammar',
        description: 'Advanced grammar structures',
        completed: false,
        lessons: [
          { id: 'english-1', title: 'Present Perfect vs Past Simple', type: 'theory', completed: false },
          { id: 'english-2', title: 'Conditional Sentences', type: 'practice', completed: false },
          { id: 'english-3', title: 'Grammar Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'english-vocabulary',
        title: 'Vocabulary',
        description: 'Business and everyday vocabulary',
        completed: false,
        lessons: [
          { id: 'english-4', title: 'Business Terms', type: 'theory', completed: false },
          { id: 'english-5', title: 'Phrasal Verbs', type: 'practice', completed: false },
          { id: 'english-6', title: 'Vocabulary Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'english-communication',
        title: 'Communication',
        description: 'Speaking and writing skills',
        completed: false,
        lessons: [
          { id: 'english-7', title: 'Email Writing', type: 'theory', completed: false },
          { id: 'english-8', title: 'Presentations', type: 'practice', completed: false },
          { id: 'english-9', title: 'Communication Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'bti',
    title: 'BTI',
    description: 'Betriebliche Telekommunikationsinfrastruktur',
    color: 'bg-cyan-500',
    icon: '📡',
    sections: [
      {
        id: 'bti-grundlagen',
        title: 'TK-Grundlagen',
        description: 'Telekommunikations-Basics',
        completed: false,
        lessons: [
          { id: 'bti-1', title: 'TK-Systeme Überblick', type: 'theory', completed: false },
          { id: 'bti-2', title: 'Telefonie-Basics', type: 'practice', completed: false },
          { id: 'bti-3', title: 'TK Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'bti-voip',
        title: 'VoIP',
        description: 'Voice over IP Technologie',
        completed: false,
        lessons: [
          { id: 'bti-4', title: 'VoIP Protokolle', type: 'theory', completed: false },
          { id: 'bti-5', title: 'SIP Konfiguration', type: 'practice', completed: false },
          { id: 'bti-6', title: 'VoIP Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'bti-unified',
        title: 'Unified Communications',
        description: 'Integrierte Kommunikation',
        completed: false,
        lessons: [
          { id: 'bti-7', title: 'UC Konzepte', type: 'theory', completed: false },
          { id: 'bti-8', title: 'Teams Integration', type: 'practice', completed: false },
          { id: 'bti-9', title: 'UC Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'ipv4',
    title: 'IPv4',
    description: 'Internet Protocol Version 4',
    color: 'bg-amber-500',
    icon: '🌍',
    sections: [
      {
        id: 'ipv4-grundlagen',
        title: 'IPv4 Grundlagen',
        description: 'Adressierung und Struktur',
        completed: false,
        lessons: [
          { id: 'ipv4-1', title: 'IPv4 Adressformat', type: 'theory', completed: false },
          { id: 'ipv4-2', title: 'Subnetting Basics', type: 'practice', completed: false },
          { id: 'ipv4-3', title: 'IPv4 Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'ipv4-subnetting',
        title: 'Subnetting',
        description: 'Netzwerk-Segmentierung',
        completed: false,
        lessons: [
          { id: 'ipv4-4', title: 'VLSM Konzept', type: 'theory', completed: false },
          { id: 'ipv4-5', title: 'Subnetz berechnen', type: 'practice', completed: false },
          { id: 'ipv4-6', title: 'Subnetting Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'ipv4-routing',
        title: 'Routing',
        description: 'Paketeweiterleitung',
        completed: false,
        lessons: [
          { id: 'ipv4-7', title: 'Routing-Tabellen', type: 'theory', completed: false },
          { id: 'ipv4-8', title: 'Statisches Routing', type: 'practice', completed: false },
          { id: 'ipv4-9', title: 'Routing Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'ipv6',
    title: 'IPv6',
    description: 'Internet Protocol Version 6',
    color: 'bg-emerald-500',
    icon: '🚀',
    sections: [
      {
        id: 'ipv6-grundlagen',
        title: 'IPv6 Grundlagen',
        description: 'Neue Adressierung',
        completed: false,
        lessons: [
          { id: 'ipv6-1', title: 'IPv6 vs IPv4', type: 'theory', completed: false },
          { id: 'ipv6-2', title: 'IPv6 Adresstypen', type: 'practice', completed: false },
          { id: 'ipv6-3', title: 'IPv6 Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'ipv6-konfiguration',
        title: 'Konfiguration',
        description: 'Auto-Konfiguration und DHCPv6',
        completed: false,
        lessons: [
          { id: 'ipv6-4', title: 'SLAAC Verfahren', type: 'theory', completed: false },
          { id: 'ipv6-5', title: 'DHCPv6 Setup', type: 'practice', completed: false },
          { id: 'ipv6-6', title: 'Konfiguration Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'ipv6-transition',
        title: 'IPv6 Transition',
        description: 'Migration von IPv4 zu IPv6',
        completed: false,
        lessons: [
          { id: 'ipv6-7', title: 'Dual-Stack', type: 'theory', completed: false },
          { id: 'ipv6-8', title: 'Tunneling-Techniken', type: 'practice', completed: false },
          { id: 'ipv6-9', title: 'Transition Test', type: 'quiz', completed: false }
        ]
      }
    ]
  },
  {
    id: 'netzwerke',
    title: 'Netzwerke',
    description: 'Netzwerk-Grundlagen und -Technologien',
    color: 'bg-pink-500',
    icon: '🔗',
    sections: [
      {
        id: 'netzwerke-grundlagen',
        title: 'Netzwerk-Grundlagen',
        description: 'OSI-Modell und Protokolle',
        completed: false,
        lessons: [
          { id: 'netzwerke-1', title: 'OSI 7-Schichten-Modell', type: 'theory', completed: false },
          { id: 'netzwerke-2', title: 'TCP/IP Stack', type: 'practice', completed: false },
          { id: 'netzwerke-3', title: 'Grundlagen Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'netzwerke-hardware',
        title: 'Netzwerk-Hardware',
        description: 'Switches, Router, Access Points',
        completed: false,
        lessons: [
          { id: 'netzwerke-4', title: 'Switch Funktionen', type: 'theory', completed: false },
          { id: 'netzwerke-5', title: 'VLAN Konfiguration', type: 'practice', completed: false },
          { id: 'netzwerke-6', title: 'Hardware Quiz', type: 'quiz', completed: false }
        ]
      },
      {
        id: 'netzwerke-sicherheit',
        title: 'Netzwerk-Sicherheit',
        description: 'Firewalls und VPN',
        completed: false,
        lessons: [
          { id: 'netzwerke-7', title: 'Firewall-Regeln', type: 'theory', completed: false },
          { id: 'netzwerke-8', title: 'VPN Einrichtung', type: 'practice', completed: false },
          { id: 'netzwerke-9', title: 'Sicherheit Test', type: 'quiz', completed: false }
        ]
      }
    ]
  }
];
