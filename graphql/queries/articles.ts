import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query Articles($locale: I18NLocaleCode, $pagination: PaginationArg, $filters: ArticleFiltersInput) {
    articles(locale: $locale, pagination: $pagination, filters: $filters) {
      slug
      createdAt
      title
      description
      body
      category {
        slug
        name
      }
      topics {
        slug
        createdAt
        name
      }
      cover {
        url
        alternativeText
        caption
      }
    }
  articles_connection {
    pageInfo {
      total
      page
      pageSize
      pageCount
    }
  }
}
`;

export const GET_ARTICLES_BY_SLUG = gql`
  query Articles($filters: ArticleFiltersInput, $pagination: PaginationArg, $locale: I18NLocaleCode) {
    articles(filters: $filters, pagination: $pagination, locale: $locale) {
      title
      description
      slug
      cover {
        width
        height
        caption
        alternativeText
        ext
        mime
        url
      }
      body
      createdAt
      publishedAt
      locale
      author {
        name
      }
      category {
        name
        slug
      }
      topics {
        name
        slug
      }
    }
  }
`

export const GET_ARTICLES_SLUGS = gql`
  query Articles($locale: I18NLocaleCode) {
    articles(locale: $locale) {
      slug
    }
  }
`

export const GET_ARTICLES_RELAY_STYLE = gql`
query Articles_connection($pagination: PaginationArg, $filters: ArticleFiltersInput) {
  articles_connection(pagination: $pagination, filters: $filters) {
    nodes {
      title
      slug
      description
      cover {
        alternativeText
        caption
        width
        height
        size
        url
        previewUrl
      }
      author {
        name
        documentId
      }
      category {
        documentId
        name
        slug
      }
      topics {
        documentId
        name
        slug
      }
      body
      publishedAt
      locale
      documentId
      createdAt
    }
    pageInfo {
      total
      page
      pageSize
      pageCount
    }
  }
}
`