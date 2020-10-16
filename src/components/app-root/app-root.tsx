import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        {/* a header with two variations depending on the class name? */}
        <header>
          <main-navigation></main-navigation>
        </header>

        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route-switch>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/work" component="work-list" exact={true} />
            </stencil-route-switch>
          </stencil-router>


          <footer id="contactMe">


            {/* this needs to be adapted to show the correct breadcrumbs depending on which page you are on! */}
            <ul class="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="work.html" title="view my work">Work</a>
              </li>
            </ul>

            <h2>Contact Me</h2>
            <p>
              If you want to hire me or to collaborate on a project, get in
              touch with me via{" "}
              <a href="mailto:olgolant@gmail.com">olgolant@gmail.com</a> or call
              me on +359 89 593 0121
            </p>

            <div class="developer">
              <p>
                Website built by{" "}
                <a href="http://www.15082862.webdevmmu.uk/" title="link to Ivaylo Stoyanov's portfolio">
                  Ivaylo Stoyanov
                </a>
              </p>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}
