"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { portfolioData } from "@/data/portfolio";

const projects = portfolioData.projects;
const TOTAL = projects.length;

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: (typeof projects)[0];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;

  const scale = useTransform(
    progress,
    [index / TOTAL, (index + 1) / TOTAL],
    [1, targetScale]
  );

  const stickyTop = 96 + index * 28; // top-24 = 96px base

  return (
    <div className="h-[85vh] flex items-start" style={{ position: "relative" }}>
      <motion.div
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{
          backgroundColor: "#0C0C0C",
          position: "sticky",
          top: stickyTop,
          scale,
          transformOrigin: "top center",
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-5">
            <span
              className="font-black leading-none"
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
                color: "#D7E2EA",
                fontFamily: "'Kanit', sans-serif",
                lineHeight: 0.9,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span
                className="font-medium uppercase tracking-widest text-[#D7E2EA]/60"
                style={{
                  fontSize: "clamp(0.65rem, 1.2vw, 1rem)",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {project.subtitle}
              </span>
              <span
                className="font-black uppercase text-[#D7E2EA] leading-tight"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 2.5rem)",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {project.title}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.link}>
            Live Project
          </LiveProjectButton>
        </div>

        {/* Bottom image grid */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left col — 40% — 2 stacked images */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <div
              className="w-full bg-slate-800 border border-slate-700 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex items-center justify-center overflow-hidden"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-slate-400 text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-sm">Preview</div>
                </div>
              )}
            </div>
            <div
              className="w-full bg-slate-800 border border-slate-700 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex items-center justify-center"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <div className="text-slate-400 text-center">
                <div className="text-4xl mb-2">🔧</div>
                <div className="text-sm">Tech Stack</div>
              </div>
            </div>
          </div>

          {/* Right col — 60% — 1 tall image */}
          <div style={{ width: "60%" }}>
            <div
              className="w-full h-full bg-slate-800 border border-slate-700 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex items-center justify-center overflow-hidden"
              style={{
                minHeight: "clamp(290px, 38vw, 570px)",
                maxHeight: "none",
              }}
            >
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover"
                  poster={project.image}
                />
              ) : project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-slate-400 text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <div className="text-lg font-medium mb-2" style={{ fontFamily: "'Kanit', sans-serif" }}>
                    {project.title}
                  </div>
                  <div className="text-sm opacity-75 max-w-xs mx-auto">
                    {project.desc.substring(0, 120)}...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-36"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center
            mb-12 sm:mb-16 md:mb-20"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Projects
        </h2>
      </FadeIn>

      {/* Stacking cards container */}
      <div ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}