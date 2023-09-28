import { Inter } from "next/font/google";
import classes from "./Skills.module.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";
import AutocadIcon from "../icons/AutocadIcon";
import StaadPro from "../icons/StaadPro";
import MicrosoftOffice from "../icons/MicrosoftOffice";
import GoogleSketch from "../icons/GoogleSketch";
import Abaqus from "../icons/Abaqus";
import Communication from "../icons/Communication";
import Arabic from "../icons/Arabic";
import English from "../icons/English";

const inter = Inter({ subsets: ["latin"] });

const FIRST_CONTENT = [
  {
    id: 0,
    image: "/images/img-100.svg",
    icon: <StaadPro />,
    title: "Staad Pro",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 1,
    image: "/images/img-100.svg",
    icon: <MicrosoftOffice />,
    title: "Microsoft Office",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    image: "/images/img-85.svg",
    icon: <AutocadIcon />,
    title: "Auto CAD 2009",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image: "/images/img-100.svg",
    icon: <GoogleSketch />,
    title: "Google SketchUp",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
];

const SECOND_CONTENT = [
  {
    id: 0,
    image: "/images/img-100.svg",
    icon: <Abaqus />,
    title: "Abaqus CAE",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 1,
    image: "/images/img-100.svg",
    icon: <Communication />,
    title: "Communication",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    image: "/images/img-100.svg",
    icon: <Arabic />,
    title: "Arabic",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image: "/images/img-95.svg",
    icon: <English />,
    title: "English",
    subTitle: "Lorem ipsum dolor sit amet.",
  },
];
const Skills = () => {
  return (
    <section className={classes.skills}>
      <SectionTitle
        title="Skills"
        subTitle="A brief description of me."
        h1="#001D3D"
        h5="#136FD4"
      />

      <div className={classes.content}>
        {FIRST_CONTENT.map((item) => (
          <div key={item.id} className={`${classes.card} ${inter.className}`}>
            <Image
              src={item.image}
              alt={`${item.title} logo`}
              width={170}
              height={170}
            />
            <div>
              {item.icon}
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.content}>
        {SECOND_CONTENT.map((item) => (
          <div key={item.id} className={`${classes.card} ${inter.className}`}>
            <Image
              src={item.image}
              alt={`${item.title} logo.`}
              width={170}
              height={170}
            />
            <div>
              {item.icon}
              <h2>{item.title}</h2>
              <p>{item.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
