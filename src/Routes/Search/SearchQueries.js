import { gql } from "apollo-boost";

export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      vod
      likeCount
      commentCount
      caption
    }
    searchUser(term: $term) {
      id
      avatar
      username
      isFollowing
      isSelf
    }
  }
`;