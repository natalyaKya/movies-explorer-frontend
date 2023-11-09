import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({ name, email, password });
    }

    return (
        <AuthForm
            name="register"
            title="Добро пожаловать!"
            button="Зарегиcтрироваться"
            onSubmit={handleSubmit}
            questionLink="Уже зарегистрированы?"
            link="/signin"
            textLink="Войти"
            handleSubmit={handleSubmit}
        >
            <>
                <label className="authform__label" htmlFor="name-register">Имя
                </label>
                <input
                    id="name-register"
                    className="authform__input"
                    type="text"
                    name="name"
                    required
                    value={name || ""}
                    minLength="2"
                    maxLength="40"
                    onChange={handleNameChange}
                />
                <span className="name-profile-error authform__text-error"></span>
                <label className="authform__label" htmlFor="email-register">Email
                </label>
                <input
                    id="email-register"
                    className="authform__input"
                    type="email"
                    name="email"
                    required
                    value={email || ""}
                    onChange={handleEmailChange}
                />
                <span className="email-profile-error authform__text-error"></span>
                <label className="authform__label" htmlFor="password-register">Пароль
                </label>
                <input
                    id="password-register"
                    className="authform__input"
                    type="password"
                    name="password"
                    required
                    value={password || ""}
                    onChange={handlePasswordChange}
                />
                <span className="password-profile-error authform__text-error"></span>
            </>
        </AuthForm>
    );
}

export default Register;
