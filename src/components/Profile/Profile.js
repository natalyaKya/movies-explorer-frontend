import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { useValidation } from '../../hooks/useValidation';
import Header from "../Header/Header";
import { Link } from 'react-router-dom';
import ApiTooltip from '../ApiTooltip/ApiTooltip';

function Profile({ logout, disableInput, onUpdate, onRender, isOpen, onClose, message, handleBurgerClick, isBurgerOpen }) {
    const currentUser = useContext(CurrentUserContext);
    const { handleChange, values, errors, isValid, setIsValid } = useValidation({ name: currentUser.name, email: currentUser.email });
    const checkValidity = currentUser.name === values.name && currentUser.email === values.email

    function handleSubmit(e) {
        e.preventDefault()
        onUpdate(values)
        if (!disableInput) {
            setIsValid(false)
        }
    }

    return (
        <main className="profile">
            <Header
                isAuthorized={true}
                isMain={false}
                handleBurgerClick={handleBurgerClick}
                isBurgerOpen={isBurgerOpen}
            />
            <h2 className="profile__heading">Привет, {currentUser.name}!</h2>
            <form onSubmit={handleSubmit} className="profile__form" name="update-profile">
                <label className="profile__label" htmlFor="update-name">
                    <div className="profile__placeholder">Имя</div>
                    <input
                        id="update-name"
                        className="profile__input"
                        required
                        placeholder="Имя"
                        minLength="2"
                        maxLength='30'
                        name='name'
                        onChange={handleChange}
                        disabled={disableInput}
                        type="text"
                        value={values.name ?? currentUser.name}
                        pattern="[a-zа-яA-ZА-Я\s\-]+"
                    />
                    <span className="search-error popup__text-error">{errors.name}</span>
                </label>
                <span className="name-profile-error profile-form__text-error"></span>
                <label className="profile__label" htmlFor="update-email">
                    <div className="profile__placeholder">E-mail</div>
                    <input
                        id="update-email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        onChange={handleChange}
                        disabled={disableInput}
                        className={`profile__input ${errors.email ? 'profile__input_error' : ''}`}
                        value={values.email}
                        pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
                    />
                </label>
                <span className="email-profile-error profile-form__text-error"></span>
                {disableInput ? <div className='profile__btn-container'>
                    <button
                        onClick={onRender}
                        className="profile__button update-profile__button"
                        type="button"
                    >
                        Редактировать
                    </button>
                    <Link
                        onClick={logout}
                        to='/'
                        className="profile__button"
                        type="button"
                    >
                        Выйти из аккаунта
                    </Link>
                </div>
                    :
                    <button disabled={checkValidity || !isValid} type='submit' className={`profile__btn profile__btn-save ${checkValidity || !isValid ? "profile__btn_anactive" : ''}`}>Сохранить</button>
                }
            </form>
            <ApiTooltip isOpen={isOpen} onClose={onClose} message={message} />
        </main >
    );
}

export default Profile;
