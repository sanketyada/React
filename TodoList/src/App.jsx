import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoLIst from './TodoLIst'
import TodoListTest from './TodoListTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoLIst/>
    {/* <TodoListTest/> */}
    </>
  )
}

export default App
