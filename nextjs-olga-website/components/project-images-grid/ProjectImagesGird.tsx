import {ImageData, ProjectDataInterface} from "../../interfaces/interfaces";

function ProjectImagesGrid(props: ProjectDataInterface) {

  return (
    <div className="images-grid">
      {(props.allImages as []).map((image: ImageData, index) => {
        if (index <= 3) {
          return (
            <div className="big" key={index} data-background={image.url}>
              selfclose me please
            </div>
          );
        } else {
          return (
            <div key={index} data-background={image.url}>
              me as well
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProjectImagesGrid;
