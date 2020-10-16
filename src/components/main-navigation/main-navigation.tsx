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
              <stencil-route-link class="hydrated">
                <a href="/" class="logo">O.G</a>
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated">
                <a href="/" >Home</a>
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated">
                <a href="/work" title="view my work">Work</a>
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated">
                <a href="/" title="read more about me">About</a>
              </stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="hydrated">
                <a href="#contactMe">Contact</a>
              </stencil-route-link>
            </li>
          </ul>
        </nav>

        <slot></slot>
      </Host>
    );
  }
}
