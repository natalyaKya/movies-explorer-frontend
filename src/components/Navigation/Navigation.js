import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {

    return (
        <nav className="navigation">
            <div className="navigation__menu">
                <NavLink to="/movies" className={({ isActive }) => `${isActive ? "nav__link_active" : "nav__link"}`}>Фильмы</NavLink>
                <NavLink to="/saved-movies" className={({ isActive }) => `${isActive ? "nav__link_active" : "nav__link"}`}>Сохранённые фильмы</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;
