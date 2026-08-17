"use client";

import FadeIn from "../components/FadeIn";
import { skillGroups } from "../data";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-5 sm:px-8 md:px-10"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16"
            style={{
              fontSize: "clamp(3rem, 10vw, 120px)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.label} delay={0.2 + index * 0.1} y={30}>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#3b82f6", fontFamily: "'Inter', sans-serif" }}
                >
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}