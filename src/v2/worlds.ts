export type GalaxyWorld = {
  id: string;
  num: string;
  name: string;
  cat: string;
  copy: string;
  tech: string[];
  href: string;
  icon: string;
  video: string;
  color: number;
  size: number;
  orbit: number;
  speed: number;
  phase: number;
  y: number;
};

export const galaxyWorlds: GalaxyWorld[] = [
  {
    id: "cxc",
    num: "01",
    name: "CollegeXConnect",
    cat: "Product · Full-stack · Community",
    copy: "An all-in-one student platform for jobs, internships, resources, and community. Built end-to-end: auth, feeds, CMS, and deployment.",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS", "Cloudinary"],
    href: "https://collegexconnect.com",
    icon: "/icons/Collegexconnect.ico",
    video: "",
    color: 0x8ec5d4,
    size: 0.92,
    orbit: 3.85,
    speed: 0.16,
    phase: 0.3,
    y: 0.12,
  },
  {
    id: "voice",
    num: "02",
    name: "AI Voice Assistant",
    cat: "Desktop · Agent · Automation",
    copy: "A desktop AI assistant with conversational memory, request routing, and gated local automation. Cut repetitive interactions by about 65%.",
    tech: ["React", "Electron.js", "WebSockets", "Gemini API"],
    href: "https://github.com/shivanshu-tech",
    icon: "/images/VoiceAssistant.png",
    video: "/video/VoiceAssistant.mp4",
    color: 0xc8f542,
    size: 0.78,
    orbit: 5.45,
    speed: 0.12,
    phase: 1.8,
    y: -0.18,
  },
  {
    id: "brain",
    num: "03",
    name: "CompanyBrain",
    cat: "Enterprise · Knowledge · RAG",
    copy: "Conversational search across enterprise documents. Parsing, chunking, indexing, and vector retrieval with offline caching around 1.3s latency.",
    tech: ["React", "Vector Search", "PDF Parsing", "Electron"],
    href: "https://github.com/shivanshu-tech",
    icon: "/images/Company_Brain.png",
    video: "/video/Company_Brain.mp4",
    color: 0xa8e6cf,
    size: 0.84,
    orbit: 7.05,
    speed: 0.09,
    phase: 3.4,
    y: 0.28,
  },
  {
    id: "apply",
    num: "04",
    name: "ApplyAI",
    cat: "Recruitment · Platform · AI",
    copy: "Resume parsing, semantic ranking, and job-role similarity. Gemini-powered evaluation with improvement recommendations.",
    tech: ["Next.js", "Gemini API", "Resume Parser", "Shadcn UI", "RBAC"],
    href: "https://github.com/shivanshu-tech",
    icon: "/images/ApplyAI.png",
    video: "/video/ApplyAI.mp4",
    color: 0xb79cff,
    size: 0.76,
    orbit: 8.65,
    speed: 0.07,
    phase: 5.1,
    y: -0.08,
  },
];
