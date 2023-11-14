import React from "react";

function Techs() {
    return (
        <section className="techs">
            <h2 className="section-name techs__name">
                Технологии
            </h2>
            <div className="techs__container">
                <h3 className="techs__title">
                    7 технологий
                </h3>
                <h4 className="techs__subtitle">
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </h4>
                <div className="techs__blocks">
                    <div className="techs__block">HTML</div>
                    <div className="techs__block">CSS</div>
                    <div className="techs__block">JS</div>
                    <div className="techs__block">React</div>
                    <div className="techs__block">Git</div>
                    <div className="techs__block">Express.js</div>
                    <div className="techs__block">mongoDB</div>
                </div>
            </div>
        </section>
    );
}

export default Techs;
