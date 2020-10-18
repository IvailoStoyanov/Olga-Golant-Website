import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'work-list',
  styleUrl: 'work-list.scss',
  shadow: true,
})
export class WorkList {

  render() {
    return (
      <Host>
        <div>BANANAS</div>
      </Host>
    );
  }

}
