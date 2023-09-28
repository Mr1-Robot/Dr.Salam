import classes from "./Education.module.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Image from "next/image";
import { inter } from "@/pages/_app";

const EDUCATION_CONTENT = [
  {
    id: 0,
    image: "/images/ukm-logo.svg",
    imageAlt: "UKM Offical Logo.",
    time: "August 2016",
    title: "Ph.D. in Civil and Structural Engineering",
    description:
      "University KebangsaanMalaysia, Bangi, Selangor, Malaysia. I completed the Ph.D. with 9 journal and conference papers.",
  },
  {
    id: 1,
    image: "/images/ukm-logo.svg",
    imageAlt: "UKM Offical Logo.",
    time: "October 2010",
    title: "Master of Science in Civil Engineering",
    description:
      "University Kebangsaan Malaysia, Bangi, Selangor, Malaysia. I completed the MS.C in civil engineering with 3.67 / 4 GPA.",
  },
  {
    id: 2,
    image: "/images/uot-logo.svg",
    imageAlt: "UOT Offical Logo.",
    time: "June 2007",
    title: "B.SC in Structural Engineering.",
    description:
      "University of Technology,Baghdad, Iraq. I completed the Bachelor of Since with rank 7 on the faculty.",
  },
];
const Education = () => {
  return (
    <section id="education" className={classes.education}>
      <SectionTitle
        title="Education"
        subTitle="A brief description of me."
        h1="#f4f4f4"
        h5="#EDF12E"
      />

      <div className={classes.content}>
        {EDUCATION_CONTENT.map((item) => (
          <section
            key={item.id}
            className={`${classes.card} ${inter.className}`}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              width={344}
              height={166}
            />
            <span>{item.time}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Education;
