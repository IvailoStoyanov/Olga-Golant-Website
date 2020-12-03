import { r as registerInstance, h } from './index-a43a2740.js';

const workListGirdCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}.work-list-grid{display:inline-block;margin:70px auto 0 auto;text-decoration:none}@media screen and (min-width: 426px){.work-list-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;grid-column-gap:10px}}@media screen and (min-width: 770px){.work-list-grid{margin:150px auto 50px auto}}@media screen and (min-width: 770px){.work-list-grid{grid-template-columns:1fr 1fr 1fr}}.work-list-grid:hover h3{color:var(--red)}.work-list-grid:hover button{background:var(--red);color:#fff}.work-list-grid h3{text-align:center;padding-bottom:10px;transition:0.2s ease-in-out}@media screen and (min-width: 426px){.work-list-grid h3{grid-column-start:1;grid-column-end:3;padding-bottom:15px}}@media screen and (min-width: 770px){.work-list-grid h3{grid-column-end:4;text-align:left;font-size:20px}}.work-list-grid button{border:none;color:var(--red);background:transparent;border-left:2px solid var(--red);padding:15px;transition:0.2s ease-in-out;cursor:pointer}.work-list-grid__image{height:250px;background-size:cover;background-position:center}@media screen and (min-width: 770px){.work-list-grid__image{grid-column-start:1;grid-column-end:3}}.work-list-grid__text-wrapper{padding:20px}@media screen and (min-width: 426px){.work-list-grid__text-wrapper{padding:0 0 0 10px}}";

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
