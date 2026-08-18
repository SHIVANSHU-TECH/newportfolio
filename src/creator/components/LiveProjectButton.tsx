"use client";

interface LiveProjectButtonProps {
  href?: string;
  children?: React.ReactNode;
}

export default function LiveProjectButton({ href, children = "Live Project" }: LiveProjectButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        borderRadius: "9999px",
        border: "2px solid #D7E2EA",
        color: "#D7E2EA",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        padding: "0.5rem 1.25rem",
        fontSize: "0.68rem",
        background: "transparent",
        cursor: href ? "pointer" : "default",
        fontFamily: "'Kanit', sans-serif",
        transition: "background 0.2s",
        whiteSpace: "nowrap",
        opacity: href ? 1 : 0.6,
      }}
      onMouseEnter={e => href && (e.currentTarget.style.background = "rgba(215,226,234,0.1)")}
      onMouseLeave={e => href && (e.currentTarget.style.background = "transparent")}
      disabled={!href}
    >
      {children}
    </button>
  );
}