import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const workListCss = ":host{display:block}";

const WorkList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", null, "BANANAS")));
  }
};
WorkList.style = workListCss;

export { WorkList as work_list };
