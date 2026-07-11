// =============================================================
// Simplified Chinese dictionary. Same shape as en.js.
// Lines marked // REVIEW: are the ones worth a translator's second look.
// =============================================================

const zh = {
  meta: {
    title: "高东元 — 数据科学家 & AI 工程师",
    description:
      "常驻瑞士的数据科学家和 AI 工程师，专注于构建基于 LLM 的智能体系统。我用四种语言思考，也打造用一种语言思考的机器。",
    storyTitle: "我的经历 — 高东元",
    storyDescription:
      "从西班牙语文学、横跨欧亚的货运路线，到 LLM 与智能体 AI 系统 — 这条路塑造了我的思维方式。",
    legalTitle: "法律声明与隐私 — 高东元",
  },

  ui: {
    nav: {
      about: "关于我",
      story: "我的经历",
      projects: "项目",
      skills: "技能",
      contact: "联系",
    },
    getInTouch: "联系我",
    viewProjects: "查看项目",
    downloadResume: "下载简历",
    aboutKicker: "关于我",
    projectsKicker: "项目",
    projectsHeading: "我构建过（和正在构建）的东西",
    problem: "问题",
    approach: "方法",
    result: "成果",
    skillsKicker: "技能",
    skillsHeading: "工具箱",
    languagesKicker: "语言",
    languagesHeading: "四种语言，一件事：翻译意图",
    contactKicker: "联系",
    contactHeading: "一起构建会思考的东西",
    locationLabel: "所在地",
    footerBuilt: "基于 Next.js 和 Tailwind 构建。",
    legalLink: "法律声明与隐私",
    backHome: "← 返回首页",
    storyKicker: "我的经历",
    storyHeading: "从货运路线到神经网络",
    storyIntro: "高东元的路 — 语言、物流，以及转向 AI 的那个决定。滚动页面，沿着这条线走。",
    lastUpdated: "最近更新",
  },

  profile: {
    // REVIEW: 中文版直接用中文名，比拼音更自然
    name: "高东元",
    firstName: "东元",
    lastName: "高",
    role: "数据科学家 & AI 工程师",
    kicker: ["人文", "创造", "AI 驱动"],
    hook: "我用四种语言思考，也打造用一种语言思考的机器。",
    capability:
      "从数据获取、建模到评估与部署 — RAG 管道、LangGraph 智能体和评估框架，以 LLMOps 实践运维。",
    availability: "正在寻找瑞士的 AI/ML 工程职位。",
    location: "瑞士",
    metaphorNote: "大脑及其三个网络 — 这是我思考方式的隐喻。",
    photo: "/profile.svg",
  },

  heroNets: {
    dmn: {
      val: "人文",
      name: "默认模式网络",
      desc: "4 种语言 · 人 · 语境",
    },
    sal: {
      val: "创造",
      name: "突显网络",
      desc: "切换开关 · 连接重要的事",
    },
    cen: {
      val: "AI 驱动",
      name: "中央执行网络",
      desc: "LLM · 智能体 · 评估",
    },
  },

  stats: [
    { value: "8 年", label: "物流经验" },
    { value: "4", label: "种语言" },
    { value: "硕士", label: "在读 @ HSLU" },
    { value: "智能体 AI", label: "毕业论文" },
  ],

  about: {
    lead: "我是常驻瑞士的数据科学家和 AI 工程师，端到端地构建基于 LLM 的智能体系统。",
    pipeline: ["获取", "建模", "评估", "部署（LLMOps）"],
    networks: [
      {
        key: "cen",
        pillar: "AI 驱动",
        network: "中央执行网络",
        color: "var(--cen)",
        text: "我构建 LLM 与智能体系统 — RAG、LangChain、LangGraph 和评估 — 并以 LLMOps 实践把它们从原型推进到部署。我正在 HSLU 完成硕士学业，毕业论文研究医疗领域的智能体 AI。",
      },
      {
        key: "sal",
        pillar: "创造",
        network: "突显网络",
        color: "var(--sal)",
        text: "切换开关。我喜欢先判断什么真正重要，再把原本散落的点连起来 — 选对的模型和对的指标，而不是最炫的那个。",
      },
      {
        key: "dmn",
        pillar: "人文",
        network: "默认模式网络",
        color: "var(--dmn)",
        text: "八年横跨欧亚的货运经历、四种语言、一个翻译学硕士。在读懂张量之前，我先学会了读懂人和系统。",
      },
    ],
  },

  timeline: [
    {
      year: "2011 – 2015",
      title: "西班牙语语言文学 学士",
      place: "北京语言大学 · 圣地亚哥-德孔波斯特拉交换",
    },
    {
      year: "2015 – 2016",
      title: "翻译与跨文化研究 硕士",
      place: "西班牙巴塞罗那自治大学",
    },
    {
      year: "2017 – 2024",
      title: "项目专员 · 国际物流",
      place: "长久物流，汉堡 — 开通米兰–中国货运班列线路；用 Python/Excel 实现工作流自动化",
    },
    {
      year: "2025 – 至今",
      title: "应用信息与数据科学 硕士",
      place: "瑞士卢塞恩应用科技大学（HSLU）",
    },
    {
      year: "2026 – 至今",
      title: "硕士论文 · 医疗领域的智能体 AI",
      place: "HSLU — 设计并评估一个智能体 AI 系统",
    },
  ],

  projects: [
    {
      title: "放射科智能体系统",
      badge: "毕业论文 · 进行中",
      tags: ["Agentic AI", "LLMs", "Evaluation"],
      problem: "放射科团队要在报告、指南和影像工作流之间处理碎片化的信息。",
      approach: "设计并评估一个能跨任务与工具推理的智能体 AI 系统（LangGraph），评估机制从一开始就内建其中。",
      result: "进行中；详情可在面试中交流（涉密）。",
      links: [],
    },
    {
      title: "维基百科中立性监测",
      badge: "IBM watsonx 挑战赛 · 团队",
      tags: ["NLP", "LLMs", "RAG"],
      problem: "维基百科的中立性在不同语言版本之间参差不齐，而人工偏见审查无法规模化。",
      approach: "构建覆盖 5 种语言、5,000 篇文章和 1,000 个实体的管道。双路偏见检测：情感词典（VADER + 语言专用词典）与 LLM（零样本 BART-MNLI、微调 XLM-R），另有仪表盘和 RAG 聊天机器人（MiniLM 嵌入、FAISS、Gradio）。",
      result: "XLM-R 的 F1 从 0.19 提升到 0.60；估计为编辑者减少 30–50% 的人工审查时间。",
      links: [],
    },
    {
      title: "自动驾驶感知管道",
      badge: "2026 · 计算机视觉 · 团队",
      tags: ["Computer Vision", "Deep Learning", "Python"],
      problem: "理解驾驶场景需要不止一个模型 — 检测、分类、分割和解释。",
      approach: "针对行车视频的四阶段管道：微调 YOLO（11 类交通目标）、冻结 OpenCLIP + 线性探针识别汽车品牌（20 个品牌）、SegFormer-B5 语义分割，以及本地 VLM（Ollama）生成描述和帧级问答。",
      result: "端到端标注的视频演示，以 mAP@0.5 / mAP@0.5:0.95 评估。代码见 GitHub。",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/computer_vision_hslu_2026" }],
    },
    {
      title: "学业成功预测",
      badge: "2025 · 机器学习 · 团队",
      tags: ["Python", "scikit-learn", "ML"],
      problem: "能否根据学业和人口统计数据，尽早识别有风险的学生？",
      approach: "清洗并探索数据集、做特征工程，然后用交叉验证在标准分类指标（准确率、F1）上比较逻辑回归、SVM 和神经网络。",
      result: "清楚地看出哪个模型配得上它的复杂度 — 在动用神经网络之前，先有一个强大且可解释的基线。代码见 GitHub。",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/machine_learning_I_Project" }],
    },
    {
      title: "瑞士央行利率与通胀",
      badge: "2025 · 时间序列 · 团队",
      tags: ["R", "Time Series", "Data Analysis"],
      problem: "瑞士央行的利率决议真的会影响瑞士核心通胀吗？",
      approach: "用 R 做时间序列分析：ADF 平稳性检验、滞后回归、围绕利率变动的事件研究、VAR、格兰杰因果检验和 ARIMA 预测 — 以 Quarto 报告发布。",
      result: "利率对通胀存在格兰杰因果关系（反之不成立）；2022 年 10 月的加息有显著影响。完整报告和代码见 GitHub。",
      links: [{ label: "GitHub", url: "https://github.com/dydy2010/time_series_project" }],
    },
  ],

  projectFilters: [
    { value: "All", label: "全部" },
    { value: "Agentic AI", label: "智能体 AI" },
    { value: "LLM", label: "LLM" },
    { value: "RAG", label: "RAG" },
    { value: "Computer Vision", label: "计算机视觉" },
    { value: "ML", label: "机器学习" },
    { value: "Time Series", label: "时间序列" },
  ],

  skills: [
    {
      group: "AI / LLM",
      items: ["RAG", "LangChain", "LangGraph", "提示工程", "LLM 评估", "LLMOps", "生成式 AI"],
    },
    {
      group: "机器学习",
      items: ["分类", "聚类", "CNN", "模型评估"],
    },
    {
      group: "编程与数据",
      items: ["Python", "SQL", "R", "MySQL", "Git", "Docker", "Excel"],
    },
    {
      group: "工具与证书",
      items: ["Tableau", "RStudio", "谷歌数据分析证书（2024）"],
    },
  ],

  languages: {
    intro:
      "会四种语言不是什么趣闻 — 那是训练数据。在中文、英语、西班牙语和德语之间切换，教会了我在截然不同的系统之间翻译意图 — 而这，说来微妙，几乎就是提示工程的全部。",
    items: [
      { lang: "中文", level: "母语", pct: 100 },
      { lang: "英语", level: "C1", pct: 90 },
      { lang: "西班牙语", level: "C1", pct: 88 },
      { lang: "德语", level: "B2", pct: 72 },
    ],
  },

  legal: {
    title: "法律声明与隐私",
    updated: "2026 年 7 月",
    intro: "本页说明本网站的运营者及其数据处理方式。内容基于诚信原则提供，不构成法律建议。",
    owner: {
      heading: "网站所有者（Impressum）",
      name: "高东元（Dongyuan Gao）",
      // TODO: 发布前填入真实城市
      place: "[Your City]，瑞士",
    },
    sections: [
      {
        heading: "版权",
        body: [
          "© 2026 高东元。本站所有文字、设计和大脑动画均为本人原创。文中提及的项目和产品名称（如 IBM watsonx）归其各自所有者所有，仅作客观描述之用。",
        ],
      },
      {
        heading: "外部链接",
        body: [
          "本站链接到 GitHub、LinkedIn 等外部网站。我无法影响其内容，也不为其承担责任 — 请以对方的条款和隐私政策为准。",
        ],
      },
      {
        heading: "隐私",
        body: [
          "数据控制者：高东元（联系方式见上）。",
          "本站不使用 Cookie，也没有任何分析、跟踪或联系表单。唯一处理的个人数据是技术性服务器日志（IP 地址、浏览器类型、访问时间），由托管服务商 Vercel Inc.（美国）仅为提供和保护网站而处理，并只在运营和安全所需的期限内保存。",
          "由于本站托管于美国服务商，这些数据可能在美国被处理。瑞士承认适用于此类传输的 Swiss–US Data Privacy Framework；详情可向托管服务商查询。",
          "如果你给我发邮件，你的信息完全出于自愿，仅用于回复，绝不外传。你可以随时要求查阅、更正或删除与你有关的个人数据。",
        ],
      },
    ],
  },
};

export default zh;
