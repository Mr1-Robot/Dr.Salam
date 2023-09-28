import AchievementsIcon from "../icons/AchievementsIcon";
import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./Achievements.module.css";
import { inter } from "@/pages/_app";

const ACHIEVEMENTS_CONTENT = [
  {
    id: 0,
    time: "June - 2007",
    title: "Structural Engineer",
    description:
      "Registered as graduated Civil and Structural Engineer in Board of Engineers, Washington accord.",
  },
  {
    id: 1,
    time: "September - 2016",
    title: "Board of Engineers",
    description: "Registered as Structural Engineer in Iraqi Engineers Union.",
  },
  {
    id: 2,
    time: "June - 2018",
    title: "Committee Member",
    description:
      "Invited to join as a Committee Member and deliver INVITED TALK in Composite Materials Congress, Sweden",
  },
  {
    id: 3,
    time: "September - 2018",
    title: "Member of Advisory",
    description:
      "Invited to join as a member of advisory and organizing committee in Asian Advanced Materials Congress (ASAMC).",
  },
  {
    id: 4,
    time: "March - 2021",
    title: "Certified Reviewer",
    description:
      "Registered as a certified peer reviewer in researcher academy in Elsevier.",
  },
];
const Achievements = () => {
  return (
    <section id="achievements" className={classes.achievements}>
      <SectionTitle
        title="Achievements"
        subTitle="A brief description of me."
        h1="#001D3D"
        h5="#136FD4"
      />

      <div className={classes.content}>
        {ACHIEVEMENTS_CONTENT.map((item) => (
          <section
            key={item.id}
            className={`${classes.card} ${inter.className}`}
          >
            <AchievementsIcon />
            <div className={classes.heading}>
              <div className={classes.line} />
              <p>{item.time}</p>
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
