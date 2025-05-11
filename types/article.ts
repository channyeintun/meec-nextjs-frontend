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
    name: string;
    slug: string;
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
}