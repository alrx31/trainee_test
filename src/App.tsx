import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Accordion} from "./components/Accordion/Accordion";

let data:Iaccdata[] = [
    {
        "id":1,
        "title":"Hawaiian party",
        "date":"13.02.2023",
        "image":"images/1.png"
    }
    ,{
        "id":2,
        "title":"Мafia party",
        "date":"13.02.2023",
        "image":"images/2.png"
    }
    ,{
        "id":3,
        "title":"Party",
        "date":"13.02.2023",
        "image":"images/3.png"
    }
    ,{
        "id":4,
        "title":"Party on the beach",
        "date":"13.02.2023",
        "image":"images/4.png"
    }
    ,{
        "id":5,
        "title":"Home Security",
        "date":"13.02.2023",
        "image":"images/1.png"
    }
    ,{
        "id":6,
        "title":"Network Design & Implementation",
        "date":"13.02.2023",
        "image":"images/6.png"
    }
    ,{
        "id":7,
        "title":"System Design & Engineering",
        "date":"13.02.2023",
        "image":"images/2.png"
    }
    , {
        "id": 8,
        "title": "Client Care Plans",
        "date": "13.02.2023",
        "image": "images/3.png"
    }
]

function App() {
  return (
    <div className="App">
      <Header />
        <Accordion data={data}/>
    </div>
  );
}

export default App;


interface Iaccdata{
    "id": number;
    "title": string;
    "image": string;
    "date": string;
}