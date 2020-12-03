import { r as registerInstance, h } from './index-a43a2740.js';

const workOtherProjectsCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}.other-projects{padding:60px 20px;background:var(--dirty-white);display:grid;grid-template-columns:1fr 1fr;grid-template-rows:40px 3fr;grid-gap:10px}@media screen and (min-width: 770px){.other-projects{padding:60px 15%}}.other-projects h3{grid-column:1/span 2;grid-row:1/2;text-align:center;font-weight:bold}.other-projects__image{background-position:center;background-repeat:no-repeat;background-size:cover}.other-projects a{display:grid;grid-template-rows:150px minmax(60px, auto);text-decoration:none;transition:0.3s ease-in-out;background:var(--white);color:var(--black);font-family:var(--accent);box-shadow:0px 2px 10px var(--shadow)}.other-projects a:hover{box-shadow:0px 2px 10px #333}.other-projects a h4{text-align:center;padding:20px 10px}";

const WorkOtherProjects = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.otherProjectWrapperElement
      .querySelectorAll(".other-projects__image")
      .forEach((element) => {
      element.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.7)), url(${element.dataset.background})`;
    });
  }
  render() {
    return (h("div", { class: "other-projects", ref: (el) => (this.otherProjectWrapperElement = el) }, h("h3", null, "Other Projects"), this.data.map((post) => {
      return (h("stencil-route-link", { url: post.url }, h("div", { class: "other-projects__image", "data-background": post.img }), h("h4", null, post.title)));
    })));
  }
};
WorkOtherProjects.style = workOtherProjectsCss;

export { WorkOtherProjects as work_other_projects };
