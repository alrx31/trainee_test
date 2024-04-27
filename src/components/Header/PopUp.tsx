import './Header.scss';
import React, {useEffect, useRef} from "react";



export const PopUp = ({
        title,
        subtitle,
        isOpen, onClose
}:PopUpProps
) => {
    let popup:any = useRef(null)
    useEffect(()=>{
        if(isOpen){
            popup.current.focus()
        }
    },[])
    return (
        <div className={["popup ", isOpen ? "active" : ""].join("")}>
            <div className="popup__container">
                <div className="popup__cross" onClick={()=> onClose()}><span></span></div>

                <h1>{title}</h1>
                <h3>{subtitle}</h3>

                <button ref={popup} className="popup__button" onClick={() =>onClose()}>
                    <h4>Close</h4>
                </button>
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