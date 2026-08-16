"use client";

const cols = [
  { label: "Good fit", items: ["Ambitious products", "Complex system integrations", "Infrastructure problems", "Automation systems", "Technical rebuilds"] },
  { label: "Who I work with", items: ["Startup founders", "Business owners", "Creators with scale", "Product companies", "Internal tooling teams"] },
  { label: "How it works", items: ["Problem-first approach", "End-to-end ownership", "Production-quality output", "Direct communication", "No account managers"] },
];

export default function Availability() {
  return (
    <section className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div className="avail-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <span className="label">Availability</span>

          <div>
            <p style={{ fontSize: "clamp(1.6rem,3.2vw,2.8rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ede8", lineHeight: 1.2, marginBottom: "2rem" }}>I don&apos;t take every project.</p>
            <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", color: "#6b6b6b", lineHeight: 1.8, fontWeight: 300, maxWidth: 520, marginBottom: "3rem" }}>
              The best work usually happens when the problem is interesting, the ambition is high, and there&apos;s room to build something properly.
            </p>

            {/* 3-col */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", marginBottom: "3.5rem" }}>
              {cols.map(col => (
                <div key={col.label}>
                  <div className="label" style={{ marginBottom: "1.25rem", color: "#3a3a3a" }}>{col.label}</div>
                  {col.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#2a2a2a", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.72rem", color: "#4a4a4a" }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: "2.5rem" }}>
              <p style={{ fontSize: "0.85rem", color: "#6b6b6b", marginBottom: "1.5rem" }}>Have a problem worth solving?</p>
              <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.85rem", color: "#f0ede8", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c8f542")}
                onMouseLeave={e => (e.currentTarget.style.color = "#f0ede8")}>
                Start a conversation <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
