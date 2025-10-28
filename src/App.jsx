import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Profiles from "./components/Profiles.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import TechnologiesSection from "./components/TechnologiesSection.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  useEffect(() => {
    // register scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    //refresh scroll trigger when the page is fully loaded
    ScrollTrigger.refresh();

    //clean
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />

      <section id="Home">
        <HeroSection />
      </section>

      <CustomCursor />

      <section id="About">
        <AboutSection />
      </section>

      <section id="Projects">
        <ProjectSection />
      </section>

      <section id="Profiles">
        <Profiles />
      </section>

      <section id="Experience">
        <TechnologiesSection />
      </section>

      <section id="Contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};
export default App;
