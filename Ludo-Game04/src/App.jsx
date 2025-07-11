import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LudoGame from "./LudoGame";
import StateandObject from "./StateandObject";
import StateAndArray from "./StateAndArray";
import WordGame from "./WordGame";
import BoardGame from "./BoardGame";
import MyTodo from "./MyTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LudoGame /> */}
      {/* <StateandObject/> */}
      {/* <StateAndArray/> */}
      {/* <WordGame/> */}
      <BoardGame/>
      {/* <MyTodo/> */}
    </>
  );
}

export default App;
