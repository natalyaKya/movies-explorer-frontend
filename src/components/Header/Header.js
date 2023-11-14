import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import HeaderAccount from "../HeaderAccount/HeaderAccount";
import { useWindowSize } from "@uidotdev/usehooks";

function Header(props) {
    const { width } = useWindowSize();

    return (
        <header className={`header ${props.isMain && `header_main`}`}>
            <Link to="/">
                <img className="header__logo" src={logo} alt="Логотип проекта Мovie-explorer" />
            </Link>
            {props.isAuthorized ?
                width > 768 ?
                    <>
                        <Navigation />
                        <HeaderAccount isMain={props.isMain} />
                    </>
                    : <div className="header__burger" onClick={props.handleBurgerClick}></div>
                :
                <HeaderAuth />
            }
        </header >
    );
}

export default Header;
