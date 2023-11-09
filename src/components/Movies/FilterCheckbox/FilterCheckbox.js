import React from "react";

function FilterCheckbox() {

    return (
        <label className="checkbox" htmlFor="checkbox">
            <input
                id="checkbox"
                className="checkbox__inp"
                type="checkbox"
            />
            <span className="checkbox__inner">Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;
