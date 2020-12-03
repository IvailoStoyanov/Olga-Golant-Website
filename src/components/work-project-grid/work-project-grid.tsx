import { Component, Prop, h } from "@stencil/core";
import { ImagesArrayInterface } from "../../global/interfaces";

@Component({
  tag: "work-project-grid",
  styleUrl: "work-project-grid.scss",
  shadow: true,
})
export class WorkProjectGrid {
  @Prop() imagesUrl?: ImagesArrayInterface[];
  private projectBackgroundParentElement?: HTMLDivElement;

  componentDidLoad() {
    this.projectBackgroundParentElement
      .querySelectorAll("div")
      .forEach((element) => {
        element.style.backgroundImage = `url(${element.dataset.background})`;
      });
  }

  render() {
    return (
      <div
        class="images-grid"
        ref={(el) =>
          (this.projectBackgroundParentElement = el as HTMLDivElement)
        }
      >
        {(this.imagesUrl as ImagesArrayInterface[]).map((post, index) => {
          if (index <= 3) {
            return <div class="big" data-background={post.url}></div>;
          } else {
            return <div data-background={post.url}></div>;
          }
        })}
      </div>
    );
  }
}
