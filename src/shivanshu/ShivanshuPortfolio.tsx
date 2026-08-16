"use client";

import { useState, useEffect } from "react";
import { profile, experiences, projects, skillGroups } from "./data";

/* ─── design tokens ─────────────────────────── */
const BG = "#0c0c0c";
const FG = "#f0ede8";
const MUTED = "#6b6b6b";
const DIM = "#3a3a3a";
const BORDER = "#1f1f1f";
const ACCENT = "#c8f542";
const SURFACE = "#111111";

/* ─── helpers ───────────────────────────────── */
const Label = ({ children }: { children: React.ReactNode }) => (
  <span style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: MUTED, display: "block" }}>
    {children}
  </span>
);

const Divider = () => <div style={{ borderTop: `1px solid ${BORDER}`, width: "100%", margin: "0" }} />;

/* ─── navbar ───────────────────────────────── */
function Navbar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = ["About", "Work", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled ? "rgba(12,12,12,0.93)" : "transparent";

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60, background: navBg, backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent", transition: "all 0.4s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Brand */}
        <button onClick={() => setActive("About")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: FG, fontFamily: "inherit", transition: "color 0.3s" }}
          onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
          onMouseLeave={e => (e.currentTarget.style.color = FG)}>
          SS
        </button>

        {/* Desktop tabs */}
        <div className="ss-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setActive(t)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.78rem", padding: "0.45rem 0.85rem", borderRadius: 4, letterSpacing: "0.04em", fontFamily: "inherit", transition: "all 0.25s",
                color: active === t ? ACCENT : MUTED,
                borderBottom: active === t ? `1px solid ${ACCENT}` : "1px solid transparent" }}
              onMouseEnter={e => { if (active !== t) e.currentTarget.style.color = FG; }}
              onMouseLeave={e => { if (active !== t) e.currentTarget.style.color = MUTED; }}>
              {t}
            </button>
          ))}
          <a href={`mailto:${profile.email}`}
            style={{ marginLeft: "1rem", fontSize: "0.72rem", border: `1px solid ${DIM}`, color: FG, padding: "0.45rem 1rem", textDecoration: "none", letterSpacing: "0.06em", transition: "all 0.3s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = DIM; e.currentTarget.style.color = FG; }}>
            Get in touch
          </a>
        </div>

        {/* Mobile burger */}
        <button className="ss-mobile-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", flexDirection: "column", gap: 5, padding: 6, background: "none", border: "none", cursor: "pointer" }}
          aria-label="menu">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 18, height: 1, background: FG, transition: "all 0.3s",
              transform: menuOpen ? (i===0?"rotate(45deg) translate(4px,4px)":i===2?"rotate(-45deg) translate(4px,-4px)":"scaleX(0)") : "none" }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className="ss-mobile-menu" style={{ overflow: "hidden", maxHeight: menuOpen ? 300 : 0, transition: "max-height 0.4s", background: "rgba(12,12,12,0.97)", borderBottom: menuOpen ? `1px solid ${BORDER}` : "none" }}>
        <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => { setActive(t); setMenuOpen(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", color: active === t ? ACCENT : FG, fontFamily: "inherit", textAlign: "left", padding: 0 }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @media(min-width:768px){.ss-mobile-btn{display:none!important}.ss-mobile-menu{display:none!important}.ss-desktop-nav{display:flex!important}}
        @media(max-width:767px){.ss-mobile-btn{display:flex!important}.ss-desktop-nav{display:none!important}}
      `}</style>
    </header>
  );
}

/* ─── ABOUT ─────────────────────────────────── */
function AboutSection() {
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const [sIdx, setSIdx] = useState(0);
  const statuses = ["AI Systems", "Full-Stack Products", "Automations"];

  useEffect(() => {
    const fn = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn, { passive: true });
    const t = setInterval(() => setSIdx(i => (i + 1) % statuses.length), 2400);
    return () => { window.removeEventListener("mousemove", fn); clearInterval(t); };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", background: BG }}>
      {/* cursor glow */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(200,245,66,0.035), transparent 50%)` }} />
      {/* grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: `linear-gradient(to right,${FG} 1px,transparent 1px),linear-gradient(to bottom,${FG} 1px,transparent 1px)`, backgroundSize: "80px 80px", zIndex: 0 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "9rem 1.5rem 5rem", position: "relative", zIndex: 1, width: "100%" }}>
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <Label>INDEPENDENT PRODUCT ENGINEER</Label>
          <span style={{ width: 24, height: 1, background: DIM }} />
          <Label>{profile.location}</Label>
        </div>

        {/* headline — two-col on desktop */}
        <div className="ss-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4rem" }}>
          <div>
            <h1 style={{ fontSize: "clamp(2.6rem,6vw,6rem)", fontWeight: 300, lineHeight: 1.04, letterSpacing: "-0.03em", color: FG, marginBottom: "2rem" }}>
              {profile.headline.split("\n").map((l, i) => (
                <span key={i} style={{ display: "block", color: i === 1 ? MUTED : FG }}>{l}</span>
              ))}
            </h1>
            <p style={{ fontSize: "clamp(0.92rem,1.3vw,1.1rem)", color: MUTED, maxWidth: 500, lineHeight: 1.75, fontWeight: 300, marginBottom: "2.5rem" }}>
              I turn ambitious ideas, difficult technical problems, and repetitive business processes into production-ready products, AI systems, and automations.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem" }}>
              <a href={`mailto:${profile.email}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: ACCENT, color: BG, padding: "0.9rem 1.8rem", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#d4f85a")}
                onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}>
                Start a conversation →
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: `1px solid ${DIM}`, color: FG, padding: "0.9rem 1.8rem", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = DIM; e.currentTarget.style.color = FG; }}>
                GitHub →
              </a>
            </div>
          </div>

          {/* Profile image */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
            <div style={{ position: "relative", width: "min(260px,100%)" }}>
              <div style={{ width: "100%", paddingBottom: "120%", position: "relative", overflow: "hidden" }}>
                <img src="/images/shivanshu.jpeg" alt="Shivanshu Shukla"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(15%)" }}
                  onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${BG}20, transparent)` }} />
              </div>
              {/* accent corner */}
              <div style={{ position: "absolute", bottom: -8, right: -8, width: 48, height: 48, background: ACCENT, zIndex: -1 }} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="ss-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "0", borderTop: `1px solid ${BORDER}` }}>
          {profile.stats.map((s, i) => (
            <div key={s.label} style={{ padding: "1.75rem 1.5rem", borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : "none", borderBottom: i < 2 ? `1px solid ${BORDER}` : "none" }}>
              <div style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 300, color: FG, letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>{s.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#4a4a4a", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* status dot */}
      <div style={{ position: "absolute", bottom: 36, left: "1.5rem", zIndex: 1, display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
          <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: ACCENT, opacity: 0.7, animation: "ss-ping 1.5s ease infinite" }} />
          <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: ACCENT }} />
        </span>
        <Label>CURRENTLY BUILDING</Label>
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: ACCENT, minWidth: 100 }}>{statuses[sIdx]}</span>
      </div>

      <style>{`
        @keyframes ss-ping { 75%,100%{transform:scale(2.2);opacity:0} }
        @media(min-width:768px){
          .ss-hero-grid{grid-template-columns:1fr 300px!important}
          .ss-stats-grid{grid-template-columns:repeat(4,1fr)!important}
          .ss-stats-grid>div{border-bottom:none!important;border-right:1px solid ${BORDER}!important}
          .ss-stats-grid>div:last-child{border-right:none!important}
        }
      `}</style>
    </section>
  );
}

