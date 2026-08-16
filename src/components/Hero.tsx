"use client";

import { useEffect, useRef, useState } from "react";

const statusItems = ["AI Systems", "Products", "Automations"];

export default function Hero() {
  const [statusIdx, setStatusIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Cycle through status items
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((i) => (i + 1) % statusItems.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Subtle cursor parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200,245,66,0.04), transparent 50%)`,
        }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f0ede8 1px, transparent 1px), linear-gradient(to bottom, #f0ede8 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
            INDEPENDENT PRODUCT ENGINEER
          </span>
          <span className="w-8 h-px bg-[#2a2a2a]" />
          <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
            BASED IN INDIA · WORKING GLOBALLY
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-[clamp(2.8rem,7vw,7rem)] font-light leading-[1.02] tracking-[-0.03em] text-[#f0ede8] max-w-5xl mb-8">
          I don&apos;t build
          <br />
          for everyone.
          <br />
          <span className="text-[#6b6b6b]">I build what others</span>
          <br />
          haven&apos;t figured
          <br />
          out yet.
        </h1>

        {/* Supporting paragraph */}
        <p className="text-[clamp(1rem,1.5vw,1.2rem)] text-[#6b6b6b] max-w-xl leading-relaxed mb-12 font-light">
          I turn ambitious ideas, difficult technical problems, and repetitive
          business processes into production-ready products, AI systems, and
          automations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-20">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-[#c8f542] text-[#0c0c0c] px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#d4f85a] transition-all duration-300"
          >
            See what I&apos;ve built
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-[#2a2a2a] text-[#f0ede8] px-8 py-4 text-sm font-medium tracking-wide hover:border-[#c8f542] hover:text-[#c8f542] transition-all duration-300"
          >
            Have something challenging? →
          </a>
        </div>

        {/* Credibility bar */}
        <div className="flex items-center gap-4 flex-wrap">
          {["Full-Stack", "AI Systems", "Automation", "Product Engineering"].map(
            (item, i) => (
              <span key={item} className="flex items-center gap-4">
                <span className="text-xs text-[#4a4a4a] tracking-widest uppercase">
                  {item}
                </span>
                {i < 3 && <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />}
              </span>
            )
          )}
        </div>
      </div>

      {/* Status indicator — bottom left */}
      <div className="absolute bottom-10 left-6 md:left-12 z-10 flex items-center gap-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f542] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f542]" />
        </span>
        <span className="text-[11px] tracking-widest uppercase text-[#4a4a4a]">
          CURRENTLY BUILDING
        </span>
        <span className="text-[11px] tracking-widest uppercase text-[#c8f542] min-w-[100px] transition-all duration-500">
          {statusItems[statusIdx]}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-6 md:right-12 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-widest uppercase text-[#4a4a4a] rotate-90 origin-center">
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#2a2a2a] to-transparent" />
      </div>
    </section>
  );
}
