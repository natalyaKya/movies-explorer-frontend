import React from "react";

function Card(props) {
    const [isSaved, setIsSaved] = React.useState("");

    const handleIconClick = () => {
        setIsSaved(true);
    };

    const cardSaveButtonClassName = `card__save-button ${isSaved && "card__save-button_active"
        }`;

    return (
        <div className="elements__card">
            <div
                className="elements__image"
                style={{ backgroundImage: `${process.env.PUBLIC_URL + props.card.image}` }}
            ></div>
            <div className="elements__container">
                <h2 className="elements__title">{props.card.nameRU}</h2>
                <button
                    className={cardSaveButtonClassName}
                    onClick={() => handleIconClick()}
                    type="button"
                ></button>
                <span className={"elements__time"}>{props.card.duration}</span>
            </div>
        </div>
    );
}

export default Card;
