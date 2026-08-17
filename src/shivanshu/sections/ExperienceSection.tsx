"use client";

import FadeIn from "../components/FadeIn";
import { experiences } from "../data";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
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
            Experience
          </h2>
        </FadeIn>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <FadeIn key={exp.id} delay={0.2 + index * 0.1} y={30}>
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: "#e5e7eb", fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.role}
                      </h3>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <p
                        className="text-lg font-semibold"
                        style={{ color: "#3b82f6", fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#9ca3af", fontFamily: "'Inter', sans-serif" }}
                      >
                        {exp.period}
                      </p>
                    </div>
                    <p
                      className="leading-relaxed mb-4"
                      style={{ color: "#d1d5db", fontFamily: "'Inter', sans-serif" }}
                    >
                      {exp.desc}
                    </p>
                    {exp.tags && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}