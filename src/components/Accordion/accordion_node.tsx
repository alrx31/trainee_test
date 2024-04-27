import React, {useEffect, useRef, useState} from "react";
import './Accordion.scss';

export const Accordion_node = (
    {id,title,onClick,date,isOpen,length,url}:IProps
)=>{

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    let itemRef:any = useRef(0)

    return(
        <div
            className={`accordion__item ${isOpen? "active":""}`}
            key={id}
            style={windowWidth > 768
                ?
                {
                    width: isOpen ? `calc(100% - ${50 * (length)}px` : "",
                }
                :
                {}
            }
        >
            <button
                className="accordion__button"
                onClick={()=>onClick()}
                style={{
                    backgroundImage:`url(${url})`,
                }}

            >
                <div className="acc_but_wrapper">
                    <h2>{title}</h2>
                    <h2>0{id}</h2>
                </div>
            </button>
            <div className={`acc_collapse ${isOpen ? "open":""}`}
                 style={
                windowWidth > 768 ?
                     {
                         width: isOpen ? `calc(100% - ${ (length-1)}px )` : "",
                     }
                     : (
                        isOpen ? { height: itemRef.current.scrollHeight }: { height: 0 }
                    )

                 }
            >
            <div
                    className="accordion_content"
                    ref={itemRef}
                >
                    <div className="acc_i_photo"
                    >
                        <img src={url} alt=""/>
                    </div>
                    <div className="acc_i_info">
                        <h2 className="acc_top_l">0{id}</h2>
                        <h3>{title}</h3>
                        <h4>{date}</h4>
                        <a rel="noreferrer" href="https://github.com/ULtaR31" target={"_blank"} className="accc_button">
                            More information
                        </a>
                    </div>
                </div>
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
    url:string;
}