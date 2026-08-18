"use client";

import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-10"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Let's Work
          </h2>
        </FadeIn>

        {/* Contact content */}
        <div className="space-y-16 sm:space-y-20 md:space-y-24">
          {/* Bio */}
          <FadeIn delay={0.2} y={30}>
            <p
              className="font-light leading-relaxed max-w-2xl mx-auto"
              style={{
                color: "#D7E2EA",
                fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              Ready to bring your ideas to life? Let's create something extraordinary together.
            </p>
          </FadeIn>

          {/* Contact details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <FadeIn delay={0.3} y={20}>
              <div className="text-center md:text-left">
                <h3
                  className="font-medium uppercase tracking-wider mb-4"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "0.8rem",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  Email
                </h3>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="font-light transition-colors duration-200 hover:opacity-70"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  {portfolioData.profile.email}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <div className="text-center md:text-right">
                <h3
                  className="font-medium uppercase tracking-wider mb-4"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "0.8rem",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  Location
                </h3>
                <p
                  className="font-light"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  {portfolioData.profile.location}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Social links */}
          <FadeIn delay={0.5} y={20}>
            <div className="flex justify-center gap-8 sm:gap-12">
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
                style={{
                  color: "#D7E2EA",
                  fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                GitHub →
              </a>
              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
                style={{
                  color: "#D7E2EA",
                  fontSize: "clamp(0.75rem, 1.2vw, 1rem)",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                LinkedIn →
              </a>
            </div>
          </FadeIn>

          {/* Contact button */}
          <FadeIn delay={0.6} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}