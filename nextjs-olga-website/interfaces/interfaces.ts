
export default interface WorkPageProps {
    slugs?: [],
    projectsData: []
}

export interface ImageData {
    url: string,
    alt: string
}

export interface TextSectionInterface {
    hasImage?: boolean,
    children: [{},{}]
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
