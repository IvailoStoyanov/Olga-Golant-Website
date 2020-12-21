import styles from "./WorkDisplayItem.module.scss";
import Image from "next/image";
import ProjectDataInterface from "../../interfaces/interfaces"

function WorkDisplayItem(props: ProjectDataInterface) {
  return (
    <div className={styles.WorkDisplayItem}>
      <h3>{props.title}</h3>
      <div className={styles.WorkDisplayItem_imageWrapper}>
        <Image src={props.img} alt="Picture of the author" layout="fill"></Image>
      </div>
      <div className={styles.WorkDisplayItem_textWrapper}>
        <p>{props.shortDescription}</p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default WorkDisplayItem;
