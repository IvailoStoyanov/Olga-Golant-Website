
import { AllProjectsDataInterface } from "../../interfaces/interfaces";

function HomeProjectBanners(props: AllProjectsDataInterface) {
  const dataArray = props.projectsData;

  console.log('get the projectList data here:', dataArray);
  
  return (
    <div className="project-items-wrapper">
      {/* {(projectsList as ProjectDataInterface[]).map((post, index) => {
        if (index <= 2) {
          return (
            <Link href={post.url}>
              <div className="project-item" data-background={post.img}>
                <div className="project-item__text-container">
                  <h4>{post.title}</h4>
                  <span className="project-item__project-button">
                    View the project
                  </span>
                </div>
              </div>
            </Link>
          );
        }
      })} */}
    </div>
  );
}

export default HomeProjectBanners;
