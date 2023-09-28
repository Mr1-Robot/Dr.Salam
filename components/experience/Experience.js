import Image from "next/image";
import Education from "../icons/EducationIcon";
import Work from "../icons/Work";
import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./Experience.module.css";
import { inter, lora } from "@/pages/_app";

const ACADEMIC_CONTENT = [
  {
    id: 0,
    image: "/images/uot-logo.svg",
    time: "June 2021 - Present (-)",
    title: "University Lecturer",
    description:
      "Information and Technology Center, University of Technology, Baghdad,Iraq.",
  },
  {
    id: 1,
    image: "/images/uot-logo.svg",
    time: "September 2019 - June 2021",
    title: "University Lecturer",
    description:
      "Department of Civil Engineering, University of Technology, Baghdad,Iraq.",
  },
  {
    id: 2,
    image: "/images/uot-logo.svg",
    time: "September 2017 - September 2019",
    title: "University Lecturer",
    description: "Faculty of Engineering, Al-Iraqia University, Baghdad,Iraq.",
  },
  {
    id: 3,
    image: "/images/uot-logo.svg",
    time: "March 2016 - September 2017",
    title: "University Lecturer",
    description:
      "Information and Technology Center, University of Technology, Baghdad, Iraq.",
  },
  {
    id: 4,
    image: "/images/uot-logo.svg",
    time: "October 2011 - March 2016",
    title: "University Lecturer",
    description:
      "Information and Technology Center, University of Technology, Baghdad,Iraq.",
  },
  {
    id: 5,
    image: "/images/uot-logo.svg",
    time: "May 2008 - October 2011",
    title: "University Lecturer",
    description:
      "Information, Communication and Technology Center, University of Technology, Baghdad,Iraq.",
  },
];

const WORK_CONTENT = [
  {
    id: 0,
    image: "/images/uot-logo.svg",
    time: "June 2007 - May 2008",
    title: "Site Engineer",
    description:
      "Arebl Co. for Construction & Consultant Eng.LTD, Basrah, Iraq.",
  },
  {
    id: 1,
    image: "/images/uot-logo.svg",
    time: "July 2016 - July 2018",
    title: "(Part Time) Head of R&D Division",
    description: "TasBlock,Shah Alam, Selangor, Malaysia.",
  },
  {
    id: 2,
    image: "/images/uot-logo.svg",
    time: "July 2016 - July 2018",
    title: "(Part Time) Head of Engineering Division",
    description: "Sakata,Putrajaya, Selangor, Malaysia.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className={classes.experience}>
      <SectionTitle
        title="Experience"
        subTitle="A brief description of me."
        h1="#f4f4f4"
        h5="#EDF12E"
      />

      <div className={classes.fields}>
        <div className={classes.academic}>
          <div className={`${classes.heading}`}>
            <div>
              <Education width={48} height={40} />
              <div className={classes.line} />
            </div>
            <h2 className={lora.className}>Academic Experience</h2>
          </div>

          <div className={classes.content}>
            {ACADEMIC_CONTENT.map((item) => (
              <div
                key={item.id}
                className={`${classes.card} ${inter.className}`}
              >
                <Image
                  src={item.image}
                  alt="University of technology logo."
                  width={61}
                  height={109}
                />
                <div className={classes.text}>
                  <div key={item.id} className={classes.heading}>
                    <span>{item.time}</span>
                    <Education width={30} height={30} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.rule} />

        <div className={classes.work}>
          <div className={classes.heading}>
            <div>
              <Work width={48} height={40} />
              <div className={classes.line} />
            </div>
            <h2 className={lora.className}>Work Experience</h2>
          </div>
          <div className={classes.content}>
            {WORK_CONTENT.map((item) => (
              <div
                key={item.id}
                className={`${classes.card} ${inter.className}`}
              >
                <Image
                  src={item.image}
                  alt="University of technology logo."
                  width={61}
                  height={109}
                />
                <div className={classes.text}>
                  <div className={classes.heading}>
                    <span>{item.time}</span>
                    <Work width={30} height={30} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
