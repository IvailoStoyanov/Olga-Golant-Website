import { FunctionComponent } from "react";
import styles from "./TextSection.module.scss";

export const TextSection: FunctionComponent = ({ children }) => (
<div className={styles.TextSection}>{children}</div>
);

export default TextSection;