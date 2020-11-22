import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, 160px);
  grid-template-rows: 160px;
  grid-auto-rows: 160px;
`;

const PostSection = styled(Section)`
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const HashTagPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
      const arr = data.searchPost.filter((post)=>(searchTerm===post.caption));
      console.log(arr);
      console.log(searchTerm + " + sex");
    return (
      <Wrapper>
        <PostSection>
          {data.searchPost.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            arr.map((post) => (
              <SquarePost
                key={post.id}
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                vod={post.vod}
              />
            ))
          )}
        </PostSection>
      </Wrapper>
    );
  }
};

HashTagPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
  likeCount: PropTypes.number,
  vod: PropTypes.string,
};

export default HashTagPresenter;
