import { r as registerInstance, h } from './index-5ded1fe5.js';

const workPageCss = ":host{display:block}.work-page__hero-container{padding:15vh 20px 10vh 20px;height:auto;background:var(--light-black);color:var(--white)}@media screen and (min-width: 426px){.work-page__hero-container{padding:15vh 0 10vh calc(15% + 4px)}}.work-page__hero-container h1{margin:0}";

const WorkListPage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "work-page" }, h("header", null, h("div", { class: "work-page__hero-container" }, h("h1", null, "My Work"))), "other content in here", h("work-list-gird", null), h("slot", null)));
  }
};
WorkListPage.style = workPageCss;

export { WorkListPage as work_page };
