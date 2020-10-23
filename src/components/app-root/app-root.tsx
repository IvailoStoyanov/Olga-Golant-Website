import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <Host>
        {/* a header with two variations depending on the class name? */}
        <main-navigation></main-navigation>
        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route-switch>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/work" component="work-page" exact={true} />
              <stencil-route url="/work/project" component="work-project" exact={true} />

              {/* this on the bottom instead of this on top */}
              <stencil-route url="/docs/:pageName" routeRender={({ match }) => (
                <doc-component page={match!.url}></doc-component>
              )}/>

            </stencil-route-switch>
          </stencil-router>

          <footer id="contactMe">
            <breadcrumb-nav></breadcrumb-nav>
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
                <a
                  href="http://www.15082862.webdevmmu.uk/"
                  title="link to Ivaylo Stoyanov's portfolio"
                >
                  Ivaylo Stoyanov
                </a>
              </p>
            </div>
          </footer>
        </main>
      </Host>
    );
  }
}
