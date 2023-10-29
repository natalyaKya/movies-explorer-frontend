import React from "react";
import student from "../images/student.jpg";

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-name about-me__name">
                Студент
            </h2>
            <div className="about-me__container">
                <div className="about-me__paragraph">
                    <h3 className="section-title about-me__title">
                        Виталий
                    </h3>
                    <h4 className="section-subtitle about-me__subtitle">
                        Фронтенд-разработчик, 30 лет
                    </h4>
                    <p className="paragraph about-me__paragraph">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
                        в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className=" link about-me__link" href="https://github.com/natalyaKya">
                        Github
                    </a>
                </div>
                <img className="about-me__photo" src={student} alt="Виталий, фронтенд-разработчик" />
            </div>
        </section>
    );
}

export default AboutMe;
