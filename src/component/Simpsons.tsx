import React, {FC} from 'react';
import {ISimpsonsModel} from "../model/ISimpsonsModel";

type IProps = {character: ISimpsonsModel}
const Simpsons : FC<IProps>= ({character}) => {
    const {
        name,
        surname,
        photo,
        age,
        info } = character;
    return (
        <div>
            <h3>{name} {surname}</h3>
            <p>{info} {age}</p>
            <img src={photo} alt={name}/>

        </div>
    );
};

export default Simpsons;