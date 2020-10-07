import React from 'react';
import style from './Card.module.scss'

function Card({title, cardText, imgSrc }) {
    return (
        <div className={style.card}>
            <img src={imgSrc} alt={title}/>
            <h3>{title}</h3>
            <p>{cardText}</p>
        </div>
    );
}

export default Card;