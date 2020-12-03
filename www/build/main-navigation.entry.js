import { r as registerInstance, h, e as Host } from './index-a43a2740.js';
import { s as scrollToDesiredLocation } from './defaultFunction-4fa2bd33.js';

const mainNavigationCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}nav{position:fixed;top:0;width:100%;font-family:var(--accent);font-weight:bold;transition:0.5s ease-in-out;z-index:3}nav ul{position:relative;display:flex;justify-content:flex-end;margin:0;padding:0 8px;list-style:none}@media screen and (min-width: 426px){nav ul{width:70%;margin:0 auto}}nav ul li{padding:0 0.35rem;border-bottom:3px solid transparent;transition:0.3s ease-in-out}@media screen and (min-width: 426px){nav ul li{padding:0 7px}nav ul li:hover{border-bottom:3px solid var(--white)}nav ul li:first-of-type:hover{border-bottom:0}}nav ul a{display:block;padding:15px 0;text-decoration:none;color:var(--white);cursor:pointer}@media screen and (min-width: 426px){nav ul a{padding:30px 0}}nav ul .scrollToLink{display:inline;border:none;padding:15px 0;background:transparent;color:var(--white);font-family:var(--accent);font-weight:bold;font-size:16px;cursor:pointer}@media screen and (min-width: 426px){nav ul .scrollToLink{padding:30px 0}}nav .logo{position:absolute;top:0;left:15px;letter-spacing:1.5px}.scrolled{background:var(--black-tint)}";

const MainNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  handleScroll(e) {
    if (e.path[1].scrollY > 100) {
      addScrolledClass(this.navigation);
    }
    else {
      removeScrolledClass(this.navigation);
    }
  }
  render() {
    return (h(Host, null, h("nav", { id: "navigation", ref: (el) => (this.navigation = el) }, h("ul", null, h("li", null, h("stencil-route-link", { class: "hydrated", url: "/", activeClass: "logo" }, "O.G")), h("li", null, h("stencil-route-link", { class: "hydrated", url: "/", activeClass: "active" }, "Home")), h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work", title: "view my work", activeClass: "active" }, "Work")), h("li", null, h("button", { class: "scrollToLink", title: "lead to contact information", onClick: () => scrollToDesiredLocation(this.scrollToElement) }, "Contact"))))));
  }
};
const addScrolledClass = (nav) => {
  nav.classList.add("scrolled");
};
const removeScrolledClass = (nav) => {
  nav.classList.remove("scrolled");
};
MainNavigation.style = mainNavigationCss;

export { MainNavigation as main_navigation };
