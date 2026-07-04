// =============================================================
// Single source of truth for all site copy.
// Edit text here without touching the components.
// Privacy-safe: no phone number, date of birth, nationality, or gender.
// =============================================================

export const profile = {
  name: "Dongyuan Gao",
  firstName: "Dongyuan",
  lastName: "Gao",
  role: "Data Scientist & AI Engineer",
  kicker: ["Humanistic", "Creative", "AI-Driven"],
  hook: "I think in four languages and build machines that think in one.",
  capability:
    "I build LLM and agentic systems end-to-end — RAG pipelines, LangGraph agents, and evaluation harnesses — and ship them with LLMOps practices.",
  availability: "Open to AI/ML engineering roles in Switzerland.",
  location: "Switzerland",
  metaphorNote: "The brain and its three networks — a metaphor for how I think.",
  // photo lives at /public/profile.jpg (replace with a real headshot)
  photo: "/profile.svg",
};

export const links = {
  // email is assembled in the component to reduce spam scraping
  emailUser: "gao.dongyuan2010",
  emailDomain: "gmail.com",
  linkedin: "https://www.linkedin.com/in/dongyuan-gao",
  github: "https://github.com/dydy2010",
  resume: "/resume.pdf",
};

// Labels for the hero brain animation (one per network phase).
// "val" is the big word, "name" the brain network, "desc" ties it to my story.
export const heroNets = {
  dmn: {
    val: "Humanistic",
    name: "Default Mode Network",
    desc: "4 languages · people · context",
  },
  sal: {
    val: "Creative",
    name: "Salience Network",
    desc: "the switch · connecting what matters",
  },
  cen: {
    val: "AI-Driven",
    name: "Central Executive Network",
    desc: "LLMs · agents · evaluation",
  },
};

export const stats = [
  { value: "8 yrs", label: "delivery" },
  { value: "4", label: "languages" },
  { value: "MSc", label: "@ HSLU" },
  { value: "Agentic-AI", label: "thesis" },
];

export const about = {
  lead: "I'm a Data Scientist and AI Engineer based in Switzerland who builds LLM-powered and agentic systems end-to-end — from data acquisition and modelling through evaluation and LLMOps deployment.",
  // data lifecycle framing: shows I own the full pipeline, not just one slice
  pipeline: ["Acquire", "Model", "Evaluate", "Deploy (LLMOps)"],
  // each block maps to one of the brain's three networks (AI-Driven leads)
  networks: [
    {
      key: "cen",
      pillar: "AI-Driven",
      network: "Central Executive",
      color: "var(--cen)",
      text: "I build LLM and agentic systems — RAG, LangChain, LangGraph, and evaluation — with LLMOps practices to take them from prototype to deployment. I'm finishing my MSc at HSLU with a thesis on agentic AI for healthcare.",
    },
    {
      key: "sal",
      pillar: "Creative",
      network: "Salience",
      color: "var(--sal)",
      text: "The switch. I like deciding what actually matters, then connecting the dots other people leave scattered — picking the right model and the right metric, not the flashiest one.",
    },
    {
      key: "dmn",
      pillar: "Humanistic",
      network: "Default Mode",
      color: "var(--dmn)",
      text: "Eight years moving freight across Europe and Asia, four languages, an MA in translation. I learned to read people and systems before I read tensors.",
    },
  ],
  close: "Open to AI/ML engineering roles in Switzerland.",
};

export const timeline = [
  {
    year: "2011 – 2015",
    title: "BA Spanish Language & Literature",
    place: "Beijing Language & Culture University · exchange in Santiago de Compostela",
  },
  {
    year: "2015 – 2016",
    title: "MA Translation & Intercultural Studies",
    place: "Autonomous University of Barcelona, Spain",
  },
  {
    year: "2017 – 2024",
    title: "Project Specialist · International Logistics",
    place: "Changjiu Logistics, Hamburg — launched the Milan–China freight-train route; automated workflows with Python/Excel",
  },
  {
    year: "2025 – present",
    title: "MSc Applied Information & Data Science",
    place: "Hochschule Luzern (HSLU), Switzerland",
  },
  {
    year: "2026 – present",
    title: "Master Thesis · Agentic AI for Healthcare",
    place: "HSLU — designing and evaluating an agentic AI system",
  },
];

