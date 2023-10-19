import React from "react";

function Footer() {
    return (
        <footer className="footer">
            <span className="footer__text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </span>
            <div className="footer__container">
                <span className="footer__container_date">
                    &#169; 2020
                </span>
                <nav className="footer__container_navigation">
                    <a className="footer__container_link" href="https://practicum.yandex.ru/">
                        Яндекс.Практикум
                    </a>
                    <a className="footer__container_link" href="https://github.com/natalyaKya">
                        Github
                    </a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
