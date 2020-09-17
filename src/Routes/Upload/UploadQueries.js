import { gql } from "apollo-boost";

export const UPLOAD = gql`
  mutation upload($caption: String!, $vod: String!, $Hashtags: [String]) {
    upload(caption: $caption, vod: $vod, Hashtags: $Hashtags) {
      user {
        username
      }
    }
  }
`;
