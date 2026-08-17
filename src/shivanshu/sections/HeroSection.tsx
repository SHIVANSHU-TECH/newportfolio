"use client";

import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import { profile } from "../data";
import Image from "next/image";

const NAV_LINKS = ["About", "Experience", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col"
      style={{ overflowX: "clip", backgroundColor: "#0a0a0a" }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div
          className="flex justify-between px-6 md:px-10 pt-6 md:pt-8"
          style={{ color: "#e5e7eb" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]
                transition-opacity duration-200 hover:opacity-70"
              style={{ color: "#e5e7eb", fontFamily: "'Inter', sans-serif" }}
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
            className="hero-heading font-black uppercase tracking-tight leading-none
              text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw]
              mt-6 sm:mt-4 md:-mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Shivanshu Shukla
          </h1>
        </FadeIn>
      </div>

      {/* Spacer to push bottom bar down */}
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
              color: "#e5e7eb",
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {profile.tagline} • {profile.sub}
          </p>
        </FadeIn>

        {/* Right: Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Profile Image — absolutely centered */}
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
            className="w-full h-auto object-contain select-none pointer-events-none bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg flex items-center justify-center"
            style={{ height: "600px" }}
          >
            <div className="text-gray-400 text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <p className="text-lg font-medium">{profile.name}</p>
              <p className="text-sm">{profile.tagline}</p>
            </div>
          </div>
        </Magnet>
      </FadeIn>
    </section>
  );
}