import React, { useState } from 'react'

function StateAndArray() {
    const [moves,SetMoves] = useState([0,0,0]);
    let updateRed = ()=>{
         moves[0] = moves[0]+1;
        // SetMoves([...moves])

        // OR
        SetMoves((preArr)=>{
            return [...preArr]
        })
    }
    let updateGreen = ()=>{
         moves[1] = moves[1]+1;
        SetMoves((preArr)=>{
            return [...preArr]
        })
    }
    let updateBlue = ()=>{
         moves[2] = moves[2]+1;
        SetMoves((preArr)=>{
            return [...preArr]
        })
    }
  return (
    <div>
      <h1>Ludo Game..</h1>
      <div className="box">
        <p>Red Moves = {moves[0]} </p>
        <button onClick={updateRed}>+1</button>
        <p>Green Moves = {moves[1]}  </p>
        <button onClick={updateGreen}>+1</button>
        <p>Blue Moves = {moves[2]}  </p>
        <button onClick={updateBlue}>+1</button>
      </div>
    </div>
  )
}

export default StateAndArray
