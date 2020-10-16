import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'breadcrumb-nav',
  styleUrl: 'breadcrumb-nav.scss',
  shadow: true,
})
export class BreadcrumbNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
