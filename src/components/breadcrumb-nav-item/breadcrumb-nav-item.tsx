import { Component, Prop } from "@stencil/core";

@Component({
  tag: "breadcrumb-nav-item",
  styleUrl: "breadcrumb-nav-item.scss",
  shadow: true,
})
export class BreadcrumbNavItem {
  @Prop() link: string;

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
}
