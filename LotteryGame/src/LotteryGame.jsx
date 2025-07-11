import React, { useState } from 'react'
import { numberGenerator , sum } from './numberGenerator'
import Ticket from './Ticket'
import Button from './Button'

function LotteryGame({n=2, winCondition}) {
    let [Lottery,setLottery] = useState(numberGenerator(n))
    
    let handleGenerator=()=>{
        setLottery(numberGenerator(n))
    }

    let isWinning =  winCondition(Lottery)
    // console.log(sum(Lottery))

  return (
    <div>
    <h1>Lottery Game</h1>
    <Ticket ticket={Lottery}/>
    <br /><br />
    <h1>{isWinning && "You are the Winner! You Won"}</h1>
    <Button action={handleGenerator}/>
    </div>
  )
}

export default LotteryGame
