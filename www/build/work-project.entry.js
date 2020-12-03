import { r as registerInstance, h, e as Host } from './index-a43a2740.js';
import { p as projectsList } from './projectsList-6aef90fb.js';

const workProjectCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}:host{display:block}header{padding:25vh 20px;text-shadow:1px 1px var(--black);height:auto;background-position:center;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;-webkit-background-attachment:local}header h1{margin:0 0 20px 0}header p{padding:0 20px 20px 0}@media screen and (min-width: 426px){header{padding:20vh 0 0 15%;height:30vh}}@media screen and (min-width: 770px){header h1{font-size:3rem}}";

const WorkProject = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    if (this.page) {
      const post = (this.data = projectsList.find((blog) => blog.url === this.page));
      if (post) {
        insertMetaTags(post);
        document.title = post.title;
      }
      this.otherProjectsData = limitOtherProjectsData(projectsList.indexOf(post));
    }
  }
  componentDidRender() {
    renderBackgroundImage(this.header, this.data.img);
  }
  render() {
    return (h(Host, null, h("header", { ref: (el) => (this.header = el) }, h("h1", null, this.data.title), h("p", null, "A small introduction to the project itself. Aenean vel scelerisque ex.")), h("text-section", null, h("h2", null, "Description"), h("p", null, this.data.longDescription)), h("work-project-grid", { imagesUrl: this.data.allImages }), h("work-other-projects", { data: this.otherProjectsData })));
  }
};
const insertMetaTags = (post) => {
  createOgTag("og:title", `${post.title} by Olga Golant`);
  createOgTag("og:description", post.titleDescription);
  createOgTag("og:url", window.location.href);
  createOgTag("og:image", `${window.location.origin}${post.img}`);
};
const createOgTag = (type, content) => {
  let el = document.head.querySelector(`meta[property="${type}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", type);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
  else {
    el.setAttribute("property", type);
    el.setAttribute("content", content);
  }
};
const renderBackgroundImage = (element, backgroundLocation) => {
  element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${backgroundLocation})`;
};
const limitOtherProjectsData = (currentPageIdnex) => {
  return projectsList.filter((projectObject) => {
    if (currentPageIdnex == projectsList.length - 1) {
      if (projectObject == projectsList[0] ||
        projectObject == projectsList[1]) {
        return projectObject;
      }
    }
    else if (currentPageIdnex == projectsList.length - 2) {
      if (projectObject == projectsList[currentPageIdnex + 1] ||
        projectObject == projectsList[0]) {
        return projectObject;
      }
    }
    else {
      if (projectObject == projectsList[currentPageIdnex + 1] ||
        projectObject == projectsList[currentPageIdnex + 2]) {
        return projectObject;
      }
    }
  });
};
WorkProject.style = workProjectCss;

export { WorkProject as work_project };
