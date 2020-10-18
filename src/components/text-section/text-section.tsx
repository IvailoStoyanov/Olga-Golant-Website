import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'text-section',
  styleUrl: 'text-section.scss',
  shadow: true,
})
export class TextSection {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
