import React, { useState } from 'react'
import { Template } from '../Template/Template'

export const SingleCharacterPage = () => {
    const [character, setCharacter] = useState({})
    return (
        <Template
        content={
            <div className='container single-item__container'>
                <h1 className='single-item__title'>{character.name}</h1>
                <ul className='single-item__list'>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                    <li className='single-item__list-item'><span>Name</span>:</li>
                </ul>
            </div>
        }
        />
    )
}
