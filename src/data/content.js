// Semua konten portofolio asli dipertahankan persis — hanya tampilan yang didesain ulang.

export const profile = {
  name: "Dadan Hamdani",
  role: "Data Scientist",
  badge: "Available for Full-Time Roles",
  typedRoles: [
    "BNSP Certified Data Scientist 🏅",
    "Machine Learning Engineer 🤖",
    "Business Intelligence Analyst 📊",
    "Data Storyteller 📈",
    "Information Systems Graduate 🎓",
  ],
  description:
    "BNSP-Certified Data Scientist & Information Systems graduate from Telkom University. I transform raw data into strategic decisions that drive real-world impact.",
  stats: [
    { num: "3.61", label: "GPA" },
    { num: "6+", label: "Projects" },
    { num: "BNSP", label: "Certified" },
    { num: "Top 5", label: "KIBB Finalist" },
  ],
  email: "dadanhamdani.0623@gmail.com",
  linkedin: "linkedin.com/in/dadanhamdani02",
  linkedinUrl: "https://linkedin.com/in/dadanhamdani02",
  location: "Bandung, West Java · Open to Remote & Relocation",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certs" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  eyebrow: "about me",
  title: "Turning Data into\nMeaningful Decisions",
  paragraphs: [
    {
      pre: "I'm a ",
      strong: "final-year Information Systems student at Telkom University",
      post: " with a deep passion for data science and analytics. My journey started in system analysis, but data captured my attention — the way it reveals patterns, predicts outcomes, and drives smarter decisions.",
    },
    {
      pre: "I hold a ",
      strong: "BNSP National Certification as a Data Scientist",
      post: ", with hands-on experience in machine learning, statistical modeling, business intelligence, and data storytelling.",
    },
    {
      pre: "What sets me apart is my ",
      strong: "hybrid background",
      post: " — combining rigorous data science skills with a foundation in business development and public relations, allowing me to communicate complex insights to any audience, technical or not.",
    },
  ],
  chips: [
    "Python", "SQL", "Machine Learning", "Data Visualization",
    "Business Intelligence", "Cloud Computing", "Big Data", "System Analysis",
  ],
  highlights: [
    { icon: "🎓", title: "Telkom University", sub: "S1 Information Systems · GPA 3.61 · Final Semester" },
    { icon: "🏅", title: "BNSP Certified Data Scientist", sub: "National Professional Certification · 2025" },
    { icon: "🏆", title: "Top 5 Finalist — KIBB 2023", sub: "Bandung City-Level Innovation Competition" },
    { icon: "💼", title: "Web Developer Intern", sub: "PT Polystar International (MBtech) · Jakarta" },
    { icon: "🌱", title: "50+ Community Members Impacted", sub: "SmarTani deployed at Desa Putrajawa, Garut" },
  ],
};

export const skills = {
  eyebrow: "technical skills",
  title: "My Toolkit",
  sub: "A full-stack data science skill set — from raw data to business insight.",
  groups: [
    {
      icon: "💻", title: "Programming & Data",
      tags: [
        { t: "Python", hot: true }, { t: "SQL", hot: true }, { t: "Pandas" },
        { t: "NumPy" }, { t: "Scikit-learn" }, { t: "Matplotlib" }, { t: "Seaborn" }, { t: "MySQL" },
      ],
    },
    {
      icon: "🤖", title: "Machine Learning",
      tags: [
        { t: "Machine Learning", hot: true }, { t: "Statistical Modeling" }, { t: "Classification" },
        { t: "Regression" }, { t: "Clustering" }, { t: "Feature Engineering" }, { t: "EDA" },
      ],
    },
    {
      icon: "📊", title: "Business Intelligence",
      tags: [
        { t: "Data Warehouse", hot: true }, { t: "Business Intelligence", hot: true },
        { t: "Big Data" }, { t: "Tableau" }, { t: "Data Visualization" }, { t: "Storytelling" },
      ],
    },
    {
      icon: "☁️", title: "Cloud & Infrastructure",
      tags: [
        { t: "Cloud Computing", hot: true }, { t: "Linux" }, { t: "Virtual Machine" },
        { t: "Google Colab" }, { t: "Jupyter Notebook" }, { t: "Git" },
      ],
    },
    {
      icon: "🔍", title: "System Analysis",
      tags: [
        { t: "DFD" }, { t: "ERD" }, { t: "PIECES" }, { t: "FAST" },
        { t: "UML" }, { t: "Visual Paradigm" }, { t: "Figma" }, { t: "UI/UX" },
      ],
    },
    {
      icon: "🤝", title: "Soft Skills",
      tags: [
        { t: "Analytical Thinking", hot: true }, { t: "Problem Solving" }, { t: "Public Speaking" },
        { t: "Team Leadership" }, { t: "Project Management" }, { t: "Communication" },
      ],
    },
  ],
};

