import { useEffect } from "react";

function ApiTooltip(props) {

    useEffect(() => {

        function handleEscClose(e) {
            if (e.key === `Escape`) {
                props.onClose()
            }
        }
        function handleClickOverlay(e) {
            if (e.target.classList.contains('popup_opened')) {
                props.onClose()
            }
        }

        if (props.isOpen) {
            document.addEventListener('keyup', handleEscClose)
            document.addEventListener('mousedown', handleClickOverlay)
        } else {
            document.removeEventListener("keyup", handleEscClose);
            document.removeEventListener("mousedown", handleClickOverlay)
        }
    }, [props.isOpen])

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
                    {props.message}
                </span>
            </div>
        </div>
    );
}

export default ApiTooltip;
