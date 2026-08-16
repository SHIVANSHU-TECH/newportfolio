import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shivanshu Shukla — Independent Product Engineer",
  description:
    "I turn ambitious ideas, difficult technical problems, and repetitive business processes into production-ready products, AI systems, and automations.",
  keywords: ["Product Engineer", "Full-Stack Engineer", "AI Builder", "Automation", "Shivanshu Shukla"],
  authors: [{ name: "Shivanshu Shukla" }],
  openGraph: {
    title: "Shivanshu Shukla — Independent Product Engineer",
    description: "I don't build for everyone. I build what others haven't figured out yet.",
    url: "https://shivanshu.dev",
    siteName: "Shivanshu Shukla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanshu Shukla — Independent Product Engineer",
    description: "I don't build for everyone. I build what others haven't figured out yet.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} style={{ scrollBehavior: "smooth" }}>
      <head />
      <body style={{ background: "#0c0c0c", color: "#f0ede8", overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
