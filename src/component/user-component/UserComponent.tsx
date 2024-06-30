import React, {FC} from 'react';
import {IUserModel} from "../../model/IUserModel";

interface IProps{
    user: IUserModel,
    getPosts: (id: number) => void

}

const UserComponent:FC<IProps> = ({user,getPosts}) => {
    return (
        <div>
            {user.id} - {user.name} <button onClick={()=>{
                getPosts(user.id);
        }}>show posts of current user</button>
        </div>
    );
};

export default UserComponent;