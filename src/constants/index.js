import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  efulfillment,
  denqfabrik,
  plentymarkets,
  synesty,
  python,
  rust,
  go,
  django,
  amazonvendorapp,
  monitoringapp,
  repricerapp,
  amazon,
  security
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "impressum",
    title: "Impressum",
  },
  {
    id: "datenschutz",
    title: "Datenschutz",
  },
  {
    id: "amazon",
    title: "Amazon",
  },
];

const services = [
  {
    title: "ERP Integration Specialist",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "E-Commerce Solutions Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Go",
    icon: go,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CTO",
    company_name: "eFulfillment GmbH",
    icon: efulfillment,
    iconBg: "#383E56",
    date: "März 2020 - März 2023",
    points: [
      "Integration erworbener Unternehmen in bestehende Systeme, Schulung neuer Mitarbeiter und Teamleiteraufgaben",
      "Entwicklung und Wartung von ERP-Lösungen zur Verbesserung des Prozessablaufs",
      "Zusammenarbeit mit funktionsübergreifenden Teams, einschließlich Designern, Produktmanagern und anderen Entwicklern zur Erstellung hochwertiger Apps.",
      "Teilnahme an Code-Reviews und Bereitstellung konstruktiver Rückmeldungen für andere Entwickler in meinem Team.",
    ],
  },
  {
    title: "Synesty Partner",
    company_name: "Synesty",
    icon: synesty,
    iconBg: "#E6DEDD",
    date: "2023 - Heute",
    points: [
      "Zertifizierter Partner als Synesty EDI-Berater.",
      "Freemarker Apache Entwickler"
    ],
  },
  {
    title: "Plentymarkets Solutions Partner",
    company_name: "Plentymarkets",
    icon: plentymarkets,
    iconBg: "#383E56",
    date: "2023 - Heute",
    points: [
      "Zertifizierter Partner als Plentymarkets Systemberater.",
    ],
  },
  {
    title: "CEO",
    company_name: "Denqfabrik",
    icon: denqfabrik,
    iconBg: "#E6DEDD",
    date: "April 2023 - Heute",
    points: [
      "Entwicklung hochwertiger Anwendungen für B2B-Kunden",
      "Entwickler für Automatisierung in der Lieferkette",
      "Experte für ERP-Anpassungen",
      "Konzeption und Umsetzung von maßgeschneiderten ERP-Systemen für eine verbesserte Geschäftslogistik",
      "Implementierung von Omnichannel-E-Commerce-Lösungen zur Steigerung der Kundenreichweite und Verkaufseffizienz",
      "Integration von fortschrittlichen Analytik-Tools zur Datenvisualisierung und Entscheidungsfindung in ERP-Systemen",
      "Entwicklung von benutzerdefinierten Modulen für Webanwendungen zur Erweiterung der Funktionalität bestehender ERP-Systeme",
      "Optimierung von Geschäftsprozessen durch die Implementierung von KI-gesteuerten ERP-Modulen",
      "Führung von agilen Projektteams zur termingerechten Umsetzung von E-Commerce-Strategien",
      "Anwendung moderner Web-Technologien zur Schaffung responsiver und barrierefreier Webanwendungen",
      "Strategische Planung und Durchführung von Systemmigrationen und -updates ohne Unterbrechung des Betriebs",
      "Sicherstellung der Compliance und Datensicherheit in allen Entwicklungsphasen gemäß aktuellen Standards"
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CEO",
    company: "Bundesbrand",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Hut-Online",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Christopher Sporn",
    designation: "CTO",
    company: "3U Holding AG",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Amazon Vendor Central Schnittstelle",
    description:"Durch diese Integration wurde ein automatisierter und synchronisierter Datenaustausch ermöglicht, der Bestandsinformationen, Bestellungen und Produktinformationen nahtlos zwischen den Systemen überträgt. Diese Anbindung ist nicht nur flexibel und an die spezifischen Bedürfnisse eines Unternehmens anpassbar, sondern verarbeitet Millionen von Datensätzen in Echtzeit. Sicherheit und Kompatibilität stehen dabei an vorderster Stelle, um eine reibungslose und geschützte Integration sicherzustellen.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "golang",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
    ],
    image: amazonvendorapp,
    source_code_link: "https://github.com/rene-nowo",
  },
  {
    name: "Monitoring Dashboard",
    description: "Ein Monitoring Dashboard, das für die Überwachung von Systemen und das Qualitätsmanagement entwickelt wurde. Es ermöglicht eine umfassende Echtzeit-Überwachung der IT-Systeme, was unerlässlich ist, um die Leistungsfähigkeit und Stabilität aufrechtzuerhalten. Mit diesem Dashboard können Unternehmen kritische Systemmetriken wie Serverauslastung, Netzwerkverkehr, Anwendungsperformance und Datenbankaktivität überwachen.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: monitoringapp,
    source_code_link: "https://github.com/rene-nowo",
  },
  {
    name: "Repricing Tool",
    description:
    "Komplexes Repricing-Tool, welches anhand individueller Preisregeln, Konkurrenzbezogenen- und Auftragsbezogenen Daten über mehrere Schichten eine Preisoptimierung bewirkt. Durch die flexible Funktionsweise wird dynamisch der Absatz und der Gewinn der Händler maximiert.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: repricerapp,
    source_code_link: "https://github.com/rene-nowo",
  },
];


