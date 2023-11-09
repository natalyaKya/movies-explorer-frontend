import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies(props) {

    return (
        <>
            <Header
                isAuthorized={true}
                isMain={false}
                handleBurgerClick={props.handleBurgerClick}
                isBurgerOpen={props.isBurgerOpen}
            />
            <main className="movies movies_saved">
                <SearchForm />
                <MoviesCardList
                    name="saved-movies"
                />
                <button
                    className="movies__button"
                    type="submit"
                >
                    Ещё
                </button>
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
