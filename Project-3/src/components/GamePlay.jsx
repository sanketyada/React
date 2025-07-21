import React, { useState } from 'react'
import TotalScore from './TotalScore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

function GamePlay() {

  const [score, setScore] = useState(0);
  const [selectNumber, setSelectedNumber] = useState();
  const[currentDice,setCurrentDice]  = useState(1);
  const [error,setError] =useState("")
  const[showRules,setShowRules] = useState(false)



  const generateRandomNumber = (min,max)=>{
    return Math.floor( Math.random()*(max-min)+min);
  }
  const roleDice =() =>{
    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber)
    
    if(!selectNumber){
      setError("Please Select Number");
      return;
    }

    if(selectNumber === randomNumber){
      setScore((prev)=>prev + randomNumber)
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSelectedNumber(undefined)
  }

  const resetHandler = ()=>{
    setScore(0)
  }

  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score}/>
        <Numberselector error={error} setError={setError} selectNumber={selectNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="button">
        <Button onClick={resetHandler}>Reset</Button>
        <OutlineButton onClick={()=>setShowRules((prev)=>!prev)}> {showRules ? "Hide":"Show"} Rules</OutlineButton>
      </div>
    {showRules &&  <Rules/> }
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
    padding: 40px;
    .top_section{
        display: flex;
        justify-content: space-between;
        align-items: end;
    }
    .button{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top:40px;
    }
`
