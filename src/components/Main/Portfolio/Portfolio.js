import React from "react";

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__name">
                Портфолио
            </h2>
            <nav className="portfolio__navigation" >
                <a className="link portfolio__link" rel="noreferrer" target="_blank" href="https://natalyakya.github.io/how-to-learn/">
                    Статичный сайт
                    <div className="portfolio__icon">↗</div>
                </a>
                <a className="link portfolio__link" rel="noreferrer" target="_blank" href="https://natalyakya.github.io//russian-travel/">
                    Адаптивный сайт
                    <div className="portfolio__icon">↗</div>
                </a>
                <a className="link portfolio__link" rel="noreferrer" target="_blank" href="https://natalyakya.github.io/react-mesto-api-full-gha/">
                    Одностраничное приложение
                    <div className="portfolio__icon">↗</div>
                </a>
            </nav>
        </section>
    );
}

export default Portfolio;
