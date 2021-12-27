import React from 'react'
import { Link } from 'react-router-dom'

export const UniversalLink = ({item, basePath, className, film}) => {
    const id = item.url.split('').filter(letter => !isNaN(Number(letter))).join('')
    return (
        <li>
            <Link className={`${className}-link`} to={`/${basePath}/${id}`}>
            <h3 className={`${className}-link-title`} >{film ? item.title : item.name},</h3>
            </Link>
        </li>
    )
}
