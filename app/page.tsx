import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import GearStore from "@/components/GearStore";
import Partnerships from "@/components/Partnerships";
import Analytics from "@/components/Analytics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CaseStudy />
        <GearStore />
        <Partnerships />
        <Analytics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
