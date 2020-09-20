import React, { useState } from "react";
import styled from "styled-components";
import { UPLOAD } from "./UploadQueries";
import Input from "../../Components/Input";
import { withRouter } from "react-router-dom";
import useInput from "../../Hooks/useInput";
import { useMutation, useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { ME } from "../../SharedQueries";
import { Helmet } from "react-helmet";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  ${(props) => props.theme.whiteBox} /* padding: 1rem; */
  height: 50vh;
  text-align: center;
`;

const UrlInput = styled(Input)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 80%;
  background-color: ${(props) => props.theme.lightGreyColor};
  font-size: 1em;
  text-align: center;
`;

const CaptionInput = styled(Input)`
  background-color: ${(props) => props.theme.lightGreyColor};
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  width: 80%;
  font-size: 0.8em;
  text-align: center;
`;

const Selection = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 180px;
  width: 30%;
`;

export default withRouter(({ history, location }) => {
  const vod = useInput("");
  const caption = useInput("");
  const [uploadMutation] = useMutation(UPLOAD, {
    variables: {
      caption: caption.value,
      vod: vod.value,
    },
  });

  const { data } = useQuery(ME);

  const onSubmit = async (e) => {
    try {
      await uploadMutation();
      window.location.href = `/`;
      // history.push(`/${data.me.username}`);
    } catch (e) {
      toast.error("Cant upload post");
    }
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Upload | Prismagram</title>
      </Helmet>
      <form onSubmit={onSubmit}>
        <UrlInput placeholder={"URL"} {...vod} />
        <CaptionInput placeholder={"Caption"} {...caption} />
        <Selection>
          <Button text={"Upload"} />
        </Selection>
      </form>
    </Wrapper>
  );
});
