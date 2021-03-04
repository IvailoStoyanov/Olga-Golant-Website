import { ImageData, ProjectDataInterface } from "../../interfaces/interfaces";
import styles from "./ProjectImagesGrid.module.scss";
import React, { useState } from "react";
import Image from "next/image";

class ProjectImagesGrid extends React.Component<ProjectDataInterface> {
  state = {
    overlayVisible: false,
    imageSrc: "",
  };

  renderImage = (imageSrc: string) => {
    return (
      <>
        <div className={styles.overlayWrapper}>
          <div className={styles.overlay} onClick={this.togglePop}></div>
          <img
            src={imageSrc}
            alt="expanded image of the same image you clicked on"
          />
          <div className={styles.overlayClose} onClick={this.togglePop}>
            Close
          </div>
        </div>
      </>
    );
  };

  togglePop = (e: any) => {
    this.setState({
      overlayVisible: !this.state.overlayVisible,
      imageSrc: e.target.src,
    });
  };

  render() {
    return (
      <>
        <div className={styles.ImagesGrid}>
          {(this.props.allImages as []).map((image: ImageData, index) => {
            if (index <= 3) {
              return (
                <div
                  className={styles.ImagesGrid___big}
                  key={index}
                  onClick={this.togglePop}
                >
                  <Image src={image.url} alt={image.alt} layout="fill" />
                </div>
              );
            } else {
              return (
                <div key={index} onClick={this.togglePop}>
                  <Image src={image.url} alt={image.alt} layout="fill" />
                </div>
              );
            }
          })}
        </div>
        {this.state.overlayVisible ? this.renderImage(this.state.imageSrc) : ""}
      </>
    );
  }
}

export default ProjectImagesGrid;
