"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#f0ede8] mb-1">
            SHIVANSHU SHUKLA
          </p>
          <p className="text-[10px] text-[#3a3a3a] tracking-wide">
            Independent Product Engineer
          </p>
          <p className="text-[10px] text-[#2a2a2a] tracking-wide">
            Full-Stack · AI · Automation · Product
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <p className="text-[10px] text-[#2a2a2a] tracking-wide">
            © 2026 Shivanshu Shukla
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/shivanshu-shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#2a2a2a] hover:text-[#4a4a4a] transition-colors duration-300 tracking-wide"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shivanshu-shukla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-[#2a2a2a] hover:text-[#4a4a4a] transition-colors duration-300 tracking-wide"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
