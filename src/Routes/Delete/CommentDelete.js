import {gql} from "apollo-boost";

export const DELETE_COMMENT=gql`
mutation deleteComment($id:String! ){
    deleteComment(id:$id )
    {
        text
    }
}
`;