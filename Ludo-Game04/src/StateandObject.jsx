import React, { useState } from 'react'

function StateandObject() {
  const [moves,setMoves] = useState({red:0,green:0,blue:0,pink:0,yellow:0})
  let updateRed = ()=>{
    setMoves((prevValue)=>{
      return {...prevValue,red:prevValue.red+1}
    })
  }
  return (
    <div>
      <h2>Ludo Games...</h2>
      <div className="box">
        <p>Red Count = {moves.red}</p>
        <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
        <p>Green Count = {moves.green} </p>
        <button style={{backgroundColor:"green"}}>+1</button>
        <p>Blue Count = {moves.blue} </p>
        <button style={{backgroundColor:"blue"}}>+1</button>
        <p>Pink Count = {moves.pink} </p>
        <button style={{backgroundColor:"pink",color:"black"}}>+1</button>
        <p>Yellow Count = {moves.yellow} </p>
        <button style={{backgroundColor:"yellow",color:"black"}}>+1</button>
      </div>
    </div>
  )
}

export default StateandObject
