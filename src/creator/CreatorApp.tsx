"use client";

import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function CreatorApp() {
  return (
    <>
      {/* Global Kanit font styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap');

            .hero-heading {
              background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `,
        }}
      />
      
      <div
        style={{
          backgroundColor: "#0C0C0C",
          fontFamily: "'Kanit', sans-serif",
          overflowX: "clip",
        }}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}