import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import WorkDisplayItem from "../../components/work-display-item/WorkDisplayItem";
import WorkPageProps from "../../interfaces/interfaces";
import styles from "./WorkPage.module.scss";

export default function Projects(props: WorkPageProps) {
  const { projectsData } = props;

  return (
    <>
      <Head>
        <title>Work | Olga Golant | Architect | Portfolio site | Varna, Bulgaria | Business building | Residential building | Sports center </title>
        <meta name="description" content="Olga Golant Work - Condenced view upon my Business building, Residential building and Sports center projects with a brief description to each including illustrations" />
      </Head>

      <header className={styles.Header}>
        <div className={styles.Header_TextContainer}>
          <h1>My Work</h1>
        </div>
      </header>

      <main className={styles.Content}>
        {projectsData.map((post: string) => {          
          const data = JSON.parse(post);

          return (
            <div key={post}>
              <Link href={data.url}>
                <a>
                  <WorkDisplayItem {...data}></WorkDisplayItem>
                </a>
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const fileNames = fs.readdirSync("projectsData");
  const projectsData = fileNames.map((fileName) => {
    return fs.readFileSync("projectsData/" + fileName, "utf-8");
  });

  return {
    props: {
      projectsData,
    },
  };
};
