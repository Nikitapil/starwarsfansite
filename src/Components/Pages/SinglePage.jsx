import React, { useEffect, useState } from 'react'
import { Template } from '../Template/Template'
import { LinksList } from '../Links/LinksList'
import { useParams } from 'react-router-dom'
import { useFetching } from '../../Hooks/UseFetching'
import CommonService from '../../Services/CommonService'
import { ErrorUrlPage } from '../ErrorPages/ErrorUrlPage'
import { Loader } from '../Ui/Loader/Loader'

export const SinglePage = () => {
    const {id, pathItem} = useParams()
    const [data, setData] = useState({})
    const [films, setFilms] = useState([])
    const [species, setSpecies] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [starShips, setStarships] = useState([])
    const [characters, setCharacters] = useState([])
    const [homeworld, setHomeWorld] = useState('')
    const [fetchSingleData, isDataLoaing, isDataError] = useFetching(async () => {
       const dataResponse = await CommonService.getSingleItem(id, pathItem)
       if(dataResponse.data.films) {
        const filmsResponse = await CommonService.getFilmsOfItem(dataResponse)
        setFilms(filmsResponse.map((resp) => resp.data))
       }
       if(dataResponse.data.species) {
        const speciesResponse = await CommonService.getSpeciesOfItem(dataResponse)
        setSpecies(speciesResponse.map((resp) => resp.data))
       }
       if(dataResponse.data.vehicles) {
        const vehiclesResponse = await CommonService.getVehiclesOfItem(dataResponse)
        setVehicles(vehiclesResponse.map((resp) => resp.data))
       }
       if(dataResponse.data.starships) {
        const starShipsResponse = await CommonService.getStarshipsOfItem(dataResponse)
        setStarships(starShipsResponse.map((resp) => resp.data))
       }
       if(dataResponse.data.homeworld) {
        const homeworldResponse = await CommonService.getAdditionData(dataResponse.data.homeworld)
        setHomeWorld(homeworldResponse.data.name)
       }
       if(dataResponse.data.residents) {
        const residentsResponse = await CommonService.getCharactersOfItem(dataResponse, 'residents')
        setCharacters(residentsResponse.map((resp) => resp.data))
       }
       if(dataResponse.data.people) {
        const residentsResponse = await CommonService.getCharactersOfItem(dataResponse, 'people')
        setCharacters(residentsResponse.map((resp) => resp.data))
       }
       if(dataResponse.data.pilots) {
        const residentsResponse = await CommonService.getCharactersOfItem(dataResponse, 'pilots')
        setCharacters(residentsResponse.map((resp) => resp.data))
       }
       setData(dataResponse.data)
    })

    useEffect(() => {
        setFilms([])
        setSpecies([])
        setVehicles([])
        setStarships([])
        setCharacters([])
        setHomeWorld('')
        fetchSingleData()
    }, [pathItem, id])

    if(isDataError) {
        console.log(isDataError)
        return (
            <ErrorUrlPage/>
        )
    }


    return (
        <Template
        content={ isDataLoaing ? <Loader/> :
            <div style={{color: 'white'}} className='container single-item__container'>
                <h1 className='single-item__title'>{data?.name}</h1>
                <ul className='single-item__list'>
                {Object.keys(data)?.map((key) => {
                    if (typeof data[key] === 'string' && key !== 'homeworld' && key !== 'created' && key !== 'edited' && key !== 'url') {
                    return <li key={key} className='single-item__list-item'><h2>{key.replace('_', ' ')}:</h2>{data[key]}</li>
                    }
                })}
                {homeworld && <li className='single-item__list-item'><h2>homeworld:</h2>{homeworld}</li>}
                </ul>
                {films.length > 0 && <LinksList data={films} className={'single-item'} film basePath= 'films'/>}
                {species.length > 0 && <LinksList data={species} className={'single-item'} basePath = 'species' />}
                {starShips.length > 0 && <LinksList data={starShips} className={'single-item'} basePath = 'starships' />}
                {vehicles.length > 0 && <LinksList data={vehicles} className={'single-item'} basePath = 'vehicles' />}
                {characters.length > 0 && <LinksList data={characters} className={'single-item'} basePath = 'people' />}
            </div>
        }
        />
    )
}