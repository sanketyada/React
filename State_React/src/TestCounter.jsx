import React, { useState } from 'react'

function TestCounter() {

    let [count,setCount] = useState(0)
    function handleCount(){
        setCount((prev)=>prev+1)
    }
  return (
    <div>
      <h2>Count ={count}</h2>
      <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default TestCounter
