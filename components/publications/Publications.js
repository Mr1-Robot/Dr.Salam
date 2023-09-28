import PublicationsIcon from "../icons/PublicationsIcon";
import SectionTitle from "../sectionTitle/SectionTitle";
import classes from "./Publications.module.css";
import { inter } from "@/pages/_app";

const PUBLICATIONS_CONTENT = [
  {
    id: 0,
    title: "10 indexed by Web of Science",
    href: "https://www.webofscience.com/wos/author/record/2074453",
  },
  {
    id: 1,
    title: "3 Indexed by Scopus",
    href: "https://www.scopus.com/authid/detail.uri?authorId=56879131800",
  },
  {
    id: 2,
    title: "6 Conferences and International JP",
    href: "https://scholar.google.com/citations?hl=en&user=a1u3rR4AAAAJ&view_op=list_works&sortby=pubdate",
  },
];
const Publications = () => {
  return (
    <section id="publications" className={classes.publications}>
      <SectionTitle
        title="Publications"
        subTitle="A brief description of me."
        h1="#001D3D"
        h5="#136FD4"
      />

      <div className={classes.line} />
      <PublicationsIcon />

      <h2 className={`${classes.heading} ${inter.className}`}>
        I Published <span>19</span> Scientific Journal Papers
      </h2>

      <div className={classes.links}>
        {PUBLICATIONS_CONTENT.map((item) => (
          <a
            key={item.id}
            className={inter.className}
            href={item.href}
            target="_blank"
          >
            {item.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;
