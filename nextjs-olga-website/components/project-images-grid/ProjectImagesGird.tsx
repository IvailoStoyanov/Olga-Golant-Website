import { ImageData, ProjectDataInterface } from "../../interfaces/interfaces";
import styles from "./ProjectImagesGrid.module.scss";
import Image from "next/image";

function ProjectImagesGrid(props: ProjectDataInterface) {
  return (
    <div className={styles.ImagesGrid}>
      {(props.allImages as []).map((image: ImageData, index) => {
        if (index <= 3) {
          return (
            <div className={styles.ImagesGrid_big} key={index}>
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
              ></Image>
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Image
                src={image.url}
                alt={image.alt}
                layout="fill"
              ></Image>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProjectImagesGrid;
