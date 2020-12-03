import { r as registerInstance, h } from './index-a43a2740.js';
import './active-router-a70890f4.js';
import { i as injectHistory } from './index-a7e93f0c.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

const breadcrumbNavCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}.breadcrumb{position:absolute;top:0;left:20px;padding:0;list-style:none}@media screen and (min-width: 770px){.breadcrumb{left:calc(15% + 8px)}}.breadcrumb a{text-decoration:none;color:var(--pure-black);padding:5px}.breadcrumb a:hover{color:var(--red);text-decoration:underline}.breadcrumb li{display:inline;text-align:left}.breadcrumb li+li:before{content:\"/ \"}";

const BreadcrumbNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("ul", { class: "breadcrumb" }, setLocation(this));
  }
};
injectHistory(BreadcrumbNav);
const renderLastBreadcrumb = (el) => {
  const regex = /-/gi;
  const projectName = el
    .replace(regex, " ")
    .split(" ")
    .map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work/business-hotel" }, projectName.join(" "))));
};
const setLocation = (self) => {
  if (self.location.pathname == "/") {
    return null;
  }
  else {
    return self.location.pathname.split("/").map((element) => {
      if (element == "") {
        return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/" }, "Home")));
      }
      if (element == "work") {
        return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work" }, element.charAt(0).toUpperCase() + element.slice(1))));
      }
      if (element == "business-hotel") {
        return renderLastBreadcrumb(element);
      }
      if (element == "residential-building") {
        return renderLastBreadcrumb(element);
      }
      if (element == "sports-center") {
        return renderLastBreadcrumb(element);
      }
      if (element == "town-hall") {
        return renderLastBreadcrumb(element);
      }
      if (element == "private-house") {
        return renderLastBreadcrumb(element);
      }
    });
  }
};
BreadcrumbNav.style = breadcrumbNavCss;

export { BreadcrumbNav as breadcrumb_nav };
