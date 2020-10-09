import { r as registerInstance, h } from './index-5ded1fe5.js';

const appRootCss = "main{background:#f0f0f0;height:1000px}";

const AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", null, h("main-navigation", null)), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }))), h("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates nostrum perferendis, consequuntur culpa velit aspernatur vel id cupiditate explicabo? Quod quo itaque voluptatibus iusto? Facilis facere vitae cum! Neque!"))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
