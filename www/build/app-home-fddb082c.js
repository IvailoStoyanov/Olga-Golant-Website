import { r as registerInstance, h } from './index-a43a2740.js';
import { s as scrollToDesiredLocation } from './defaultFunction-4fa2bd33.js';

const appHomeCss = "@charset \"UTF-8\";@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}@keyframes appear-left{0%{transform:translate(-50px);opacity:0}60%{transform:translate(5px)}100%{transform:translate(0px);opacity:1}}@keyframes appear-bottom{0%{opacity:0}100%{opacity:1}}header{padding:40vh 20px 0 20px;height:55vh;background-image:linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(./../../assets/images/hero-image.jpg);background-size:cover;background-position:center}@media screen and (min-width: 426px){header{padding:40vh calc(15% + 4px) 0 calc(15% + 4px)}}.app-home__hero-container{margin-top:0 20px}.app-home__hero-container h1{margin-bottom:5px;font-size:2.8rem;position:relative;animation:appear-left 1.3s ease 0.5s;animation-fill-mode:forwards;opacity:0}@media screen and (min-width: 426px){.app-home__hero-container{max-width:390px}.app-home__hero-container h1{font-size:4rem;margin-bottom:10px}}@media screen and (min-width: 770px){.app-home__hero-container{max-width:600px}.app-home__hero-container h1{font-size:6rem}}.app-home__hero-container .role{margin:0 0 40px 4px;display:block;font-family:var(--accent);font-size:1.5rem;font-weight:bold;letter-spacing:1px;animation:appear-left 1.3s ease 1.3s;animation-fill-mode:forwards;opacity:0}@media screen and (min-width: 426px){.app-home__hero-container .role{font-size:1.5rem;margin:0 0 70px 11px}}.app-home__hero-button{border:none;padding:10px 15px;margin-right:5px;color:var(--white);background:rgba(0, 0, 0, 0.7);font-family:var(--accent);font-weight:bold;font-size:16px;position:relative;transition:0.4s ease-in-out;animation:appear-bottom 1.1s linear 2s forwards;opacity:0;z-index:2}.app-home__hero-button:hover{color:var(--pure-black);background:transparent;cursor:pointer}.app-home__hero-button а{text-decoration:none;color:white}.app-home__hero-button:hover:before{left:0%;right:auto;width:100%}.app-home__hero-button:before{content:\"\";display:block;position:absolute;top:0px;right:0px;height:100%;width:0px;z-index:-1;color:var(--pure-black);background:#fff;transition:0.4s ease-in-out}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-home" }, h("header", null, h("div", { class: "app-home__hero-container" }, h("h1", null, "Olga Golant"), h("span", { class: "role" }, "Architect"), h("button", { title: "leads to about me section", onClick: () => scrollToDesiredLocation(this.content), class: "app-home__hero-button" }, "About Me"), h("stencil-route-link", { url: "/work", title: "leads to my latest work" }, h("button", { class: "app-home__hero-button" }, "Feature Work")))), h("text-section", { id: "content", ref: (el) => (this.content = el) }, h("h2", null, "About me"), h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel scelerisque ex. Aliquam sit amet ligula sit amet mauris dictum sodales vitae a felis. Aliquam erat volutpat. Proin a condimentum metus. Ut pharetra, ipsum quis vulputate scelerisque, ex dolor ultricies justo, sed accumsan urna mi vitae ex. In hac habitasse platea dictumst. Duis nulla orci, tempus quis suscipit at, facilisis ac felis. Vivamus at diam molestie, viverra metus a, feugiat dui.")), h("work-list-single", null)));
  }
};
AppHome.style = appHomeCss;

export { AppHome as A };
