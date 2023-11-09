import React from "react";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import HeaderAccount from "../HeaderAccount/HeaderAccount";

const Navbar = (props) => {

    return (
        <>
            <div className={`burger ${props.isBurgerOpen && "burger_open"}`}></div >
            {props.isBurgerOpen &&
                <div className="burger__container">
                    <div className="burger__icon_close" onClick={props.handleBurgerClick}></div>
                    <div className="burger__menu">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "nav__link_active" : "nav__link"} `}>Главная</NavLink>
                        <Navigation />
                        <HeaderAccount
                            isMain={false} />
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar