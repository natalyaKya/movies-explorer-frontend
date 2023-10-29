import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import cards from "../../../utils/cards";

function MoviesCardList(props) {
    return (
        <section className="elements">
            {cards.map((card) => (
                <MoviesCard
                    key={card._id}
                    onCardClick={props.onCardClick}
                    onCardLike={props.onCardLike}
                    onCardDelete={props.onCardDelete}
                    card={card}
                />
            ))}
        </section>
    )
};

export default MoviesCardList;

