import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import FalshLight from './FalshLight'
import CounterCallback from './CounterCallback'
import Rating from './Rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>State in React</h1>
    {/* <Counter/> */}
    {/* <LikeButton/> */}
    {/* <FalshLight/> */}
    {/* <CounterCallback/> */}
    <Rating/>
    </>
  )
}

export default App
