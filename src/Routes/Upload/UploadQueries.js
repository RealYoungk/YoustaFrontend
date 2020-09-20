import { gql } from "apollo-boost";

export const UPLOAD = gql`
  mutation upload($caption: String!, $vod: String!, $hashtags: String) {
    upload(caption: $caption, vod: $vod, hashtags: $hashtags) {
      user {
        username
      }
    }
  }
`;

// export const ADD_HASHTAGS = gql`
//   mutation addHashtags($postId: String!, $hashtags: String!) {
//     addHashtags(postId: $postId, hashtags: $hashtags) {
//       id
//       hashtags
//       # user{
//       #   username
//       # }
//     }
//   }
// `;
