"use client";

export default function ContactButton() {
  return (
    <button
      style={{
        borderRadius: "9999px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "white",
        cursor: "pointer",
        border: "none",
        padding: "0.65rem 1.6rem",
        fontSize: "0.72rem",
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
        fontFamily: "'Kanit', sans-serif",
        transition: "opacity 0.2s, transform 0.15s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      onMouseDown={e => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      Contact Me
    </button>
  );
}
