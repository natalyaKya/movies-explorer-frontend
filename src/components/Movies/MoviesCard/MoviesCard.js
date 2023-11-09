import React, { useState } from "react";

function MoviesCard(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleCardButtonClick = () => {
        setIsClicked(!isClicked)
    };
    const cardButtonClassName = `card__button-${props.name} ${isClicked && `card__button-${props.name}_active`}`
    return (
        <div className="elements__card">
            <img
                className="elements__image"
                src={props.card.image}
                alt={props.card.nameRU}
            />
            <div className="elements__container">
                <div className="elements__text">
                    <h2 className="elements__title">{props.card.nameRU}</h2>
                    <span className="elements__time">{props.card.duration}</span>
                </div>
                <button
                    className={cardButtonClassName}
                    type="submit"
                    onClick={handleCardButtonClick}
                />
            </div>
        </div>
    );
}

export default MoviesCard;
