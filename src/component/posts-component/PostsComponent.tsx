import React, {FC} from 'react';
import {IPostModel} from "../../model/IPostModel";

import PostComponent from "../post-component/PostComponent";



interface IProps{
    posts: IPostModel[],
    getComments: (id: number) => void

}
const PostsComponent: FC<IProps> = ({posts, getComments}) => {

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post} getComments={getComments}/>)
            }
        </div>
    );
};

export default PostsComponent;