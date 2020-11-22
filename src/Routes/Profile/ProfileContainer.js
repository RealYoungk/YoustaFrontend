import React, { useState, useCallback } from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      categories {
        id
        content
        index
      }
      posts {
        id
        comments {
          id
          text
          user {
            username
          }
        }
        categories {
          id
          index
        }
        vod
        likeCount
        commentCount
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const [flag, setFlag] = useState(true);
    const [urlS, setUrls] = useState();
    const [postId, setPostId] = useState();

    const onClick = () => {
      if (flag === true) {
        setFlag(false);
      } else setFlag(true);
    };

    const onChose = (file, id) => {
      setUrls(file);
      setPostId(id);
    };

    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    
    const [commentRemove,setcommentRemove]=useState([]);
    const [commentAdd,setcommentAdd] = useState([]);
    const onRemove =(postId,id)=>{
      setcommentRemove([...commentRemove,id]);
    }
    const add=({addComment},postId)=>{
      setcommentAdd([...commentAdd,{addComment,postId}]);
    }
    const [logOut] = useMutation(LOG_OUT);
    return (
      <ProfilePresenter
        loading={loading}
        logOut={logOut}
        data={data}
        onChose={onChose}
        onClick={onClick}
        flag={flag}
        urlS={urlS}
        postId={postId}
        onRemove={onRemove}
        commentRemove={commentRemove}
        commentAdd={commentAdd}
        add={add}
      />
    );
  }
);
