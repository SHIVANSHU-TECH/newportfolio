import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shivanshu Shukla — Build Galaxy",
  description:
    "A finite system of shipped worlds. Click a planet for the project. Click the rocket to meet Shivanshu Shukla.",
};

export default function V2Layout({ children }: { children: ReactNode }) {
  return children;
}
