import React from "react";
import './Accordion.scss';

export const Accordion_node = (
    {id,title,onClick,date,isOpen,length}:IProps
)=>{
    return(
        <div
            className={`accordion__item ${isOpen? "active":""}`}
            key={id}
            style={{
                width: isOpen ? `calc(100% - ${100 * (length)}px` : "",
            }}
        >
            <button
                className="accordion__button"
                onClick={()=>onClick()}
            >
                <h2>{title}</h2>
                <h2>0{id}</h2>
            </button>
                <div
                    className="accordion_content"
                    style={{
                        width: isOpen ? `calc(100% - ${100 * (length-1)}px )` : "",
                    }}
                >
                    <p>{date}</p>
                </div>
        </div>
    )
}

interface IProps{
    id:number;
    onClick:()=>void;
    title:string;
    date:string;
    isOpen:boolean;
    length:number;
}