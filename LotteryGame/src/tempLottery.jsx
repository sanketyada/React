import React, { useState } from 'react'
import './LotteryGame.css'
import { numberGenerator , sum } from './numberGenerator'

function LotteryGame() {
    let [Lottery,setLottery] = useState(numberGenerator(3))
    
    let handleGenerator=()=>{
        setLottery(numberGenerator(3))
    }

    let isWinning = sum(Lottery) ===15
    // console.log(sum(Lottery))

  return (
    <div>
    <h1>Lottery Game</h1>
    <div className='item'>
        <span>{Lottery[0]}</span>
        <span>{Lottery[1]}</span>
        <span>{Lottery[2]}</span>
    </div>
    <br /><br />
    <h1>{isWinning && "You are the Winner! You Won"}</h1>
    <button onClick={handleGenerator}>Generate Number</button>
    </div>
  )
}

export default LotteryGame
