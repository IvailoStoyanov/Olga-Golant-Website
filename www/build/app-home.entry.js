import { r as registerInstance, h } from './index-5ded1fe5.js';

const appHomeCss = "header{padding:40vh 0 0 0;height:55vh;color:#fff;background-image:linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(./../../assets/images/hero-image.jpg);background-size:cover;background-position:center}.app-home__hero-container{margin-top:0 20px}.app-home__hero-container h1{margin-top:0;margin-bottom:5px;font-size:2.8rem;position:relative}@media screen and (min-width: 426px){.app-home__hero-container{max-width:390px;margin:0 calc(15% + 4px)}.app-home__hero-container h1{font-size:4rem;margin-bottom:10px}}@media screen and (min-width: 770px){.app-home__hero-container{max-width:600px}.app-home__hero-container h1{font-size:6rem}}.app-home__hero-container .role{margin:0 0 40px 4px;display:block;font-weight:bold;letter-spacing:1px}@media screen and (min-width: 426px){.app-home__hero-container .role{font-size:1.5rem;margin:0 0 70px 11px}}button{padding:10px 15px;border:none;margin-top:20px;margin-right:5px;color:#fff;text-decoration:none;text-shadow:none;background:rgba(0, 0, 0, 0.7);font-family:var(--accent);font-weight:bold;position:relative;transition:0.4s ease-in-out;z-index:2}button:hover{color:var(--pure-black);background:transparent;cursor:pointer}button:hover:before{left:0%;right:auto;width:100%}button:before{display:block;position:absolute;top:0px;right:0px;height:100%;width:0px;z-index:-1;content:\"\";color:var(--pure-black);background:#fff;transition:0.4s ease-in-out}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-home" }, h("header", null, h("div", { class: "app-home__hero-container" }, h("h1", null, "Olga Golant"), h("span", { class: "role" }, "Architect"), h("stencil-route-link", { url: "/#aboutMe" }, h("button", { title: "leads to " }, "About Me")), h("stencil-route-link", { url: "/work" }, h("button", { title: "leads to my latest work" }, "Feature Work")))), h("text-section", null, h("h2", null, "About me"), h("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel scelerisque ex. Aliquam sit amet ligula sit amet mauris dictum sodales vitae a felis. Aliquam erat volutpat. Proin a condimentum metus. Ut pharetra, ipsum quis vulputate scelerisque, ex dolor ultricies justo, sed accumsan urna mi vitae ex. In hac habitasse platea dictumst. Duis nulla orci, tempus quis suscipit at, facilisis ac felis. Vivamus at diam molestie, viverra metus a, feugiat dui.")), h("work-list-single", null)));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
