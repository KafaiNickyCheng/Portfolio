// ─────────────────────────────────────────────
//  PORTFOLIO DATA  — single source of truth
//  Edit this file to update all sections
// ─────────────────────────────────────────────

export const personal = {
  name: "Kafai Cheng",
  initials: "KC",
  tagline: "Building Systems. Bridging Business & Tech.",
  role: "System Analyst",
  subrole: "Full-Stack Engineer",
  bio: [
    "I'm a System Analyst with a full-stack engineering background, based in Samut Sakhon, Thailand. With 3+ years at Panjawattana Plastic Public Co., Ltd., I've led the delivery of 6–8 internal business systems from requirement gathering all the way through deployment.",
    "My edge is bridging the gap between what the business needs and what engineering can build. I work across departments — production, HR, sales, IT — to turn messy operational pain points into clean, scalable systems used by hundreds of people daily.",
    "I hold a B.Eng. in Electrical Engineering from Rangsit University (GPA 3.84) and bring the analytical rigor of an engineer with the communication skills of a business analyst.",
  ],
  status: "Open to new opportunities",
  email: "kafainickycheng@gmail.com",
  phone: "098-720-3328",
  location: "Samut Sakhon, Thailand",
  linkedin: "linkedin.com/in/kafaicheng",
  github: "github.com/KafaiNickyCheng",
  linkedinUrl: "https://linkedin.com/in/kafaicheng",
  githubUrl: "https://github.com/KafaiNickyCheng",
};

export const stats = [
  { num: "6–8", label: "Systems Delivered" },
  { num: "200+", label: "Daily Users" },
  { num: "3+", label: "Years Experience" },
];

export const highlights = [
  { icon: "🎯", title: "Requirement Analysis", desc: "5+ departments coordinated across concurrent projects" },
  { icon: "⚙️", title: "Full SDLC", desc: "Discovery → Design → Dev → UAT → Deployment" },
  { icon: "🔗", title: "ERP Integration", desc: "Syteline ERP + Power BI + cross-functional data flows" },
  { icon: "📊", title: "Business Intelligence", desc: "Power BI dashboards across all delivered systems" },
];

export const skillCategories = [
  {
    icon: "🧠",
    title: "Analysis & Design",
    tags: ["Requirement Gathering", "System Workflow Design", "Process Improvement", "User Documentation", "SDLC", "UAT Coordination", "Stakeholder Management"],
  },
  {
    icon: "🖥️",
    title: "Frontend",
    tags: ["Vue.js", "Next.js", "React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    tags: ["C# .NET API", "Node.js", "Golang", "REST API", "Microservices"],
  },
  {
    icon: "🗄️",
    title: "Data & Database",
    tags: ["SQL", "MongoDB", "Database Design", "Power BI", "ERP Integration"],
  },
  {
    icon: "🛠️",
    title: "Tools & Platform",
    tags: ["Jira", "Figma", "Miro", "Microsoft Teams", "n8n", "LINE Messaging API"],
  },
  {
    icon: "🔌",
    title: "Integrations",
    tags: ["Syteline ERP", "Power BI Dashboards", "OCR Systems", "Workflow Automation", "Cross-functional APIs"],
  },
];

export const projects = [
  {
    num: "01",
    category: "IT Operations",
    title: "HelpDesk IT Support System",
    desc: "Internal IT HelpDesk and request management system to centralise audit tracking, approval flow, and task visibility for the IT support team across ~50 users.",
    tags: ["Kanban Workflow", "Multi-level Approval", "Power BI", "Node.js", "React"],
    impactTitle: "Impact",
    impacts: [
      "Jira-style ticket lifecycle management",
      "Eliminated manual email-based approvals",
      "Real-time workload & performance dashboards",
    ],
  },
  {
    num: "02",
    category: "Production Management",
    title: "Production Management Systems (ERP Integration)",
    desc: "6 integrated production modules used by 100–200 shop-floor operators and engineering staff, improving manufacturing visibility, quality control, and operational traceability across the plant floor.",
    tags: ["MES", "Syteline ERP", "Power BI", "SQL", "Vue.js"],
    impactTitle: "Key Modules",
    impacts: [
      "MES — machine activity & production job tracking",
      "NCR — defect tracking with root cause analysis",
      "Smart PM — preventive maintenance scheduling",
      "Job Traceability — backward production history",
    ],
  },
  {
    num: "03",
    category: "Sales",
    title: "Sales RFQ & BOM Management System",
    desc: "Quotation and BOM management platform for the sales department, replacing manual document tracking and disconnected approval processes across sales, accounting, and ERP.",
    tags: ["RFQ Workflow", "BOM Tracking", "ERP Handover", "C# .NET"],
    impactTitle: "Impact",
    impacts: [
      "6 RFQ modules: estimation to reward management",
      "BOM revision tracking & cost calculation",
      "Automated sales-to-accounting approval chain",
    ],
  },
  {
    num: "04",
    category: "HR & Learning",
    title: "HR Training & LMS System",
    desc: "Internal Learning Management System and skill matrix platform for HR and production teams to manage employee training and workforce capability tracking for 50–200 employees.",
    tags: ["LMS", "OCR", "Skill Matrix", "MES Integration", "BI Reports"],
    impactTitle: "Impact",
    impacts: [
      "OCR content extraction from operational documents",
      "Employee skill matrix linked to MES operator-job matching",
      "Department skill analysis & workforce planning reports",
    ],
  },
];

export const experiences = [
  {
    period: "2022 – Present",
    role: "Software Engineer (Full-Stack) — System Analysis Focus",
    company: "Panjawattana Plastic Public Co., Ltd.",
    location: "Samut Sakhon, Thailand",
    bullets: [
      "Delivered 6–8 internal business systems end-to-end across production, sales, HR, and IT — serving 50–200+ daily users",
      "Led requirement gathering and stakeholder coordination across 5+ departments including production, engineering, HR, sales, and IT",
      "Participated in full SDLC on every project — from discovery and workflow design through development, UAT, and post-deployment support",
      "Designed system workflows, process diagrams, and technical documentation for each delivered system",
      "Supported ERP integration with Syteline and built Power BI dashboards for real-time operational analysis",
      "Coordinated UAT sessions for each release, resolving cross-functional issues before go-live",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering in Electrical Engineering",
  university: "Rangsit University",
  gpa: "3.84",
  desc: "Strong analytical thinking, problem-solving, and logical reasoning developed through engineering coursework and project-based study.",
};
