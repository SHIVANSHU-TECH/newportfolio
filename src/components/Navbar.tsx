"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 50,
    transition: "background 0.4s, border-bottom 0.4s",
    background: scrolled ? "rgba(12,12,12,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
  };

  return (
    <header style={navStyle}>
      <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "1px", textDecoration: "none" }}
          aria-label="Shivanshu Shukla">
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#f0ede8", fontFamily: "Georgia, 'Times New Roman', serif", transition: "color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#c8f542")}
            onMouseLeave={e => (e.currentTarget.style.color = "#f0ede8")}>
            S
          </span>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8f542", fontFamily: "Georgia, 'Times New Roman', serif" }}>
            S
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
          {links.map(l => (
            <a key={l.label} href={l.href}
              style={{ fontSize: "0.8rem", color: "#6b6b6b", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0ede8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}>
              {l.label}
            </a>
          ))}
          <a href="#contact"
            style={{ fontSize: "0.8rem", border: "1px solid #2a2a2a", color: "#f0ede8", padding: "0.45rem 1.1rem", textDecoration: "none", letterSpacing: "0.06em", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8f542"; e.currentTarget.style.color = "#c8f542"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#f0ede8"; }}>
            Start a conversation
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} aria-label="Menu"
          style={{ display: "none", flexDirection: "column", gap: "5px", padding: "6px", background: "none", border: "none", cursor: "pointer" }}
          className="mobile-menu-btn">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 20, height: 1, background: "#f0ede8", transition: "all 0.3s",
              transform: open ? (i === 0 ? "rotate(45deg) translate(4px,4px)" : i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "scaleX(0)") : "none" }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div style={{ overflow: "hidden", maxHeight: open ? 320 : 0, transition: "max-height 0.4s ease", background: "rgba(12,12,12,0.97)", borderBottom: open ? "1px solid #1f1f1f" : "none" }}
        className="mobile-dropdown">
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: "1rem", color: "#f0ede8", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            style={{ fontSize: "0.8rem", border: "1px solid #2a2a2a", color: "#f0ede8", padding: "0.75rem 1rem", textAlign: "center", textDecoration: "none" }}>
            Start a conversation
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-dropdown { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
