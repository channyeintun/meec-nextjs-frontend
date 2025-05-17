import { gql } from "@apollo/client";

export const GET_PUBLICATIONS = gql`
    query Publications($pagination: PaginationArg) {
        publications(pagination: $pagination) {
            documentId
            slug
            title
            description
            publishedDate
            authors {
                name
                slug
            }
            cover {
                url
                alternativeText
                caption
            }
            url
        }
    }
`

export const GET_PUBLICATIONS_RELAY_STYLE = gql`
query Publications_connection($filters: PublicationFiltersInput, $pagination: PaginationArg) {
  publications_connection(filters: $filters, pagination: $pagination) {
    pageInfo {
      total
      page
      pageSize
      pageCount
    }
    nodes {
      documentId
      title
      description
      cover {
        width
        height
        caption
        alternativeText
        documentId
        url
        size
      }
      slug
      authors {
        name
        slug
      }
      url
      recommanded
      publishedDate
    }
  }
}
`