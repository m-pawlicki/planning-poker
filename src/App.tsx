import { useState } from 'react';
import './App.css'

// A single card
function Card({value}) {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <input type="radio" name="card" className="card-input" id={value} value={value}></input>
        <label className="card-face" htmlFor={value}>{value}</label>
      </div>
    </div>
    </>
  )

}

// A user's hand of cards
function Hand() {
  return (
    <>
    <div className="hand-container">
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
      <div className="button-div">
        <button className="button">Submit</button><button className="button">Skip</button>
      </div>
    </div>
    </>
  )
}

// Visual representation of cards picked by users and the current story to vote upon
function Table() {
  return (
    <>
    <div className="story-container">
      <label htmlFor="story"><h2>Current Story:</h2></label>
      <input className="story-input" type="text" id="story" name="story" />
      </div>
    <div className="table-container">
      <svg className="table" width="900" height="300">
        <rect width="600" height="300" rx="15" ry="15" fill="sienna" stroke="saddlebrown" strokeWidth="5" />
      </svg>
      <div className="button-div">
        <button className="button">Reveal Cards</button>
      </div>
    </div>
    </>
  )
}

// Header
function Header() {
  return (
    <>
    <h1>Planning Poker</h1>
    </>
  )
}

// Footer
function Footer() {
  return (
    <>
    <sub>fneet (c) 2026</sub>
    </>
  )
}

// User list, current voting status, and how they voted (when revealed)
function Users() {
  return (
    <>
    <h2>Users</h2>
    <h3>Currently Voting</h3>
    <br />
    <h3>Voted</h3>
    < br />
    <h3>Skipped</h3>
    </>
  )
}

// Shows the list of stories, vote status of stories, and comments tied to the current story
function Info() {
  return (
    <>
    <h2>Info</h2>
    <h3>Stories</h3>
    <br />
    <h3>Comments</h3>
    </>
  )
}

export default function App() {

   const [cardPicked, setCardPicked] = useState(null); 

  return (
    <>
      <div className="parent">
        <div className="div-head">
          <Header />
        </div>
        <div className="div-users">
          <Users />
        </div>
        <div className="div-table">
          <Table />
        </div>
        <div className="div-cards">
          <Hand />
        </div>
        <div className="div-info">
          <Info />
        </div>
        <div className="div-foot">
          <Footer />
        </div>
      </div>
    </>
  )
}
