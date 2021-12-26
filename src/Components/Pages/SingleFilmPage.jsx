import React, { useState } from 'react'
import { LinksList } from '../Links/LinksList'
import { Template } from '../Template/Template'

export const SingleFilmPage = () => {
    const [film, setFilm] = useState({})
    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [starShips, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [species, setSpecies] = useState([])
    return (
        
        <Template
        content={
            <div style={{color: 'white'}} className='container single-film__container'>
            <h1 className='single-film__title'>{film.title}</h1>
            <h2 className='single-film__subtitle'>Episode: {film.episode_id}</h2>
            <ul className='single-film__cast'>
                <p className='single-film__description'>Description: {film.opening_crawl}</p>
                <p className='single-film__director'>Director: {film.director}</p>
                <p className='single-film__producer'>Producer: {film.producer}</p>
                <p className='single-film__release'>Release: {film.release_date.split('-').reverse().join('.')}</p>
            </ul>
            <LinksList data={characters} className={'single-film__characters'} basePath = 'characters' />
            <LinksList data={planets} className={'single-film__planets'} basePath = 'planets' />
            <LinksList data={starShips} className={'single-film__starships'} basePath = 'starships' />
            <LinksList data={vehicles} className={'single-film__vehicles'} basePath = 'vehicles' />
            <LinksList data={species} className={'single-film__species'} basePath = 'species' />
        </div>
        }
        />
    )
}
