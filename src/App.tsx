import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Accordion} from "./components/Accordion/Accordion";

let data:Iaccdata[] = [
]

function App() {
  return (
    <div className="App">
      <Header />
        <div className="Accordion_container">
            <Accordion />
        </div>

    </div>
  );
}

export default App;


interface Iaccdata{
    "id": number;
    "title": string;
    "description": string;
    "image": string;
    "data": string;
}