import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const appRootCss = "footer{background:#fff;color:var(--pure-black);padding:20vh 20px;position:relative}footer h2{font-family:var(--accent);padding:20px 0;color:var(--pure-black);max-width:700px;margin:0 auto}footer p{margin:0 auto}footer a{color:var(--red)}@media screen and (min-width: 426px){footer{padding:20vh 0}footer p{margin:0 calc(15% + 4px)}footer h2{margin:0 calc(15% + 4px)}}.developer{position:absolute;left:0;bottom:0}.developer p{font-size:14px;color:#aaa;padding:7px 20px;margin:0 auto}.developer a{color:#aaa}.developer a:hover{color:var(--red);text-decoration:none}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("main-navigation", null), h("main", null, h("stencil-router", { scrollTopOffset: 0 }, h("stencil-route-switch", null, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/work", component: "work-page", exact: true }), h("stencil-route", { url: "/work/project", component: "work-project", exact: true }), h("stencil-route", { url: "/docs/:pageName", routeRender: ({ match }) => (h("doc-component", { page: match.url })) }))), h("footer", { id: "contactMe" }, h("breadcrumb-nav", null), h("h2", null, "Contact Me"), h("p", null, "If you want to hire me or to collaborate on a project, get in touch with me via", " ", h("a", { href: "mailto:olgolant@gmail.com" }, "olgolant@gmail.com"), " or call me on +359 89 593 0121"), h("div", { class: "developer" }, h("p", null, "Website built by", " ", h("a", { href: "http://www.15082862.webdevmmu.uk/", title: "link to Ivaylo Stoyanov's portfolio" }, "Ivaylo Stoyanov")))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
