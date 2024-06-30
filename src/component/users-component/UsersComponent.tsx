import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../../model/IUserModel";
import {getAllUsers, getCommentsOfPostById, getPostsOfUserById} from "../../services/api.service";
import {IPostModel} from "../../model/IPostModel";

import UserComponent from "../user-component/UserComponent";
import PostsComponent from "../posts-component/PostsComponent";
import {ICommentModel} from "../../model/ICommentModel";
import CommentsComponent from "../comments-component/CommentsComponent";






const UsersComponent : FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([])


    useEffect(() => {
        getAllUsers().then(value => setUsers([...value]))
    }, []);
    const getPosts = (id:number) => {
      getPostsOfUserById(id).then(posts => setPosts([...posts]))
    };
    const getComments = (id:number) => {
        getCommentsOfPostById(id).then(comments => setComments([...comments]))

    }



    return (
        <div>
            <div>
                {
                    users.map((user) => <UserComponent key={user.id} user={user} getPosts={getPosts}/>)
                }
            </div>
            <hr/>
            <div>
                <PostsComponent posts={posts} getComments={getComments}/>
            </div>
            <hr/>
                <CommentsComponent comments={comments}/>
        </div>
    );
};

export default UsersComponent;