import { Component, h, Host } from "@stencil/core";
import { scrollToDesiredLocation } from "../../global/defaultFunction";
// import { BrowserRouter as Router } from "react-router-dom";
// Redirect, Route, Switch,  are part of the top import! react-router-dom

// routs
// import { WorkListPage } from "../work-page/work-page";
// import { AppHome } from "../app-home/app-home";

@Component({
  tag: "app-root",
  styleUrl: "app-root.scss",
  shadow: true,
})
export class AppRoot {
  public contactMeSection?: HTMLElement;
  public mainNav?: HTMLMainNavigationElement;

  componentDidRender() {
    // this.mainNav.scrollToElement = this.contactMeSection;
  }

  render() {
    return (
      <Host>
        <button
          class="skipLink"
          title="skip to main content"
          onClick={() => scrollToDesiredLocation(this.contactMeSection)}
        >
          skip to main Content
        </button>


        {/* <Router>
          <main-navigation
            ref={(el) => (this.mainNav = el as HTMLMainNavigationElement)}
          ></main-navigation>

          <Switch>
            <Route path="/Home">
              <work-page></work-page>
            </Route> */}
            {/* <Route path="/">
              <Redirect to="/Home" />
            </Route> */}
            {/* <Route exact path="/work" component={WorkListPage} /> */}

            {/* <Route path="/work">
              <WorkListPage />
            </Route> */}
          {/* </Switch>
        </Router> */}

        <main>
          <stencil-router scrollTopOffset={0}>
            <stencil-route-switch>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/work" component="work-page" />

              <stencil-route
                url="/work/:pageName"
                routeRender={({ match }) => (
                  <work-project page={match!.url}></work-project>
                )}
              />
            </stencil-route-switch>
          </stencil-router>

          <footer
            id="contactMe"
            ref={(el) => (this.contactMeSection = el as HTMLElement)}
          >
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
