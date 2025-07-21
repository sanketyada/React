import styled from "styled-components"
import StartGame from "./components/StartGame";
import './App.css'
import { useState } from "react";
import GamePlay from "./components/GamePlay";


function App() {
  const [isStart , setIsStart] = useState (false)
  
 const togggleGame =()=>{
  setIsStart(!isStart)
 }

  return (
    <div>
      {/* <StartGame/>
      <GamePlay/> */}
      {isStart ?<GamePlay/>:<StartGame toggle={togggleGame}/> }
    </div>
  )
}

export default App
