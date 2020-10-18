import { r as registerInstance, h } from './index-5ded1fe5.js';

const appHomeCss = "button{color:var(--white);border:2px solid var(--white);padding:10px 20px;outline:0;letter-spacing:0.04em;transition:0.2s ease-in-out;cursor:pointer}button:hover{color:var(--light-black);background:var(--white)}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-home" }, h("div", { class: "hero-container          page-header page-header__content--home" }, h("h1", null, "Olga Golant"), h("span", { class: "page-header__role" }, "Architect"), h("stencil-route-link", { url: "/#aboutMe" }, h("button", { title: "to the info" }, "About Me")), h("stencil-route-link", { url: "/work" }, h("button", { title: "to the info" }, "Feature Work"))), h("text-section", null, h("h2", null, "About me"), h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel scelerisque ex. Aliquam sit amet ligula sit amet mauris dictum sodales vitae a felis. Aliquam erat volutpat. Proin a condimentum metus. Ut pharetra, ipsum quis vulputate scelerisque, ex dolor ultricies justo, sed accumsan urna mi vitae ex. In hac habitasse platea dictumst. Duis nulla orci, tempus quis suscipit at, facilisis ac felis. Vivamus at diam molestie, viverra metus a, feugiat dui."))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
