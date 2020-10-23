import { r as registerInstance, h } from './index-5ded1fe5.js';
import './active-router-2f414d94.js';
import { i as injectHistory } from './index-01bd07ce.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

const breadcrumbNavCss = ".breadcrumb{position:absolute;top:0;left:20px;padding:0;list-style:none}@media screen and (min-width: 770px){.breadcrumb{left:calc(15% + 8px)}}.breadcrumb a{text-decoration:none;color:var(--pure-black);padding:5px}.breadcrumb a:hover{color:var(--red);text-decoration:underline}.breadcrumb li{display:inline;text-align:left}.breadcrumb li+li:before{content:\"/ \"}";

const BreadcrumbNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  setLocation() {
    if (this.location.pathname == "/") {
      return null;
    }
    else {
      const regex = /-/gi;
      return this.location.pathname.split("/").map((element) => {
        if (element == "") {
          return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/" }, "Home")));
        }
        if (element == "work") {
          return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work" }, element.charAt(0).toUpperCase() + element.slice(1))));
        }
        if (element == "business-hotel") {
          const projectName = element.replace(regex, ' ').split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
          return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work/business-hotel" }, projectName.join(' '))));
        }
        if (element == "residential-building") {
          const projectName = element.replace(regex, ' ').split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
          return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work/business-hotel" }, projectName.join(' '))));
        }
        if (element == "sports-center") {
          const projectName = element.replace(regex, ' ').split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
          return (h("li", null, h("stencil-route-link", { class: "hydrated", url: "/work/business-hotel" }, projectName.join(' '))));
        }
      });
    }
  }
  render() {
    return h("ul", { class: "breadcrumb" }, this.setLocation());
  }
};
injectHistory(BreadcrumbNav);
BreadcrumbNav.style = breadcrumbNavCss;

export { BreadcrumbNav as breadcrumb_nav };
