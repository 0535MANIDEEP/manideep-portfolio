import { portfolio } from "@/data/portfolio";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Work } from "@/components/portfolio/work";
import { Experience } from "@/components/portfolio/experience";
import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
