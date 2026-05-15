import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollRevealProvider from "@/components/ui/ScrollRevealProvider";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollRevealProvider>
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Contact />
        </main>
      </ScrollRevealProvider>
      <Footer />
    </>
  );
}
