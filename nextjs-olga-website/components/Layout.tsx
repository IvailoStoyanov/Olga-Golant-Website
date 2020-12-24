import MainNavigation from "./navigation/MainNavigation";
import TakaE from "./../interfaces/interfaces";

function Layout(props: { children: {} }) {
  return (
    <div className="page-layout">
      <a href="#navigation" className="skipLink">
        skip to nav
      </a>
      <a href="#content" className="skipLink">
        skip to content
      </a>
      <MainNavigation />
      {props.children}
      <footer id="contactInfo">
        <h2>Contact Me</h2>
        <p>
          If you want to hire me or to collaborate on a project, get in touch
          with me via <a href="mailto:olgolant@gmail.com">olgolant@gmail.com</a>{" "}
          or call me on +44 7733123925
        </p>
        <div className="developer">
          <p>
            Website built by{" "}
            <a
              href="http://www.15082862.webdevmmu.uk/"
              title="link to the developer of this website - Ivaylo Stoyanov"
            >
              Ivaylo Stoyanov
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
