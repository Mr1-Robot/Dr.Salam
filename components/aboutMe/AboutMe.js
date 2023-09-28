import classes from "./AboutMe.module.css";
import Image from "next/image";
import SectionTitle from "../sectionTitle/SectionTitle";
import { inter } from "@/pages/_app";

const AboutMe = () => {
  return (
    <section id="about-me" className={classes.aboutMe}>
      <SectionTitle
        title="About Me"
        subTitle="A brief description of me."
        h1="#f4f4f4"
        h5="#f8de22"
      />

      <div className={classes.avatar}>
        <div className={classes.line} />
        <Image
          src="/images/avatar.svg"
          alt="Dr. Salam avatar."
          width={195}
          height={195}
        />
      </div>

      <div className={classes.description}>
        <p className={inter.className}>
          Lorem ipsum dolor sit amet consectetur. Sit diam vestibulum lobortis
          aliquam enim amet at. Egestas morbi hendrerit ac sit ultricies lacus
          potenti. Iaculis eleifend eleifend eget commodo. Elit mauris eros sed
          ac in ullamcorper dignissim.Lorem ipsum dolor sit amet consectetur.
          Sit diam vestibulum lobortis aliquam enim amet at. Egestas morbi
          hendrerit ac sit ultricies lacus potenti. Iaculis eleifend eleifend
          eget commodo. Elit mauris eros sed ac in ullamcorper dignissim.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
