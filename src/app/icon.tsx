import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0c0c0c",
          borderRadius: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          border: "1px solid #222",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 4,
            left: 7,
            right: 7,
            height: 1.5,
            background: "#c8f542",
            borderRadius: 1,
          }}
        />

        {/* Initials row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 0,
            marginTop: 2,
          }}
        >
          {/* First S — cream */}
          <span
            style={{
              fontFamily: "serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#f0ede8",
              lineHeight: 1,
              letterSpacing: "-0.5px",
            }}
          >
            S
          </span>
          {/* Dot separator */}
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: "50%",
              background: "#333",
              margin: "0 1px",
              marginTop: 4,
            }}
          />
          {/* Second S — lime */}
          <span
            style={{
              fontFamily: "serif",
              fontWeight: 700,
              fontSize: 15,
              color: "#c8f542",
              lineHeight: 1,
              letterSpacing: "-0.5px",
            }}
          >
            S
          </span>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            left: 7,
            right: 7,
            height: 1,
            background: "#1e1e1e",
            borderRadius: 1,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
