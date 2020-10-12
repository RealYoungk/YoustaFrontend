import React, { useEffect, useState } from "react";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import { Delete } from "../../Components/Icons";
import styled from "styled-components";
import { useMutation } from "react-apollo-hooks";
import { DELETE_COMMENT } from "./CommentDelete";
import { useHistory, withRouter } from "react-router-dom";

const Comment = styled.div`

font-size:20px;
  display:grid;
  grid-template-columns:50px 400px 50px;
  margin-top: 5px;
  margin-left:20px;
`;

const Delbutton=styled.div`
opacity:0;

`;
const Hidden = styled.div`
   &:hover {
     ${Delbutton}{
     opacity:1;
     }
   }
`;

const CommentList = ({posts,text,id,username,avatar,postId,onRemove,commentRemove})=>{
    const [deleteComment] = useMutation(DELETE_COMMENT,{ variables:{ id:id , post:postId} });
    const del =()=>
    {
      onRemove(postId,id);
      deleteComment();
    }
    let flag=0;
    commentRemove.map((list) => list===id?(flag=1):(null));
    return(
      (flag===0)?(
    <Hidden>
    <Comment>
    <Avatar size="sm" url={avatar} />
    <FatText text={username + " : " + text} />
    <Delbutton onClick={del}><Delete /></Delbutton>
    </Comment>
    </Hidden>
    ):(null));
}
export default CommentList;