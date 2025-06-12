import { gql } from "@apollo/client";

export const GET_TOPICS = gql`
query Topics {
  topics {
    slug
    name
    articles {
      documentId
    }
  }
}
`