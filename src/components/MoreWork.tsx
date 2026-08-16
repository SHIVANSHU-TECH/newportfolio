"use client";

const items = [
  { name: "ClientScout AI", cat: "AI · AUTOMATION", desc: "AI-driven lead generation tool that scrapes, scores, and surfaces qualified business leads from multiple sources automatically.", tags: ["Python", "AI", "Automation", "Scraping"] },
  { name: "Job Magica / Noah", cat: "AI · PRODUCT", desc: "Intelligent job matching system that analyzes candidate profiles and surfaces relevant opportunities — reducing friction between finding work and getting hired.", tags: ["Node.js", "AI", "MongoDB"] },
  { name: "CruxRAG", cat: "AI · KNOWLEDGE SYSTEMS", desc: "Company knowledge brain using Retrieval-Augmented Generation. Indexes internal documents and surfaces answers from your own data instead of generic AI responses.", tags: ["RAG", "LLM APIs", "Vector DB", "Next.js"] },
  { name: "Multi-Query Scraper", cat: "TOOLS · AUTOMATION", desc: "Batch lead scraping system that runs multiple queries in parallel against Google Maps and business directories, producing structured CSV output.", tags: ["Python", "Automation", "Data"] },
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
