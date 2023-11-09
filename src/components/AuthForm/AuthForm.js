import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function AuthForm({ name, title, button, children, questionLink, link, textLink, handleSubmit }) {

    return (
        <main className="auth">
            <Link className="authform__logo-box" to="/">
                <img className="authform__logo" src={logo} alt="Логотип проекта Мovie-explorer" />
            </Link>
            <h2 className="authform__heading">{title}</h2>
            <form className="authform" name={name} onSubmit={handleSubmit}>
                <div className="authform__container">
                    {children}
                </div>
                <button
                    className={`authform__button authform__button-load`}
                    type="submit"
                >
                    {button}
                </button>
            </form>
            <span className="authform__question-link">
                {questionLink}
                <Link to={link} className="authform__link link">{textLink}</Link>
            </span>
        </main >
    );
}

export default AuthForm;
