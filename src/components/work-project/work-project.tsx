import { Component, Host, h, Prop } from "@stencil/core";
import projectsList from "../../assets/projects/projectsList.json";
import { ProjectItemInterface } from "../../global/interfaces";

@Component({
  tag: "work-project",
  styleUrl: "work-project.scss",
  shadow: true,
})

export class WorkProject {
  private header?: HTMLElement;

  @Prop() page?: string;
  data?: ProjectItemInterface;
  otherProjectsData?: ProjectItemInterface[];

  componentWillRender() {
    if (this.page) {
      const post = (this.data = (projectsList as ProjectItemInterface[]).find(
        (blog) => blog.url === this.page
      ));
      if (post) {
        insertMetaTags(post);
        document.title = post.title;
      }
      this.otherProjectsData = limitOtherProjectsData(projectsList.indexOf(post));
    }
  }

  componentDidRender() {
    renderBackgroundImage(this.header, this.data.img);
  }

  render() {
    return (
      <Host>
        <header ref={(el) => (this.header = el as HTMLElement)}>
          <h1>{this.data.title}</h1>
          <p>
            A small introduction to the project itself. Aenean vel scelerisque
            ex.
          </p>
        </header>
        <text-section>
          <h2>Description</h2>
          <p>{this.data.longDescription}</p>
        </text-section>
        <work-project-grid imagesUrl={this.data.allImages}></work-project-grid>
        <work-other-projects data={this.otherProjectsData}></work-other-projects>
      </Host>
    );
  }
}

const insertMetaTags = (post: ProjectItemInterface) => {
  createOgTag("og:title", `${post.title} by Olga Golant`);
  createOgTag("og:description", post.titleDescription);
  createOgTag("og:url", window.location.href);
  createOgTag("og:image", `${window.location.origin}${post.img}`);
};

const createOgTag = (type: string, content: string) => {
  let el = document.head.querySelector(`meta[property="${type}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", type);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  } else {
    el.setAttribute("property", type);
    el.setAttribute("content", content);
  }
};

const renderBackgroundImage = (element, backgroundLocation) => {
  element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${backgroundLocation})`;
};

const limitOtherProjectsData = (currentPageIdnex: number) => {
  return projectsList.filter((projectObject) => {
    if (currentPageIdnex == projectsList.length - 1) {
      if (
        projectObject == projectsList[0] ||
        projectObject == projectsList[1]
      ) {
        return projectObject;
      }
    } else if (currentPageIdnex == projectsList.length - 2) {
      if (
        projectObject == projectsList[currentPageIdnex + 1] ||
        projectObject == projectsList[0]
      ) {
        return projectObject;
      }
    } else {
      if (
        projectObject == projectsList[currentPageIdnex + 1] ||
        projectObject == projectsList[currentPageIdnex + 2]
      ) {
        return projectObject;
      }
    }
  });
};