/* ─── WORK EXPERIENCE ───────────────────────── */
function WorkSection() {
  return (
    <section style={{ background: BG, padding: "6rem 1.5rem" }}>
      <Divider />
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingTop: "5rem" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <Label>Experience</Label>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", color: FG, marginTop: "0.6rem" }}>Where I&apos;ve built things.</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: BORDER }}>
          {experiences.map((exp, i) => (
            <div key={exp.id} style={{ background: BG, padding: "2.5rem", transition: "background 0.4s", cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0f0f0f")}
              onMouseLeave={e => (e.currentTarget.style.background = BG)}>
              <div className="ss-exp-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}>
                {/* left */}
                <div>
                  <div style={{ fontSize: "0.68rem", color: DIM, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{exp.period}</div>
                  <div style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", fontWeight: 500, color: FG, marginBottom: "0.2rem" }}>{exp.role}</div>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.82rem", color: ACCENT, textDecoration: "none", letterSpacing: "0.04em" }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
                    onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                    {exp.company} ↗
                  </a>
                </div>
                {/* right */}
                <div>
                  <p style={{ fontSize: "0.82rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.25rem" }}>{exp.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{ fontSize: "0.62rem", letterSpacing: "0.06em", border: `1px solid ${BORDER}`, padding: "0.28rem 0.65rem", color: DIM }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resume CTA */}
        <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href="/Shivanshu_resume_Swe.pdf" download
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: ACCENT, color: BG, padding: "0.8rem 1.6rem", fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textDecoration: "none", transition: "background 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#d4f85a")}
            onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}>
            Download Resume →
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.78rem", color: MUTED, textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = FG)}
            onMouseLeave={e => (e.currentTarget.style.color = MUTED)}>
            Full profile on LinkedIn →
          </a>
        </div>
      </div>
      <style>{`@media(min-width:768px){.ss-exp-grid{grid-template-columns:220px 1fr!important}}`}</style>
    </section>
  );
}

/* ─── PROJECTS ──────────────────────────────── */
function ProjectsSection() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section style={{ background: BG, padding: "0 1.5rem 6rem" }}>
      <Divider />
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingTop: "5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <Label>Projects</Label>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", color: FG, marginTop: "0.6rem", marginBottom: "0.4rem" }}>Things I&apos;ve actually built.</h2>
          <p style={{ fontSize: "0.75rem", color: "#4a4a4a", letterSpacing: "0.08em" }}>Not concepts. Not mockups. Real systems.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 1, background: BORDER, marginBottom: "3rem" }}>
          {projects.map((pr, i) => (
            <button key={pr.id} onClick={() => setActive(i)}
              style={{ flex: 1, minWidth: 100, padding: "0.9rem 1.2rem", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", textAlign: "left", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s",
                background: active === i ? SURFACE : BG,
                color: active === i ? FG : "#4a4a4a" }}>
              <span style={{ display: "block", fontSize: "0.55rem", color: DIM, marginBottom: "0.2rem" }}>0{i + 1}</span>
              {pr.title}
            </button>
          ))}
        </div>

        {/* Project detail */}
        <div className="ss-proj-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Media */}
          <div style={{ background: "#090909", border: `1px solid ${BORDER}`, overflow: "hidden", position: "relative" }}>
            {p.video ? (
              <video key={p.id} src={p.video} autoPlay loop muted playsInline
                style={{ width: "100%", height: "auto", display: "block", maxHeight: 380, objectFit: "cover" }} />
            ) : (
              <img src={p.image} alt={p.title}
                style={{ width: "100%", height: "auto", display: "block", maxHeight: 380, objectFit: "cover" }} />
            )}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: `linear-gradient(to top, ${BG}, transparent)` }} />
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <div style={{ width: 20, height: 2, background: p.color }} />
                <Label>{p.subtitle}</Label>
              </div>
              <h3 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 300, color: FG, letterSpacing: "-0.02em" }}>{p.title}</h3>
            </div>
            <p style={{ fontSize: "0.85rem", color: MUTED, lineHeight: 1.8 }}>{p.desc}</p>
            <div>
              <Label>Built with</Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {p.tech.map(t => (
                  <span key={t} style={{ fontSize: "0.65rem", letterSpacing: "0.06em", border: `1px solid ${BORDER}`, padding: "0.3rem 0.7rem", color: DIM }}>{t}</span>
                ))}
              </div>
            </div>
            <a href={p.link} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: FG, textDecoration: "none", border: `1px solid ${DIM}`, padding: "0.7rem 1.4rem", transition: "all 0.3s", alignSelf: "flex-start" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.color = ACCENT; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = DIM; e.currentTarget.style.color = FG; }}>
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:768px){.ss-proj-grid{grid-template-columns:1fr 1fr!important}}`}</style>
    </section>
  );
}

/* ─── SKILLS ────────────────────────────────── */
function SkillsSection() {
  return (
    <section style={{ background: BG, padding: "0 1.5rem 6rem" }}>
      <Divider />
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingTop: "5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <Label>Skills</Label>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,3rem)", fontWeight: 300, letterSpacing: "-0.03em", color: FG, marginTop: "0.6rem", marginBottom: "0.5rem" }}>The tools change. The engineering doesn&apos;t.</h2>
          <p style={{ fontSize: "0.8rem", color: "#4a4a4a", maxWidth: 480 }}>Tools are chosen for the problem, not the other way around.</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {skillGroups.map(g => (
            <div key={g.label} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", borderTop: `1px solid ${BORDER}`, paddingTop: "1.75rem" }}>
              <span style={{ fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: DIM, width: 90, flexShrink: 0, paddingTop: "0.2rem" }}>{g.label}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {g.items.map(item => (
                  <span key={item}
                    style={{ fontSize: "0.72rem", color: MUTED, border: `1px solid #1a1a1a`, padding: "0.35rem 0.75rem", transition: "all 0.25s", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = DIM; e.currentTarget.style.color = FG; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.color = MUTED; }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ───────────────────────────────── */
