import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'work-project',
  styleUrl: 'work-project.scss',
  shadow: true,
})
export class WorkProject {

  render() {
    return (
      <Host>
        Project
        <header></header> 
        <slot></slot>
      </Host>
    );
  }
}
