"use client";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div className="about-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Left */}
          <div>
            <span className="label" style={{ display: "block", marginBottom: "2rem" }}>About</span>
            <div style={{ marginBottom: "2.5rem" }}>
              <p style={{ fontSize: "1rem", fontWeight: 500, color: "#f0ede8", marginBottom: "0.25rem" }}>Shivanshu Shukla</p>
              <p style={{ fontSize: "0.85rem", color: "#6b6b6b" }}>Independent Product Engineer</p>
              <p style={{ fontSize: "0.72rem", color: "#3a3a3a", marginTop: "0.75rem" }}>Based in India · Working globally</p>
            </div>
            <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Products conceived and shipped end-to-end", "AI systems deployed in production", "Infrastructure costs reduced significantly", "Automation workflows built and maintained"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8f542", marginTop: "0.45rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "#4a4a4a", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <p style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#f0ede8", marginBottom: "2rem", lineHeight: 1.2 }}>I like difficult problems.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", maxWidth: 580 }}>
              {[
                "I'm a Product Engineer who works at the intersection of software, AI, and business problems.",
                "I care less about writing more code and more about building the right system — whether that's a product from scratch, an AI workflow, an internal platform, or an automation that eliminates hours of repetitive work.",
                "The best work happens when the problem is interesting and there's room to build something properly. I'm not particularly interested in checkbox work.",
              ].map((t, i) => (
                <p key={i} style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", color: "#6b6b6b", lineHeight: 1.8, fontWeight: 300 }}>{t}</p>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "3rem" }}>
              {[
                { label: "GitHub →", href: "https://github.com/shivanshu-tech" },
                { label: "LinkedIn →", href: "https://www.linkedin.com/in/shivanshushukla07/" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hu"
                  style={{ fontSize: "0.75rem", color: "#4a4a4a", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f0ede8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4a4a4a")}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
