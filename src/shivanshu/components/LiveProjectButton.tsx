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
        border: "2px solid #e5e7eb",
        color: "#e5e7eb",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        padding: "0.5rem 1.25rem",
        fontSize: "0.68rem",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        transition: "background 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(229,231,235,0.1)")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
    >
      {children}
    </button>
  );
}