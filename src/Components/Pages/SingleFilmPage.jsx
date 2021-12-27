import React, { useEffect, useState } from 'react'
import { LinksList } from '../Links/LinksList'
import { Template } from '../Template/Template'
import { useFetching } from "../../Hooks/UseFetching";
import FilmService from '../../Services/FilmService';
import { useParams } from 'react-router-dom';
import CommonService from '../../Services/CommonService';
import { Loader } from "../Ui/Loader/Loader";

import './singlepages.scss'
import { ErrorUrlPage } from '../ErrorPages/ErrorUrlPage';
export const SingleFilmPage = () => {
    const [film, setFilm] = useState({})
    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [starShips, setStarships] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [species, setSpecies] = useState([])
    const {id} = useParams()
    const [fetchSingleFilm, isFilmLoading, isFilmError] = useFetching( async () => {
        const response = await  FilmService.getSingleFilm(id)
        const CharactersResponse = await CommonService.getCharactersOfItem(response, 'characters')
        const PlanetRespone = await CommonService.getPlanetsOfItem(response)
        const StarshipsRespone = await CommonService.getStarshipsOfItem(response)
        const VehiclesRespone = await CommonService.getVehiclesOfItem(response)
        const SpeciesRespone = await CommonService.getSpeciesOfItem(response)
        setFilm(response.data)
        setCharacters(CharactersResponse.map((resp) => resp.data))
        setPlanets(PlanetRespone.map((resp) => resp.data))
        setStarships(StarshipsRespone.map((resp) => resp.data))
        setVehicles(VehiclesRespone.map((resp) => resp.data))
        setSpecies(SpeciesRespone.map((resp) => resp.data))
    })

    useEffect(() => {
        fetchSingleFilm()
    }, [])

    if(isFilmError) {
        return (
            <ErrorUrlPage/>
        )
    }

    return (
        
        <Template
        content={
            isFilmLoading ? <Loader/> :
            <div className='container single-film__container'>
            <h1 className='single-film__title'>{film.title}</h1>
            <h2 className='single-film__subtitle'>Episode: {film.episode_id}</h2>
            <div className='single-film__cast'>
                <p className='single-film__description'><span>Description</span>: {film.opening_crawl}</p>
                <p className='single-film__director'><span>Director</span>: {film.director}</p>
                <p className='single-film__producer'><span>Producer</span>: {film.producer}</p>
                <p className='single-film__release'><span>Release</span>: {film.release_date?.split('-').reverse().join('.')}</p>
            </div>
            <div className='single-film__data'>
                <LinksList data={characters} className={'single-film__characters film__data-list'} basePath = 'people' />
                <LinksList data={planets} className={'single-film__planets film__data-list'} basePath = 'planets' />
                <LinksList data={starShips} className={'single-film__starships film__data-list'} basePath = 'starships' />
                <LinksList data={vehicles} className={'single-film__vehicles film__data-list'} basePath = 'vehicles' />
                <LinksList data={species} className={'single-film__species film__data-list'} basePath = 'species' />
            </div>
        </div>
        }
        />
    )
}
