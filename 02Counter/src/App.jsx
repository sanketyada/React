import { useState } from 'react'
import './App.css'

let incCounter=()=>{
  useState(counter+1)
}
function App() {
  let[counter,setCounter]=useState(0)
  let[decounter,setdecounter]=useState(counter)

  let incCounter=()=>{
    if(counter <20){
      setCounter(counter+1)
    }
  }

  let decCounter=()=>{
    if(counter>1){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>Counter {counter}</h1>
    <h2>counter Value {counter}</h2>
    <button onClick={incCounter}>Cont+</button>
    <br />
    <button onClick={decCounter}>Cont-</button>
    </>
  )
}

export default App
