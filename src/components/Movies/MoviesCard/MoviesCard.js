import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const location = useLocation();
    const cardButtonClassName = `card__button-movies ${props.onCkeck(props.movie.id) && !props.like ? 'card__button-movies_active' : ''}`;

    function handleSumbitLike() {
        if (props.onCkeck(props.movie.id)) {
            props.onDisLike(props.movie.id)
        } else {
            props.onSave({
                country: props.movie.country,
                director: props.movie.director,
                duration: props.movie.duration,
                year: props.movie.year,
                description: props.movie.description,
                image: `https://api.nomoreparties.co/${props.movie.image.url}`,
                trailerLink: props.movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
                movieId: props.movie.id,
                nameRU: props.movie.nameRU,
                nameEN: props.movie.nameEN,
            })
        }
    }

    function handleDeleteMovie() {
        props.onDisLike(props.movie._id)
    }

    function getMovieDuration() {
        if (props.movie.duration < 60) {
            return `${props.movie.duration % 60}м`
        } else {
            return `${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`
        }
    }

    return (
        <div className="elements__card">
            <img
                className="elements__image"
                src={location.pathname === '/saved-movies' ? props.movie.image : `https://api.nomoreparties.co${props.movie.image.url}`}
                alt={props.movie.nameRU}
            // onClick={followLink}
            />
            <div className="elements__container">
                <div className="elements__text">
                    <h2 className="elements__title">{props.movie.nameRU}</h2>
                    <span className="elements__time">{getMovieDuration()}</span>
                </div>
                {location.pathname === '/movies'
                    ? <button
                        className={cardButtonClassName}
                        type="button"
                        onClick={handleSumbitLike}
                    />
                    : <button
                        className='card__button-movies card__button-movies_active'
                        type="button"
                        onClick={handleDeleteMovie}
                    />
                }
            </div>
        </div>
    );
}

export default MoviesCard;
