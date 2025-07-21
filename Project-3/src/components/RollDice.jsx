import React, { useState } from 'react'
 import styled from 'styled-components'
function RollDice({currentDice,roleDice}) {

 

  return (
    <DiceContainer>
      <div
      onClick={()=>{roleDice()}} 
      className='dice'>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer   = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    font-size:24px ;
  }
  .dice{
    cursor: pointer;
  }

`