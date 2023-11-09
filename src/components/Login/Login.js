import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({ email, password });
    }

    return (
        <AuthForm
            name="login"
            title="Рады видеть!"
            button="Войти"
            onSubmit={handleSubmit}
            questionLink="Ещё не зарегистрированы?"
            link="/signup"
            textLink="Регистрация"
            handleSubmit={handleSubmit}
        >
            <>
                <label className="authform__label" htmlFor="email-login">E-mail</label>
                <input
                    id="email-login"
                    className="authform__input"
                    type="email"
                    name="email"
                    required
                    value={email || ""}
                    placeholder={email}
                    onChange={handleEmailChange}
                />
                <span className="email-profile-error authform__text-error"></span>
                <label className="authform__label" htmlFor="password-login">Пароль</label>
                <input
                    id="password-login"
                    className="authform__input"
                    type="password"
                    name="password"
                    required
                    value={password || ""}
                    placeholder={password}
                    onChange={handlePasswordChange}
                />
                <span className="password-profile-error authform__text-error"></span>
            </>
        </AuthForm>
    );
}

export default Login;
