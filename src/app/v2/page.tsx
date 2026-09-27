"use client";

import dynamic from "next/dynamic";

const GalaxyExperience = dynamic(() => import("@/v2/GalaxyExperience"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        minHeight: "100vh",
        background: "#010208",
        color: "#8a867c",
        display: "grid",
        placeItems: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      Entering the system…
    </div>
  ),
});

export default function V2Page() {
  return <GalaxyExperience />;
}
