import { Component, Listen, Host, h } from "@stencil/core";

@Component({
  tag: "main-navigation",
  styleUrl: "main-navigation.scss",
  shadow: true,
})
export class MainNavigation {
  private navigation?: HTMLMainNavigationElement;

  addScrolledClass() {
    this.navigation.classList.add("scrolled");
  }

  removeScrolledClass() {
    this.navigation.classList.remove("scrolled");
  }

  @Listen("scroll", { target: "window" })
  handleScroll(e) {
    if (e.path[1].scrollY > 100) {
      this.addScrolledClass();
    } else {
      this.removeScrolledClass();
    }
  }

  render() {
    return (
      
      <Host>
        <nav
          ref={(el) => (this.navigation = el as HTMLMainNavigationElement)}
          id="navigation"
        >
          <ul>
            <li>
              <stencil-route-link class="hydrated" url="/" activeClass="logo">
                O.G
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated" url="/">
                Home
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                class="hydrated"
                url="/work"
                title="view my work"
              >
                Work
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link
                class="hydrated"
                url="/"
                title="read more about me"
              >
                About
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated" url="#contactMe">
                Contact
              </stencil-route-link>
            </li>
          </ul>
        </nav>
        <slot></slot>
      </Host>
    );
  }
}
