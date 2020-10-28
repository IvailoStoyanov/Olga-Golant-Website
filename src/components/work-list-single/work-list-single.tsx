import { Component, h } from "@stencil/core";
import projectsList from "../../assets/projects/projectsList.json";
import { projectItemInterface } from "../../global/interfaces";

@Component({
  tag: "work-list-single",
  styleUrl: "work-list-single.scss",
  shadow: true,
})
export class WorkListSingle {
  private projectItemsWrapperElement?: HTMLDivElement;

  componentDidLoad() {
     //consider using a PROP not the queryselectorAll
    this.projectItemsWrapperElement
      .querySelectorAll(".project-item") 
      .forEach((element: HTMLElement) => {
        element.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.7)), url(${element.dataset.background})`;
      });
  }

  render() {
    return (
      <div
        class="project-items-wrapper"
        ref={(el) => (this.projectItemsWrapperElement = el as HTMLDivElement)}
      >
        {(projectsList as projectItemInterface[]).map((post, index) => {
          if (index <= 2) {
            return (
              <stencil-route-link url={post.url}>
                <div class="project-item" data-background={post.img}>
                  <div class="project-item__text-container">
                    <h4>{post.title}</h4>
                    <span class="project-item__project-button">
                      View the project
                    </span>
                  </div>
                </div>
              </stencil-route-link>
            );
          }
        })}
      </div>
    );
  }
}
