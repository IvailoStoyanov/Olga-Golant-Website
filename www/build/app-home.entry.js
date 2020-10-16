import { r as registerInstance, h } from './index-5ded1fe5.js';

const appHomeCss = ".app-home{padding:10px}button{color:var(--white);border:2px solid var(--white);padding:10px 20px;outline:0;letter-spacing:0.04em;transition:0.2s ease-in-out;cursor:pointer}button:hover{color:var(--light-black);background:var(--white)}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-home" }, h("div", { class: "hero-container          page-header page-header__content--home" }, h("h1", null, "Olga Golant"), h("span", { class: "page-header__role" }, "Architect"), h("stencil-route-link", { url: "/#aboutMe" }, h("button", { title: "to the info" }, "About Me")), h("stencil-route-link", { url: "/work" }, h("button", { title: "to the info" }, "Feature Work")))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
