"use client";

export default function PositioningStatement() {
  return (
    <section className="py-32 md:py-48 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left — label */}
          <div className="md:col-span-3">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              The approach
            </span>
          </div>

          {/* Right — content */}
          <div className="md:col-span-9">
            <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#f0ede8] mb-10">
              Most people come to developers
              <br />
              with a specification.
            </p>
            <p className="text-[clamp(1.6rem,3.5vw,3rem)] font-light leading-[1.2] tracking-[-0.02em] text-[#c8f542] mb-16">
              Bring me the problem instead.
            </p>

            <div className="max-w-2xl space-y-5">
              <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light">
                I work from the problem backward — understanding what needs to
                happen, designing the system, building the product, integrating
                the infrastructure, and taking it into production.
              </p>
              <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light">
                The result isn&apos;t just code. It&apos;s a working system that
                solves the actual problem.
              </p>
            </div>

            {/* Proof numbers */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1f1f1f] pt-12">
              {[
                { value: "3K+", label: "Users on CollegeXConnect" },
                { value: "250K+", label: "Platform visitors" },
                { value: "~97%", label: "Infrastructure cost reduction" },
                { value: "4+", label: "Production systems shipped" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-light tracking-tight text-[#f0ede8] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#4a4a4a] tracking-wide leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