const amazonServices= [
  {
    title: "100% vollständige ERP Integration Ihrer Wahl",
    icon: web,
  },
  {
    title: "Anbindung zu Amazon Seller und Vendor",
    icon: amazon,
    src:"https://icons8.com/icon/21295/amazon"
  },
  {
    title: "DSGVO-Konform & Hohe Robustheit",
    src:"https://img.icons8.com/bubbles/50/cyber-security.png",
    alt:"cyber-security"
  },
  {
    title: "KI-basiertes Repricing-Tool für wettbewerbslastige Produkte",
    icon: web,
  },
];

const amazonProjects = [
  {
    title: "Automatisierte Auftrags-Synchronisation",
    image: "path/to/your/order-sync-image.jpg",
    description: "Vollständig automatisierter Bestellprozess, der mit Ihrem ERP-System verbunden ist:",
    tags: [
      { name: "Bestellimport, Aktualisierung der Tracking-Nummern, Bestandsaktualisierungen", color: "blue-text-gradient" },
      { name: "Vollständig automatisierte Bearbeitung von Rücksendungen und Gutschriften", color: "green-text-gradient" }
    ]
  },
  {
    title: "Produkterstellung",
    image: "path/to/your/product-creation-image.jpg",
    description: "Einfache Erstellung von Listings nur mit GTIN:",
    tags: [
      { name: "Vollständig unterstützte Produkterstellung neuer Produkte", color: "pink-text-gradient" },
      { name: "KI-generierte Inhalte in mehreren Sprachen mit automatischer Übersetzung und Keyword-Anpassung", color: "orange-text-gradient" }
    ]
  },
  {
    title: "Sicherheit",
    image: "",
    description: "Unsere Software gewährleistet die höchsten Sicherheitsstandards:",
    tags: [
      { name: "Zero-Knowledge-Architektur", color: "blue-text-gradient" },
      { name: "Sehr robuste und sichere Software basierend auf der Programmiersprache Rust", color: "pink-text-gradient" },
      { name: "Konform mit DSGVO-Standards", color: "orange-text-gradient" }
    ]
  },
  {
    title: "KI-basiertes Repricing",
    image: "path/to/your/repricing-image.jpg",
    description: "Intelligenter Amazon-Repricer, um Ihre Konkurrenten auszuspielen und die Buy Box die meiste Zeit zu gewinnen:",
    tags: [
      { name: "Umfassende Analyse der Produktlistings und Ermittlung der Zeiten zur Preisänderung", color: "green-text-gradient" },
      { name: "Verfolgung der Preise der Konkurrenz und Vorhersage der nächsten Produktpreise", color: "orange-text-gradient" }
    ]
  },
  {
    title: "Datenanalyse und Berichterstattung",
    image: "path/to/your/data-analysis-image.jpg",
    description: "Umfassende Analyse und Berichterstattung über Ihre Verkaufsleistung auf Amazon:",
    tags: [
      { name: "Detaillierte Verkaufsberichte und Trendanalysen", color: "blue-text-gradient" },
      { name: "Anpassbare Dashboards und KPIs zur Überwachung der Geschäftsleistung", color: "green-text-gradient" }
    ]
  },
  {
    title: "Kundensupport-Integration",
    image: "path/to/your/customer-support-image.jpg",
    description: "Integrierte Lösung für schnellen und effizienten Kundensupport:",
    tags: [
      { name: "Automatisierte Antworten auf häufige Kundenanfragen", color: "pink-text-gradient" },
      { name: "Integration mit führenden CRM-Systemen zur Verwaltung von Kundenanfragen und Support-Tickets", color: "orange-text-gradient" }
    ]
  }
];

export { services, technologies, experiences, testimonials, projects, amazonServices, amazonProjects };
