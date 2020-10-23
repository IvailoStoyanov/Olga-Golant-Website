import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const workListGirdCss = ":host{display:block}";

const WorkListGird = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, "this is a grid for one project", h("slot", null)));
  }
};
WorkListGird.style = workListGirdCss;

export { WorkListGird as work_list_gird };
