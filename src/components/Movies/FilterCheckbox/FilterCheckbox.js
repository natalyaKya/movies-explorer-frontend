import React from "react";

function FilterCheckbox(props) {

    function filterCheckboxChange() {
        props.searchCheckbox();
        props.onToggle();

    }
    return (
        <label className="checkbox" htmlFor="checkbox">
            <input
                id="checkbox"
                className="checkbox__inp"
                type="checkbox"
                checked={props.isToggle}
                onChange={filterCheckboxChange}
            />
            <span className="checkbox__inner">Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;
