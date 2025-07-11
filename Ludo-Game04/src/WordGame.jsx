import React, { useState } from 'react'

function WordGame() {
    const [arr,setArr] = useState("");
    let addI= ()=>{
        setArr([...arr," I "]);
    }
    let addAm= ()=>{
        setArr([...arr," Am "]);
    }
    let addVery= ()=>{
        setArr([...arr," Very "]);
    }
    let addHappy= ()=>{
        setArr([...arr," Happy "]);
    }
    let addYou= ()=>{
        setArr([...arr," You "]);
    }
    let addYour= ()=>{
        setArr([...arr," Your "]);
    }
    let addWhat= ()=>{
        setArr([...arr," What "]);
    }
    let addIs= ()=>{
        setArr([...arr," Is"]);
    }
  return (
    <div>
      <h1>Word Game..</h1>
      <p>Sentace:{arr}</p>
      <p>I</p>
      <button onClick={addI}>+1</button>
      <p>Am</p>
      <button onClick={addAm}>+1</button>
      <p>Very</p>
      <button onClick={addVery}>+1</button>
      <p>Happy</p>
      <button onClick={addHappy}>+1</button>
      <p>You</p>
      <button onClick={addYou}>+1</button>
      <p>Your</p>
      <button onClick={addYour}>+1</button>
      <p>What</p>
      <button onClick={addWhat}>+1</button>
      <p>Is</p>
      <button onClick={addIs}>+1</button>
    </div>
  )
}

export default WordGame
