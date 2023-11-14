import React from "react";

function PageNotFound({ onBack }) {

    return (
        <main className="page-not-found">
            <h1 className="page-not-found__title">404</h1>
            <span className="page-not-found__text">Страница не найдена</span>
            <button className="page-not-found__button" onClick={() => onBack()}>Назад</button>
        </main>
    );
}

export default PageNotFound;
