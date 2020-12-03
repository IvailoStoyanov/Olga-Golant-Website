import { Component, Prop, h } from "@stencil/core";
import { LocationSegments, injectHistory } from "@stencil/router";

@Component({
  tag: "breadcrumb-nav",
  styleUrl: "breadcrumb-nav.scss",
  shadow: true,
})
export class BreadcrumbNav {
  @Prop() location: LocationSegments;

  render() {
    return <ul class="breadcrumb">{setLocation(this)}</ul>;
  }
}

injectHistory(BreadcrumbNav);

const renderLastBreadcrumb = (el: any) => {
  const regex = /-/gi;
  const projectName = el
    .replace(regex, " ")
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

  return (
    <li>
      <stencil-route-link class="hydrated" url="/work/business-hotel">
        {projectName.join(" ")}
      </stencil-route-link>
    </li>
  );
};

const setLocation = (self) => {
  if (self.location.pathname == "/") {
    return null;
  } else {
    return self.location.pathname.split("/").map((element) => {
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
        return renderLastBreadcrumb(element);
      }
      if (element == "residential-building") {
        return renderLastBreadcrumb(element);
      }
      if (element == "sports-center") {
        return renderLastBreadcrumb(element);
      }
      if (element == "town-hall") {
        return renderLastBreadcrumb(element);
      }
      if (element == "private-house") {
        return renderLastBreadcrumb(element);
      }
    });
  }
};
