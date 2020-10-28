import { r as registerInstance, h } from './index-5ded1fe5.js';

const workListGirdCss = ".work-list-grid{display:inline-block;margin:70px auto 0 auto;text-decoration:none}@media screen and (min-width: 426px){.work-list-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;grid-column-gap:10px}}@media screen and (min-width: 770px){.work-list-grid{margin:150px auto 50px auto}}@media screen and (min-width: 770px){.work-list-grid{grid-template-columns:1fr 1fr 1fr}}.work-list-grid:hover h3{color:var(--red)}.work-list-grid:hover button{background:var(--red);color:#fff}.work-list-grid h3{text-align:center;font-family:var(--accent);margin:0;padding-bottom:10px;transition:0.2s ease-in-out}@media screen and (min-width: 426px){.work-list-grid h3{grid-column-start:1;grid-column-end:3;padding-bottom:15px}}@media screen and (min-width: 770px){.work-list-grid h3{grid-column-end:4;text-align:left;font-size:20px}}.work-list-grid button{border:none;color:var(--red);background:transparent;border-left:2px solid var(--red);padding:15px;transition:0.2s ease-in-out;cursor:pointer}.work-list-grid__image{height:250px;background-size:cover;background-position:center}@media screen and (min-width: 770px){.work-list-grid__image{grid-column-start:1;grid-column-end:3}}.work-list-grid__text-wrapper{padding:20px}@media screen and (min-width: 426px){.work-list-grid__text-wrapper{padding:0 0 0 10px}}";

const WorkListGird = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.projectBackgroundImageElement.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.7)), url(${this.background})`;
  }
  render() {
    return (h("div", { class: "work-list-grid" }, h("h3", null, this.heading), h("div", { class: "work-list-grid__image", ref: (el) => (this.projectBackgroundImageElement = el) }), h("div", { class: "work-list-grid__text-wrapper" }, h("p", null, this.description), h("button", null, "Read more"))));
  }
};
WorkListGird.style = workListGirdCss;

export { WorkListGird as work_list_gird };
