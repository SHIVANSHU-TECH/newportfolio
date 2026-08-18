"use client";

import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import { portfolioData } from "@/data/portfolio";

const NAV_LINKS = ["About", "Services", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ overflowX: "clip", backgroundColor: "#0C0C0C" }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div
          className="flex justify-between px-6 md:px-10 pt-6 md:pt-8"
          style={{ color: "#D7E2EA" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]
                transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#D7E2EA", fontFamily: "'Kanit', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40} as="div">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full
              text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
              mt-6 sm:mt-4 md:-mt-5"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            Hi, I'm {portfolioData.profile.name.split(' ')[0]}
          </h1>
        </FadeIn>
      </div>

      {/* Spacer to push bottom bar down — portrait is absolutely positioned */}
      <div className="flex-1" />

      {/* Bottom bar */}
      <div
        className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10"
        style={{ position: "relative", zIndex: 20 }}
      >
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug
              max-w-[160px] sm:max-w-[220px] md:max-w-[280px]"
            style={{
              color: "#D7E2EA",
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            {portfolioData.profile.tagline} • {portfolioData.profile.sub.replace("Full-Stack · ", "")}
          </p>
        </FadeIn>

        {/* Right: Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait — absolutely centered */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10
          top-1/2 -translate-y-1/2
          sm:top-auto sm:translate-y-0 sm:bottom-0
          w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet padding={150} strength={3}>
          <div
            className="w-full bg-gradient-to-b from-slate-700 to-slate-900 rounded-3xl flex items-center justify-center select-none pointer-events-none"
            style={{ height: "600px" }}
          >
            <div className="text-center text-slate-300">
              <div className="text-8xl mb-4">👨‍💻</div>
              <div className="text-2xl font-bold mb-2" style={{ fontFamily: "'Kanit', sans-serif" }}>
                {portfolioData.profile.name}
              </div>
              <div className="text-lg opacity-75" style={{ fontFamily: "'Kanit', sans-serif" }}>
                {portfolioData.profile.tagline}
              </div>
            </div>
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}