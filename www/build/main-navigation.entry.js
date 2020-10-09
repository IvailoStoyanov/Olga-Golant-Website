import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const mainNavigationCss = "nav{position:fixed;width:100%;font-family:var(--accent);font-weight:bold;transition:0.5s ease-in-out;z-index:3}nav ul{position:relative;display:flex;justify-content:flex-end;margin:0;padding:0 8px;list-style:none}@media screen and (min-width: 426px){nav ul{width:70%;margin:0 auto}}nav ul li{padding:15px 0.35rem;border-bottom:3px solid transparent;transition:0.3s ease-in-out}@media screen and (min-width: 426px){nav ul li{padding:30px 7px}nav ul li:hover{border-bottom:3px solid #fff;padding:35px 7px 10px 7px}nav ul li:first-of-type:hover{border-bottom:0}}nav ul a{padding:15px 0;text-decoration:none;color:#fff}@media screen and (min-width: 426px){nav ul a{padding:30px 0}}nav .logo{position:absolute;top:0;left:15px;letter-spacing:1.5px}.scrolled{background:var(--black-tint)}";

const MainNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  addScrolledClass() {
    this.navigation.classList.add("scrolled");
  }
  removeScrolledClass() {
    this.navigation.classList.remove("scrolled");
  }
  handleScroll(e) {
    if (e.path[1].scrollY > 100) {
      this.addScrolledClass();
    }
    else {
      this.removeScrolledClass();
    }
  }
  render() {
    return (h(Host, null, h("nav", { ref: (el) => (this.navigation = el), id: "navigation" }, h("ul", null, h("li", null, h("a", { class: "logo", href: "index.html", title: "home page" }, "O.G")), h("li", null, h("a", { href: "index.html" }, "Home")), h("li", null, h("a", { href: "work.html", title: "view my work" }, "Work")), h("li", null, h("a", { href: "#aboutMe", title: "link to my contact details" }, "About")), h("li", null, h("a", { href: "#contactMe", title: "link to my contact details" }, "Contact")))), h("slot", null)));
  }
};
MainNavigation.style = mainNavigationCss;

export { MainNavigation as main_navigation };
