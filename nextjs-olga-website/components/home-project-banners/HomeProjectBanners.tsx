import Link from "next/link";
import Image from "next/image";
import { AllProjectsDataInterface } from "../../interfaces/interfaces";
import styles from "./HomeProjectBanner.module.scss";

function HomeProjectBanners(props: AllProjectsDataInterface) {
  const dataArray = props.projectsData;

  return (
    <div className={styles.ProjectItemsWrapper}>
      {dataArray.map((post: string, index: number) => {
        const project = JSON.parse(post);

        if (index <= 2) {
          return (
            <Link href={project.url} key={post}>
              <div
                className={styles.ProjectItemsWrapper_projectItem}
                data-background={project.img}
              >
                <Image
                  src={project.img}
                  alt={project.alt}
                  layout="fill"
                />
                <div className={styles.ProjectItemsWrapper_textContainer}>
                  <h4>{project.title}</h4>
                  <span className={styles.ProjectItemsWrapper_projectButton}>
                    View the project
                  </span>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default HomeProjectBanners;
