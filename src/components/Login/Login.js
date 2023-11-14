import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useValidation } from '../../hooks/useValidation';

function Login({ login, error }) {
    const { values, handleChange, errors, isValid, resetForm } = useValidation();

    function handleSubmit(e) {
        e.preventDefault()
        login(values)
        resetForm()
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
            isValid={isValid}
            error={error}
        >
            <>
                <label className="authform__label" htmlFor="email-login">E-mail</label>
                <input
                    autoComplete='off'
                    id="email-login"
                    className="authform__input"
                    required
                    pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
                    onChange={handleChange}
                    name="email"
                    value={values.email ?? ''}
                    placeholder="email"
                    type='email'
                />
                <span className="email-profile-error authform__text-error">{errors.email}</span>
                <label className="authform__label" htmlFor="password-login">Пароль</label>
                <input
                    autoComplete='off'
                    id="password-login"
                    className="authform__input"
                    required
                    onChange={handleChange}
                    name="password"
                    value={values.password ?? ''}
                    placeholder="password"
                    type='password'
                    minLength="3"
                    maxLength='8'
                />
                <span className="password-profile-error authform__text-error">{errors.password}</span>
            </>
        </AuthForm>
    );
}

export default Login;
