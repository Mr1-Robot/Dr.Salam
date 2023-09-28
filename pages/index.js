import { useState } from "react";

import AboutMe from "@/components/aboutMe/AboutMe";
import Achievements from "@/components/achievements/Achievements";
import Experience from "@/components/experience/Experience";
import MainHeader from "@/components/header/MainHeader";
import Hero from "@/components/hero/Hero";
import Skills from "@/components/skills/Skills";
import Education from "@/components/education/Education";
import Publications from "@/components/publications/Publications";
import Resources from "@/components/resources/Resources";
import Contact from "@/components/contact/Contact";

const Home = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <MainHeader nav={nav} setNav={setNav} />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Publications />
      <Resources />
      <Contact nav={nav} setNav={setNav} />
    </>
  );
};

export default Home;
