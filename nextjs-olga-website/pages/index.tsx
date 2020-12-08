import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is the home page</h1>
        <Link href="/project">
          <a> go to projects</a>
        </Link>
       
      </main>

      <footer id="footer">
      </footer>
    </div>
  );
}
