import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shivanshu Shukla — Product Engineer · Full Stack · AI",
  description:
    "Independent Product Engineer. I build full-stack products, AI systems, and business automations. Founder of CollegeXConnect.",
  openGraph: {
    title: "Shivanshu Shukla — Product Engineer · Full Stack · AI",
    description: "I don't build for everyone. I build what others haven't figured out yet.",
    url: "https://shivanshu.dev/shivanshu",
  },
};

export default function ShivanshuLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
