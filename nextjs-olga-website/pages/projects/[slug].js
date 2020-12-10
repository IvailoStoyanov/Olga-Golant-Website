import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import ProjectImagesGrid from "../../components/project-images-grid/ProjectImagesGird"


const Post = ({ contents }) => {
  const data = JSON.parse(contents);

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <header>
        <h1>{data.title}</h1>
        <p>
          A small introduction to the project itself. Aenean vel scelerisque ex.
        </p>
      </header>

      <main>
        <div className="text-section">
          <h2>Description</h2>
          <p>{data.longDescription}</p>
        </div>

        <ProjectImagesGrid {...data}></ProjectImagesGrid>

        {/* <pre>{contents}</pre> */}
        {/* <work-other-projects data={this.otherProjectsData}></work-other-projects> */}
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
