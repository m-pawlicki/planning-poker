import { useState } from 'react';
import './App.css'

function Card({value, onCardClicked}) {
    return (
    <>
    <div className="card-container">
      <div className="card">
        <div className="card-front"></div>
        <div className="card-back" id={value} onClick={onCardClicked}><h1>{value}</h1></div>
      </div>
    </div>
    </>
  )
}

function Hand() {

  return (
    <>
      <div className="card-hand">
        <Card value={"0"} onCardClicked={() => handleClick("0")} />
        <Card value={"1"} onCardClicked={() => handleClick("1")} />
        <Card value={"2"} onCardClicked={() => handleClick("2")} />
        <Card value={"3"} onCardClicked={() => handleClick("3")} />
        <Card value={"5"} onCardClicked={() => handleClick("5")} />
        <Card value={"8"} onCardClicked={() => handleClick("8")} />
        <Card value={"13"} onCardClicked={() => handleClick("13")} />
        <Card value={"?"} onCardClicked={() => handleClick("?")} />
        <Card value={"☕"} onCardClicked={() => handleClick("☕")} />
      </div>
    </>
  )
}


function handleClick(value: string) {

  const cardElement = document.getElementById(value);
  cardElement?.classList.toggle("card-pick");

}

export default function App() {

   const [cardPicked, setCardPicked] = useState(null); 

  return (
    <>
    <Hand />
    </>
  )
}
