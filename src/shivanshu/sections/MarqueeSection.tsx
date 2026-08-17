"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups } from "../data";

// Create marquee items from all skills
const TECH_ITEMS = skillGroups.flatMap(group => group.items);

// Triple for seamless loop
const ROW1_ITEMS = TECH_ITEMS.slice(0, Math.ceil(TECH_ITEMS.length / 2));
const ROW2_ITEMS = TECH_ITEMS.slice(Math.ceil(TECH_ITEMS.length / 2));

const ROW1_LOOP = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
const ROW2_LOOP = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

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
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="flex flex-col gap-6">
        {/* Row 1 — moves right */}
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {ROW1_LOOP.map((tech, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-900 border border-gray-800 flex-shrink-0 flex items-center justify-center px-6 py-4"
              style={{ minWidth: 180, height: 80 }}
            >
              <span 
                className="font-medium text-center"
                style={{ 
                  color: "#e5e7eb", 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem"
                }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 — moves left */}
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {ROW2_LOOP.map((tech, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-900 border border-gray-800 flex-shrink-0 flex items-center justify-center px-6 py-4"
              style={{ minWidth: 180, height: 80 }}
            >
              <span 
                className="font-medium text-center"
                style={{ 
                  color: "#e5e7eb", 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem"
                }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}