import { inter, lalezar } from "@/pages/_app";
import classes from "./Copy.module.css";

const MUAMMAR = "https://github.com/Mr1-Robot";
const Copy = () => {
  return (
    <p className={`${classes.copy} ${inter.className}`}>
      Made with love by{" "}
      <a href={MUAMMAR} target="_blank" className={lalezar.className}>
        Muammar.JSX
      </a>
    </p>
  );
};

export default Copy;
