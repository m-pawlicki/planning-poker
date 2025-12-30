import { useState } from 'react';
import './App.css'

// A single card
function Card({value}) {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <input type="radio" name="card" id={value} value={value}></input>
        <label className="card-face" htmlFor={value}>{value}</label>
      </div>
    </div>
    </>
  )

}

// User's hand of cards
function Hand() {
  return (
    <>
      <div className="card-hand">
        <Card value={"0"} />
        <Card value={"1"} />
        <Card value={"2"} />
        <Card value={"3"} />
        <Card value={"5"} />
        <Card value={"8"} />
        <Card value={"13"} />
        <Card value={"?"} />
        <Card value={"☕"} />
      </div>
    </>
  )
}

// Shows cards picked from users, initially face down
function Table() {
  return (
    <>
    </>
  )
}

export default function App() {

   const [cardPicked, setCardPicked] = useState(null); 

  return (
    <>
    <Hand />
    </>
  )
}
