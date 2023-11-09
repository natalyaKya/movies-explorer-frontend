import React from "react";
import Header from "../Header/Header";

function Profile(props) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    React.useEffect(() => {
        setName("Виталий");
        setEmail("pochta@yandex.ru");
    }, []);

    return (
        <main className="profile">
            <Header
                isAuthorized={true}
                isMain={false}
                handleBurgerClick={props.handleBurgerClick}
                isBurgerOpen={props.isBurgerOpen}
            />
            <h2 className="profile__heading">Привет, Виталий!</h2>
            <form className="profile__form" name="update-profile">
                <label className="profile__label" htmlFor="update-name">
                    <div className="profile__placeholder">Имя</div>
                    <input
                        id="update-name"
                        className="profile__input"
                        type="text"
                        name="name"
                        value={name || ""}
                        required
                        placeholder="Имя"
                        minLength="2"
                        maxLength="40"
                        onChange={handleNameChange}
                    />
                </label>
                <span className="name-profile-error profile-form__text-error"></span>
                <label className="profile__label" htmlFor="update-email">
                    <div className="profile__placeholder">E-mail</div>
                    <input
                        id="update-email"
                        className="profile__input"
                        type="email"
                        name="email"
                        value={email || ""}
                        placeholder="E-mail"
                        onChange={handleEmailChange}
                    />
                </label>
                <span className="email-profile-error profile-form__text-error"></span>
                <button
                    className="profile__button update-profile__button"
                    type="submit"
                >
                    Редактировать
                </button>
            </form>
            <button
                className="profile__button"
                type="submit"
            >
                Выйти из аккаунта
            </button>
        </main >
    );
}

export default Profile;
