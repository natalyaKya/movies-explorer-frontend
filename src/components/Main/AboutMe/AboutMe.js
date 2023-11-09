import React from "react";
import student from "../../../images/student.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-name about-me__name">
                Студент
            </h2>
            <div className="about-me__container">
                <div className="about-me__text">
                    <div className="about-me__paragraphs">
                        <h3 className="about-me__title">
                            Виталий
                        </h3>
                        <h4 className="about-me__subtitle">
                            Фронтенд-разработчик, 30 лет
                        </h4>
                        <p className="about-me__paragraph">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
                            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                            фриланс-заказами и ушёл с постоянной работы.
                        </p>
                    </div>
                    <a className="link about-me__link" rel="noreferrer" target="_blank" href="https://github.com/natalyaKya">
                        Github
                    </a>
                </div>
                <img className="about-me__photo" src={student} alt="Виталий, фронтенд-разработчик" />
            </div>
        </section>
    );
}

export default AboutMe;
