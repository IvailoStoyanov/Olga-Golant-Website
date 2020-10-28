import { Component, h } from "@stencil/core";
import projectsList from "../../assets/projects/projectsList.json";
import { projectItemInterface } from "../../global/interfaces";

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
        <main>
        {(projectsList as projectItemInterface[]).map((post) => {
          console.log(post.shortDescription, post.title, post.img);
          return (
            <stencil-route-link url={post.url}>
              <work-list-gird
                description={post.shortDescription}
                heading={post.title}
                background={post.img}
              ></work-list-gird>
            </stencil-route-link>
          );
        })}
        </main>
      </div>
    );
  }
}
