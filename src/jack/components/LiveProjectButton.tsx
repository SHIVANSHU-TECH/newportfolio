"use client";

export default function LiveProjectButton() {
  return (
    <button
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
        cursor: "pointer",
        fontFamily: "'Kanit', sans-serif",
        transition: "background 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(215,226,234,0.1)")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
    >
      Live Project
    </button>
  );
}
