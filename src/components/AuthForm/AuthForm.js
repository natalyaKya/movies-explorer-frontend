import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

function AuthForm({ name, title, button, children, questionLink, link, textLink, handleSubmit }) {
    const Context = React.useContext(AppContext);

    return (
        <main className="auth">
            <img className="authform__logo" src={logo} alt="Логотип проекта Мovie-explorer" />
            <h2 className="authform__heading">{title}</h2>
            <form className="authform" name={name} onSubmit={handleSubmit}>
                {children}
                <button
                    className={`authform__button authform__button-load`}
                    type="submit"
                >
                    {Context.isLoading ? "Сохранение..." : `${button}`}
                </button>
            </form>
            <span className="authform__link">
                {questionLink}
                <Link to={link} className="link">{textLink}</Link>
            </span>
        </main >
    );
}

export default AuthForm;
