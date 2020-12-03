import { Component, h } from "@stencil/core";
import { scrollToDesiredLocation } from "../../global/defaultFunction";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  shadow: true,
})
export class AppHome {
  public content?: HTMLElement;

  render() {
    return (
      <div class="app-home">
        <header>
          <div class="app-home__hero-container">
            <h1>Olga Golant</h1>
            <span class="role">Architect</span>
            <button
              title="leads to about me section"
              onClick={() => scrollToDesiredLocation(this.content)}
              class="app-home__hero-button"
            >
              About Me
            </button>
            <stencil-route-link url="/work" title="leads to my latest work">
              <button class="app-home__hero-button">
                Feature Work
              </button>
            </stencil-route-link>
          </div>
        </header>

        <text-section
          id="content"
          ref={(el) => (this.content = el as HTMLElement)}
        >
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel
            scelerisque ex. Aliquam sit amet ligula sit amet mauris dictum
            sodales vitae a felis. Aliquam erat volutpat. Proin a condimentum
            metus. Ut pharetra, ipsum quis vulputate scelerisque, ex dolor
            ultricies justo, sed accumsan urna mi vitae ex. In hac habitasse
            platea dictumst. Duis nulla orci, tempus quis suscipit at, facilisis
            ac felis. Vivamus at diam molestie, viverra metus a, feugiat dui.
          </p>
        </text-section>
        <work-list-single></work-list-single>
      </div>
    );
  }
}
