import { gql } from "apollo-boost";

export const UPLOAD = gql`
<<<<<<< HEAD
  mutation upload($caption: String!, $vod: String!) {
    upload(caption: $caption, vod: $vod) {
=======
  mutation upload($caption: String!, $vod: String!, $hashtags: String) {
    upload(caption: $caption, vod: $vod, hashtags: $hashtags) {
>>>>>>> master
      user {
        username
      }
    }
  }
`;
<<<<<<< HEAD
=======

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
>>>>>>> master
