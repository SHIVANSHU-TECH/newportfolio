"use client";

const experiments = [
  {
    name: "ClientScout AI",
    category: "AI · AUTOMATION",
    description:
      "An AI-driven lead generation and client research tool. Scrapes, scores, and surfaces qualified business leads from multiple sources automatically.",
    tags: ["Python", "AI", "Automation", "Scraping"],
  },
  {
    name: "Job Magica / Noah",
    category: "AI · PRODUCT",
    description:
      "An intelligent job matching system that analyzes candidate profiles and surfaces relevant opportunities — reducing the friction between finding work and getting hired.",
    tags: ["Node.js", "AI", "MongoDB"],
  },
  {
    name: "CruxRAG",
    category: "AI · KNOWLEDGE SYSTEMS",
    description:
      "A company knowledge brain using Retrieval-Augmented Generation. Indexes internal documents and surfaces answers from your own data instead of generic AI responses.",
    tags: ["RAG", "LLM APIs", "Vector DB", "Next.js"],
  },
  {
    name: "Multi-Query Scraper",
    category: "TOOLS · AUTOMATION",
    description:
      "A batch lead scraping system that runs multiple queries in parallel against Google Maps and business directories, producing structured CSV output.",
    tags: ["Python", "Automation", "Data"],
  },
];

export default function MoreWork() {
  return (
    <section className="py-24 md:py-32 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-14">
          <div className="md:col-span-3">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              More work
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-2xl md:text-3xl font-light tracking-[-0.02em] text-[#f0ede8]">
              More experiments, systems & products.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#1f1f1f]">
          {experiments.map((exp) => (
            <div
              key={exp.name}
              className="group bg-[#0c0c0c] p-8 md:p-10 hover:bg-[#0f0f0f] transition-colors duration-500"
            >
              <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#3a3a3a] block mb-5">
                {exp.category}
              </span>
              <h3 className="text-lg font-medium text-[#f0ede8] mb-3 group-hover:text-[#c8f542] transition-colors duration-300">
                {exp.name}
              </h3>
              <p className="text-sm text-[#4a4a4a] leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-wide border border-[#1a1a1a] px-2.5 py-1 text-[#3a3a3a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
