import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Jack — 3D Creator",
  description: "A 3D creator driven by crafting striking and unforgettable projects.",
};

export default function ShivanshuLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap');

            .hero-heading {
              background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
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
