import React, {useState} from 'react';
import './Accordion.scss';
import {Simulate} from "react-dom/test-utils";
import {Accordion_node} from "./accordion_node";

export const Accordion = (
    {
        data
    }: {
        data: Iaccdata[];}
    ) =>{
    const [openId,setopenId] = useState(1)


    return (
        <div className="Accordion">
            <h1>all events</h1>
            <div className="accordion__container">
                {data.map((item:Iaccdata)=>{
                    return(
                        <Accordion_node
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            isOpen={openId === item.id}
                            onClick={()=>setopenId(item.id)}
                            length={data.length}
                        />
                    )
                })}
            </div>
        </div>
    )
}

interface Iaccdata {
    id:number;
    title:string;
    date:string;
    image:string;
}