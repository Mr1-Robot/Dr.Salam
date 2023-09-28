import { inter, lora } from "@/pages/_app";
import classes from "./Hero.module.css";
import { Link } from "react-scroll";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={classes.hero}>
      <article className={classes.article}>
        <section className={`${classes.content} ${inter.className}`}>
          <div className={classes.heading}>
            <h3>Hi, My Name's</h3>
            <h1 className={lora.className}>Dr. Salam Jassem Hillo</h1>
          </div>

          <div className={classes.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lobortis consectetur sit
              nunc malesuada posuere. Mattis nibh viverra cursus suspendisse.
              Posuere sed sapien proin vivamus commodo facilisis. Nunc eu diam
              scelerisque sed volutpat adipiscing.
            </p>
          </div>

          <div className={classes.actions}>
            <Link to="experience" spy={true} smooth={true} duration={500}>
              My Experience
            </Link>
          </div>
        </section>

        <Image
          src="/images/hero-img.svg"
          alt="Dr.Salam personal image."
          width={370}
          height={450}
          priority
        />
      </article>
    </section>
  );
};

export default Hero;
