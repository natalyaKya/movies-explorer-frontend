import React from "react";

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <h2 className="section-name about-project__name">
                О проекте
            </h2>
            <div className="about-project__paragraphs">
                <h3 className="about-project__title">
                    Дипломный проект включал 5 этапов
                </h3>
                <p className="paragraph about-project__paragraph">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
                <h3 className="about-project__title">
                    На выполнение диплома ушло 5 недель
                </h3>
                <p className="paragraph about-project__paragraph">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
            </div>
            <div className="about-project__scheme">
                <div className="about-project__scheme-el about-project__scheme_week">
                    1 неделя
                </div>
                <div className="about-project__scheme-el about-project__scheme_week">
                    4 недели
                </div>
                <div className="about-project__scheme-el about-project__scheme_end">
                    Back-end
                </div>
                <div className="about-project__scheme-el about-project__scheme_end">
                    Front-end
                </div>
            </div>
        </section>
    );
}

export default AboutProject;
