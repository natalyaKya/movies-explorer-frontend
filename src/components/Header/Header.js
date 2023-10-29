import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import profile from "../images/profile.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип проекта Мovie-explorer" />
            </Link>
            {props.isAuthorized ?
                <>
                    <Navigation />
                    <div className="header__auth">
                        <NavLink to="/profile" className={({ isActive }) => `${isActive ? "nav__link_active" : "nav__link"}`}>Аккаунт</NavLink>
                        <img className="header__profile" src={profile} alt="Иконка профиля" />
                    </div>
                </>
                :
                <div className="header__auth">
                    <Link to="/signup" className="nav__link">Регистрация</Link>
                    <Link to="/signin" className="nav__link nav__link_signin">Войти</Link>
                </div>
            }
        </header >
    );
}

export default Header;
