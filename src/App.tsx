//import { useState } from 'react'
import './App.css'

function Card({value, onCardClick}) {
    return (
    <>
    <div className="card-container" id="container">
      <div className="card" id="card">
        <div className="card-front" id="back"></div>
        <div className="card-back" id="face" onClick={onCardClick}><h1>{value}</h1></div>
      </div>
    </div>
    </>
  )
}

function Hand() {
  return (
    <>
      <div className="card-hand">
        <Card value={0} onCardClick={() => handleClick()} />
        <Card value={1} onCardClick={() => handleClick()} />
        <Card value={2} onCardClick={() => handleClick()} />
        <Card value={3} onCardClick={() => handleClick()} />
        <Card value={5} onCardClick={() => handleClick()} />
        <Card value={8} onCardClick={() => handleClick()} />
        <Card value={13} onCardClick={() => handleClick()} />
        <Card value={"?"} onCardClick={() => handleClick()} />
        <Card value={"∞"} onCardClick={() => handleClick()} />
        <Card value={"☕"} onCardClick={() => handleClick()} />
      </div>
    </>
  )
}


function handleClick() {
  const cardElement = document.getElementById("container");
  cardElement?.classList.toggle("card-choose");
}

export default function App() {

  return (
    <>
    <Hand />
    </>
  )
}
