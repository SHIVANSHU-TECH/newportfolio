"use client";

const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    question: "What are we actually trying to solve?",
    description:
      "Before any architecture or code, I need to understand the real problem — not the stated requirement. Most build failures start with misunderstood problems.",
  },
  {
    number: "02",
    title: "ARCHITECT",
    question: "What should the system look like?",
    description:
      "Design the right system before writing a single line. This determines technology choices, data structure, integrations, and what the product will become.",
  },
  {
    number: "03",
    title: "BUILD",
    question: "Turn the idea into a working product.",
    description:
      "Engineering across the full stack — frontend, backend, database, authentication, APIs and third-party integrations — built to production standards, not demo quality.",
  },
  {
    number: "04",
    title: "SHIP",
    question: "Deploy, integrate and make it usable.",
    description:
      "Deployment, environment configuration, infrastructure setup, and making the system accessible to real users. Getting to production is as important as building it.",
  },
  {
    number: "05",
    title: "IMPROVE",
    question: "Measure, optimize and evolve.",
    description:
      "Real systems need to evolve. Monitoring performance, fixing real-world issues, improving based on usage data and making the product better over time.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-40 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="md:col-span-3">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              How I work
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.03em] text-[#f0ede8] leading-tight mb-4">
              From problem to production.
            </h2>
            <p className="text-sm text-[#4a4a4a] max-w-lg leading-relaxed">
              Not a service menu. An engineering partnership with one goal: a
              working system that solves the problem.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-px bg-[#1f1f1f]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group bg-[#0c0c0c] hover:bg-[#0f0f0f] transition-colors duration-500"
            >
              <div className="grid md:grid-cols-12 gap-6 p-8 md:p-10 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#2a2a2a] group-hover:text-[#c8f542] transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-2">
                  <span className="text-sm font-medium tracking-wider text-[#f0ede8]">
                    {step.title}
                  </span>
                </div>

                {/* Question */}
                <div className="md:col-span-4">
                  <p className="text-sm text-[#6b6b6b] italic">{step.question}</p>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-sm text-[#4a4a4a] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
