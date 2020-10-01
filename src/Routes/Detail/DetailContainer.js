import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { ADD_COMMENT } from "../../Components/Post/PostQueries";
import useInput from "../../Hooks/useInput";
import { DELETEPOST } from "../Delete/DeleteQueries";
import DetailPresenter from "./DetailPresenter";
import { ADD_INDEX } from "./DetailQueries";

export default ({ postId, url, onClick, posts, avatar, username, categories }) => {
  const [delMutation] = useMutation(DELETEPOST, { variables: { id: postId } });
  const del = () => {
    delMutation();
    window.location.reload(true);
  };

  const indexNumber = useInput(1);
  const comment = useInput("");
  let categoryId = categories[indexNumber.value - 1];
  if (categoryId) {
    categoryId = categoryId.id;
  }
  const [selfComments, setSelfComments] = useState([]);
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: {
      postId: postId,
      text: comment.value,
    },
  });

  const [addIndexMutation] = useMutation(ADD_INDEX, {
    variables: {
      postId: postId,
      categoryId: categoryId,
    },
  });

  const onKeyPress = async (event) => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment },
        } = await addCommentMutation();
        setSelfComments([...selfComments, addComment]);
        comment.setValue("");
      } catch {
        toast.error("Can't send comment");
      }
    }
  };

  const onKeyPressIndex = async (event) => {
    const { which } = event;
    //상태 안에 상태가 안드감
    if (which === 13) {
      // event.preventDefault();

      try {
        // categoryId = categories[indexNumber.value - 1].id;
        await addIndexMutation();
        indexNumber.setValue("");
        window.location.reload(true);
      } catch (e) {
        toast.error("Can't send index");
      }
    }
  };

  return (
    <DetailPresenter
      postId={postId}
      url={url}
      onClick={onClick}
      posts={posts}
      avatar={avatar}
      username={username}
      del={del}
      onKeyPress={onKeyPress}
      newComment={comment}
      setSelfComments={selfComments}
      indexNumber={indexNumber}
      onKeyPressIndex={onKeyPressIndex}
    />
  );
};
