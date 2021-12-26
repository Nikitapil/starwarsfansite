import React from 'react'
import { Link } from 'react-router-dom'

export const FilmCard = ({film}) => {
    const filmId = film.url.slice(-2, -1)
    return (
        <Link className='film-card' to={`/films/${filmId}`}>
        <h2 className='film-card__title'>{film.title}</h2>
        <p className='film-card__year'>Year: {film.release_date.split('-').reverse().join('.')}</p>
        </Link>
    )
}
