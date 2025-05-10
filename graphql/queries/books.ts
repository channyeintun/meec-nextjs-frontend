import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query Books($locale: I18NLocaleCode, $pagination: PaginationArg) {
        books(locale: $locale, pagination: $pagination) {
            slug
            title
            description
            cover {
                url
                alternativeText
                caption
            }
        }
    }
`