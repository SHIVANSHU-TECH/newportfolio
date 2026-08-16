import type { Metadata } from "next";
import JackApp from "@/jack/JackApp";

export const metadata: Metadata = {
  title: "Jack — 3D Creator",
  description: "A 3D creator driven by crafting striking and unforgettable projects.",
};

export default function ShivanshuPage() {
  return <JackApp />;
}
