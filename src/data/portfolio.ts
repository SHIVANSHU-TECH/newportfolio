// Shared portfolio data source - single source of truth

export interface ProfileData {
  name: string;
  tagline: string;
  sub: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  website: string;
  headline: string;
  bio: string[];
  stats: Array<{ value: string; label: string }>;
}

export interface ExperienceData {
  id: string;
  role: string;
  company: string;
  period: string;
  icon?: string;
  link?: string;
  desc: string;
  tags: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tech: string[];
  image?: string;
  video?: string;
  link?: string;
  color?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// Main portfolio data - source of truth for both UI themes
export const portfolioData = {
  profile: {
    name: "Shivanshu Shukla",
    tagline: "Independent Product Engineer",
    sub: "Full-Stack · AI Systems · Automation · Product Development",
    location: "New Delhi, India · Working globally",
    email: "shivanshushukla2022@gmail.com",
    phone: "+91-9560137315",
    github: "https://github.com/shivanshu-tech",
    linkedin: "https://www.linkedin.com/in/shivanshu-shukla-3626322b5/",
    website: "shivanshushukla.vercel.app",
    headline: "I don't build for everyone.\nI build what others haven't\nfigured out yet.",
    bio: [
      "I'm a Product Engineer who works at the intersection of software, AI, and business problems.",
      "I care less about writing more code and more about building the right system — whether that's a product from scratch, an AI workflow, an internal platform, or an automation that eliminates hours of repetitive work.",
      "Founder of CollegeXConnect. Currently available for select projects.",
    ],
    stats: [
      { value: "3K+", label: "Users on CollegeXConnect" },
      { value: "250K+", label: "Platform visitors" },
      { value: "~97%", label: "Infra cost reduction" },
      { value: "5+", label: "Systems shipped" },
    ],
  } as ProfileData,

  experiences: [
    {
      id: "crenovent",
      role: "Full Stack Developer Consultant",
      company: "Crenovent Technologies",
      period: "Mar 2026 – May 2026",
      icon: "/icons/Collegexconnect.ico",
      link: "https://www.linkedin.com/company/crenovent-technologies/",
      desc: "Built AI-powered platforms Let's Meet and Crux — real-time transcription, workflow automation, and AI-driven meeting intelligence. Engineered scalable REST APIs (Node.js, FastAPI, PostgreSQL, OpenAI) integrated with Google Meet, Teams, Slack, and Calendly.",
      tags: ["Node.js", "FastAPI", "OpenAI", "PostgreSQL", "Webhooks"],
    },
    {
      id: "arora",
      role: "Full Stack Developer",
      company: "Arora Innovation LLC (Cosmiron)",
      period: "Dec 2025 – Mar 2026",
      link: "https://cosmiron.com",
      desc: "Production-grade full-stack apps with React.js, Node.js, REST APIs, and Meta Graph API. Redesigned AWS cloud infrastructure (EC2, ECS, VPC, NAT Gateways) reducing complexity and cost. CI/CD via GitHub Actions.",
      tags: ["React", "Node.js", "AWS", "GitHub Actions", "Meta API"],
    },
    {
      id: "cxc",
      role: "Founder & Product Lead",
      company: "CollegeXConnect",
      period: "Jun 2024 – Present",
      icon: "/icons/Collegexconnect.ico",
      link: "https://collegexconnect.com",
      desc: "Founded and scaled an all-in-one student platform — 3,000+ registered users, 250K+ visitors, 100+ verified jobs. Built with Next.js, Node.js, MongoDB, Firebase, Cloudinary. Partnerships with 30+ colleges and a 2,000+ member community.",
      tags: ["Next.js", "Node.js", "MongoDB", "AWS", "Cloudinary"],
    },
    {
      id: "tikk18",
      role: "Web Developer Associate",
      company: "Tikk18",
      period: "May 2025 – Aug 2025",
      link: "https://apkpure.com/tikk18/com.teasetok",
      desc: "Deployed official company website with Next.js, Firebase, Tailwind CSS, Shadcn UI, Framer Motion. Integrated backend APIs, optimized Core Web Vitals, and implemented on-page SEO.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "vital",
      role: "Web Developer Intern",
      company: "Vital-Vistara (ASM Cognitive)",
      period: "May 2024 – Jul 2024",
      link: "https://www.linkedin.com/company/vitalvistara/",
      desc: "Responsive landing pages and internal tools using React, Firebase, and Tailwind CSS. Improved navigation, responsive layouts, and UI consistency across devices.",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: "salesforce",
      role: "Web Developer Intern",
      company: "Salesforce",
      period: "Jul 2022 – Sep 2022",
      icon: "/icons/salesforce_logo_icon_168852.svg",
      link: "https://salesforce.com",
      desc: "Secure backend workflows using TLS encryption, object-level access control, and rule-based authorization on the Salesforce Platform with JavaScript.",
      tags: ["Salesforce", "JavaScript", "Security", "RBAC"],
    },
  ] as ExperienceData[],

  projects: [
    {
      id: "voice",
      title: "AI Voice Assistant",
      subtitle: "Desktop AI Automation Agent",
      desc: "Desktop AI assistant with conversational memory, request routing, and controlled local system automation. Modular AI agent workflows with gated execution and persistent state. Reduced repetitive interactions by ~65% through intelligent task routing.",
      tech: ["React", "Electron.js", "WebSockets", "Gemini API"],
      image: "/images/VoiceAssistant.png",
      video: "/video/VoiceAssistant.mp4",
      link: "https://github.com/shivanshu-tech",
      color: "#c8f542",
    },
    {
      id: "brain",
      title: "CompanyBrain",
      subtitle: "Enterprise Knowledge Search (RAG)",
      desc: "RAG platform for conversational semantic search across enterprise documents. Document parsing, chunking, indexing and vector retrieval pipelines. Offline vector caching reduced retrieval latency to ~1.3s while minimising compute cost.",
      tech: ["React", "Vector Search", "PDF Parsing", "Electron"],
      image: "/images/Company_Brain.png",
      video: "/video/Company_Brain.mp4",
      link: "https://github.com/shivanshu-tech",
      color: "#a8e6cf",
    },
    {
      id: "applyai",
      title: "ApplyAI",
      subtitle: "AI Resume Screening Platform",
      desc: "AI-powered recruitment assistant for automated resume parsing, semantic candidate ranking, and job-role similarity analysis. AI-generated improvement recommendations. Gemini API for semantic evaluation workflows.",
      tech: ["Next.js", "Gemini API", "Resume Parser", "Shadcn UI", "RBAC"],
      image: "/images/ApplyAI.png",
      video: "/video/ApplyAI.mp4",
      link: "https://github.com/shivanshu-tech",
      color: "#d4a5ff",
    },
  ] as ProjectData[],

  skillGroups: [
    { label: "Languages", items: ["JavaScript", "TypeScript", "C++", "Java"] },
    { label: "Frontend", items: ["React", "Next.js", "Electron.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"] },
    { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "Webhooks", "RBAC", "JWT"] },
    { label: "AI & LLM", items: ["Gemini API", "OpenAI API", "RAG / Vector Search", "AI Agents", "Prompt Engineering", "LLM Integration"] },
    { label: "Data", items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"] },
    { label: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "CI/CD", "Cloudinary"] },
  ] as SkillGroup[],

  // Derive services from actual skills for the 3D homepage
  services: [
    {
      id: "fullstack",
      name: "Full Stack Development",
      description: "End-to-end web applications using React, Next.js, Node.js, and modern databases. From concept to production deployment with scalable architectures.",
    },
    {
      id: "ai",
      name: "AI & LLM Integration",
      description: "Custom AI workflows, RAG systems, and intelligent automation using OpenAI, Gemini API, and vector databases for enterprise applications.",
    },
    {
      id: "automation",
      name: "Business Automation",
      description: "Workflow automation and internal platforms that eliminate repetitive work and improve operational efficiency through intelligent systems.",
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      description: "AWS infrastructure design, CI/CD pipelines, and containerized deployments for scalable, reliable, and cost-effective solutions.",
    },
  ],
};

// For backward compatibility - export individual pieces
export const { profile, experiences, projects, skillGroups } = portfolioData;