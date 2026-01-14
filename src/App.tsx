import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)

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
        <Card value={<FontAwesomeIcon icon="fa-solid fa-mug-hot" />} />
      </div>
    </div>
    </>
  )
}

// Visual representation of cards picked by users and the current story to vote upon
function Table() {
  return (
    <>
    <div className="table-container">
      <svg className="table" width="600" height="300">
        <rect width="300" height="150" rx="15" ry="15" fill="grey" />
      </svg>
    </div>
    </>
  )
}

// Header
function Header() {
  return (
    <>
    <div className="head-div">
      <header>
      <h2>Planning Poker</h2>
      </header>
    </div>
    </>
  )
}

// Footer
function Footer() {
  return (
    <>
    <div className="foot-div">
      <footer>
      <sub>Made with <FontAwesomeIcon icon="fa-solid fa-heart" /> Micah Pawlicki 2026</sub>
      </footer>
    </div>
    </>
  )
}

// User menu
function Menu() {
  return (
    <>
    <div className="menu-div">
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-user" /> Nickname</a>
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-binoculars" /> Observe</a>
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-users" /> Participate</a>
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-hashtag" /> Story</a>
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-wand-magic-sparkles" /> Reveal</a>
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-arrow-rotate-right" /> Reset</a>
      <a href="#"><FontAwesomeIcon icon="fa-solid fa-share" /> Share</a>
    </div>
    </>
  )
}

// Shows voting status and results
function Info() {
  return (
    <>
    <div className="info-div">
      <p><FontAwesomeIcon icon="fa-solid fa-star" /> Most picked</p><br />
      <p><FontAwesomeIcon icon="fa-solid fa-bolt" /> Average</p><br />
      <p><FontAwesomeIcon icon="fa-solid fa-chart-simple" /> Breakdown</p>
    </div>
    </>
  )
}

export default function App() {

   const [cardPicked, setCardPicked] = useState(null); 

  return (
    <>
      <div className="parent">
        <div className="div-top">
          <Header />
        </div>
        <div className="div-left">
          <Menu />
        </div>
        <div className="div-mid">
          <Table />
          <Hand />
          <Footer />
        </div>
        <div className="div-right">
          <Info />
        </div>
      </div>
    </>
  )
}
