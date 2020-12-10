
export default interface WorkPageProps {
    slugs: []
}

export interface AllProjectsDataInterface {
    projectsData: [];
}

export interface ImageData {
    url: string,
    alt: string
}

export interface ProjectDataInterface {
    title: string,
    url: string,
    titleDescription: string,
    shortDescription: string,
    longDescription: string,
    img: string,
    allImages: [],
}
