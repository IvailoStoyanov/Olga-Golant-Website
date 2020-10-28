import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "work-list-gird",
  styleUrl: "work-list-gird.scss",
  shadow: true,
})
export class WorkListGird {
  @Prop() description: string;
  @Prop() heading: string;
  @Prop() background: string;
  private projectBackgroundImageElement?: HTMLDivElement;

  componentDidLoad() {
    this.projectBackgroundImageElement.style.backgroundImage = `linear-gradient(transparent, rgba(0, 0, 0, 0.7)), url(${this.background})`;
  }

  render() {
    return (
      <div class="work-list-grid">
        <h3>{this.heading}</h3>
        <div
          class="work-list-grid__image"
          ref={(el) =>
            (this.projectBackgroundImageElement = el as HTMLDivElement)
          }
        />
        <div class="work-list-grid__text-wrapper">
          <p>{this.description}</p>
          <button>Read more</button>
        </div>
      </div>
    );
  }
}
