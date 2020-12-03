import { Component, Prop, Listen, Host, h } from "@stencil/core";
import { scrollToDesiredLocation } from "../../global/defaultFunction";

@Component({
  tag: "main-navigation",
  styleUrl: "main-navigation.scss",
  shadow: true,
})
export class MainNavigation {
  @Prop() scrollToElement?: HTMLElement;
  private navigation?: HTMLMainNavigationElement;

  @Listen("scroll", { target: "window" })
  handleScroll(e) {
    if (e.path[1].scrollY > 100) {
      addScrolledClass(this.navigation);
    } else {
      removeScrolledClass(this.navigation);
    }
  }

  render() {
    return (
      <Host>
        <nav
          id="navigation"
          ref={(el) => (this.navigation = el as HTMLMainNavigationElement)}
        >
          <ul>
            <li>
              <stencil-route-link class="hydrated" url="/" activeClass="logo">
                O.G
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated" url="/" activeClass="active">
                Home
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                class="hydrated"
                url="/work"
                title="view my work"
                activeClass="active"
              >
                Work
              </stencil-route-link>
            </li>
            <li>
              <button
                class="scrollToLink"
                title="lead to contact information"
                onClick={() => scrollToDesiredLocation(this.scrollToElement)}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </Host>
    );
  }
}

const addScrolledClass = (nav) => {
  nav.classList.add("scrolled");
};

const removeScrolledClass = (nav) => {
  nav.classList.remove("scrolled");
};
