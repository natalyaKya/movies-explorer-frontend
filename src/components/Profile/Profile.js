import React from "react";
import Header from "../Header/Header";

function Profile(props) {

    return (
        <main className="profile">
            <Header />
            <h2 className="profile__heading">Привет, Виталий!</h2>
            <form className="profile__form" name="update-profile">
                <input
                    id="update-name"
                    className="profile__input"
                    type="text"
                    name="name"
                    placeholder="Виталий"
                    value={"Виталий" || ""}
                    minLength="2"
                    maxLength="40"
                />
                <span className="name-profile-error profile-form__text-error"></span>
                <input
                    id="update-email"
                    className="profile__input"
                    type="email"
                    name="email"
                    placeholder="pochta@yandex.ru"
                    value={"pochta@yandex.ru" || ""}
                />
                <span className="email-profile-error profile-form__text-error"></span>
                <button
                    className="profile__button update-profile__button"
                    type="submit"
                >
                    Редактировать
                </button>
            </form>
            <button
                className="profile__button update-profile__button"
                type="submit"
            >
                Выйти из аккаунта
            </button>
        </main >
    );
}

export default Profile;
