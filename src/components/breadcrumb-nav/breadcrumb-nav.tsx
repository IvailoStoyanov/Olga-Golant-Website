import { Component, Prop, h } from "@stencil/core";
import { LocationSegments, injectHistory } from "@stencil/router";

@Component({
  tag: "breadcrumb-nav",
  styleUrl: "breadcrumb-nav.scss",
  shadow: true,
})
export class BreadcrumbNav {
  @Prop() location: LocationSegments;

  setLocation() {
    if (this.location.pathname == "/") {
      return null;
    } else {
      const regex = /-/gi;

      return this.location.pathname.split("/").map((element) => {
        if (element == "") {
          return (
            <li>
              <stencil-route-link class="hydrated" url="/">
                Home
              </stencil-route-link>
            </li>
          );
        }
        if (element == "work") {
          return (
            <li>
              <stencil-route-link class="hydrated" url="/work">
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </stencil-route-link>
            </li>
          );
        }
        if (element == "business-hotel") {
          const projectName = element.replace(regex, ' ').split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });

          return (
            <li>
              <stencil-route-link class="hydrated" url="/work/business-hotel">
                {projectName.join(' ')}
              </stencil-route-link>
            </li>
          );
        }
        if (element == "residential-building") {
          const projectName = element.replace(regex, ' ').split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });

          return (
            <li>
              <stencil-route-link class="hydrated" url="/work/business-hotel">
                {projectName.join(' ')}
              </stencil-route-link>
            </li>
          );
        }
        if (element == "sports-center") {
          const projectName = element.replace(regex, ' ').split(' ').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });

          return (
            <li>
              <stencil-route-link class="hydrated" url="/work/business-hotel">
                {projectName.join(' ')}
              </stencil-route-link>
            </li>
          );
        }
      });
    }
  }

  render() {
    return <ul class="breadcrumb">{this.setLocation()}</ul>;
  }
}

injectHistory(BreadcrumbNav);
