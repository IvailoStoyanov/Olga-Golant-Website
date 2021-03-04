import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import ProjectImagesGrid from "../../components/project-images-grid/ProjectImagesGird";
import TextSection from "../../components/text-section/TextSection";
import styles from "../../styles/HeaderProject.module.scss";

const Post = ({ contents }) => {
  const data = JSON.parse(contents);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.titleDescription} />
        <link rel="icon" href="/logo/logo-mark.svg" />
      </Head>

      <header className={styles.Header}>
        <h1>{data.title}</h1>
        <Image src={data.img} alt={data.alt} layout="fill"></Image>
      </header>

      <main>
        <TextSection>
          <h2>Description</h2>
          {data.longDescription.map((paragraph, index) => {
            if (typeof paragraph === "object") {
              return (
                <ul key={index}>
                  {paragraph.map((listItem, index) => {
                    return <li key={index}>{listItem}</li>;
                  })}
                </ul>
              );
            } else {
              return <p key={index}>{paragraph.toString()}</p>;
            }
          })}
        </TextSection>

        <ProjectImagesGrid {...data}></ProjectImagesGrid>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("projectsData");

  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".json", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const contents = fs
    .readFileSync(path.join("projectsData", slug + ".json"))
    .toString();

  return {
    props: {
      contents,
    },
  };
};

export default Post;
