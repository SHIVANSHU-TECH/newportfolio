"use client";

const blocks = [
  { n: "01", title: "BUILD", tagline: "Ideas that need to become real products.", desc: "From architecture to frontend, backend, database, authentication, integrations and deployment — I build products end-to-end. No handoffs. No gaps. One system that works." },
  { n: "02", title: "AUTOMATE", tagline: "Processes that shouldn't require humans anymore.", desc: "I turn repetitive workflows into reliable systems using APIs, AI, automation and custom infrastructure. If you're doing the same thing manually every week, that's a problem worth solving." },
  { n: "03", title: "INTELLIGENCE", tagline: "AI that actually does something.", desc: "AI integrations, agents, RAG systems, meeting intelligence, extraction, summarization and workflow automation — designed around real use cases, not demos." },
  { n: "04", title: "REBUILD", tagline: "Products that aren't working as well as they should.", desc: "Performance problems, infrastructure costs, broken workflows, technical debt — and systems that need to evolve without breaking what already works." },
];

export default function WhatIBuild() {
  return (
    <section className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "4rem" }}>
          <span className="label">What I do</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,3.2rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#f0ede8", lineHeight: 1.1 }}>Problems I like solving.</h2>
        </div>

        {/* 2-col grid */}
        <div className="wib-cards" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "#1f1f1f" }}>
          {blocks.map(b => (
            <div key={b.n}
              style={{ background: "#0c0c0c", padding: "3rem", cursor: "default", transition: "background 0.4s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0f0f0f")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0c0c0c")}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
                <span className="label">{b.n}</span>
              </div>
              <h3 style={{ fontSize: "clamp(1.6rem,2.8vw,2.5rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ede8", marginBottom: "0.75rem" }}>{b.title}</h3>
              <p style={{ fontSize: "0.82rem", color: "#c8f542", fontWeight: 500, marginBottom: "0.75rem", lineHeight: 1.5 }}>{b.tagline}</p>
              <p style={{ fontSize: "0.82rem", color: "#4a4a4a", lineHeight: 1.75, fontWeight: 300 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .wib-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
