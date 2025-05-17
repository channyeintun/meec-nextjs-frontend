import { Author, Cover, PageInfo } from "./article";

export interface Publication {
    documentId: string;
    title: string;
    description: string;
    cover: Cover;
    slug: string;
    authors: Author[];
    url: string;
    recommanded: boolean | null;
    publishedDate: string;
}

export interface PublicationsData {
    publications: Publication[]
}

export interface PublicationsConnectionData {
    publications_connection: PublicationsConnection;
}

export interface PublicationsConnection {
    pageInfo: PageInfo;
    nodes: Publication[];
}
