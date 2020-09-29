import React, { useCallback, useState, useRef } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import CategoryPresenter from "./CategoryPresenter";
import { ADD_CONTENT } from "./CategoryQueries";

export default ({ userId, categories, posts, onClick, onChose }) => {
  const newContent = useInput("");
  const nextIndex = useRef(categories.length + 1);
  categories.map((category) => {
    category.checked = false;
  });
  const nowIndex = useRef(0);
  const [selfContents, setSelfContents] = useState(
    [{ index: 0, content: "순서대로보기", checked: true }].concat(categories)
  );
  const [addContentMutation] = useMutation(ADD_CONTENT, {
    variables: {
      userId: userId,
      content: newContent.value,
      index: nextIndex.current,
    },
  });

  const onIndexClick = (index) => {
    nowIndex.current = index;
    setSelfContents(
      selfContents.map((content) => {
        return content.index === index
          ? { ...content, checked: true }
          : { ...content, checked: false };
      })
    );
  };

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      try {
        const {
          data: { addContent },
        } = await addContentMutation();
        setSelfContents([...selfContents, addContent]);
        newContent.setValue("");
        nextIndex.current += 1;
      } catch (e) {
        toast.error("Can't add Category");
      }
    }
  };

  return (
    <CategoryPresenter
      categories={categories}
      onIndexClick={onIndexClick}
      handleKeyPress={handleKeyPress}
      newContent={newContent}
      selfContents={selfContents}
      userId={userId}
      posts={posts}
      onClick={onClick}
      onChose={onChose}
      nowIndex={nowIndex}
    />
  );
};
