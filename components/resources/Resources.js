import classes from "./Resources.module.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import ResearchGate from "../icons/ResearchGate";
import { inter } from "@/pages/_app";
import GoogleScholar from "../icons/GoogleScholar";
import Orcid from "../icons/Orcid";
import LinkedIn from "../icons/LinkedIn";
import WebOfScience from "../icons/WebOfScience";
import Scoups from "../icons/Scoups";

const RESOURCES_CONTENT = [
  {
    id: 0,
    title: "Research Gate",
    icon: <ResearchGate />,
    href: "",
  },
  {
    id: 1,
    title: "Google Scholar",
    icon: <GoogleScholar />,
    href: "",
  },
  {
    id: 2,
    title: "ORCID",
    icon: <Orcid />,
    href: "",
  },
  {
    id: 3,
    title: "Linked In",
    icon: <LinkedIn />,
    href: "",
  },
  {
    id: 4,
    title: "Web of Science",
    icon: <WebOfScience />,
    href: "",
  },
  {
    id: 5,
    title: "Scoups",
    icon: <Scoups />,
    href: "",
  },
];
const Resources = () => {
  return (
    <section id="resources" className={classes.resources}>
      <SectionTitle
        title="References"
        subTitle="A brief description of me."
        h1="#f4f4f4"
        h5="#EDF12E"
      />

      <div className={classes.content}>
        {RESOURCES_CONTENT.map((item) => (
          <a key={item.id} href={item.href} className={classes.card}>
            <h3 className={inter.className}>{item.title}</h3>
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Resources;
