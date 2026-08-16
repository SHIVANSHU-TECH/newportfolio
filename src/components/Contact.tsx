"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#6b6b6b]">
              Contact
            </span>
          </div>

          {/* Right */}
          <div className="md:col-span-8">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[-0.03em] text-[#f0ede8] leading-tight mb-6">
              Have something
              <br />
              difficult in mind?
            </h2>
            <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed font-light mb-12 max-w-lg">
              Tell me what you&apos;re trying to build, fix, or automate. If
              it&apos;s an interesting problem, we should talk.
            </p>

            {/* Primary contact */}
            <div className="mb-12">
              <a
                href="mailto:shivanshu@gmail.com"
                className="group inline-flex items-center gap-4"
              >
                <span className="text-[clamp(1.1rem,2vw,1.4rem)] text-[#f0ede8] font-light tracking-tight group-hover:text-[#c8f542] transition-colors duration-300">
                  shivanshu@gmail.com
                </span>
                <span className="text-[#4a4a4a] group-hover:text-[#c8f542] transition-colors duration-300 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>

            {/* Secondary links */}
            <div className="flex flex-wrap gap-6 border-t border-[#1f1f1f] pt-8">
              <a
                href="https://linkedin.com/in/shivanshu-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#4a4a4a] hover:text-[#f0ede8] transition-colors duration-300 tracking-wide"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/shivanshu-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#4a4a4a] hover:text-[#f0ede8] transition-colors duration-300 tracking-wide"
              >
                GitHub ↗
              </a>
            </div>

            {/* Clarifying note */}
            <p className="text-xs text-[#2a2a2a] mt-8 max-w-sm leading-relaxed">
              A brief description of the problem is enough to start. No need for
              a full specification — that&apos;s what the first conversation is for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
