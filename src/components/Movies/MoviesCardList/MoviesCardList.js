import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import cards from "../../../utils/cards";

function MoviesCardList(props) {
    return (

        <section className="elements">
            {cards.map((card) => (
                <MoviesCard
                    key={card.id}
                    card={card}
                    name={props.name}
                />
            ))}
        </section>
    )
};

export default MoviesCardList;

