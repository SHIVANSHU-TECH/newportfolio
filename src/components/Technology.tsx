"use client";

const groups = [
  { label: "PRODUCT", items: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"] },
  { label: "DATA", items: ["MongoDB", "PostgreSQL", "Firebase"] },
  { label: "AI", items: ["LLM APIs", "RAG Systems", "AI Agents", "AI Automation"] },
  { label: "INFRASTRUCTURE", items: ["AWS", "Vercel", "Render", "Cloudinary"] },
  { label: "SYSTEMS", items: ["REST APIs", "Authentication", "Webhooks", "Real-time systems"] },
];

export default function Technology() {
  return (
    <section className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div className="tech-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Left */}
          <div>
            <span className="label" style={{ display: "block", marginBottom: "1.5rem" }}>Stack</span>
            <p style={{ fontSize: "clamp(1.4rem,2.5vw,2.2rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ede8", lineHeight: 1.3, marginBottom: "1rem" }}>
              The tools change.<br /><span style={{ color: "#6b6b6b" }}>The engineering doesn&apos;t.</span>
            </p>
            <p style={{ fontSize: "0.82rem", color: "#4a4a4a", lineHeight: 1.75 }}>Tools are chosen for the problem, not the other way around. What matters is the system design behind them.</p>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {groups.map(g => (
              <div key={g.label} style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start" }}>
                <span className="label" style={{ width: 80, flexShrink: 0, paddingTop: "0.15rem", color: "#2a2a2a" }}>{g.label}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {g.items.map(item => (
                    <span key={item}
                      style={{ fontSize: "0.72rem", color: "#6b6b6b", border: "1px solid #1a1a1a", padding: "0.35rem 0.75rem", transition: "all 0.3s", cursor: "default" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#8a8a8a"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = "#6b6b6b"; }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .tech-grid { grid-template-columns: 300px 1fr !important; }
        }
      `}</style>
    </section>
  );
}
