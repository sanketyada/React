import React, { useState } from "react";

function LudoGame() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let updateBlue = () => {
    // moves.blue = moves.blue+1
    // console.log(moves.blue);

    // setMoves({...moves})
    //OR
    //setMoves({...moves,blue:moves.blue+1})
    //OR
    setMoves((currMove)=>{
      return {...currMove,blue:currMove.blue+1}
    })

  };
  let updateYellow = () => {
    setMoves((currMove)=>{
      return {...currMove,yellow:currMove.yellow+1}
    })

  };
  let updateGreen = () => {
    setMoves((currMove)=>{
      return {...currMove,green:currMove.green+1}
    })

  };
  let updateRed = () => {
    setMoves((currMove)=>{
      return {...currMove,red:currMove.red+1}
    })

  };
  return (
    <div>
      <h1>Game Begins...</h1>
      <div className="board">
        <p>Blue Move = {moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>Yellow Move = {moves.yellow}</p>
        <button onClick={updateYellow} s style={{ backgroundColor: "yellow", color: "black" }}>
          +1
        </button>
        <p>Green Move = {moves.green}</p>
        <button onClick={updateGreen} s style={{ backgroundColor: "green" }}>+1</button>
        <p>Red Move = {moves.red}</p>
        <button onClick={updateRed} s style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}

export default LudoGame;
