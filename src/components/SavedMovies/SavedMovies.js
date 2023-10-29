import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function SavedMovies(props) {

    return (
        <>
            <Header
                isAuthorized={props.isAuthorized}
            />
            <main className="movies movies_saved">
                <SearchForm />
                <MoviesCardList />
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
