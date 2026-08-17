import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PositioningStatement from "@/components/PositioningStatement";
import WhatIBuild from "@/components/WhatIBuild";
import SelectedWork from "@/components/SelectedWork";
import MoreWork from "@/components/MoreWork";
import Process from "@/components/Process";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ShivanshuPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PositioningStatement />
        <WhatIBuild />
        <SelectedWork />
        <MoreWork />
        <Process />
        <Technology />
        <About />
        <Availability />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
