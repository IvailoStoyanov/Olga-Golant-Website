import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const breadcrumbNavCss = ":host{display:block}";

const BreadcrumbNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
BreadcrumbNav.style = breadcrumbNavCss;

export { BreadcrumbNav as breadcrumb_nav };
