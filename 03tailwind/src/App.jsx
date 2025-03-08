import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'

let myObj={
  name:"Snaket",
  li:33
}
function App() {
  const [count, setCount] = useState(0)

  let userDetail={
    name:"Snaket Yadav",
    age:21
  }

  return (
    <>
     <Card channel="Snaket" price={25}/>
     <Card channel="Rajesh Rajghor" price={25} myObj={userDetail.name}/>
    </>
  )
}

export default App

