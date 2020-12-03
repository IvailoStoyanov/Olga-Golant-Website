import { Component, Prop, h } from "@stencil/core";
import { ProjectItemInterface } from "../../global/interfaces";

@Component({
  tag: "work-other-projects",
  styleUrl: "work-other-projects.scss",
  shadow: true,
})
export class WorkOtherProjects {
  @Prop() data?: ProjectItemInterface[];

  private otherProjectWrapperElement?: HTMLDivElement;

  componentDidLoad() {
    this.otherProjectWrapperElement
      .querySelectorAll(".other-projects__image")
      .forEach((element: HTMLElement) => {
        element.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.7)), url(${element.dataset.background})`;
      });
  }

  render() {
    return (
      <div
        class="other-projects"
        ref={(el) => (this.otherProjectWrapperElement = el as HTMLDivElement)}
      >
        <h3>Other Projects</h3>
        {(this.data as ProjectItemInterface[]).map((post) => {
          return (
            <stencil-route-link url={post.url}>
              <div
                class="other-projects__image"
                data-background={post.img}
              ></div>
              <h4>{post.title}</h4>
            </stencil-route-link>
          );
        })}
      </div>
    );
  }
}
