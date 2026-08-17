import type { Metadata } from "next";
import ShivanshuApp from "@/shivanshu/ShivanshuApp";

export const metadata: Metadata = {
  title: "Shivanshu Shukla — Software Engineer & AI Developer",
  description: "Full Stack Developer & AI specialist building high-performance web applications and Generative AI solutions.",
};

export default function MePage() {
  return <ShivanshuApp />;
}