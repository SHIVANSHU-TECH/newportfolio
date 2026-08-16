"use client";

const stats = [
  { value: "3K+", label: "Users on CollegeXConnect" },
  { value: "250K+", label: "Platform visitors" },
  { value: "~97%", label: "Infrastructure cost reduction" },
  { value: "4+", label: "Production systems shipped" },
];

export default function PositioningStatement() {
  return (
    <section className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div className="pos-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
          <div className="label" style={{ display: "block" }}>The approach</div>

          <div>
            <p style={{ fontSize: "clamp(1.5rem,3.2vw,2.8rem)", fontWeight: 300, lineHeight: 1.22, letterSpacing: "-0.02em", color: "#f0ede8", marginBottom: "1rem" }}>
              Most people come to developers<br />with a specification.
            </p>
            <p style={{ fontSize: "clamp(1.5rem,3.2vw,2.8rem)", fontWeight: 300, lineHeight: 1.22, letterSpacing: "-0.02em", color: "#c8f542", marginBottom: "3rem" }}>
              Bring me the problem instead.
            </p>

            <div style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: "1.1rem", marginBottom: "4rem" }}>
              <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "#6b6b6b", lineHeight: 1.75, fontWeight: 300 }}>
                I work from the problem backward — understanding what needs to happen, designing the system, building the product, integrating the infrastructure, and taking it into production.
              </p>
              <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "#6b6b6b", lineHeight: 1.75, fontWeight: 300 }}>
                The result isn&apos;t just code. It&apos;s a working system that solves the actual problem.
              </p>
            </div>

            {/* Stats */}
            <div className="stats-grid" style={{ borderTop: "1px solid #1f1f1f", paddingTop: "3rem", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2rem" }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ede8", marginBottom: "0.35rem" }}>{s.value}</div>
                  <div style={{ fontSize: "0.7rem", color: "#4a4a4a", letterSpacing: "0.05em", lineHeight: 1.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .pos-grid { display: grid; grid-template-columns: 200px 1fr; }
          .pos-stats { grid-template-columns: repeat(4,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
