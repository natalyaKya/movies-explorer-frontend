import React from "react";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main(props) {

    return (
        <main className="content">
            <Header
                isAuthorized={props.isAuthorized}
                isMain={true}
                handleBurgerClick={props.handleBurgerClick}
                isBurgerOpen={props.isBurgerOpen} />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </main>
    );
}

export default Main;
