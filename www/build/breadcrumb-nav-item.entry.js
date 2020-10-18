import { r as registerInstance } from './index-5ded1fe5.js';

const breadcrumbNavItemCss = "";

const BreadcrumbNavItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    // return this.link ? (
    //   <li>
    //     <a href={this.link}>
    //       <slot></slot>
    //     </a>
    //   </li>
    // ) : (
    //   <li>
    //     <slot></slot>
    //   </li>
    // );
  }
};
BreadcrumbNavItem.style = breadcrumbNavItemCss;

export { BreadcrumbNavItem as breadcrumb_nav_item };
