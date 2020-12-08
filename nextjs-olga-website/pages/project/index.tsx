import Head from "next/head";
import Link from "next/link";
import fs from "fs";
import WorkPageProps from "../../interfaces/interfaces";

//destructure to not use slugs.slugs!
export default function Projects(props: WorkPageProps) {
  const { slugs } = props;

  return (
    <div className="container">
      <Head>
        <title>Olga Golant's Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {slugs.map((slug: string) => {
          return (
            <div key={slug}>
              <Link href={"/project/" + slug}>
                <a>{"/project/" + slug}</a>
              </Link>
            </div>
          );
        })}
      </main>

      <footer id="banana">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync("projectsData");
  
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".json", "")),
    },
  };
};
