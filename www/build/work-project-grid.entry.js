import { r as registerInstance, h } from './index-a43a2740.js';

const workProjectGridCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}.images-grid{display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:5px;height:auto}@media screen and (min-width: 426px){.images-grid{max-width:90%;margin:0 auto;padding:15vh 0 10vh 0;grid-gap:10px}}@media screen and (min-width: 770px){.images-grid{max-width:70%;grid-gap:15px}}div{width:100%;height:100px;background-position:center;background-size:cover}@media screen and (min-width: 770px){div{height:250px}}div.big{grid-column-start:1;grid-column-end:4;height:250px}@media screen and (min-width: 770px){.big:nth-child(1){grid-column-end:3}.big:nth-child(2){grid-column-start:3}.big:nth-child(3){grid-column-end:2}.big:nth-child(4){grid-column-start:2;grid-column-end:4}}";

const WorkProjectGrid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.projectBackgroundParentElement
      .querySelectorAll("div")
      .forEach((element) => {
      element.style.backgroundImage = `url(${element.dataset.background})`;
    });
  }
  render() {
    return (h("div", { class: "images-grid", ref: (el) => (this.projectBackgroundParentElement = el) }, this.imagesUrl.map((post, index) => {
      if (index <= 3) {
        return h("div", { class: "big", "data-background": post.url });
      }
      else {
        return h("div", { "data-background": post.url });
      }
    })));
  }
};
WorkProjectGrid.style = workProjectGridCss;

export { WorkProjectGrid as work_project_grid };
