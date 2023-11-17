import React from "react";
import { Link } from "react-router-dom";

function HeaderAccount(props) {

    return (
        <div className="header__account">
            <Link to="/profile" onClick={props.onPopup} className="header__profile-link">Аккаунт</Link>
            <div className={`header__profile ${props.isMain ? "header__profile_main" : ""}`}>
                <div className="header__profile-icon"></div>
            </div>
        </div >
    )
}

export default HeaderAccount;
