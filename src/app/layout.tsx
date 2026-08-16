import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shivanshu Shukla — Independent Product Engineer",
  description:
    "I turn ambitious ideas, difficult technical problems, and repetitive business processes into production-ready products, AI systems, and automations.",
  keywords: [
    "Product Engineer",
    "Full-Stack Engineer",
    "AI Builder",
    "Automation Engineer",
    "Shivanshu Shukla",
  ],
  authors: [{ name: "Shivanshu Shukla" }],
  openGraph: {
    title: "Shivanshu Shukla — Independent Product Engineer",
    description:
      "I don't build for everyone. I build what others haven't figured out yet.",
    url: "https://shivanshu.dev",
    siteName: "Shivanshu Shukla",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivanshu Shukla — Independent Product Engineer",
    description:
      "I don't build for everyone. I build what others haven't figured out yet.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#0c0c0c] text-[#f0ede8] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
