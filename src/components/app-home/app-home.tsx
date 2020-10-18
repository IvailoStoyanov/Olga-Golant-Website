import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <div class="hero-container          page-header page-header__content--home">
          <h1>Olga Golant</h1>
          <span class="page-header__role">Architect</span>
          <stencil-route-link url="/#aboutMe">
            <button title="to the info">About Me</button>
          </stencil-route-link>
          <stencil-route-link url="/work">
            <button title="to the info">Feature Work</button>
          </stencil-route-link>
        </div>

        <text-section>
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
      </div>
    );
  }
}
