import React from "react";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__text">
                    <h1 className="main-title">
                        Учебный проект студента факультета Веб-разработки.
                    </h1>
                    <span className="main-subtitle">
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </span>
                    <a href="#about-project" className="promo__link">Узнать больше</a>
                </div>
                <div className="promo__image"></div>
            </div>
        </section>
    );
}

export default Promo;