export const certifications = {
  eyebrow: "licenses & certifications",
  title: "Certified & Verified",
  sub: "Competency-based certifications that validate real-world expertise.",
  items: [
    { color: "gold", year: "2025", tag: "🏅 BNSP National", title: "BNSP Certified Data Scientist", desc: "Badan Nasional Sertifikasi Profesi — National Competency Certification based on SKKNI standards" },
    { color: "teal", year: "2025", tag: "📜 Training", title: "Data Scientist Training Certificate", desc: "Official Data Science Training Program — Python, ML, Business Intelligence & Data Visualization" },
    { color: "blue", year: "2024", tag: "☁️ Infra", title: "Virtual Machine Fundamental", desc: "Telkom University — Virtualization & Infrastructure Fundamentals" },
    { color: "green", year: "2024", tag: "🐧 OS", title: "Linux Fundamental", desc: "Telkom University — Linux Command Line & System Administration" },
    { color: "purple", year: "2024", tag: "🏢 ERP", title: "SAP01 Fundamental", desc: "SAP — Enterprise Resource Planning Fundamentals" },
  ],
};

export const projectsIntro = {
  eyebrow: "featured projects",
  title: "Work That Makes an Impact",
  sub: "Selected Projects — from academic research to real-world implementation.",
};

export const featuredProjects = [
  {
    label: "🌿 PPL · Academic Project",
    title: "SmarTani — Aplikasi Pencatatan Hasil Pertanian Biofarmaka",
    desc: "A comprehensive agricultural recording app for biofarmaka (medicinal plant) farmers. SmarTani digitizes harvest records, tracks yields over time, and delivers data-driven insights to improve farmer productivity and income — bringing smart technology directly to rural agriculture communities.",
    tags: ["System Analysis", "UI/UX Design", "Mobile App", "Database Design", "FAST Methodology", "Agile / PPL"],
    highlights: [
      { icon: "🌿", title: "Problem", text: "Farmers lacked a systematic way to record and analyze harvest data, causing poor planning and income loss" },
      { icon: "📱", title: "Solution", text: "Digital recording app with harvest history, yield analytics, and crop management — designed for low-tech rural users" },
      { icon: "🎯", title: "My Role", text: "Full system analysis, requirements gathering, UI/UX design, and development coordination under PPL coursework" },
      { icon: "📊", title: "Outcome", text: "Successfully deployed and tested with real biofarmaka farming community at Desa Putrajawa, Garut" },
    ],
    reverse: false,
  },
  {
    label: "🏗️ Manprosi · Project Design",
    title: "Perancangan IoT untuk Meningkatkan Efisiensi Pelayanan Kependudukan — Kecamatan Bojongsoang",
    desc: "Designed a complete IoT system to modernize and improve the quality of civil registration services at Kecamatan Bojongsoang. The solution covers smart queue management, real-time service monitoring, and a data dashboard for evidence-based administrative decision-making.",
    tags: ["IoT Architecture", "Project Management", "System Design", "UML", "Public Sector", "Manprosi"],
    highlights: [
      { icon: "🏛️", title: "Context", text: "Administrative services in Kecamatan Bojongsoang were slow, paper-based, and inefficient for residents" },
      { icon: "⚡", title: "Innovation", text: "IoT-based smart queue management and citizen service monitoring to reduce wait time and improve quality" },
      { icon: "🎯", title: "My Role", text: "Project Manager — led system design, IoT architecture planning, stakeholder analysis, and full project documentation" },
      { icon: "📈", title: "Impact", text: "Proposed digital transformation framework for public administrative efficiency — submitted as Manprosi final project" },
    ],
    reverse: true,
  },
  {
    label: "🎓 Capstone Design Project",
    title: "Sistem Informasi Peningkatan Pemahaman Bahasa Isyarat untuk Interaksi Sosial Inklusif dengan Penyandang Tunarungu",
    desc: "An inclusive information system designed to bridge the communication gap between the deaf community and the general public. This capstone analyzes and designs a platform to teach Indonesian Sign Language (SIBI/BISINDO), fostering equal and inclusive social interaction for people who are deaf or hard of hearing.",
    tags: ["System Analysis", "Next.js Framework", "Inclusive Design", "Social Impact", "ERD & DFD", "Capstone Project"],
    highlights: [
      { icon: "🧩", title: "Social Problem", text: "The deaf community faces social isolation due to communication barriers — most Indonesians cannot use sign language" },
      { icon: "💡", title: "System Solution", text: "Learning management system with sign language modules, video content, and progress tracking — built for general public users" },
      { icon: "🔍", title: "Analysis Method", text: "Built and developed a web application using Next.js and handled data processing tasks by transforming video content into text and structured sentences to support system functionality and analysis" },
      { icon: "🌍", title: "Vision", text: "Support Indonesia's inclusive society goals by empowering the general public to meaningfully communicate with the deaf community" },
    ],
    reverse: false,
  },
];