function ContactSection() {
  return (
    <section style={{ background: BG, padding: "0 1.5rem 6rem" }}>
      <Divider />
      <div style={{ maxWidth: 1200, margin: "0 auto", paddingTop: "5rem" }}>
        <div className="ss-contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <div>
            <Label>Contact</Label>
            <h2 style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 300, letterSpacing: "-0.03em", color: FG, marginTop: "0.6rem", lineHeight: 1.08, marginBottom: "1.5rem" }}>
              Have something<br />difficult in mind?
            </h2>
            <p style={{ fontSize: "clamp(0.9rem,1.2vw,1.05rem)", color: MUTED, lineHeight: 1.8, fontWeight: 300, maxWidth: 440, marginBottom: "2.5rem" }}>
              Tell me what you&apos;re trying to build, fix, or automate. If it&apos;s an interesting problem, we should talk.
            </p>

            <div style={{ marginBottom: "2.5rem" }}>
              <a href={`mailto:${profile.email}`}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontSize: "clamp(0.95rem,1.6vw,1.2rem)", color: FG, textDecoration: "none", fontWeight: 300, transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={e => (e.currentTarget.style.color = FG)}>
                {profile.email} <span style={{ color: "#4a4a4a" }}>→</span>
              </a>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: "1.75rem" }}>
              {[
                { label: "LinkedIn ↗", href: profile.linkedin },
                { label: "GitHub ↗", href: profile.github },
                { label: "Resume ↓", href: "/Shivanshu_resume_Swe.pdf", download: true },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.download ? undefined : "_blank"} rel="noopener noreferrer"
                  download={l.download}
                  style={{ fontSize: "0.75rem", color: "#4a4a4a", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = FG)}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4a4a4a")}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — availability card */}
          <div style={{ border: `1px solid ${BORDER}`, padding: "2.5rem", alignSelf: "flex-start" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT }}>Available for select projects</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The best work usually happens when the problem is interesting, the ambition is high, and there&apos;s room to build something properly.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {["Full-stack products from scratch", "AI integrations & automation systems", "Infrastructure design & optimization", "Internal tools & platforms"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: DIM, marginTop: "0.45rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "#4a4a4a" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(min-width:768px){.ss-contact-grid{grid-template-columns:1fr 1fr!important}}`}</style>
    </section>
  );
}

/* ─── FOOTER ────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "2rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <div>
          <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: FG, marginBottom: "0.2rem" }}>SHIVANSHU SHUKLA</p>
          <p style={{ fontSize: "0.6rem", color: DIM, letterSpacing: "0.06em" }}>Independent Product Engineer · Full-Stack · AI · Automation</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
          <p style={{ fontSize: "0.6rem", color: DIM, letterSpacing: "0.06em" }}>© 2026 Shivanshu Shukla</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {[["GitHub", profile.github], ["LinkedIn", profile.linkedin]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.6rem", color: "#2a2a2a", textDecoration: "none", letterSpacing: "0.06em", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4a4a4a")}
                onMouseLeave={e => (e.currentTarget.style.color = "#2a2a2a")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ──────────────────────────────────── */

export default function ShivanshuPortfolio() {
  const [active, setActive] = useState("About");

  const renderSection = () => {
    switch (active) {
      case "Work":     return <WorkSection />;
      case "Projects": return <ProjectsSection />;
      case "Skills":   return <SkillsSection />;
      case "Contact":  return <ContactSection />;
      default:         return <AboutSection />;
    }
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: FG, fontFamily: "'Inter', -apple-system, sans-serif", overflowX: "hidden" }}>
      <Navbar active={active} setActive={setActive} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}
