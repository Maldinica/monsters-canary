import React from 'react'

import './card-list.style.css'

import { Card } from '../card/card.components'
export const CardList = (props) =>(
    //{this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name}</h1>)}
    //return <div className='card-list'>{props.children}</div>;
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key= {monster.id} monster={monster} />
        ))}
    </div>
)