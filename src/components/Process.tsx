"use client";

const steps = [
  { n: "01", title: "UNDERSTAND", q: "What are we actually trying to solve?", desc: "Before any architecture or code, I need to understand the real problem — not the stated requirement. Most build failures start with misunderstood problems." },
  { n: "02", title: "ARCHITECT", q: "What should the system look like?", desc: "Design the right system before writing a single line. This determines technology choices, data structure, integrations, and what the product will become." },
  { n: "03", title: "BUILD", q: "Turn the idea into a working product.", desc: "Engineering across the full stack — frontend, backend, database, authentication, APIs and third-party integrations — built to production standards, not demo quality." },
  { n: "04", title: "SHIP", q: "Deploy, integrate and make it usable.", desc: "Deployment, environment configuration, infrastructure setup, and making the system accessible to real users. Getting to production is as important as building it." },
  { n: "05", title: "IMPROVE", q: "Measure, optimize and evolve.", desc: "Real systems need to evolve. Monitoring performance, fixing real-world issues, improving based on usage data and making the product better over time." },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <span className="label" style={{ display: "block", marginBottom: "0.75rem" }}>How I work</span>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,3.2rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#f0ede8", lineHeight: 1.1, marginBottom: "1rem" }}>From problem to production.</h2>
          <p style={{ fontSize: "0.82rem", color: "#4a4a4a", maxWidth: 480, lineHeight: 1.75 }}>Not a service menu. An engineering partnership with one goal: a working system that solves the problem.</p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#1f1f1f" }}>
          {steps.map(s => (
            <div key={s.n}
              style={{ background: "#0c0c0c", padding: "2.5rem", transition: "background 0.4s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0f0f0f")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0c0c0c")}>
              <div style={{ display: "grid", gridTemplateColumns: "2rem 1fr", gap: "1.5rem", alignItems: "start" }}>
                <span className="label" style={{ paddingTop: "0.2rem" }}>{s.n}</span>
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.4rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.1em", color: "#f0ede8" }}>{s.title}</span>
                    <p style={{ fontSize: "0.82rem", color: "#6b6b6b", fontStyle: "italic" }}>{s.q}</p>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#4a4a4a", lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
