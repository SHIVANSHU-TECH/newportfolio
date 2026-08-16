"use client";

import { useState } from "react";

const projects = [
  {
    id: "collegexconnect",
    number: "01",
    name: "CollegeXConnect",
    category: "PRODUCT · FULL-STACK · COMMUNITY",
    problem:
      "Students lacked a unified platform to discover opportunities, build community, and access resources relevant to their academic journey.",
    built:
      "A full-stack student platform connecting students with jobs, internships, resources, and communities. Built with authentication, role-based access, real-time feeds, and a content management system.",
    role: "Product Architect · Full-Stack Engineer · Sole Builder",
    technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Cloudinary"],
    outcomes: [
      "3,000+ registered users",
      "250K+ platform visitors",
      "100+ jobs posted",
    ],
    color: "#c8f542",
    visual: {
      label: "Student Platform",
      screens: [
        { title: "Dashboard", desc: "Opportunity feed + community hub" },
        { title: "Job Board", desc: "100+ active opportunities" },
        { title: "Resources", desc: "Curated academic content" },
        { title: "Community", desc: "Student ecosystem" },
      ],
    },
  },
  {
    id: "wake-infra",
    number: "02",
    name: "Wake-on-WhatsApp Infrastructure",
    category: "INFRASTRUCTURE · AUTOMATION · AWS",
    problem:
      "A development environment was consuming infrastructure resources continuously — even when nobody was actively using it.",
    built:
      "An on-demand infrastructure workflow triggered entirely by WhatsApp. The system wakes the environment on request, proxies traffic while active, and shuts down automatically after idle detection.",
    role: "Systems Architect · Infrastructure Engineer",
    technologies: ["AWS EC2", "WhatsApp API", "Node.js", "Nginx", "Cron"],
    outcomes: ["~97% reduction in runtime costs", "Zero manual intervention"],
    color: "#a8e6cf",
    visual: {
      label: "Infrastructure Diagram",
      diagram: [
        "WhatsApp Message",
        "Gatekeeper API",
        "Health Check",
        "Wake Environment",
        "Proxy Requests",
        "Idle Detection",
        "Auto-Shutdown",
      ],
    },
  },
  {
    id: "lets-meet",
    number: "03",
    name: "Let's Meet",
    category: "AI · REAL-TIME SYSTEMS · AUTOMATION",
    problem:
      "Meetings happen constantly but most of their value — decisions, action items, context — disappears the moment the call ends.",
    built:
      "A meeting intelligence system that captures conversations in real time, processes transcripts, summarizes discussions, and extracts actionable items through an AI pipeline.",
    role: "Systems Architect · AI Engineer · Full-Stack Developer",
    technologies: ["Node.js", "OpenAI", "WebSockets", "MongoDB", "Webhooks"],
    outcomes: [
      "Real-time transcription",
      "AI-powered summaries",
      "Action item extraction",
      "Workflow automation",
    ],
    color: "#d4a5ff",
    visual: {
      label: "AI Pipeline",
      screens: [
        { title: "Live Transcription", desc: "Real-time speech capture" },
        { title: "AI Summary", desc: "Instant meeting digest" },
        { title: "Action Items", desc: "Extracted automatically" },
        { title: "Workflow", desc: "Automated follow-up" },
      ],
    },
  },
];

export default function SelectedWork() {
  const [active, setActive] = useState(0);

  const project = projects[active];

  return (
    <section id="work" className="py-24 md:py-40 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="md:col-span-3">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              Selected work
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.03em] text-[#f0ede8] leading-tight mb-3">
              Things I&apos;ve actually built.
            </h2>
            <p className="text-sm text-[#4a4a4a] tracking-wide">
              Not concepts. Not mockups. Real systems.
            </p>
          </div>
        </div>

        {/* Project tabs */}
        <div className="flex flex-wrap gap-px bg-[#1f1f1f] mb-12">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`flex-1 min-w-[120px] px-6 py-4 text-xs tracking-widest uppercase transition-all duration-300 text-left ${
                active === i
                  ? "bg-[#111111] text-[#f0ede8]"
                  : "bg-[#0c0c0c] text-[#4a4a4a] hover:text-[#6b6b6b]"
              }`}
            >
              <span className="block text-[9px] text-[#3a3a3a] mb-1">
                {p.number}
              </span>
              {p.name}
            </button>
          ))}
        </div>

        {/* Case study panel */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left — details */}
          <div className="md:col-span-5 space-y-8">
            {/* Category */}
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#4a4a4a]">
              {project.category}
            </span>

            {/* Problem */}
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">
                The problem
              </div>
              <p className="text-sm text-[#8a8a8a] leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* What was built */}
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">
                What was built
              </div>
              <p className="text-sm text-[#8a8a8a] leading-relaxed">
                {project.built}
              </p>
            </div>

            {/* Role */}
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">
                Role
              </div>
              <p className="text-sm text-[#8a8a8a]">{project.role}</p>
            </div>

            {/* Technologies */}
            <div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">
                Built with
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-wide border border-[#1f1f1f] px-3 py-1.5 text-[#4a4a4a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — visual + outcomes */}
          <div className="md:col-span-7 space-y-6">
            {/* Visual block */}
            {project.id === "wake-infra" ? (
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-8 md:p-10">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a4a4a] mb-8">
                  System Architecture
                </div>
                <div className="flex flex-col items-start gap-1">
                  {project.visual.diagram?.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ background: project.color }}
                        />
                        {i < (project.visual.diagram?.length ?? 0) - 1 && (
                          <div className="w-px h-6 bg-[#2a2a2a]" />
                        )}
                      </div>
                      <span
                        className={`text-sm py-1 ${
                          i % 2 === 0
                            ? "text-[#f0ede8]"
                            : "text-[#6b6b6b]"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-8 md:p-10">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a4a4a] mb-8">
                  {project.visual.label}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {project.visual.screens?.map((screen, i) => (
                    <div
                      key={screen.title}
                      className="bg-[#111111] border border-[#1f1f1f] p-4 hover:border-[#2a2a2a] transition-colors duration-300"
                    >
                      <div
                        className="w-6 h-0.5 mb-3"
                        style={{ background: i === 0 ? project.color : "#2a2a2a" }}
                      />
                      <div className="text-xs text-[#f0ede8] mb-1 font-medium">
                        {screen.title}
                      </div>
                      <div className="text-[10px] text-[#4a4a4a]">
                        {screen.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            <div className="border border-[#1f1f1f] p-6">
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-4">
                Key outcomes
              </div>
              <div className="space-y-2">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: project.color }}
                    />
                    <span className="text-sm text-[#8a8a8a]">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
