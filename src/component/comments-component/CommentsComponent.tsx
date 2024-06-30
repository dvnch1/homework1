import React, {FC} from 'react';

import {ICommentModel} from "../../model/ICommentModel";
import CommentComponent from "../comment-component/CommentComponent";

interface IProps {
    comments: ICommentModel[]
}
const CommentsComponent:FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;