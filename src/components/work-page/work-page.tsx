import { Component, h } from "@stencil/core";

@Component({
  tag: "work-page",
  styleUrl: "work-page.scss",
  shadow: true,
})
export class WorkListPage {
  render() {
    return (
      <div class="work-page">
        <header>
          <div class="work-page__hero-container">
            <h1>My Work</h1>
          </div>
        </header>
        other content in here
        <work-list-gird></work-list-gird>
        <slot></slot>
      </div>
    );
  }
}
