import { gql } from "apollo-boost";

export const DELETEPOST = gql`
  mutation editPost($id: String!) {
    editPost(action: DELETE, id: $id) {
      id
    }
  }
`;

export const ADD_INDEX = gql`
  mutation addIndex($postId: String!, $categoryId: String!) {
    addIndex(postId: $postId, categoryId: $categoryId) {
      id
    }
  }
`;
