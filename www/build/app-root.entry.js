import { r as registerInstance, h, e as Host } from './index-a43a2740.js';
import { s as scrollToDesiredLocation } from './defaultFunction-4fa2bd33.js';

const appRootCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}footer{background:#fff;color:var(--pure-black);padding:20vh 20px;position:relative}footer h2{padding:20px 0;color:var(--pure-black);max-width:700px}footer a{color:var(--red)}@media screen and (min-width: 426px){footer{padding:20vh calc(15% + 4px)}}.developer{position:absolute;left:0;bottom:0}.developer p{font-size:14px;color:#aaa;padding:7px 20px;margin:0 auto}.developer a{color:#aaa}.developer a:hover{color:var(--red);text-decoration:none}.skipLink{position:fixed;top:-30em;background:none;border:none;color:var(--red);font-size:16px}.skipLink:focus{top:0}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidRender() {
    // this.mainNav.scrollToElement = this.contactMeSection;
  }
  render() {
    return (h(Host, null, h("button", { class: "skipLink", title: "skip to main content", onClick: () => scrollToDesiredLocation(this.contactMeSection) }, "skip to main Content"), h("main", null, h("stencil-router", { scrollTopOffset: 0 }, h("stencil-route-switch", null, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/work", component: "work-page" }), h("stencil-route", { url: "/work/:pageName", routeRender: ({ match }) => (h("work-project", { page: match.url })) }))), h("footer", { id: "contactMe", ref: (el) => (this.contactMeSection = el) }, h("breadcrumb-nav", null), h("h2", null, "Contact Me"), h("p", null, "If you want to hire me or to collaborate on a project, get in touch with me via", " ", h("a", { href: "mailto:olgolant@gmail.com" }, "olgolant@gmail.com"), " or call me on +359 89 593 0121"), h("div", { class: "developer" }, h("p", null, "Website built by", " ", h("a", { href: "http://www.15082862.webdevmmu.uk/", title: "link to Ivaylo Stoyanov's portfolio" }, "Ivaylo Stoyanov")))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
