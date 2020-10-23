import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const workProjectCss = ":host{display:block}";

const WorkProject = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, "Project", h("header", null), h("slot", null)));
  }
};
WorkProject.style = workProjectCss;

export { WorkProject as work_project };
