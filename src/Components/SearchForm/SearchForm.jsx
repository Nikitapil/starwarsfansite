import React, { useState } from 'react'
import './searchform.scss'

export const SearchForm = ({setQuery}) => {
    const [searchValue, setSearchValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setQuery(searchValue)
    }

    return (
        <form className='searchform' onSubmit={submitHandler}>
            <input type="search"  className='searchform__input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button className='searchform__btn'>Найти</button>
        </form>
    )
}
