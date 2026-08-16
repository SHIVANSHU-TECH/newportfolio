"use client";

export default function Availability() {
  return (
    <section className="py-24 md:py-40 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              Availability
            </span>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <p className="text-[clamp(1.8rem,3.5vw,3rem)] font-light tracking-[-0.02em] text-[#f0ede8] leading-snug mb-8">
              I don&apos;t take every project.
            </p>

            <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light max-w-xl mb-10">
              The best work usually happens when the problem is interesting, the
              ambition is high, and there&apos;s room to build something properly.
            </p>

            {/* What works */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {[
                {
                  label: "Good fit",
                  items: [
                    "Ambitious products",
                    "Complex AI integrations",
                    "Infrastructure problems",
                    "Automation systems",
                    "Technical rebuilds",
                  ],
                },
                {
                  label: "Who I work with",
                  items: [
                    "Startup founders",
                    "Business owners",
                    "Creators with scale",
                    "Product companies",
                    "Internal tooling teams",
                  ],
                },
                {
                  label: "How it works",
                  items: [
                    "Problem-first approach",
                    "End-to-end ownership",
                    "Production-quality output",
                    "Direct communication",
                    "No account managers",
                  ],
                },
              ].map((col) => (
                <div key={col.label} className="space-y-3">
                  <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#3a3a3a] mb-4">
                    {col.label}
                  </div>
                  {col.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#2a2a2a]" />
                      <span className="text-xs text-[#4a4a4a]">{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="border-t border-[#1f1f1f] pt-10">
              <p className="text-sm text-[#6b6b6b] mb-6">
                Have a problem worth solving?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-[#f0ede8] text-sm group hover:text-[#c8f542] transition-colors duration-300"
              >
                <span>Start a conversation</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
