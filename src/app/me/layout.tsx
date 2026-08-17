import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Shivanshu Shukla — Software Engineer & AI Developer",
  description: "Full Stack Developer & AI specialist building high-performance web applications and Generative AI solutions.",
};

export default function MeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Inter font from Google Fonts */}
      {/* eslint-disable-next-line @next/next/google-font-display */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

            .hero-heading {
              background: linear-gradient(180deg, #1a1a1a 0%, #4a4a4a 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `,
        }}
      />
      {children}
    </>
  );
}