import { useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Dr. Salam J. Hillo - Civil Engineering Lecturer</title>
        <meta
          name="description"
          content="Dr. Salam Jassem Hillo - Civil Engineering Lecturer at University of Technology. Explore my academic and work experience."
        />

        <meta
          name="keywords"
          content="salam j hillo, civil engineering, lecturer, university of technology, academic experience, work experience"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      </Head>
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
