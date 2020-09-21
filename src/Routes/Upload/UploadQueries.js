import { gql } from "apollo-boost";

export const UPLOAD = gql`
  mutation upload($caption: String!, $vod: String!, $hashtags: String) {
    upload(caption: $caption, vod: $vod, hashtags: $hashtags) {
<<<<<<< HEAD
>>>>>>> master
=======
  mutation upload($caption: String!, $vod: String!, $hashtags: String) {
    upload(caption: $caption, vod: $vod, hashtags: $hashtags) {
>>>>>>> c52c5949eeaa4271c4ad5f93671845b44d94dfab
=======
>>>>>>> c52c5949eeaa4271c4ad5f93671845b44d94dfab
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