export const projects = [
  {
    title: "Agentic System for Radiology",
    badge: "Thesis · in progress",
    tags: ["Agentic AI", "LLMs", "Evaluation"],
    problem: "Radiology teams juggle fragmented information across reports, guidelines, and imaging workflows.",
    approach: "Designing and evaluating an agentic AI system (LangGraph) that reasons over tasks and tools, with evaluation built in from the start.",
    result: "In progress; full details over an interview (confidential).",
    links: [],
  },
  {
    title: "Wikipedia Neutrality Monitor",
    badge: "IBM watsonx Challenge · Team",
    tags: ["NLP", "LLMs", "RAG"],
    problem: "Wikipedia's neutrality varies across language editions, and manual bias review doesn't scale.",
    approach: "Built a pipeline over 5,000 articles and 1,000 entities in 5 languages. Dual bias detection: sentiment lexicons (VADER + language-specific) and LLMs (zero-shot BART-MNLI, fine-tuned XLM-R), plus a dashboard and a RAG chatbot (MiniLM embeddings, FAISS, Gradio).",
    result: "XLM-R F1 improved 0.19 → 0.60; an estimated 30–50% cut in manual review time for editors.",
    links: [],
  },
  {
    title: "Self-Driving Perception Pipeline",
    badge: "2026 · Computer Vision · Team",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    problem: "Understanding a driving scene takes more than one model — detection, classification, segmentation, and explanation.",
    approach: "A 4-stage pipeline on driving video: fine-tuned YOLO (11 traffic classes), frozen OpenCLIP + linear probe for car-brand recognition (20 brands), SegFormer-B5 semantic segmentation, and a local VLM (Ollama) for captions and frame Q&A.",
    result: "End-to-end annotated video demos, evaluated with mAP@0.5 / mAP@0.5:0.95. Code on GitHub.",
    links: [{ label: "GitHub", url: "https://github.com/dydy2010/computer_vision_hslu_2026" }],
  },
  {
    title: "Predicting Student Success",
    badge: "2025 · ML",
    tags: ["Python", "scikit-learn", "ML"],
    problem: "Can we flag at-risk students early from their academic and demographic data?",
    approach: "Cleaned and explored the dataset, engineered features, then trained and compared Logistic Regression, SVM, and a neural network using cross-validation on standard classification metrics (accuracy, F1).",
    result: "A clear read on which model earns its complexity — a strong, interpretable baseline before reaching for a neural net. Code on GitHub.",
    links: [{ label: "GitHub", url: "https://github.com/dydy2010/machine_learning_I_Project" }],
  },
  {
    title: "SNB Policy Rates & Inflation",
    badge: "2025 · Time Series · Team",
    tags: ["R", "Time Series", "Data Analysis"],
    problem: "Do SNB policy-rate decisions actually move Swiss core inflation?",
    approach: "Time series analysis in R: ADF stationarity tests, lagged regression, event studies around rate shifts, VAR, Granger causality, and ARIMA forecasting — published as a Quarto report.",
    result: "Policy rates Granger-cause inflation (not the other way around); the Oct 2022 hike had a significant effect. Full report and code on GitHub.",
    links: [{ label: "GitHub", url: "https://github.com/dydy2010/time_series_project" }],
  },
];

export const projectFilters = [
  "All",
  "Agentic AI",
  "LLM",
  "RAG",
  "Computer Vision",
  "ML",
  "Time Series",
];

export const skills = [
  {
    group: "AI / LLM",
    items: ["RAG", "LangChain", "LangGraph", "Prompt Engineering", "LLM Evaluation", "LLMOps", "GenAI"],
  },
  {
    group: "Machine Learning",
    items: ["Classification", "Clustering", "CNNs", "Model Evaluation"],
  },
  {
    group: "Programming & Data",
    items: ["Python", "SQL", "R", "MySQL", "Git", "Docker", "Excel"],
  },
  {
    group: "Tools & Certs",
    items: ["Tableau", "RStudio", "Google Data Analytics Certificate (2024)"],
  },
];

// Copy for the /legal page (Impressum + privacy notice).
// NOTE: if the site ever adds analytics, a contact form, or anything
// commercial (e.g. freelancing), the privacy section must be expanded.
export const legal = {
  title: "Legal & Privacy",
  updated: "July 2026",
  intro:
    "This page explains who runs this website and how it handles your data. It is provided in good faith and is not legal advice.",
  owner: {
    heading: "Site Owner (Impressum)",
    name: "Dongyuan Gao",
    // TODO: replace with your real city before publishing
    place: "[Your City], Switzerland",
  },
  sections: [
    {
      heading: "Copyright",
      body: [
        "© 2026 Dongyuan Gao. All text, the design, and the brain animation on this site are my own work. Project and product names mentioned here (for example IBM watsonx) belong to their respective owners and are referenced for factual description only.",
      ],
    },
    {
      heading: "External Links",
      body: [
        "This site links to external websites such as GitHub and LinkedIn. I have no influence over their content and take no responsibility for it — their own terms and privacy policies apply.",
      ],
    },
    {
      heading: "Privacy",
      body: [
        "Controller: Dongyuan Gao (contact details above).",
        "This site sets no cookies and uses no analytics, tracking, or contact forms. The only personal data processed are technical server logs (IP address, browser type, time of access), which the hosting provider Vercel Inc. (USA) processes solely to deliver and secure the site, and keeps only as long as needed for operation and security.",
        "Because the site is hosted by a US provider, this data may be processed in the USA. Switzerland recognizes the Swiss–US Data Privacy Framework for such transfers; details are available from the hosting provider.",
        "If you email me, your message is voluntary, used only to reply, and never shared. You can ask me at any time to access, correct, or delete personal data concerning you.",
      ],
    },
  ],
};

export const languages = {
  intro:
    "Four languages isn't trivia — it's training data. Switching between Chinese, English, Spanish, and German taught me to translate intent across very different systems, which is, suspiciously, most of what prompt engineering is.",
  items: [
    { lang: "Chinese", level: "Native", pct: 100 },
    { lang: "English", level: "C1", pct: 90 },
    { lang: "Spanish", level: "C1", pct: 88 },
    { lang: "German", level: "B2", pct: 72 },
  ],
};
