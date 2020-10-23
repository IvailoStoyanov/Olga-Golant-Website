import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'work-list-single',
  styleUrl: 'work-list-single.css',
  shadow: true,
})
export class WorkListSingle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
