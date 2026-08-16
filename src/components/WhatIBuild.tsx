"use client";

const blocks = [
  {
    number: "01",
    title: "BUILD",
    tagline: "Ideas that need to become real products.",
    description:
      "From architecture to frontend, backend, database, authentication, integrations and deployment — I build products end-to-end. No handoffs. No gaps. One system that works.",
  },
  {
    number: "02",
    title: "AUTOMATE",
    tagline: "Processes that shouldn't require humans anymore.",
    description:
      "I turn repetitive workflows into reliable systems using APIs, AI, automation and custom infrastructure. If you're doing the same thing manually every week, that's a problem worth solving.",
  },
  {
    number: "03",
    title: "INTELLIGENCE",
    tagline: "AI that actually does something.",
    description:
      "AI integrations, agents, RAG systems, meeting intelligence, extraction, summarization and workflow automation — designed around real use cases, not demos.",
  },
  {
    number: "04",
    title: "REBUILD",
    tagline: "Products that aren't working as well as they should.",
    description:
      "Performance problems, infrastructure costs, broken workflows, technical debt — and systems that need to evolve without breaking what already works.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="py-24 md:py-40 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-6 mb-20 md:mb-28">
          <div className="md:col-span-3">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              What I do
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.03em] text-[#f0ede8] leading-tight">
              Problems I like solving.
            </h2>
          </div>
        </div>

        {/* Blocks */}
        <div className="grid md:grid-cols-2 gap-px bg-[#1f1f1f]">
          {blocks.map((block) => (
            <div
              key={block.number}
              className="group bg-[#0c0c0c] p-10 md:p-14 hover:bg-[#0f0f0f] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#3a3a3a] group-hover:text-[#c8f542] transition-colors duration-500">
                  {block.number}
                </span>
                <span className="w-4 h-px bg-[#2a2a2a] mt-1.5 group-hover:w-8 group-hover:bg-[#c8f542] transition-all duration-500" />
              </div>

              <h3 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-[#f0ede8] mb-4">
                {block.title}
              </h3>
              <p className="text-sm text-[#c8f542] font-medium mb-4 leading-snug">
                {block.tagline}
              </p>
              <p className="text-sm text-[#4a4a4a] leading-relaxed font-light">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
