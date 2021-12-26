import React, { useEffect, useState } from "react";
import { useFetching } from "../../Hooks/UseFetching";
import FilmService from "../../Services/FilmService";
import { FilmCard } from "../Links/FilmLink";
import { Template } from "../Template/Template";
import { Loader } from "../Ui/Loader/Loader";
import './mainpage.scss'
export const MainPage = () => {
    const [films, setFilms] = useState([])
    const [fetchFilms, filmsLoading, filmsError] = useFetching(async () => {
        const response = await FilmService.getAll()
        setFilms(response.data.results)
    })

    useEffect(() => {
        fetchFilms()
    }, [])

  return (
    <Template
      content={
        <div className="container main__container">
          <div className="main__description">
            <p className="main__description-text">
              This is a fan website about Star wars. There you could find
              information about the most interesting staff from the universe.
              Star Wars is an American epic space opera multimedia franchise
              created by George Lucas, which began with the eponymous 1977
              film and quickly became a worldwide pop-culture phenomenon. The
              franchise has been expanded into various films and other media,
              including television series, video games, novels, comic books,
              theme park attractions, and themed areas, comprising an
              all-encompassing fictional universe. In 2020, its total value
              was estimated at US$70 billion, and it is currently the
              fifth-highest-grossing media franchise of all time.
            </p>
            <p className="main__description-text">
                  If you want to learn more about characters, Planets, Species, Starships and Vehicles - use navigation bar at the top
              </p>
          </div>
          <div className="main__films">
              <h2 className="main__films-title">Main Films</h2>
          {filmsLoading ? <Loader/> : films.map((film) => {
              return <FilmCard key={film.episode_id} film={film}/>
          })}
          </div>
        </div>
      }
    />
  );
};
