import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query Articles($locale: I18NLocaleCode, $pagination: PaginationArg) {
    articles(locale: $locale, pagination: $pagination) {
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
      }
    }
  }
`;