// =============================================================
// Spanish dictionary. Same shape as en.js.
// Lines marked // REVIEW: are the ones worth a translator's second look.
// =============================================================

const es = {
  meta: {
    title: "Dongyuan Gao — Data Scientist e Ingeniero de IA",
    description:
      "Data Scientist e Ingeniero de IA en Suiza. Construyo sistemas basados en LLM y agénticos — pienso en cuatro idiomas y construyo máquinas que piensan en uno.",
    storyTitle: "Mi trayectoria — Dongyuan Gao",
    storyDescription:
      "De la literatura española y las rutas de carga entre Europa y Asia a los sistemas de IA agéntica y LLM — el camino que moldeó mi forma de pensar.",
    legalTitle: "Aviso legal y privacidad — Dongyuan Gao",
  },

  ui: {
    nav: {
      about: "Sobre mí",
      story: "Trayectoria",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    getInTouch: "Escríbeme",
    viewProjects: "Ver proyectos",
    downloadResume: "Descargar CV",
    aboutKicker: "Sobre mí",
    projectsKicker: "Proyectos",
    projectsHeading: "Lo que he construido (y sigo construyendo)",
    skillsKicker: "Habilidades",
    skillsHeading: "La caja de herramientas",
    languagesKicker: "Idiomas",
    languagesHeading: "Cuatro idiomas, un mismo oficio: traducir la intención",
    contactKicker: "Contacto",
    contactHeading: "Construyamos algo que piense",
    locationLabel: "Ubicación",
    footerBuilt: "Hecho con Next.js y Tailwind.",
    legalLink: "Aviso legal y privacidad",
    backHome: "← Volver al inicio",
    storyKicker: "Mi trayectoria",
    storyHeading: "De rutas de carga a rutas neuronales",
    storyIntro:
      "El camino de Dongyuan Gao — idiomas, logística y el giro hacia la IA. Desplázate para seguir la línea.",
    lastUpdated: "Última actualización",
  },

  profile: {
    name: "Dongyuan Gao",
    firstName: "Dongyuan",
    lastName: "Gao",
    role: "Data Scientist e Ingeniero de IA",
    kicker: ["Humanista", "Creativo", "Impulsado por IA"],
    hook: "Pienso en cuatro idiomas y construyo máquinas que piensan en uno.",
    capability:
      "De la adquisición de datos y el modelado a la evaluación y el despliegue — pipelines RAG, agentes con LangGraph y arneses de evaluación, operados con prácticas de LLMOps.",
    availability: "Abierto a puestos de ingeniería de IA/ML en Suiza.",
    location: "Suiza",
    metaphorNote: "El cerebro y sus tres redes — una metáfora de cómo pienso.",
    photo: "/profile.svg",
  },

  heroNets: {
    dmn: {
      val: "Humanista",
      name: "Red Neuronal por Defecto",
      desc: "4 idiomas · personas · contexto",
    },
    sal: {
      val: "Creativo",
      name: "Red de Saliencia",
      desc: "el interruptor · conectar lo que importa",
    },
    cen: {
      val: "Impulsado por IA",
      name: "Red Ejecutiva Central",
      desc: "LLMs · agentes · evaluación",
    },
  },

  stats: [
    { value: "8 años", label: "en logística" },
    { value: "4", label: "idiomas" },
    { value: "MSc", label: "@ HSLU" },
    { value: "IA agéntica", label: "tesis" },
  ],

  about: {
    lead: "Soy Data Scientist e Ingeniero de IA en Suiza, y construyo sistemas basados en LLM y agénticos de principio a fin.",
    pipeline: ["Adquirir", "Modelar", "Evaluar", "Desplegar (LLMOps)"],
    networks: [
      {
        key: "cen",
        pillar: "Impulsado por IA",
        network: "Ejecutiva Central",
        color: "var(--cen)",
        text: "Construyo sistemas LLM y agénticos — RAG, LangChain, LangGraph y evaluación — con prácticas de LLMOps para llevarlos del prototipo al despliegue. Estoy terminando mi máster en la HSLU con una tesis sobre IA agéntica para el sector sanitario.",
      },
      {
        key: "sal",
        pillar: "Creativo",
        network: "de Saliencia",
        color: "var(--sal)",
        text: "El interruptor. Me gusta decidir qué importa de verdad y conectar puntos que de otro modo quedarían sueltos — eligiendo el modelo y la métrica correctos, no los más llamativos.",
      },
      {
        key: "dmn",
        pillar: "Humanista",
        network: "por Defecto",
        color: "var(--dmn)",
        text: "Ocho años moviendo carga entre Europa y Asia, cuatro idiomas, un máster en traducción. Aprendí a leer personas y sistemas antes que tensores.",
      },
    ],
  },

  timeline: [
    {
      year: "2011 – 2015",
      title: "Grado en Lengua y Literatura Españolas",
      place: "Universidad de Lengua y Cultura de Pekín · intercambio en Santiago de Compostela",
    },
    {
      year: "2015 – 2016",
      title: "Máster en Traducción y Estudios Interculturales",
      place: "Universidad Autónoma de Barcelona, España",
    },
    {
      year: "2017 – 2024",
      title: "Especialista de proyectos · Logística internacional",
      place: "Changjiu Logistics, Hamburgo — puesta en marcha de la ruta ferroviaria de carga Milán–China; automatización de flujos con Python/Excel",
    },
    {
      year: "2025 – actualidad",
      title: "MSc Applied Information & Data Science",
      place: "Hochschule Luzern (HSLU), Suiza",
    },
    {
      year: "2026 – actualidad",
      title: "Tesis de máster · IA agéntica para el sector sanitario",
      place: "HSLU — diseño y evaluación de un sistema de IA agéntica",
    },
  ],

  projects: [
    {
      title: "Sistema agéntico para radiología",
      badge: "Tesis · en curso",
      tags: ["Agentic AI", "LLMs", "Evaluation"],
      problem: "Los equipos de radiología manejan información fragmentada entre informes, guías clínicas y flujos de imagen.",
      approach: "Diseño y evaluación de un sistema de IA agéntica (LangGraph) que razona sobre tareas y herramientas, con la evaluación integrada desde el inicio.",
      result: "En curso; detalles completos en una entrevista (confidencial).",
      links: [],
    },
    {
      title: "Monitor de neutralidad de Wikipedia",
      badge: "IBM watsonx Challenge · Equipo",
      tags: ["NLP", "LLMs", "RAG"],
      problem: "La neutralidad de Wikipedia varía entre ediciones lingüísticas, y la revisión manual de sesgos no escala.",
      approach: "Pipeline sobre 5.000 artículos y 1.000 entidades en 5 idiomas. Detección de sesgo por dos vías: léxicos de sentimiento (VADER + específicos por idioma) y LLMs (BART-MNLI zero-shot, XLM-R afinado), más un panel de control y un chatbot RAG (embeddings MiniLM, FAISS, Gradio).",
      result: "El F1 de XLM-R mejoró de 0,19 a 0,60; una reducción estimada del 30–50 % en el tiempo de revisión manual.",
      links: [],
    },
    {
      title: "Pipeline de percepción para conducción autónoma",
      badge: "2026 · Visión artificial · Equipo",
      tags: ["Computer Vision", "Deep Learning", "Python"],
      problem: "Entender una escena de conducción exige más de un modelo — detección, clasificación, segmentación y explicación.",
      approach: "Pipeline de 4 etapas sobre vídeo de conducción: YOLO afinado (11 clases de tráfico), OpenCLIP congelado + sonda lineal para reconocer marcas de coches (20 marcas), segmentación semántica con SegFormer-B5 y un VLM local (Ollama) para descripciones y preguntas sobre fotogramas.",
      result: "Demos de vídeo anotadas de extremo a extremo, evaluadas con mAP@0.5 / mAP@0.5:0.95. Código en GitHub.",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/computer_vision_hslu_2026" }],
    },
    {
      title: "Predicción del éxito académico",
      badge: "2025 · ML · Equipo",
      tags: ["Python", "scikit-learn", "ML"],
      problem: "¿Podemos detectar pronto a estudiantes en riesgo a partir de sus datos académicos y demográficos?",
      approach: "Limpieza y exploración del dataset, ingeniería de variables, y comparación de regresión logística, SVM y una red neuronal con validación cruzada sobre métricas estándar (accuracy, F1).",
      result: "Una lectura clara de qué modelo justifica su complejidad — una línea base sólida e interpretable antes de recurrir a la red neuronal. Código en GitHub.",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/machine_learning_I_Project" }],
    },
    {
      title: "Tipos del BNS e inflación",
      badge: "2025 · Series temporales · Equipo",
      tags: ["R", "Time Series", "Data Analysis"],
      problem: "¿Mueven realmente las decisiones de tipos del BNS la inflación subyacente suiza?",
      approach: "Análisis de series temporales en R: tests de estacionariedad ADF, regresión con retardos, estudios de eventos en torno a los cambios de tipos, VAR, causalidad de Granger y pronósticos ARIMA — publicado como informe Quarto.",
      result: "Los tipos de interés causan (en sentido de Granger) la inflación, y no al revés; la subida de octubre de 2022 tuvo un efecto significativo. Informe y código en GitHub.",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/time_series_project" }],
    },
  ],

  projectFilters: [
    { value: "All", label: "Todos" },
    { value: "Agentic AI", label: "IA agéntica" },
    { value: "LLM", label: "LLM" },
    { value: "RAG", label: "RAG" },
    { value: "Computer Vision", label: "Visión artificial" },
    { value: "ML", label: "ML" },
    { value: "Time Series", label: "Series temporales" },
  ],

  skills: [
    {
      group: "IA / LLM",
      items: ["RAG", "LangChain", "LangGraph", "Prompt Engineering", "Evaluación de LLM", "LLMOps", "GenAI"],
    },
    {
      group: "Machine Learning",
      items: ["Clasificación", "Clustering", "CNNs", "Evaluación de modelos"],
    },
    {
      group: "Programación y datos",
      items: ["Python", "SQL", "R", "MySQL", "Git", "Docker", "Excel"],
    },
    {
      group: "Herramientas y certificados",
      items: ["Tableau", "RStudio", "Google Data Analytics Certificate (2024)"],
    },
  ],

  languages: {
    // REVIEW: "sospechosamente" mantiene el guiño del original
    intro:
      "Cuatro idiomas no son una anécdota — son datos de entrenamiento. Alternar entre chino, inglés, español y alemán me enseñó a traducir la intención entre sistemas muy distintos, que es, sospechosamente, casi todo lo que hace el prompt engineering.",
    items: [
      { lang: "Chino", level: "Nativo", pct: 100 },
      { lang: "Inglés", level: "C1", pct: 90 },
      { lang: "Español", level: "C1", pct: 88 },
      { lang: "Alemán", level: "B2", pct: 72 },
    ],
  },

  legal: {
    title: "Aviso legal y privacidad",
    updated: "Julio de 2026",
    intro:
      "Esta página explica quién gestiona este sitio web y cómo trata tus datos. Se ofrece de buena fe y no constituye asesoramiento jurídico.",
    owner: {
      heading: "Titular del sitio (Impressum)",
      name: "Dongyuan Gao",
      // TODO: sustituir por la ciudad real antes de publicar
      place: "[Your City], Suiza",
    },
    sections: [
      {
        heading: "Derechos de autor",
        body: [
          "© 2026 Dongyuan Gao. Todos los textos, el diseño y la animación del cerebro de este sitio son obra propia. Los nombres de proyectos y productos mencionados (por ejemplo, IBM watsonx) pertenecen a sus respectivos titulares y se citan solo con fines descriptivos.",
        ],
      },
      {
        heading: "Enlaces externos",
        body: [
          "Este sitio enlaza a webs externas como GitHub y LinkedIn. No tengo influencia sobre su contenido ni asumo responsabilidad por él — se aplican sus propios términos y políticas de privacidad.",
        ],
      },
      {
        heading: "Privacidad",
        body: [
          "Responsable: Dongyuan Gao (datos de contacto arriba).",
          "Este sitio no usa cookies, analítica, rastreo ni formularios de contacto. Los únicos datos personales tratados son los registros técnicos del servidor (dirección IP, tipo de navegador, hora de acceso), que el proveedor de alojamiento Vercel Inc. (EE. UU.) procesa únicamente para servir y proteger el sitio, y conserva solo el tiempo necesario para su funcionamiento y seguridad.",
          "Al estar alojado el sitio en un proveedor estadounidense, estos datos pueden procesarse en EE. UU. Suiza reconoce el Swiss–US Data Privacy Framework para estas transferencias; hay más detalles disponibles a través del proveedor.",
          "Si me escribes por correo, tu mensaje es voluntario, se usa solo para responder y nunca se comparte. Puedes pedirme en cualquier momento acceder a tus datos personales, corregirlos o eliminarlos.",
        ],
      },
    ],
  },
};

export default es;
