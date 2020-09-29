import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import FatText from "../../Components/FatText";
import Input from "../../Components/Input";
import SquarePost from "../../Components/SquarePost";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const CategoryList = styled.div`
  display: flex;
  width: 800px;
  height: 50px;
`;

const CategoryItem = styled.div`
  border: 1px solid white;
  width: 100px;
  /* margin: 0px 5px 15px 0px; */
  padding: 5px 5px;
  text-align: center;
  text-justify: center;
`;

const CheckedCategoryItem = styled.div`
  background-color: ${(props) => props.theme.blueColor};
  color: white;
  width: 100px;
  border: 1px solid black;
  /* margin: 0px 5px 15px 0px; */
  padding: 5px 5px;
  text-align: center;
  text-justify: center;
`;

const CategoryInput = styled(Input)`
  margin: auto auto auto auto;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.lightGreyColor};
  font-size: 1em;
  text-align: center;
`;

const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

const Category = ({
  newContent,
  categories,
  onIndexClick,
  handleKeyPress,
  selfContents,
  userId,
  posts,
  onClick,
  onChose,
  nowIndex,
}) => {
  return (
    <div>
      <CategoryList>
        {selfContents.map((category) =>
          category.checked ? (
            <CheckedCategoryItem onClick={() => onIndexClick(category.index)}>
              <FatText text={category.content} />
            </CheckedCategoryItem>
          ) : (
            <CategoryItem onClick={() => onIndexClick(category.index)}>
              <FatText text={category.content} />
            </CategoryItem>
          )
        )}
        <CategoryInput
          placeholder="추가"
          value={newContent.value}
          onChange={newContent.onChange}
          onKeyPress={handleKeyPress}
        />
      </CategoryList>
      <Posts>
        {nowIndex.current === 0 &&
          posts &&
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
        {nowIndex.current !== 0 &&
          posts &&
          posts.map((post) =>
            post.categories.map((category) => {
              return category.index === nowIndex.current ? (
                <SquarePost
                  onClick={onClick}
                  onChose={onChose}
                  key={post.id}
                  id={post.id}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  vod={post.vod}
                />
              ) : null;
            })
          )}
      </Posts>
    </div>
  );
};

// posts.map((post) => (
//   nowIndex === 0 ?
// <SquarePost
//   onClick={onClick}
//   onChose={onChose}
//   key={post.id}
//   id={post.id}
//   likeCount={post.likeCount}
//   commentCount={post.commentCount}
//   vod={post.vod}
//     />));

export default Category;
