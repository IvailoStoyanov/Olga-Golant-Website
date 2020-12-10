import Head from "next/head";
import Link from "next/link";
import fs, { PathLike } from "fs";
import HomeProjectBanners from "../components/home-project-banners/HomeProjectBanners";
import { TextSection } from "../components/TextSection";
import { AllProjectsDataInterface } from "../interfaces/interfaces";

export default function Home(props: AllProjectsDataInterface) {
  const { projectsData } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="app-home__hero-container">
          <h1>Olga Golant</h1>
          <span className="role">Architect</span>
          <a
            href="/#content"
            title="leads to about me section"
            className="app-home__hero-button"
          >
            About Me
          </a>
          <Link href="/projects">
            <a
              className="app-home__hero-button"
              title="leads to my latest work"
            >
              Feature Work
            </a>
          </Link>
        </div>
      </header>

      <main id="content">
        <TextSection>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            scelerisque ex. Aliquam sit amet ligula sit amet mauris dictum
            sodales vitae a felis. Aliquam erat volutpat. Proin a condimentum
            metus. Ut pharetra, ipsum quis vulputate scelerisque, ex dolor
            ultricies justo, sed accumsan urna mi vitae ex. In hac habitasse
            platea dictumst. Duis nulla orci, tempus quis suscipit at, facilisis
            ac felis. Vivamus at diam molestie, viverra metus a, feugiat dui.
          </p>
        </TextSection>

        <HomeProjectBanners
          projectsData={projectsData}
        ></HomeProjectBanners>
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
