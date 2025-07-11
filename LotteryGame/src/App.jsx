import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketNum from './TicketNum.jsx'
import LotteryGame from './LotteryGame.jsx'
import Ticket from './Ticket.jsx'
import { sum } from './numberGenerator.js'


function App() {
  let winCondition = (arr)=>{
    // return arr.every((num)=>num === arr[0]) for all Equal number
    return arr[0] === 0;
  }
return(
  <>
  <LotteryGame n={4}  winCondition={winCondition}/>

  </>
)
}

export default App
