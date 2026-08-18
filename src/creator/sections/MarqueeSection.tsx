"use client";

import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";

// Create project images array from existing portfolio data
const PROJECT_IMAGES = portfolioData.projects.flatMap(project => {
  const images = [];
  if (project.image) images.push(project.image);
  // Since we have limited project images, we'll repeat them to create the marquee effect
  return images;
});

// If we don't have enough images, repeat the available ones
const MARQUEE_IMAGES = PROJECT_IMAGES.length > 0 
  ? Array(Math.ceil(21 / PROJECT_IMAGES.length)).fill(PROJECT_IMAGES).flat().slice(0, 21)
  : Array(21).fill("/images/placeholder-project.jpg"); // Fallback

const ROW1 = MARQUEE_IMAGES.slice(0, 11);
const ROW2 = MARQUEE_IMAGES.slice(11);

// Triple for seamless loop
const ROW1_LOOP = [...ROW1, ...ROW1, ...ROW1];
const ROW2_LOOP = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves right */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {ROW1_LOOP.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ width: 420, height: 270 }}
            >
              {PROJECT_IMAGES.length > 0 && src !== "/images/placeholder-project.jpg" ? (
                <img
                  src={src}
                  alt="Project preview"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-slate-400 text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="text-sm">Project Preview</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 2 — moves left */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {ROW2_LOOP.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-800 border border-slate-700 flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ width: 420, height: 270 }}
            >
              {PROJECT_IMAGES.length > 0 && src !== "/images/placeholder-project.jpg" ? (
                <img
                  src={src}
                  alt="Project preview"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-slate-400 text-center">
                  <div className="text-4xl mb-2">💡</div>
                  <div className="text-sm">Innovation</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}