import classes from "./SectionTitle.module.css";
import { Lora } from "next/font/google";
import { Inter } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const SectionTitle = (props) => {
  return (
    <section className={classes.heading}>
      <h1 className={lora.className} style={{ color: props.h1 }}>
        {props.title}
      </h1>
      <p className={inter.className} style={{ color: props.h5 }}>
        {props.subTitle}
      </p>
    </section>
  );
};

export default SectionTitle;
