import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";
import Detail from "../Detail";
import Category from "../Category";
import { Setting } from "../../Components/Icons";
import _File from "../../Components/File"
import Dialog from "../../Components/Dialog"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
  width: 120%;

`;

const Username = styled.span`
  font-size: 26px;
  display: block;
  margin-right:20px;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const SettingS = styled.div`
margin-left:20px
`;
const Blind =styled.div`
background-color: rgba(0, 0, 0, 0.6);
opacity: 0.8;
`;
const HeaderLink = styled(Link)`
width:max;
`;
export default ({ loading, data, logOut, onClick, flag, onChose, urlS, postId,onRemove,commentRemove,commentAdd,add,option,onOption }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {
    const {
      seeUser: {
        id,
        avatar,
        username,
        fullName,
        isFollowing,
        isSelf,
        bio,
        followingCount,
        followersCount,
        postsCount,
        posts,
        categories,
      },
    } = data;
    if (flag) {
      return (
        <Wrapper>
          <Helmet>
            <title>{username} | Prismagram</title>
          </Helmet>
          <Header>
            <HeaderColumn>
              <Avatar size="lg" url={avatar} />
            </HeaderColumn>
            <HeaderColumn>
              <UsernameRow>
                <Username>{username}</Username>
                {isSelf ? (
                  <HeaderLink to="/account">
                  <Button text="프로필 변경"/>
                 </HeaderLink>
                  ) : (
                  <FollowButton isFollowing={isFollowing} id={id} />
                )}
                 <SettingS onClick={onOption}><Setting /></SettingS>
                 <Dialog _flag={option} onOption={onOption} logOut={logOut}/>
              </UsernameRow>
              <Counts>
                <Count>
                  <FatText text={String(postsCount)} /> posts
                </Count>
                <Count>
                  <FatText text={String(followersCount)} /> followers
                </Count>
                <Count>
                  <FatText text={String(followingCount)} /> following
                </Count>
              </Counts>
              <FullName text={fullName} />
              <Bio>{bio}</Bio>
            </HeaderColumn>
          </Header>
          <Category
            categories={categories}
            userId={id}
            posts={posts}
            onClick={onClick}
            onChose={onChose}
          />
          {/* <Posts>
            {posts &&
              posts.map((post) => (
                <SquarePost
                  onClick={onClick}
                  onChose={onChose}
                  key={post.id}
                  id={post.id}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  vod={post.vod}
                />
              ))}
          </Posts> */}
        </Wrapper>
      );
    } else {
      return (
        <Detail
          onClick={onClick}
          url={urlS}
          posts={posts}
          avatar={avatar}
          username={username}
          postId={postId}
          categories={categories}
          onRemove={onRemove}
          commentRemove={commentRemove}
          commentAdd={commentAdd}
          add={add}
        ></Detail>
      );
    }
  }
  return null;
};