export const smallProjects = [
  {
    icon: "🌾", badge: "competition", badgeLabel: "🏆 Top 5",
    title: "IoT Agricultural Monitoring — KIBB 2023",
    desc: "Led team to build an IoT crop monitoring system for Lomba Inovasi Bandung Bedas. Achieved Top 5 Finalist at city-level innovation competition.",
    tags: ["IoT", "Project Lead", "KIBB"],
  },
  {
    icon: "♿", badge: "research", badgeLabel: "Research",
    title: "Inklusi Transportasi Disabilitas — BRIN",
    desc: "Research assistant at BRIN analyzing system requirements for inclusive public transportation digitalization for people with disabilities.",
    tags: ["Research", "BRIN", "System Analysis"],
  },
  {
    icon: "🌐", badge: "internship", badgeLabel: "Internship",
    title: "Web Development — PT Polystar International",
    desc: "Developed and maintained web applications at PT Polystar International (MBtech) Jakarta, building responsive front-end interfaces and collaborating cross-functionally.",
    tags: ["Web Dev", "Front-end", "Jakarta"],
  },
];

export const experienceIntro = {
  eyebrow: "experience & education",
  title: "My Journey",
  sub: "A career and education timeline built on curiosity, impact, and continuous growth.",
};

export const experience = [
  {
    tabTitle: "S1 Telkom University", tabSub: "2024–Present · Education",
    period: "2024 – Present · Education",
    title: "Bachelor of Information Systems (S1)",
    org: "Telkom University · Bandung · GPA 3.61",
    desc: "Final semester student deepening expertise in data science, big data, and cloud systems. Completing a capstone focused on inclusive information systems design for the deaf community.",
    list: [
      "Key courses: Data Warehouse & Business Intelligence, Big Data, Cloud Computing (Komputasi Awan)",
      "Capstone: Inclusive Sign Language Learning System for general public users",
      "Applied data science in SmarTani (PPL) and IoT Kependudukan (Manprosi) projects",
    ],
    skills: ["Data Warehouse", "Big Data", "Cloud Computing", "Capstone Project"],
  },
  {
    tabTitle: "Web Developer Intern", tabSub: "2024 · PT Polystar (MBtech)",
    period: "2024 · Internship",
    title: "Web Developer",
    org: "PT Polystar International (MBtech) · Jakarta",
    desc: "Professional internship in a tech-forward Jakarta environment, contributing to web application development and cross-functional collaboration.",
    list: [
      "Developed and maintained web applications using modern front-end and back-end technologies",
      "Built responsive user interfaces ensuring cross-browser and cross-device compatibility",
      "Collaborated with cross-functional teams in agile sprint planning and code reviews",
    ],
    skills: ["Web Development", "Front-end", "Back-end", "Agile"],
  },
  {
    tabTitle: "Research — BRIN", tabSub: "Apr–Jun 2024 · Research",
    period: "Apr – Jun 2024 · Research",
    title: "Research Assistant & System Analyst",
    org: "BRIN — Penelitian Inklusi Transportasi Disabilitas",
    desc: "Contributed to a national research project at BRIN focused on digitalization of public transportation services for people with disabilities.",
    list: [
      "Analyzed system requirements for inclusive transportation digitalization",
      "Supported documentation and process mapping for public service workflows",
      "Conducted stakeholder interviews and translated needs into system specifications",
    ],
    skills: ["System Analysis", "Research", "BRIN", "Documentation"],
  },
  {
    tabTitle: "KIBB Finalist", tabSub: "Aug–Nov 2023 · Competition",
    period: "Aug – Nov 2023 · Competition",
    title: "Project Manager & Innovation Lead",
    org: "Lomba Inovasi Bandung Bedas (KIBB) 2023 — Top 5 Finalist",
    desc: "Led a team to design and prototype an IoT-based agricultural monitoring system, competing at the Bandung city-level innovation competition.",
    list: [
      "Managed full project lifecycle: ideation, team coordination, prototyping, and live demo",
      "Designed IoT architecture for real-time crop condition monitoring and alerts",
      "Achieved Top 5 Finalist recognition at the city-level competition",
    ],
    skills: ["Project Management", "IoT", "Leadership", "Innovation"],
  },
  {
    tabTitle: "HMDSI Organization", tabSub: "2023 · Student Org",
    period: "2023 · Organization",
    title: "Staff Dalam Negeri & Ketua Acara",
    org: "Himpunan Mahasiswa D3 Sistem Informasi (HMDSI) · Telkom University",
    desc: "Active contributor in the Information Systems student association, responsible for internal affairs and leading full event coordination.",
    list: [
      "Led end-to-end coordination of the Farewell event for the IS student body",
      "Managed team of volunteers, logistics, and cross-department communication",
      "Developed organizational leadership and event management skills",
    ],
    skills: ["Leadership", "Event Management", "Coordination"],
  },
  {
    tabTitle: "D3 Telkom University", tabSub: "2021–2024 · Education",
    period: "2021 – 2024 · Education",
    title: "Diploma in Information Systems (D3)",
    org: "Telkom University · Bandung · GPA 3.73",
    desc: "Built a strong foundation in information systems, software development, and business process modeling. Graduated with distinction.",
    list: [
      "Key courses: UI/UX Design, Business Process Modeling, System Analysis & Design, Project 1 & 2",
      "GPA 3.73 — graduated with distinction",
      "Developed FocketFarm app adopted by 50+ community members at Desa Putrajawa, Garut",
    ],
    skills: ["System Analysis", "UI/UX", "Business Process", "D3 Graduate"],
  },
];

export const contact = {
  eyebrow: "let's connect",
  title: "Open to Opportunities",
  sub: "Looking for Data Scientist, Data Analyst, or Business Intelligence roles. Let's build something meaningful together.",
  availability: "Available for Full-Time Roles — Starting Immediately",
};

export const footer = {
  text: "Dadan Hamdani · BNSP Certified Data Scientist",
  made: "Built with React · Tailwind · Framer Motion",
};
