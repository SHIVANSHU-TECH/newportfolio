"use client";

export default function ContactButton() {
  const handleContact = () => {
    window.open("mailto:shivanshushukla2022@gmail.com", "_blank");
  };

  return (
    <button
      onClick={handleContact}
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
        background: "linear-gradient(123deg, #1e3a8a 7%, #3b82f6 37%, #1d4ed8 72%, #1e40af 100%)",
        boxShadow: "0px 4px 4px rgba(59, 130, 246, 0.25), inset 4px 4px 12px #1d4ed8",
        outline: "2px solid white",
        outlineOffset: "-3px",
        fontFamily: "'Inter', sans-serif",
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