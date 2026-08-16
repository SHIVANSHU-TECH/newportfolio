"use client";

const techGroups = [
  {
    label: "PRODUCT",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
  },
  {
    label: "DATA",
    items: ["MongoDB", "PostgreSQL", "Firebase"],
  },
  {
    label: "AI",
    items: ["LLM APIs", "RAG Systems", "AI Agents", "AI Automation"],
  },
  {
    label: "INFRASTRUCTURE",
    items: ["AWS", "Vercel", "Render", "Cloudinary"],
  },
  {
    label: "SYSTEMS",
    items: ["REST APIs", "Authentication", "Webhooks", "Real-time systems"],
  },
];

export default function Technology() {
  return (
    <section className="py-24 md:py-32 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b] block mb-6">
              Stack
            </span>
            <p className="text-2xl md:text-3xl font-light tracking-[-0.02em] text-[#f0ede8] leading-snug mb-4">
              The tools change.
              <br />
              <span className="text-[#6b6b6b]">The engineering doesn&apos;t.</span>
            </p>
            <p className="text-sm text-[#4a4a4a] leading-relaxed mt-4">
              Tools are chosen for the problem, not the other way around.
              What matters is the system design behind them.
            </p>
          </div>

          {/* Right — groups */}
          <div className="md:col-span-8 space-y-8">
            {techGroups.map((group) => (
              <div key={group.label} className="flex gap-6 md:gap-10 items-start">
                <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#2a2a2a] w-20 flex-shrink-0 pt-0.5">
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-[#6b6b6b] border border-[#1a1a1a] px-3 py-1.5 hover:border-[#2a2a2a] hover:text-[#8a8a8a] transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
