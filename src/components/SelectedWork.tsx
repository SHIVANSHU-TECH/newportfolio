"use client";
import { useState } from "react";

const projects = [
  {
    id: "cxc",
    num: "01",
    name: "CollegeXConnect",
    cat: "PRODUCT · FULL-STACK · COMMUNITY",
    problem:
      "Students lacked a unified platform to discover opportunities, build community, and access resources relevant to their academic journey.",
    built:
      "A full-stack student platform connecting students with jobs, internships, resources, and communities. Built with authentication, role-based access, real-time feeds, and a content management system.",
    role: "Product Architect · Full-Stack Engineer · Sole Builder",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS", "Cloudinary"],
    outcomes: ["3,000+ registered users", "250K+ platform visitors", "100+ jobs posted"],
    color: "#c8f542",
    screens: [
      { t: "Dashboard", d: "Opportunity feed + community hub" },
      { t: "Job Board", d: "100+ active opportunities" },
      { t: "Resources", d: "Curated academic content" },
      { t: "Community", d: "Student ecosystem" },
    ],
  },
  {
    id: "infra",
    num: "02",
    name: "Wake-on-WhatsApp",
    cat: "INFRASTRUCTURE · AUTOMATION · AWS",
    problem:
      "A dev environment was consuming infrastructure resources continuously — even when nobody was actively using it.",
    built:
      "An on-demand infrastructure workflow triggered entirely by WhatsApp. Wakes the environment on request, proxies traffic while active, and shuts down automatically after idle detection.",
    role: "Systems Architect · Infrastructure Engineer",
    tech: ["AWS EC2", "WhatsApp API", "Node.js", "Nginx", "Cron"],
    outcomes: ["~97% reduction in runtime costs", "Zero manual intervention"],
    color: "#a8e6cf",
    diagram: ["WhatsApp Message", "Gatekeeper API", "Health Check", "Wake Environment", "Proxy Requests", "Idle Detection", "Auto-Shutdown"],
  },
  {
    id: "meet",
    num: "03",
    name: "Let's Meet",
    cat: "AI · REAL-TIME SYSTEMS · AUTOMATION",
    problem:
      "Meetings happen constantly but most of their value — decisions, action items, context — disappears the moment the call ends.",
    built:
      "A meeting intelligence system that captures conversations in real time, processes transcripts, summarizes discussions, and extracts actionable items through an AI pipeline.",
    role: "Systems Architect · AI Engineer · Full-Stack Developer",
    tech: ["Node.js", "OpenAI", "WebSockets", "MongoDB", "Webhooks"],
    outcomes: ["Real-time transcription", "AI-powered summaries", "Action item extraction", "Workflow automation"],
    color: "#d4a5ff",
    screens: [
      { t: "Live Transcription", d: "Real-time speech capture" },
      { t: "AI Summary", d: "Instant meeting digest" },
      { t: "Action Items", d: "Extracted automatically" },
      { t: "Workflow", d: "Automated follow-up" },
    ],
  },
];

export default function SelectedWork() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="work" className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="label" style={{ display: "block", marginBottom: "0.75rem" }}>Selected work</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,3.2rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#f0ede8", lineHeight: 1.1, marginBottom: "0.5rem" }}>Things I&apos;ve actually built.</h2>
          <p style={{ fontSize: "0.75rem", color: "#4a4a4a", letterSpacing: "0.08em" }}>Not concepts. Not mockups. Real systems.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 1, background: "#1f1f1f", marginBottom: "3rem" }}>
          {projects.map((pr, i) => (
            <button key={pr.id} onClick={() => setActive(i)}
              style={{ flex: 1, minWidth: 120, padding: "1rem 1.5rem", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "left", border: "none", cursor: "pointer", transition: "all 0.3s",
                background: active === i ? "#111111" : "#0c0c0c",
                color: active === i ? "#f0ede8" : "#4a4a4a" }}>
              <span style={{ display: "block", fontSize: "0.6rem", color: "#3a3a3a", marginBottom: "0.2rem" }}>{pr.num}</span>
              {pr.name}
            </button>
          ))}
        </div>

        {/* Case study */}
        <div className="sw-casestudy" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#4a4a4a" }}>{p.cat}</span>

            {[
              { label: "The problem", text: p.problem },
              { label: "What was built", text: p.built },
              { label: "Role", text: p.role },
            ].map(row => (
              <div key={row.label}>
                <div className="label" style={{ marginBottom: "0.6rem" }}>{row.label}</div>
                <p style={{ fontSize: "0.82rem", color: "#8a8a8a", lineHeight: 1.75 }}>{row.text}</p>
              </div>
            ))}

            <div>
              <div className="label" style={{ marginBottom: "0.6rem" }}>Built with</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: "0.65rem", letterSpacing: "0.08em", border: "1px solid #1f1f1f", padding: "0.35rem 0.7rem", color: "#4a4a4a" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Visual */}
            {"diagram" in p ? (
              <div style={{ background: "#0a0a0a", border: "1px solid #1f1f1f", padding: "2.5rem" }}>
                <div className="label" style={{ marginBottom: "2rem" }}>System Architecture</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {p.diagram?.map((step, i) => (
                    <div key={step} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                        {i < (p.diagram?.length ?? 0) - 1 && <div style={{ width: 1, height: 24, background: "#2a2a2a" }} />}
                      </div>
                      <span style={{ fontSize: "0.82rem", padding: "0.25rem 0", color: i % 2 === 0 ? "#f0ede8" : "#6b6b6b" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ background: "#0a0a0a", border: "1px solid #1f1f1f", padding: "2.5rem" }}>
                <div className="label" style={{ marginBottom: "2rem" }}>
                  {p.id === "cxc" ? "Student Platform" : "AI Pipeline"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  {p.screens?.map((s, i) => (
                    <div key={s.t} style={{ background: "#111111", border: "1px solid #1f1f1f", padding: "1rem", transition: "border-color 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "#1f1f1f")}>
                      <div style={{ width: 20, height: 2, marginBottom: "0.75rem", background: i === 0 ? p.color : "#2a2a2a" }} />
                      <div style={{ fontSize: "0.75rem", color: "#f0ede8", marginBottom: "0.25rem", fontWeight: 500 }}>{s.t}</div>
                      <div style={{ fontSize: "0.65rem", color: "#4a4a4a" }}>{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            <div style={{ border: "1px solid #1f1f1f", padding: "1.5rem" }}>
              <div className="label" style={{ marginBottom: "1rem" }}>Key outcomes</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {p.outcomes.map(o => (
                  <div key={o} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.82rem", color: "#8a8a8a" }}>{o}</span>
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
