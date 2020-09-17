import { gql } from "apollo-boost";

export const UPLOAD = gql`
  mutation upload($caption: String!, $vod: String!) {
    upload(caption: $caption, vod: $vod) {
      user {
        username
      }
    }
  }
`;
