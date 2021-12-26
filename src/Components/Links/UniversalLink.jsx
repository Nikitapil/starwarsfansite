import React from 'react'
import { Link } from 'react-router-dom'

export const UniversalLink = ({item, basePath, className}) => {
    const id = item.url.split('').filter(letter => !isNaN(Number(letter))).join('')
    return (
        <Link className={`${className}-link`} to={`/${basePath}/${id}`}>
        <h2 className={`${className}-link-title`} >{item.name}</h2>
        </Link>
    )
}
