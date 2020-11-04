import React from 'react'
import './card.style.css'
export const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.name}?set=set2&size=250x250`}/>
        <h1>{props.monster.name}</h1>
        <h2>{props.monster.email}</h2>
    </div>
);