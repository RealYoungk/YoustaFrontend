import React from "react";
import styled from "styled-components";
import _file from "../Components/File";
import Avatar from "../Components/Avatar";
const Wrapper = styled.div`
  min-height: 100vh;
`;

export default () => {
    return (
        <Wrapper>
            <Avatar></Avatar>
            <>{`프로필 사진`}<_file/></>
        </Wrapper>
    )
}