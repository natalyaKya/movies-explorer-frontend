import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useValidation } from '../../hooks/useValidation';

function Register({ register, error }) {
    const { values, handleChange, errors, isValid, resetForm } = useValidation();

    function handleSubmit(e) {
        e.preventDefault()
        register(values)
        resetForm()
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
            isValid={isValid}
            error={error}
        >
            <>
                <label className="authform__label" htmlFor="name-register">Имя</label>
                <input
                    autoComplete='off'
                    id="name-register"
                    className="authform__input"
                    required
                    pattern="[a-zа-яA-ZА-Я\s\-]+"
                    onChange={handleChange}
                    name="name"
                    value={values.name ?? ''}
                    placeholder="Имя"
                    type='text'
                    minLength="2"
                    maxLength='30'
                />
                <span className="name-profile-error authform__text-error">{errors.name}</span>
                <label className="authform__label" htmlFor="email-register">Email</label>
                <input
                    autoComplete='off'
                    id="email-register"
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
                <label className="authform__label" htmlFor="password-register">Пароль</label>
                <input
                    autoComplete='off'
                    id="password-register"
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

export default Register;
