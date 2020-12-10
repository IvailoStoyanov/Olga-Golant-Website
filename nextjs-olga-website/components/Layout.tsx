import MainNavigation from "./navigation/MainNavigation";

// on component ready
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });

function Layout(props: any) {
  return (
    <div className="page-layout">
      <a href="#navigation" className="skiplink">
        skip to nav
      </a>
      <a href="#content" className="skiplink">
        skip to content
      </a>
      <MainNavigation />
      {props.children}
      <footer id="contactInfo">
        <h2>Contact Me</h2>
        <p>
          If you want to hire me or to collaborate on a project, get in touch
          with me via <a href="mailto:olgolant@gmail.com">olgolant@gmail.com</a>{" "}
          or call me on +359 89 593 0121
        </p>
      </footer>
    </div>
  );
}

export default Layout;
