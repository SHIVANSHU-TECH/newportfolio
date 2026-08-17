"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import LiveProjectButton from "../components/LiveProjectButton";
import { projects } from "../data";

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
          border-2 border-gray-700 p-4 sm:p-6 md:p-8"
        style={{
          backgroundColor: "#0a0a0a",
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
                fontSize: "clamp(2.5rem, 8vw, 100px)",
                color: "#e5e7eb",
                fontFamily: "'Inter', sans-serif",
                lineHeight: 0.9,
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span
                className="font-medium uppercase tracking-widest text-gray-400"
                style={{
                  fontSize: "clamp(0.65rem, 1.2vw, 1rem)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {project.subtitle}
              </span>
              <span
                className="font-black uppercase text-[#e5e7eb] leading-tight"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 2.5rem)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {project.title}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.link}>
            View Project
          </LiveProjectButton>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p
            className="leading-relaxed max-w-3xl"
            style={{
              color: "#d1d5db",
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {project.desc}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom image/video area */}
        <div className="flex gap-3 sm:gap-4">
          {/* Left col — 40% — Project Image */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: "40%" }}>
            <div
              className="w-full bg-gray-900 border border-gray-800 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex items-center justify-center"
              style={{ height: "clamp(200px, 25vw, 300px)" }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                />
              ) : (
                <div className="text-gray-500 text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p>Project Image</p>
                </div>
              )}
            </div>
            <div
              className="w-full bg-gray-900 border border-gray-800 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex items-center justify-center"
              style={{ height: "clamp(160px, 20vw, 240px)" }}
            >
              <div className="text-gray-500 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <p>Features</p>
              </div>
            </div>
          </div>

          {/* Right col — 60% — Video or Demo */}
          <div style={{ width: "60%" }}>
            <div
              className="w-full bg-gray-900 border border-gray-800 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] flex items-center justify-center"
              style={{
                minHeight: "clamp(360px, 45vw, 540px)",
                maxHeight: "none",
              }}
            >
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                />
              ) : (
                <div className="text-gray-500 text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p>Project Demo</p>
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
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center
            mb-12 sm:mb-16 md:mb-20"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            fontFamily: "'Inter', sans-serif",
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