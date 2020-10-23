import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const workListSingleCss = ":host{display:block}";

const WorkListSingle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
WorkListSingle.style = workListSingleCss;

export { WorkListSingle as work_list_single };
