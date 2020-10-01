import { gql } from "apollo-boost";

export const ADD_CONTENT = gql`
  mutation addContent($userId: String!, $content: String!, $index: Int!) {
    addContent(userId: $userId, content: $content, index: $index) {
      id
      content
      index
      user {
        username
      }
    }
  }
`;
