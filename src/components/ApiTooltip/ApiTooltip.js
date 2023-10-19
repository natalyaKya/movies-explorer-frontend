import React from "react";

function ApiTooltip(props) {

    return (
        <div
            className={`popup popup_type_apiTooltip ${props.isOpen ? "popup_opened" : ""
                }`}
        >
            <div className="popup__container popup__container_tooltip">
                <button
                    className="popup__close-button"
                    onClick={props.onClose}
                    type="button"
                ></button>
                <span className="popup__heading popup__heading_tolltip">
                    {props.Error}
                </span>
            </div>
        </div>
    );
}

export default ApiTooltip;
