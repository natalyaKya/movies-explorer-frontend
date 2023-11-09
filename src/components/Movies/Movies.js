import React from "react";
import Header from "../Header/Header";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";

function Movies(props) {

    return (
        <>
            <Header
                isAuthorized={props.isAuthorized}
                isMain={false}
                handleBurgerClick={props.handleBurgerClick}
                isBurgerOpen={props.isBurgerOpen}
            />
            <main className="movies">
                <SearchForm />
                <MoviesCardList
                    name="movies"
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

export default Movies;
