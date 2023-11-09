import React from "react";
import { Link } from "react-router-dom";

function HeaderAuth() {

    return (
        <div className="header__auth">
            <Link to="/signup" className="header__auth-link">Регистрация</Link>
            <div className="header__auth-link-container">
                <Link to="/signin" className="header__auth-link header__auth-link_signin">Войти</Link>
            </div>
        </div>
    )
}

export default HeaderAuth;
