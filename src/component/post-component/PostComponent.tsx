import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";

interface IProps{
    post: IPostModel,
    getComments: (id: number) => void



}
const PostComponent: FC<IProps> = ({post, getComments}) => {
    return (
        <div>
            {post.id} - {post.title}
            <button onClick={()=>{
                getComments(post.id)
            }}>Comments</button>

        </div>
    );
};

export default PostComponent;