"use client";

import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import { profile } from "../data";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-5 sm:px-8 md:px-10"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
            style={{
              fontSize: "clamp(3rem, 10vw, 120px)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Let's Work Together
          </h2>
        </FadeIn>

        {/* Contact Message */}
        <FadeIn delay={0.2} y={30}>
          <p
            className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ color: "#d1d5db", fontFamily: "'Inter', sans-serif" }}
          >
            Ready to bring your next project to life? Let's discuss how we can build something amazing together.
          </p>
        </FadeIn>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FadeIn delay={0.3} y={20}>
            <div className="text-center">
              <div
                className="text-2xl font-bold mb-2"
                style={{ color: "#3b82f6", fontFamily: "'Inter', sans-serif" }}
              >
                Email
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-gray-300 hover:text-blue-400 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {profile.email}
              </a>
            </div>
          </FadeIn>

          {profile.phone && (
            <FadeIn delay={0.4} y={20}>
              <div className="text-center">
                <div
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#3b82f6", fontFamily: "'Inter', sans-serif" }}
                >
                  Phone
                </div>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {profile.phone}
                </a>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.5} y={20}>
            <div className="text-center">
              <div
                className="text-2xl font-bold mb-2"
                style={{ color: "#3b82f6", fontFamily: "'Inter', sans-serif" }}
              >
                Location
              </div>
              <p
                className="text-gray-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {profile.location}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <FadeIn delay={0.6} y={20}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-lg font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              GitHub ↗
            </a>
          </FadeIn>
          <FadeIn delay={0.7} y={20}>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-lg font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              LinkedIn ↗
            </a>
          </FadeIn>
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.8} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}