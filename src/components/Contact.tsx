"use client";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <span className="label">Contact</span>

          <div>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#f0ede8", lineHeight: 1.08, marginBottom: "1.5rem" }}>
              Have something<br />difficult in mind?
            </h2>
            <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", color: "#6b6b6b", lineHeight: 1.8, fontWeight: 300, maxWidth: 460, marginBottom: "3rem" }}>
              Tell me what you&apos;re trying to build, fix, or automate. If it&apos;s an interesting problem, we should talk.
            </p>

            {/* Email */}
            <div style={{ marginBottom: "3rem" }}>
              <a href="mailto:shivanshushukla2022@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontSize: "clamp(1rem,1.8vw,1.3rem)", color: "#f0ede8", textDecoration: "none", fontWeight: 300, letterSpacing: "-0.01em", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c8f542")}
                onMouseLeave={e => (e.currentTarget.style.color = "#f0ede8")}>
                shivanshushukla2022@gmail.com <span style={{ color: "#4a4a4a" }}>→</span>
              </a>
            </div>

            {/* Links */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid #1f1f1f", paddingTop: "2rem", marginBottom: "2rem" }}>
              {[
                { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/shivanshushukla07/" },
                { label: "GitHub ↗", href: "https://github.com/shivanshu-tech" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.75rem", color: "#4a4a4a", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#f0ede8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4a4a4a")}>
                  {l.label}
                </a>
              ))}
            </div>

            <p style={{ fontSize: "0.7rem", color: "#2a2a2a", maxWidth: 320, lineHeight: 1.75 }}>
              A brief description of the problem is enough to start. No need for a full specification — that&apos;s what the first conversation is for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
