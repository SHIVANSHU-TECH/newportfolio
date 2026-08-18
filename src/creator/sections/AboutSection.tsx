"use client";

import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import { portfolioData } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center
        px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* ── Corner decorations ── */}
      <FadeIn
        delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]
          w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-slate-700 rounded-full flex items-center justify-center aspect-square border border-slate-600">
          <span className="text-6xl">🚀</span>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]
          w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-slate-700 rounded-full flex items-center justify-center aspect-square border border-slate-600">
          <span className="text-5xl">💻</span>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]
          w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-slate-700 rounded-full flex items-center justify-center aspect-square border border-slate-600">
          <span className="text-6xl">⚡</span>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]
          w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-slate-700 rounded-full flex items-center justify-center aspect-square border border-slate-600">
          <span className="text-6xl">🎯</span>
        </div>
      </FadeIn>

      {/* ── Centre content ── */}
      <div className="relative z-10 flex flex-col items-center text-center
        gap-10 sm:gap-14 md:gap-16">

        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated text + button */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={portfolioData.profile.bio.join(" ")}
            className="font-medium text-center leading-relaxed max-w-[700px]"
            style={{
              color: "#D7E2EA",
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              fontFamily: "'Kanit', sans-serif",
            }}
          />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}