import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import { useFilter } from '../../hooks/useFilter.js'
import { useEffect, useState } from "react";

function SavedMovies(props) {
    const [savedMovies, setSavedMovies] = useState([])
    const [more, setMore] = useState(0);
    const [isShortMovie, setIsShortMovie] = useState(false);
    const filteredMovies = useFilter(savedMovies, isShortMovie)

    useEffect(() => {
        setSavedMovies(props.movies)
    }, [props.movies])

    function handleToggle() {
        setIsShortMovie(prev => !prev)
    }
    function handleSearchMovies(query) {
        setSavedMovies(props.onSearch(props.movies, query))
    }

    return (
        <>
            <Header
                isAuthorized={true}
                isMain={false}
                handleBurgerClick={props.handleBurgerClick}
                isBurgerOpen={props.isBurgerOpen}
            />
            <main className="movies movies_saved">
                <SearchForm
                    query={props.query}
                    onSearch={handleSearchMovies}
                    setQuery={props.setQuery}
                    onToggle={handleToggle}
                    isToggle={isShortMovie}
                    error={props.error}
                    setMore={setMore}
                    more={more}
                />
                <MoviesCardList
                    like={props.like}
                    movies={filteredMovies}
                    onSave={props.onSave}
                    onDisLike={props.onDisLike}
                    onCkeck={props.onCkeck}
                    setSavedMovie={props.setSavedMovie}
                    setMore={setMore}
                />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
