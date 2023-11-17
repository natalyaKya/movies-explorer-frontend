import React, { useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";


function SearchForm(props) {
    const location = useLocation()


    useEffect(() => {
        if (location.pathname === '/movies') {
            props.setQuery(localStorage.getItem('search'))
        } else {
            props.setQuery('')
        }
    }, [location.pathname])

    const handleSearchFilmChange = (event) => {
        props.setQuery(event.target.value)
        event.preventDefault()
    };

    function handleSubmit() {
        props.onSearch(props.query)
        props.setMore(0);
        if (location.pathname === '/movies') {
            localStorage.setItem('search', props.query)
        }
    }

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit} name="search-form" noValidate>
                <input
                    id="search-form"
                    className="search-form__inp"
                    type="text"
                    name="searchFilm"
                    placeholder="Фильм"
                    onChange={handleSearchFilmChange}
                    value={props.query ?? ''}
                />
                <button
                    className="search-form__button"
                    type="submit"
                >
                    <div className="search-form__button_icon"></div>
                </button>
            </form>
            <span className={`form__error search-film__error form__error_active`}>{props.error}</span>
            <FilterCheckbox
                isToggle={props.isToggle}
                onToggle={props.onToggle}
                searchCheckbox={handleSubmit}
            />
        </>
    );
}

export default SearchForm;
