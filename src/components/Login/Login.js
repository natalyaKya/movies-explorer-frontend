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

export default Login;
