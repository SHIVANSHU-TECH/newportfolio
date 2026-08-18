"use client";

import FadeIn from "../components/FadeIn";
import { portfolioData } from "@/data/portfolio";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              color: "#0C0C0C",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="space-y-0">
          {portfolioData.services.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={40}
            >
              <div
                className="border-t border-black/15 py-8 sm:py-10 md:py-12"
                style={{
                  borderBottomWidth: index === portfolioData.services.length - 1 ? "1px" : "0",
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                  {/* Number */}
                  <div
                    className="font-black leading-none"
                    style={{
                      fontSize: "clamp(3rem, 10vw, 140px)",
                      color: "#0C0C0C",
                      fontFamily: "'Kanit', sans-serif",
                      lineHeight: 0.8,
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="font-medium uppercase mb-4"
                      style={{
                        fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                        color: "#0C0C0C",
                        fontFamily: "'Kanit', sans-serif",
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="font-light leading-relaxed max-w-2xl"
                      style={{
                        fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                        color: "#0C0C0C",
                        opacity: 0.7,
                        fontFamily: "'Kanit', sans-serif",
                      }}
                    >
                      {service.description}
                    </p>
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