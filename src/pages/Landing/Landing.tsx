import { NavBar } from "../../components/NavBar";
import { Download } from "../../sections/Download";
import { Examples } from "../../sections/Examples";
import { FAQ } from "../../sections/FAQ";
import { Footer } from "../../sections/Footer";
import { Hero } from "../../sections/Hero";
import { HowToPlay } from "../../sections/HowToPlay";
import { Mockup } from "../../sections/Mockup";

export function Landing() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Mockup />
        <Examples />
        <HowToPlay />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
