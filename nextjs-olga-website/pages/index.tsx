import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import HomeProjectBanners from "../components/home-project-banners/HomeProjectBanners";
import TextSection from "../components/text-section/TextSection";
import WorkPageProps from "../interfaces/interfaces";
import styles from "../styles/HeaderHome.module.scss";

export default function Home(props: WorkPageProps) {
  const { projectsData } = props;

  return (
    <>
      <Head>
        <title>
          Olga Golant | Portfolio site | Architect | Projects | Varna, Bulgaria
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Olga Golant - Architect Portfolio. An experienced and passionate Architecture graduate student from Varna Free University “Chernorizetss Hrabur” - available for hiring"
        />
        <meta
          name="keywords"
          content="Olga Golant portfolio, Goland, Architect, Varna, portfolio, graduate, Chernorizetss Hrabur, projects, Business building, Residential building, Sports Center, Architecture, construction of buildings, design of buildings, buildings, plans, plan, site, experienced, Olga, Golant, about me, contact me,Olga Golant contact details, details"
        />
        <link rel="icon" href="/logo/logo-mark.svg" />
        <meta
          name="google-site-verification"
          content="B2D8GVkpmVGhpcm5ebmk7kwWaDSZj8CNEhp7ZgU0kt0"
        />
      </Head>
      <header className={styles.Header}>
        <div className={styles.Header_textWrapper}>
          <h1>Olga Golant</h1>
          <span className={styles.Header_role}>Architect</span>
          <a
            href="/#content"
            title="leads to about me section"
            className={styles.Header_heroButton}
            style={{ opacity: 0 }}
          >
            About Me
          </a>
          <Link href="/projects">
            <a
              className={styles.Header_heroButton}
              title="leads to my latest work"
              style={{ opacity: 0 }}
            >
              Feature Work
            </a>
          </Link>
        </div>
      </header>

      <main id="content">
        <TextSection hasImage>
          <Image
            src="/olga.jpg"
            alt="Picture of Olga"
            layout="intrinsic"
            width={200}
            height={250}
          />
          <div>
            <h2>About Me</h2>
            <p>
              I am an architectural assistant with less than a year of
              experience. I have recently completed my Master's degree in
              architecture at VFU "Chernoriztc Hrabar". I am looking for new
              opportunities to help me expand my knowledge and grow my career.
              I have good design and technical detailing skills and I am able
              to produce a high-quality architectural drawing. I am self-driven
              and enthusiastic, with excellent team working and communication
              skills.
            </p>
          </div>
        </TextSection>
        <HomeProjectBanners projectsData={projectsData}></HomeProjectBanners>
      </main>
    </>
  );
}

export const getStaticProps = () => {
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
