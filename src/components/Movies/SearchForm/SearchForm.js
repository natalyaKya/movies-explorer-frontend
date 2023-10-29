import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {

    return (
        <form className="search-form" name="search-form">
            <input
                id="search-form"
                className="search-form__inp"
                type="text"
                name="search-film"
                placeholder="Фильм"
            />
            <button
                className={`search-form__button`}
                type="submit"
            >
            </button>
            <FilterCheckbox />
        </form>
    );
}

export default SearchForm;
