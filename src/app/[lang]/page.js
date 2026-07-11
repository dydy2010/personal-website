import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import { getDict } from "@/data/dictionary";

// Nav, Footer and the aurora background live in [lang]/layout.js.
// Every section receives the locale dictionary as a prop.
export default function Home({ params }) {
  const dict = getDict(params.lang);
  return (
    <main id="top">
      <Hero dict={dict} lang={params.lang} />
      <About dict={dict} />
      <Projects dict={dict} />
      <Skills dict={dict} />
      <Languages dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
