import Image from "next/image";
import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./Contact.module.css";
import { Link } from "react-scroll";
import { inter } from "@/pages/_app";
import Copy from "../copy/Copy";

const LINKS = [
  { id: 0, title: "Home", link: "home" },
  { id: 1, title: "Experience", link: "experience" },
  { id: 2, title: "Achievements", link: "achievements" },
  { id: 3, title: "Contact", link: "contact" },
  { id: 4, title: "About Me", link: "about-me" },
];
const Contact = (props) => {
  return (
    <footer id="contact" className={classes.contact}>
      <SectionTitle
        title="Contact"
        subTitle="A brieft description of me."
        h1="#001D3D"
        h5="#136FD4"
      />

      <div className={classes.content}>
        <Image
          src="/images/logo.svg"
          alt="Dr.salam logo."
          width={365}
          height={150}
        />

        <div className={classes.avatar}>
          <div />
          <Image
            src="/images/avatar.svg"
            alt="Dr.Salam avatar."
            width={195}
            height={195}
          />
        </div>

        <ul className={classes.list}>
          {LINKS.map((item) => (
            <Link
              key={item.id}
              activeClass={classes.active}
              to={item.link}
              spy={true}
              offset={item.link === "home" ? -200 : -68}
              duration={500}
              smooth={true}
              onClick={() => props.setNav(false)}
              className={inter.className}
            >
              {item.title}
            </Link>
          ))}
        </ul>
        <Copy />
      </div>
    </footer>
  );
};

export default Contact;
