// =============================================================
// German dictionary. Same shape as en.js.
// Swiss spelling (ss instead of ß) — the audience is Swiss recruiters.
// Lines marked // REVIEW: are the ones worth a translator's second look.
// =============================================================

const de = {
  meta: {
    title: "Dongyuan Gao — Data Scientist & AI Engineer",
    description:
      "Data Scientist und AI Engineer in der Schweiz. Ich baue LLM-basierte und agentische Systeme — und denke in vier Sprachen, während meine Maschinen in einer denken.",
    storyTitle: "Mein Werdegang — Dongyuan Gao",
    storyDescription:
      "Von spanischer Literatur und Frachtrouten zwischen Europa und Asien zu LLM- und agentischen KI-Systemen — der Weg, der mein Denken geprägt hat.",
    legalTitle: "Impressum & Datenschutz — Dongyuan Gao",
  },

  ui: {
    nav: {
      about: "Über mich",
      story: "Werdegang",
      projects: "Projekte",
      skills: "Skills",
      contact: "Kontakt",
    },
    getInTouch: "Kontakt aufnehmen",
    viewProjects: "Projekte ansehen",
    downloadResume: "Lebenslauf (PDF)",
    aboutKicker: "Über mich",
    projectsKicker: "Projekte",
    projectsHeading: "Was ich gebaut habe (und gerade baue)",
    problem: "Problem",
    approach: "Vorgehen",
    result: "Ergebnis",
    skillsKicker: "Skills",
    skillsHeading: "Der Werkzeugkasten",
    languagesKicker: "Sprachen",
    languagesHeading: "Vier Sprachen, eine Aufgabe: Absicht übersetzen",
    contactKicker: "Kontakt",
    contactHeading: "Lass uns etwas bauen, das denkt",
    locationLabel: "Standort",
    footerBuilt: "Gebaut mit Next.js & Tailwind.",
    legalLink: "Impressum & Datenschutz",
    backHome: "← Zurück zur Startseite",
    storyKicker: "Mein Werdegang",
    storyHeading: "Von Frachtrouten zu neuronalen Routen",
    storyIntro:
      "Dongyuan Gaos Weg — Sprachen, Logistik und der Wechsel in die KI. Scrollen und der Linie folgen.",
    lastUpdated: "Stand",
  },

  profile: {
    name: "Dongyuan Gao",
    firstName: "Dongyuan",
    lastName: "Gao",
    role: "Data Scientist & AI Engineer",
    // REVIEW: "Menschlich" statt "Humanistisch" — bewusst natürlicher gewählt
    kicker: ["Menschlich", "Kreativ", "KI-getrieben"],
    hook: "Ich denke in vier Sprachen — und baue Maschinen, die in einer denken.",
    capability:
      "Von der Datenbeschaffung über Modellierung und Evaluation bis zum Deployment — RAG-Pipelines, LangGraph-Agenten und Evaluations-Frameworks, betrieben mit LLMOps-Praktiken.",
    availability: "Offen für AI/ML-Engineering-Stellen in der Schweiz.",
    location: "Schweiz",
    metaphorNote: "Das Gehirn und seine drei Netzwerke — eine Metapher dafür, wie ich denke.",
    photo: "/profile.svg",
  },

  heroNets: {
    dmn: {
      val: "Menschlich",
      name: "Default Mode Network",
      desc: "4 Sprachen · Menschen · Kontext",
    },
    sal: {
      val: "Kreativ",
      name: "Salience Network",
      desc: "der Schalter · verbinden, was zählt",
    },
    cen: {
      val: "KI-getrieben",
      name: "Central Executive Network",
      desc: "LLMs · Agenten · Evaluation",
    },
  },

  stats: [
    { value: "8 Jahre", label: "Logistik" },
    { value: "4", label: "Sprachen" },
    { value: "MSc", label: "@ HSLU" },
    { value: "Agentic-AI", label: "Masterarbeit" },
  ],

  about: {
    lead: "Ich bin Data Scientist und AI Engineer in der Schweiz und baue LLM-basierte und agentische Systeme — end-to-end.",
    pipeline: ["Beschaffen", "Modellieren", "Evaluieren", "Deployen (LLMOps)"],
    networks: [
      {
        key: "cen",
        pillar: "KI-getrieben",
        network: "Central Executive Network",
        color: "var(--cen)",
        text: "Ich baue LLM- und agentische Systeme — RAG, LangChain, LangGraph und Evaluation — und bringe sie mit LLMOps-Praktiken vom Prototyp zum Deployment. Derzeit schliesse ich meinen MSc an der HSLU ab, mit einer Masterarbeit über agentische KI im Gesundheitswesen.",
      },
      {
        key: "sal",
        pillar: "Kreativ",
        network: "Salience Network",
        color: "var(--sal)",
        text: "Der Schalter. Ich entscheide gern, was wirklich zählt, und verbinde Punkte, die sonst verstreut blieben — das richtige Modell und die richtige Metrik, nicht die auffälligste.",
      },
      {
        key: "dmn",
        pillar: "Menschlich",
        network: "Default Mode Network",
        color: "var(--dmn)",
        text: "Acht Jahre Frachtverkehr zwischen Europa und Asien, vier Sprachen, ein MA in Übersetzung. Ich habe gelernt, Menschen und Systeme zu lesen, bevor ich Tensoren las.",
      },
    ],
  },

  timeline: [
    {
      year: "2011 – 2015",
      title: "BA Spanische Sprache & Literatur",
      place: "Beijing Language & Culture University · Austauschsemester in Santiago de Compostela",
    },
    {
      year: "2015 – 2016",
      title: "MA Übersetzung & Interkulturelle Studien",
      place: "Autonome Universität Barcelona, Spanien",
    },
    {
      year: "2017 – 2024",
      title: "Projektspezialist · Internationale Logistik",
      place: "Changjiu Logistics, Hamburg — Aufbau der Güterzugverbindung Mailand–China; Workflow-Automatisierung mit Python/Excel",
    },
    {
      year: "2025 – heute",
      title: "MSc Applied Information & Data Science",
      place: "Hochschule Luzern (HSLU), Schweiz",
    },
    {
      year: "2026 – heute",
      title: "Masterarbeit · Agentische KI im Gesundheitswesen",
      place: "HSLU — Konzeption und Evaluation eines agentischen KI-Systems",
    },
  ],

  projects: [
    {
      title: "Agentisches System für die Radiologie",
      badge: "Masterarbeit · laufend",
      tags: ["Agentic AI", "LLMs", "Evaluation"],
      problem: "Radiologie-Teams jonglieren mit fragmentierten Informationen aus Befunden, Leitlinien und Bildgebungs-Workflows.",
      approach: "Konzeption und Evaluation eines agentischen KI-Systems (LangGraph), das über Aufgaben und Tools hinweg schlussfolgert — mit von Anfang an integrierter Evaluation.",
      result: "Laufend; Details gern im Gespräch (vertraulich).",
      links: [],
    },
    {
      title: "Wikipedia-Neutralitäts-Monitor",
      badge: "IBM watsonx Challenge · Team",
      tags: ["NLP", "LLMs", "RAG"],
      problem: "Die Neutralität von Wikipedia variiert zwischen den Sprachversionen — und manuelle Bias-Prüfung skaliert nicht.",
      approach: "Pipeline über 5'000 Artikel und 1'000 Entitäten in 5 Sprachen. Doppelte Bias-Erkennung: Sentiment-Lexika (VADER + sprachspezifisch) und LLMs (Zero-Shot BART-MNLI, feinjustiertes XLM-R), dazu ein Dashboard und ein RAG-Chatbot (MiniLM-Embeddings, FAISS, Gradio).",
      result: "XLM-R-F1 von 0,19 auf 0,60 verbessert; geschätzt 30–50 % weniger manuelle Prüfzeit für Editoren.",
      links: [],
    },
    {
      title: "Wahrnehmungs-Pipeline für autonomes Fahren",
      badge: "2026 · Computer Vision · Team",
      tags: ["Computer Vision", "Deep Learning", "Python"],
      problem: "Eine Fahrszene zu verstehen braucht mehr als ein Modell — Detektion, Klassifikation, Segmentierung und Erklärung.",
      approach: "4-stufige Pipeline auf Fahrvideos: feinjustiertes YOLO (11 Verkehrsklassen), eingefrorenes OpenCLIP + Linear Probe zur Markenerkennung (20 Marken), semantische Segmentierung mit SegFormer-B5 und ein lokales VLM (Ollama) für Beschreibungen und Frame-Q&A.",
      result: "End-to-end annotierte Videodemos, evaluiert mit mAP@0.5 / mAP@0.5:0.95. Code auf GitHub.",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/computer_vision_hslu_2026" }],
    },
    {
      title: "Studienerfolg vorhersagen",
      badge: "2025 · ML · Team",
      tags: ["Python", "scikit-learn", "ML"],
      problem: "Lassen sich gefährdete Studierende früh anhand akademischer und demografischer Daten erkennen?",
      approach: "Daten bereinigt und exploriert, Features entwickelt, dann Logistische Regression, SVM und ein neuronales Netz per Kreuzvalidierung auf Standard-Metriken (Accuracy, F1) verglichen.",
      result: "Ein klares Bild, welches Modell seine Komplexität verdient — eine starke, interpretierbare Baseline, bevor das neuronale Netz zum Zug kommt. Code auf GitHub.",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/machine_learning_I_Project" }],
    },
    {
      title: "SNB-Leitzins & Inflation",
      badge: "2025 · Zeitreihen · Team",
      tags: ["R", "Time Series", "Data Analysis"],
      problem: "Bewegen SNB-Zinsentscheide tatsächlich die Schweizer Kerninflation?",
      approach: "Zeitreihenanalyse in R: ADF-Stationaritätstests, Lag-Regression, Event-Studies um Zinsschritte, VAR, Granger-Kausalität und ARIMA-Prognosen — publiziert als Quarto-Report.",
      result: "Leitzinsen Granger-verursachen die Inflation (nicht umgekehrt); die Erhöhung vom Oktober 2022 hatte einen signifikanten Effekt. Report und Code auf GitHub.",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/time_series_project" }],
    },
  ],

  projectFilters: [
    { value: "All", label: "Alle" },
    { value: "Agentic AI", label: "Agentic AI" },
    { value: "LLM", label: "LLM" },
    { value: "RAG", label: "RAG" },
    { value: "Computer Vision", label: "Computer Vision" },
    { value: "ML", label: "ML" },
    { value: "Time Series", label: "Zeitreihen" },
  ],

  skills: [
    {
      group: "AI / LLM",
      items: ["RAG", "LangChain", "LangGraph", "Prompt Engineering", "LLM Evaluation", "LLMOps", "GenAI"],
    },
    {
      group: "Machine Learning",
      items: ["Klassifikation", "Clustering", "CNNs", "Modell-Evaluation"],
    },
    {
      group: "Programmierung & Daten",
      items: ["Python", "SQL", "R", "MySQL", "Git", "Docker", "Excel"],
    },
    {
      group: "Tools & Zertifikate",
      items: ["Tableau", "RStudio", "Google Data Analytics Certificate (2024)"],
    },
  ],

  languages: {
    // REVIEW: "kein Partytrick" für "isn't trivia" — freier, aber natürlicher
    intro:
      "Vier Sprachen sind kein Partytrick — sie sind Trainingsdaten. Der Wechsel zwischen Chinesisch, Englisch, Spanisch und Deutsch hat mich gelehrt, Absichten zwischen sehr unterschiedlichen Systemen zu übersetzen — was, verdächtig genau, das meiste von Prompt Engineering ist.",
    items: [
      { lang: "Chinesisch", level: "Muttersprache", pct: 100 },
      { lang: "Englisch", level: "C1", pct: 90 },
      { lang: "Spanisch", level: "C1", pct: 88 },
      { lang: "Deutsch", level: "B2", pct: 72 },
    ],
  },

  legal: {
    title: "Impressum & Datenschutz",
    updated: "Juli 2026",
    intro:
      "Diese Seite erklärt, wer diese Website betreibt und wie sie mit Ihren Daten umgeht. Sie wird nach bestem Wissen bereitgestellt und ist keine Rechtsberatung.",
    owner: {
      heading: "Verantwortlich für diese Website (Impressum)",
      name: "Dongyuan Gao",
      // TODO: Stadt vor Veröffentlichung eintragen
      place: "[Your City], Schweiz",
    },
    sections: [
      {
        heading: "Urheberrecht",
        body: [
          "© 2026 Dongyuan Gao. Alle Texte, das Design und die Gehirn-Animation auf dieser Website sind eigene Arbeiten. Erwähnte Projekt- und Produktnamen (z. B. IBM watsonx) gehören ihren jeweiligen Inhabern und werden nur zur sachlichen Beschreibung genannt.",
        ],
      },
      {
        heading: "Externe Links",
        body: [
          "Diese Website verlinkt auf externe Angebote wie GitHub und LinkedIn. Auf deren Inhalte habe ich keinen Einfluss und übernehme dafür keine Verantwortung — es gelten die dortigen Bedingungen und Datenschutzerklärungen.",
        ],
      },
      {
        heading: "Datenschutz",
        body: [
          "Verantwortlicher: Dongyuan Gao (Kontaktangaben oben).",
          "Diese Website setzt keine Cookies und nutzt weder Analytics noch Tracking oder Kontaktformulare. Die einzigen verarbeiteten Personendaten sind technische Server-Logs (IP-Adresse, Browsertyp, Zugriffszeit), die der Hosting-Anbieter Vercel Inc. (USA) ausschliesslich zur Auslieferung und Absicherung der Website verarbeitet und nur so lange speichert, wie es für Betrieb und Sicherheit nötig ist.",
          "Da die Website bei einem US-Anbieter gehostet wird, können diese Daten in den USA verarbeitet werden. Die Schweiz anerkennt für solche Übermittlungen das Swiss–US Data Privacy Framework; Details sind beim Hosting-Anbieter verfügbar.",
          "Wenn Sie mir eine E-Mail schreiben, ist Ihre Nachricht freiwillig, wird nur zur Antwort verwendet und nie weitergegeben. Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer Personendaten verlangen.",
        ],
      },
    ],
  },
};

export default de;
