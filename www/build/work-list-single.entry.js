import { r as registerInstance, h } from './index-a43a2740.js';
import { p as projectsList } from './projectsList-6aef90fb.js';

const workListSingleCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}.project-items-wrapper{display:grid;grid-template-rows:48vh 48vh 48vh}.project-items-wrapper .project-item{height:100%;position:relative;text-decoration:none;color:#fff;background-position:center;background-size:cover;background-color:#333}@media screen and (min-width: 770px){.project-items-wrapper .project-item{background-size:100%;transition:3s linear}.project-items-wrapper .project-item:hover{background-size:120%;transition:7s linear}.project-items-wrapper .project-item:hover .project-item__project-button{background:#fff;color:var(--pure-black)}}.project-items-wrapper .project-item__project-button{padding:10px 20px;border:2px solid #fff;transition:0.2s ease-in-out}.project-items-wrapper .project-item__text-container{position:absolute;bottom:30px;left:20px}.project-items-wrapper .project-item__text-container h4{font-size:20px;padding:10px 0px;padding-bottom:30px}@media screen and (min-width: 426px){.project-items-wrapper .project-item__text-container{left:15%;bottom:80px}.project-items-wrapper .project-item__text-container h4{font-size:30px}}";

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
