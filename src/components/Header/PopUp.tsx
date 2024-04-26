import './Header.scss';
import React from "react";



export const PopUp = ({
        title,
        subtitle,
        isOpen, onClose
}:PopUpProps
) => {
    return (
        <div className={["popup ", isOpen ? "active" : ""].join("")}>
            <div className="popup__container">
                <div className="popup__cross" onClick={()=> onClose()}><span></span></div>

                <h1>{title}</h1>
                <h3>{subtitle}</h3>

                <div className="popup__button" onClick={() =>onClose()}>
                    <h4>Close</h4>
                </div>
            </div>
        </div>
    );
};


interface PopUpProps {
    title: string;
    subtitle: string;
    isOpen: boolean;
    onClose: () => void;
}