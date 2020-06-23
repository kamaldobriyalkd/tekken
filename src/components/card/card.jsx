import React from 'react';
import './card.css';

export const Card = (props) =>(
        <div className='card-container'>
                <img src={props.fighter.img} alt="fighter"/>
                <h2>{props.fighter.name}</h2>
                </div>
);