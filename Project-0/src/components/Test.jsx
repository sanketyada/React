import React, { useState } from 'react'

function Test() {
    const [value,setaValue] = useState(0)
    // const [multvalue,setaMultValue] = useState(1)
    let multvalue = value *5
     const multiply = ()=>{
        // setaMultValue(value *5)
        setaValue(value+1)
     }

  return (
    <div>
      <h1>Original Value: ={value}</h1>
      <button onClick={multiply} style={{
        padding:'10px 20px',
        fontSize:'20px'
      }}>Multiply</button>
      <h3>Multiplied Value:{multvalue}</h3>
    </div>
  )
}

export default Test
