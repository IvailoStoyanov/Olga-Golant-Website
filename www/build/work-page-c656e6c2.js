import { r as registerInstance, h } from './index-a43a2740.js';
import { p as projectsList } from './projectsList-6aef90fb.js';

const workPageCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}@media screen and (min-width: 770px){.work-page__content{width:70%;margin:0 auto}}.work-page__hero-container{padding:15vh 20px 10vh 20px;height:auto;background:var(--light-black);color:var(--white)}@media screen and (min-width: 426px){.work-page__hero-container{padding:15vh 0 10vh calc(15% + 4px)}}a{text-decoration:none;color:var(--pure-black)}";

const WorkListPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "work-page" }, h("header", null, h("div", { class: "work-page__hero-container" }, h("h1", null, "My Work"))), h("div", { class: "work-page__content", id: "content" }, projectsList.map((post) => {
      return (h("stencil-route-link", { url: post.url }, h("work-list-gird", { description: post.shortDescription, heading: post.title, background: post.img })));
    }))));
  }
};
WorkListPage.style = workPageCss;

export { WorkListPage as W };
