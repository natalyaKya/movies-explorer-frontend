import React from "react";

function FilterCheckbox(props) {

    return (
        <label className="checkbox" htmlFor="checkbox">
            <input
                id="checkbox"
                className="checkbox__inp"
                type="checkbox"
                checked={props.isToggle}
                onChange={props.onToggle}
            />
            <span className="checkbox__inner">Короткометражки</span>
        </label>
    );
}

export default FilterCheckbox;
