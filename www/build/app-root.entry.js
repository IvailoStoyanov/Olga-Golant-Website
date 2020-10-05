import { r as registerInstance, h } from './index-95f76a9b.js';

const appRootScss = "\n//Fonts\n$main: 'Open Sans', sans-serif;\n$accent: 'Montserrat', sans-serif;\n\n//Variables\n$break-to-tablet: 426px;\n$break-to-desktop: 770px;\n\n//Colors\n$black: #212121;\n$pure-black: #000;\n$dirty-white: #fafafa;\n$shadow: rgba(0, 0, 0, 0.15);\n$black-tint: rgba(33, 33, 33, 0.85);\n$red: #ff0022;\n\nheader {\n  // color: white;\n  // height: 56px;\n  display: flex;\n  align-items: center;\n  // box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nh1 {\n  // font-size: 1.4rem;\n  // font-weight: 500;\n  // color: #fff;\n  // padding: 0 12px;\n}\n\n\nnav {\n  background: black;\n\n  position: fixed;\n  z-index: 3;\n  font-family: $accent;\n  font-weight: bold;\n  width: 100%;\n  transition: 0.5s ease-in-out;\n  ul {\n    margin: 0;\n    padding: 0 8px;\n    list-style: none;\n    display: flex;\n    justify-content: flex-end;\n    position: relative;\n\n    @media screen and (min-width: $break-to-tablet) {\n      width: 70%;\n      margin: 0 auto;\n    }\n\n    li {\n      padding: 15px 0.35rem;\n      transition: 0.3s ease-in-out;\n      border-bottom: 3px solid transparent;\n\n      @media screen and (min-width: $break-to-tablet) {\n        padding: 30px 7px;\n        &:hover {\n          border-bottom: 3px solid #fff;\n          padding: 35px 7px 10px 7px;\n        }\n        &:first-of-type:hover {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    a {\n      padding: 15px 0;\n      color: #fff;\n      text-decoration: none;\n      @media screen and (min-width: $break-to-tablet) {\n        padding: 30px 0;\n      }\n    }\n  }\n\n  .logo {\n    letter-spacing: 1.5px;\n    position: absolute;\n    top: 0;\n    left: 15px;\n  }\n}\n";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", null, h("nav", { id: "navigation" }, h("ul", null, h("li", null, h("a", { class: "logo", href: "index.html", title: "home page" }, "O.G")), h("li", null, h("a", { href: "index.html" }, "Home")), h("li", null, h("a", { href: "work.html", title: "view my work" }, "Work")), h("li", null, h("a", { href: "#aboutMe", title: "link to my contact details" }, "About")), h("li", null, h("a", { href: "#contactMe", title: "link to my contact details" }, "Contact")))), h("div", { class: "page-header page-header__content--home" }, h("h1", null, "Olga Golant"), h("span", { class: "page-header__role" }, "Architect"), h("a", { class: "page-header__button", href: "#aboutMe" }, "About Me"), " ", h("a", { class: "page-header__button", href: "#projects" }, "Feature Work"))), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }))))));
  }
};
AppRoot.style = appRootScss;

export { AppRoot as app_root };
