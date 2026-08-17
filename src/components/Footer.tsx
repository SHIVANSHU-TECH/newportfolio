"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1f1f1f", padding: "2.5rem 1.5rem" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem" }}>
          {/* Brand */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#f0ede8", marginBottom: "0.25rem" }}>SHIVANSHU SHUKLA</p>
            <p style={{ fontSize: "0.62rem", color: "#3a3a3a", letterSpacing: "0.06em" }}>Independent Product Engineer</p>
            <p style={{ fontSize: "0.62rem", color: "#2a2a2a", letterSpacing: "0.06em" }}>Full-Stack · AI · Automation · Product</p>
          </div>
          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
            <p style={{ fontSize: "0.62rem", color: "#2a2a2a", letterSpacing: "0.06em" }}>© 2026 Shivanshu Shukla</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { label: "GitHub", href: "https://github.com/shivanshu-tech" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/shivanshu-shukla-3626322b5/" },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.62rem", color: "#2a2a2a", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4a4a4a")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#2a2a2a")}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
