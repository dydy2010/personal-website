import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";

// Nav, Footer and the aurora background live in layout.js (shared across pages).
// The journey/storyline now has its own page at /story.
export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Languages />
      <Contact />
    </main>
  );
}
