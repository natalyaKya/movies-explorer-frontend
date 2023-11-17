import { useMemo, useState, useEffect } from 'react';
import { maxMoviesByWidth, useWidth } from '../../../hooks/useWidth.js';
import MoviesCard from "../MoviesCard/MoviesCard.js";
import PreLoader from "../../PreLoader/PreLoader.js"
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
    const width = useWidth();
    const [count, plus] = maxMoviesByWidth(width);
    const storeMovie = JSON.parse(localStorage.getItem('movies')) ?? []
    const location = useLocation()
    const showedMovies = useMemo(() => {
        if (props.movies.length > 0) {
            return props.movies.slice(0, count + (plus * props.more));
        } else if (location.pathname === '/movies' && props.movies.length > 0) {
            return storeMovie
        }
        return props.movies
    }, [storeMovie, props.movies, plus, count, props.more]);

    useEffect(() => {
        props.setMore(0);
    }, [width])

    return (
        props.isLoading ?
            <PreLoader />
            :
            showedMovies.length > 0 || props.firstVisit ?
                <>
                    <section className="elements">
                        {showedMovies.map((movie) => (
                            <MoviesCard
                                like={props.like}
                                key={movie.id ?? movie.movieId}
                                movie={movie}
                                // name={props.name}
                                onSave={props.onSave}
                                onDisLike={props.onDisLike}
                                onCkeck={props.onCkeck}
                                setSavedMovie={props.setSavedMovie}
                            />
                        ))}
                    </section>
                    {showedMovies.length < props.movies.length &&
                        <button
                            className="movies__button"
                            type="button"
                            onClick={() => { props.setMore(props.more + 1) }}
                        >
                            Ещё
                        </button>}
                </> :
                <span className="load-cards__error">Ничего не найдено
                </span>


    )
};

export default MoviesCardList;

