"use client";

import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import ContactButton from "../components/ContactButton";
import { profile } from "../data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center
        px-5 sm:px-8 md:px-10 py-20"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* ── Corner decorations with tech icons ── */}
      <FadeIn
        delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]
          w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-gray-800 rounded-full flex items-center justify-center aspect-square">
          <span className="text-6xl">⚡</span>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]
          w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-gray-800 rounded-full flex items-center justify-center aspect-square">
          <span className="text-5xl">🚀</span>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]
          w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-gray-800 rounded-full flex items-center justify-center aspect-square">
          <span className="text-6xl">💻</span>
        </div>
      </FadeIn>

      <FadeIn
        delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]
          w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none select-none"
      >
        <div className="w-full h-auto bg-gray-800 rounded-full flex items-center justify-center aspect-square">
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
              fontFamily: "'Inter', sans-serif",
            }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Animated text + button */}
        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={profile.bio.join(" ")}
            className="font-medium text-center leading-relaxed max-w-[700px]"
            style={{
              color: "#e5e7eb",
              fontSize: "clamp(1rem, 2vw, 1.35rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          />
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {profile.stats.map((stat, index) => (
              <FadeIn key={index} delay={0.4 + index * 0.1} y={20}>
                <div className="text-center">
                  <div
                    className="font-bold text-2xl md:text-3xl"
                    style={{ color: "#3b82f6", fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-sm md:text-base font-medium"
                    style={{ color: "#e5e7eb", fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  );
}