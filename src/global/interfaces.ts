export interface ProjectItemInterface {
  title: string;
  url: string;
  shortDescription: string;
  longDescription: string;
  titleDescription: string;
  img: string;
  allImages: ImagesArrayInterface[];
}

export interface ImagesArrayInterface {
  url: string;
  alt: string;
}

export interface Test {
  title: string;
  url: string;
  shortDescription: string;
  longDescription: string;
  titleDescription: string;
  img: string;
  allImages: ImagesArrayInterface[];
}