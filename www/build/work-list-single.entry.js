import { r as registerInstance, h } from './index-5ded1fe5.js';
import { p as projectsList } from './projectsList-0e0c44f4.js';

const workListSingleCss = ".project-items-wrapper{display:grid;grid-template-rows:48vh 48vh 48vh}.project-items-wrapper .project-item{height:100%;position:relative;text-decoration:none;color:#fff;background-position:center;background-size:cover;background-color:#333}@media screen and (min-width: 770px){.project-items-wrapper .project-item{background-size:100%;transition:3s linear}.project-items-wrapper .project-item:hover{background-size:120%;transition:7s linear}.project-items-wrapper .project-item:hover .project-item__project-button{background:#fff;color:var(--pure-black)}}.project-items-wrapper .project-item__project-button{padding:10px 20px;border:2px solid #fff;transition:0.2s ease-in-out}.project-items-wrapper .project-item__text-container{position:absolute;bottom:30px;left:20px}.project-items-wrapper .project-item__text-container h4{margin:0;font-size:20px;padding:10px 0px;padding-bottom:30px;font-family:var(--accent)}@media screen and (min-width: 426px){.project-items-wrapper .project-item__text-container{left:15%;bottom:80px}.project-items-wrapper .project-item__text-container h4{font-size:30px}}";

const WorkListSingle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    //consider using a PROP not the queryselectorAll
    this.projectItemsWrapperElement
      .querySelectorAll(".project-item")
      .forEach((element) => {
      element.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.7)), url(${element.dataset.background})`;
    });
  }
  render() {
    return (h("div", { class: "project-items-wrapper", ref: (el) => (this.projectItemsWrapperElement = el) }, projectsList.map((post, index) => {
      if (index <= 2) {
        return (h("stencil-route-link", { url: post.url }, h("div", { class: "project-item", "data-background": post.img }, h("div", { class: "project-item__text-container" }, h("h4", null, post.title), h("span", { class: "project-item__project-button" }, "View the project")))));
      }
    })));
  }
};
WorkListSingle.style = workListSingleCss;

export { WorkListSingle as work_list_single };
