import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query Articles($locale: I18NLocaleCode, $pagination: PaginationArg) {
    articles(locale: $locale, pagination: $pagination) {
      createdAt
      title
      description
      body
      category {
        name
      }
      topics {
        createdAt
        name
      }
      cover {
        url
      }
    }
  }
`;