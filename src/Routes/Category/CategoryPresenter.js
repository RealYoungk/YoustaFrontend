import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Input from "../../Components/Input";

const CategoryList = styled.div`
  display: flex;
  height: 50px;
`;

const CategoryItem = styled.div`
  border: 1px solid black;
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

const Category = ({ newContent, categories, onIndexClick, handleKeyPress, selfContents }) => {
  return (
    <CategoryList>
      {selfContents.map((category) =>
        category.checked ? (
          <CheckedCategoryItem onClick={() => onIndexClick(category.index)}>
            {category.content}
          </CheckedCategoryItem>
        ) : (
          <CategoryItem onClick={() => onIndexClick(category.index)}>
            {category.content}
          </CategoryItem>
        )
      )}
      {/* {categories.map((category) =>
        category.checked ? (
          <CheckedCategoryItem>{category.content}</CheckedCategoryItem>
        ) : (
          <CategoryItem>{category.content}</CategoryItem>
        )
      )} */}
      <CategoryInput
        placeholder="추가"
        value={newContent.value}
        onChange={newContent.onChange}
        onKeyPress={handleKeyPress}
      />
    </CategoryList>
  );
};

export default Category;
