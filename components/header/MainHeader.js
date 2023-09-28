import { inter } from "@/pages/_app";
import { Link } from "react-scroll";
import { useState } from "react";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import BarIcon from "../icons/BarIcon";
import XIcon from "../icons/XIcon";

const navLinks = [
  { id: 0, title: "Home", link: "home" },
  { id: 1, title: "About Me", link: "about-me" },
  { id: 2, title: "Experience", link: "experience" },
  { id: 3, title: "Achievements", link: "achievements" },
  { id: 4, title: "Contact", link: "contact" },
];

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <Link to="home" spy={true} offset={-200} duration={500} smooth={true}>
        <Image
          src="/images/logo.svg"
          width={180}
          height={38}
          alt="Dr.Salam logo"
          priority
        />
      </Link>

      <nav>
        <ul className={`${classes.list} ${props.nav ? classes.active : ""}`}>
          {navLinks.map((item) => (
            <li className={`${classes.item} ${inter.className} `} key={item.id}>
              <Link
                activeClass={classes.active}
                to={item.link}
                spy={true}
                offset={item.link === "home" ? -200 : -68}
                duration={500}
                smooth={true}
                onClick={() => props.setNav(false)}
                style={item.title === "Home" ? { paddingLeft: ".3rem" } : ""}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={classes.burger}
          onClick={() => props.setNav(!props.nav)}
        >
          {!props.nav ? <BarIcon /> : <XIcon />}
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
