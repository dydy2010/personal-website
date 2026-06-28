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
    title: "Agentic System for Healthcare",
    badge: "Thesis · in progress",
    tags: ["Agentic AI", "LLMs", "Evaluation"],
    problem: "Healthcare teams drown in fragmented information.",
    approach: "An agentic system that reasons over tasks and tools (LangGraph) with evaluation built in.",
    result: "In progress; full details over an interview (confidential).",
    links: [],
  },
  {
    title: "Predicting Student Success",
    badge: "2025 · ML",
    tags: ["Python", "scikit-learn", "ML"],
    problem: "Can we flag at-risk students early from their academic and demographic data?",
    approach: "Cleaned and explored the dataset, engineered features, then trained and compared Logistic Regression, SVM, and a neural network using cross-validation on standard classification metrics (accuracy, F1).",
    result: "A clear read on which model earns its complexity — a strong, interpretable baseline before reaching for a neural net. Code on GitHub.",
    links: [{ label: "GitHub", url: "https://github.com/dydy2010" }],
  },
  {
    title: "Coming soon",
    badge: "Placeholder",
    tags: ["RAG", "LLM Agent", "Data-viz"],
    problem: "The brain's still loading.",
    approach: "A RAG app, an LLM agent, and a data-viz piece are on the way.",
    result: "Check back soon.",
    links: [],
    placeholder: true,
  },
];

export const projectFilters = ["All", "Agentic AI", "LLMs", "ML", "RAG"];

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
