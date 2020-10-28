import { r as registerInstance, h } from './index-5ded1fe5.js';
import { p as projectsList } from './projectsList-0e0c44f4.js';

const workPageCss = "@media screen and (min-width: 770px){main{width:70%;margin:0 auto}}.work-page__hero-container{padding:15vh 20px 10vh 20px;height:auto;background:var(--light-black);color:var(--white)}@media screen and (min-width: 426px){.work-page__hero-container{padding:15vh 0 10vh calc(15% + 4px)}}.work-page__hero-container h1{margin:0}a{text-decoration:none;color:var(--pure-black)}";

const WorkListPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "work-page" }, h("header", null, h("div", { class: "work-page__hero-container" }, h("h1", null, "My Work"))), h("main", null, projectsList.map((post) => {
      console.log(post.shortDescription, post.title, post.img);
      return (h("stencil-route-link", { url: post.url }, h("work-list-gird", { description: post.shortDescription, heading: post.title, background: post.img })));
    }))));
  }
};
WorkListPage.style = workPageCss;

export { WorkListPage as work_page };
