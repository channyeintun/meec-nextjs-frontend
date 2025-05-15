export interface Article {
    title: string;
    description: string;
    slug: string;
    cover: Cover;
    body: Body[];
    createdAt: string;
    publishedAt: string;
    locale: string;
    author: Author | null;
    category: Category;
    topics: Category[];
}

export interface Author {
    documentId: string;
    name: string;
}

export interface Body {
    type: string;
    children: BodyToken[];
}

export interface BodyToken {
    text: string;
    type: string;
}

export interface Category {
    documentId: string;
    name: string;
    slug: string;
    articles?: Article[];
}

export interface Cover {
    width: number;
    height: number;
    caption: string | null;
    alternativeText: string | null;
    ext: string;
    mime: string;
    url: string;
}

export interface ArticlesData {
    articles: Article[];
    articles_connection: {
        pageInfo: PageInfo;
    }
}

export interface PageInfo {
    total: number;
    page: number;
    pageSize: number;
    pageCount: number;
}

export interface ArticleConnection {
    nodes: Article[];
    pageInfo: PageInfo;
}

export interface ArticleConnectionData {
    articles_connection: ArticleConnection
}