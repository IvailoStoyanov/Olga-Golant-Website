import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'work-list-gird',
  styleUrl: 'work-list-gird.scss',
  shadow: true,
})
export class WorkListGird {

  render() {
    return (
      <Host>
        this is a grid for one project
        <slot></slot>
      </Host>
    );
  }

}
