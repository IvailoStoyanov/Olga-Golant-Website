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
              <a class="logo" href="index.html" title="home page">
                O.G
              </a>
            </li>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="work.html" title="view my work">
                Work
              </a>
            </li>
            <li>
              <a href="#aboutMe" title="link to my contact details">
                About
              </a>
            </li>
            <li>
              <a href="#contactMe" title="link to my contact details">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <slot></slot>
      </Host>
    );
  }
}
