import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function AuthForm({ error, name, title, button, children, questionLink, link, textLink, onSubmit, isValid }) {

    return (
        <main className="auth">
            <Link className="authform__logo-box" to="/">
                <img className="authform__logo" src={logo} alt="Логотип проекта Мovie-explorer" />
            </Link>
            <h2 className="authform__heading">{title}</h2>
            <form className="authform" name={name} onSubmit={onSubmit}>
                <div className="authform__container">
                    {children}
                </div>
                <span className='authform__error'>{error}</span>
                <button
                    disabled={!isValid}
                    className={`authform__button authform__button-load ${isValid ? '' : 'authform__button-error'}`}
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
