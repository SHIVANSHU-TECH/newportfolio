"use client";

const items = [
  {
    name: "AI Voice Assistant",
    cat: "DESKTOP · AGENT · AUTOMATION",
    desc: "Desktop AI assistant with conversational memory, request routing, and controlled local system automation. Modular agent workflows with gated execution and persistent state — reduced repetitive interactions by ~65%.",
    tags: ["React", "Electron.js", "WebSockets", "Gemini API"],
  },
  {
    name: "CompanyBrain",
    cat: "ENTERPRISE · KNOWLEDGE · RAG",
    desc: "RAG platform for conversational semantic search across enterprise documents. Document parsing, chunking, indexing and vector retrieval pipelines. Offline vector caching reduced retrieval latency to ~1.3s.",
    tags: ["Vector Search", "PDF Parsing", "React", "Electron"],
  },
  {
    name: "ApplyAI",
    cat: "RECRUITMENT · PLATFORM · AUTOMATION",
    desc: "AI-powered recruitment assistant for automated resume parsing, semantic candidate ranking, and job-role similarity analysis. Gemini API for semantic evaluation workflows.",
    tags: ["Next.js", "Gemini API", "Resume Parser", "Shadcn UI", "RBAC"],
  },
  {
    name: "Multi-Query Scraper",
    cat: "TOOLS · AUTOMATION · DATA",
    desc: "Batch lead scraping system that runs multiple queries in parallel against Google Maps and business directories, producing structured CSV output.",
    tags: ["Python", "Automation", "Data"],
  },
];

export default function MoreWork() {
  return (
    <section className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="label" style={{ display: "block", marginBottom: "0.75rem" }}>More work</span>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.6rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ede8" }}>More experiments, systems & products.</h2>
        </div>

        <div className="mw-cards" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "#1f1f1f" }}>
          {items.map(item => (
            <div key={item.name}
              style={{ background: "#0c0c0c", padding: "2.5rem 2.5rem", transition: "background 0.4s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0f0f0f")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0c0c0c")}>
              <span className="label" style={{ display: "block", marginBottom: "1.25rem", color: "#3a3a3a" }}>{item.cat}</span>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 500, color: "#f0ede8", marginBottom: "0.75rem", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c8f542")}
                onMouseLeave={e => (e.currentTarget.style.color = "#f0ede8")}>
                {item.name}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "#4a4a4a", lineHeight: 1.75, marginBottom: "1.5rem" }}>{item.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {item.tags.map(t => (
                  <span key={t} style={{ fontSize: "0.62rem", letterSpacing: "0.06em", border: "1px solid #1a1a1a", padding: "0.3rem 0.6rem", color: "#3a3a3a" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mw-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
