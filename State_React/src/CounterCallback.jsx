import React, { useState } from 'react'

function CounterCallback() {
  
  const [count,setCount] = useState(0)

  let inCounter=()=>{
    setCount((currValue)=>{
      return currValue+1;
    })
  }
  return (
    <div>
      <h2>Counter App</h2>
      <p>Counter ={count}</p>
      <button onClick={inCounter}>Count</button>
    </div>
  )
}

export default CounterCallback

