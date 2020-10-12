import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import Input from "../../Components/Input";
import {Delete} from "../../Components/Icons";
import CommentList from "../Delete/CommentList";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 50vh);
  min-height: 100vh;
  min-width: 100vh;
`;
const Images = styled.div`
  width: 500px;
  height: 50vh;
  opacity: 1;
  background-image: url(${(props) => props.url});
  background-size: 500px 50vh;
`;
const Comments = styled.div`
  display: grid;
  grid-template-rows: 100px 300px 80px;
  width: 500px;
  height: 50vh;
`;
const Comment = styled.div`
margin-top: 5px;
font-size:20px;
  display:grid;
  grid-template-columns:50px 400px 50px;
  margin-left:20px;
`;
const Info = styled.div`
  display: grid;
  grid-template-columns: 100px 200px 200px;
  padding-top: 20px;
  padding-left: 20px;
  background-image: ${(props) => props.theme.whiteBox};
  height: 80px;
`;

const Text = styled.div`
  padding-top: 14px;
  font-size: 20px;
`;
const Textarea = styled.div`
  /* margin-top: 5px; */
  background-image: ${(props) => props.theme.whiteBox};
`;
const Span = styled.div`
  margin-left: 150px;
  margin-top: 0px;
`;
const AddComment = styled(TextareaAutosize)`
  margin-top: 10px;
  border: none;
  width: 100%;
  resize: none;
  font-size: 13px;
  &:focus {
    outline: none;
  }
`;
const Detail = ({
  postId,
  url,
  onClick,
  posts,
  avatar,
  username,
  delFeed,
  delComment,
  onKeyPress,
  newComment,
  setSelfComments,
  indexNumber,
  onKeyPressIndex,
  onRemove,
  commentRemove,
  commentAdd
}) => {
  return (
    <Wrapper>
      <Images
        onClick={onClick}
        url={`http://img.youtube.com/vi/${url.substr(32, 11)}/0.jpg`}
      ></Images>
      <Comments url={url}>
        <Info>
          <Avatar size="md" url={avatar} />
          <Text>
            <FatText text={username} />
          </Text>
          <Span>
            <button onClick={delFeed}>삭제</button>
          </Span>
        </Info>
        <Textarea>
          {posts.map(
            (post) =>
              post.id === postId &&
              post.commentCount !== 0 &&
              post.comments.map((texts) => (
              <CommentList text={texts.text} id={texts.id} username={texts.user.username} avatar={avatar} postId={postId} onRemove={onRemove} commentRemove={commentRemove}/>
              ))
          )}
          {commentAdd.map((texts) => (
            <CommentList text={texts.addComment.text} id={texts.addComment.id} username={texts.addComment.user.username} avatar={avatar} postId={postId} onRemove={onRemove} commentRemove={commentRemove} commentAdd={commentAdd}/>
          ))}
        </Textarea>

        <AddComment
          value={newComment.value}
          onChange={newComment.onChange}
          onKeyPress={onKeyPress}
          placeholder={"Add a Comment..."}
        />
      </Comments>
      <Input
        placeholder={"이동할 인덱스 넘버를 입력해주세요..."}
        value={indexNumber.value}
        onChange={indexNumber.onChange}
        type={"text"}
        onKeyPress={onKeyPressIndex}
      />
    </Wrapper>
  );
};
export default Detail;
