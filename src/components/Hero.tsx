"use client";
import { useEffect, useRef, useState } from "react";

const statuses = ["AI Systems", "Products", "Automations"];

export default function Hero() {
  const [sIdx, setSIdx] = useState(0);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const t = setInterval(() => setSIdx(i => (i + 1) % statuses.length), 2400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", background: "#0c0c0c" }}>

      {/* Cursor glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(200,245,66,0.04), transparent 50%)` }} />

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.03, backgroundImage: "linear-gradient(to right,#f0ede8 1px,transparent 1px),linear-gradient(to bottom,#f0ede8 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "8rem", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span className="label">INDEPENDENT PRODUCT ENGINEER</span>
          <span style={{ width: 24, height: 1, background: "#2a2a2a", flexShrink: 0 }} />
          <span className="label">BASED IN INDIA · WORKING GLOBALLY</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontSize: "clamp(2.6rem,6.5vw,6.5rem)", fontWeight: 300, lineHeight: 1.04, letterSpacing: "-0.03em", color: "#f0ede8", maxWidth: 900, marginBottom: "2rem" }}>
          I don&apos;t build<br />
          for everyone.<br />
          <span style={{ color: "#6b6b6b" }}>I build what others</span><br />
          haven&apos;t figured<br />
          out yet.
        </h1>

        {/* Subline */}
        <p style={{ fontSize: "clamp(0.95rem,1.4vw,1.15rem)", color: "#6b6b6b", maxWidth: 500, lineHeight: 1.7, marginBottom: "3rem", fontWeight: 300 }}>
          I turn ambitious ideas, difficult technical problems, and repetitive business processes into production-ready products, AI systems, and automations.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "5rem", alignItems: "center" }}>
          <a href="#work"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "#c8f542", color: "#0c0c0c", padding: "1rem 2rem", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", transition: "background 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#d4f85a")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c8f542")}>
            See what I&apos;ve built <span>→</span>
          </a>
          <a href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", border: "1px solid #2a2a2a", color: "#f0ede8", padding: "1rem 2rem", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8f542"; e.currentTarget.style.color = "#c8f542"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#f0ede8"; }}>
            Have something challenging? →
          </a>
        </div>

        {/* Credibility row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
          {["Full-Stack", "AI Systems", "Automation", "Product Engineering"].map((t, i) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontSize: "0.7rem", color: "#4a4a4a", letterSpacing: "0.18em", textTransform: "uppercase" }}>{t}</span>
              {i < 3 && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#2a2a2a", flexShrink: 0 }} />}
            </span>
          ))}
        </div>
      </div>

      {/* Status dot — bottom left */}
      <div style={{ position: "absolute", bottom: 40, left: "1.5rem", zIndex: 1, display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
          <span className="ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#c8f542", opacity: 0.75 }} />
          <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "#c8f542" }} />
        </span>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a4a4a" }}>CURRENTLY BUILDING</span>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8f542", minWidth: 90 }}>{statuses[sIdx]}</span>
      </div>

      {/* Scroll indicator — bottom right */}
      <div style={{ position: "absolute", bottom: 40, right: "1.5rem", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3a3a3a", writingMode: "vertical-rl" }}>scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom,#2a2a2a,transparent)" }} />
      </div>
    </section>
  );
}
