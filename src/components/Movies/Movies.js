import { useEffect, useState } from "react";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { useFilter } from '../../hooks/useFilter.js'
import { useLocation } from "react-router-dom";

function Movies(props) {
    const [isShortMovie, setIsShortMovie] = useState(JSON.parse(localStorage.getItem('toggle')) ?? false);
    const filteredMovies = useFilter(props.movies, isShortMovie);
    const [more, setMore] = useState(0);
    const location = useLocation()

    useEffect(() => {
        if (props.movies.length > 0) {
            localStorage.setItem('movies', JSON.stringify(props.movies))
        }
    }, [props.movies])

    function handleToggle() {
        setIsShortMovie(prev => !prev)
        if (location.pathname === '/movies') {
            localStorage.setItem('toggle', !isShortMovie)
        }
    }

    return (
        <>
            <Header
                isAuthorized={props.isAuthorized}
                isMain={false}
                handleBurgerClick={props.handleBurgerClick}
                isBurgerOpen={props.isBurgerOpen}
            />
            <main className="movies">
                <SearchForm
                    query={props.query}
                    onSearch={props.onSearch}
                    setQuery={props.setQuery}
                    onToggle={handleToggle}
                    isToggle={isShortMovie}
                    error={props.error}
                    setMore={setMore}
                />
                <MoviesCardList
                    like={props.like}
                    movies={filteredMovies}
                    isLoading={props.isLoading}
                    onSearch={props.onSearch}
                    onSave={props.onSave}
                    onDisLike={props.onDisLike}
                    onCkeck={props.onCkeck}
                    firstVisit={props.firstVisit}
                    setMore={setMore}
                    more={more}
                />
            </main>
            <Footer />
        </>
    );
}

export default Movies;
