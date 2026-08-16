"use client";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b] block mb-8">
              About
            </span>

            {/* Identity block */}
            <div className="space-y-1 mb-10">
              <p className="text-base font-medium text-[#f0ede8]">
                Shivanshu Shukla
              </p>
              <p className="text-sm text-[#6b6b6b]">
                Independent Product Engineer
              </p>
              <p className="text-xs text-[#3a3a3a] mt-3">
                Based in India · Working globally
              </p>
            </div>

            {/* Proof */}
            <div className="space-y-4 pt-8 border-t border-[#1f1f1f]">
              {[
                "Products conceived and shipped end-to-end",
                "AI systems deployed in production",
                "Infrastructure costs reduced significantly",
                "Automation workflows built and maintained",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8f542] mt-2 flex-shrink-0" />
                  <span className="text-xs text-[#4a4a4a] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div className="md:col-span-8">
            <p className="text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[-0.02em] text-[#f0ede8] mb-8 leading-snug">
              I like difficult problems.
            </p>

            <div className="space-y-5 max-w-2xl">
              <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light">
                I&apos;m a Product Engineer who works at the intersection of
                software, AI, and business problems.
              </p>
              <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light">
                I care less about writing more code and more about building the
                right system — whether that&apos;s a product from scratch, an AI
                workflow, an internal platform, or an automation that eliminates
                hours of repetitive work.
              </p>
              <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light">
                The best work happens when the problem is interesting and
                there&apos;s room to build something properly. I&apos;m not
                particularly interested in checkbox work.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-6 mt-12">
              <a
                href="https://github.com/shivanshu-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#4a4a4a] hover:text-[#f0ede8] transition-colors duration-300 tracking-wide hover-underline"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/in/shivanshu-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#4a4a4a] hover:text-[#f0ede8] transition-colors duration-300 tracking-wide hover-underline"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
