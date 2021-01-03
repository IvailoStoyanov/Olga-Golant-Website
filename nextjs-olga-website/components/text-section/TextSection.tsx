import { FunctionComponent } from "react";
import styles from "./TextSection.module.scss";
import { TextSectionInterface } from "../../interfaces/interfaces";

function TextSection(props: TextSectionInterface) {
  return (
    <div
      className={
        props.hasImage
          ? `${styles.TextSection} ${styles.TextSection___hasImage}`
          : styles.TextSection
      }
    >
      {props.children}
    </div>
  );
}

export default TextSection;
