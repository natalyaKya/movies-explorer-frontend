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
                <input
                    id="name-profile"
                    className="authform__input"
                    type="text"
                    name="name"
                    required
                    placeholder="Имя"
                    value={name || ""}
                    minLength="2"
                    maxLength="40"
                    onChange={handleNameChange}
                />
                <span className="name-profile-error authform__text-error"></span>
                <input
                    id="email"
                    className="authform_input"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={email || ""}
                    onChange={handleEmailChange}
                />
                <span className="email-profile-error authform__text-error"></span>
                <input
                    id="password"
                    className="authform_input"
                    type="password"
                    name="password"
                    required
                    placeholder="Пароль"
                    value={password || ""}
                    onChange={handlePasswordChange}
                />
                <span className="password-profile-error authform__text-error"></span>
            </>
        </AuthForm>
    );
}

export default Register;
