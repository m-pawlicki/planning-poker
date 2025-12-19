//import { useState } from 'react'
import './App.css'

function Card({value, onCardClick}) {
    return (
    <>
    <div className="card-container" id="card-containero" onClick={onCardClick}>
      <div className="card">
        <div className="card-front"></div>
        <div className="card-back"><h1>{value}</h1></div>
      </div>
    </div>
    </>
  )
}


function handleClick() {
  const cardElement = document.getElementById("card-container");
  cardElement?.classList.toggle("card-pause");
}

export default function App() {

  return (
    <>
    <div className="card-hand">
      <Card value={0} onCardClick={() => handleClick} />
      <Card value={1} onCardClick={() => handleClick} />
      <Card value={2} onCardClick={() => handleClick} />
      <Card value={3} onCardClick={() => handleClick} />
      <Card value={5} onCardClick={() => handleClick} />
      <Card value={8} onCardClick={() => handleClick} />
      <Card value={13} onCardClick={() => handleClick} />
      <Card value={20} onCardClick={() => handleClick} />
      <Card value={40} onCardClick={() => handleClick} />
      <Card value={100} onCardClick={() => handleClick} />
      <Card value={"?"} onCardClick={() => handleClick} />
      <Card value={"∞"} onCardClick={() => handleClick} />
      <Card value={"☕"} onCardClick={() => handleClick} />
    </div>
    </>
  )
}
