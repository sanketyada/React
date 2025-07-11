import React, { useState } from 'react'

function ToggleTF() {
    let [toggle,setToggle] = useState(true)
    function handleToggle(){
        setToggle(!toggle)
    }
    let style={
      color:"red"
    }
  return (
    <div>
      <h2>Like</h2>
      <p onClick={handleToggle}>{toggle ? (
          <i className="fa-solid fa-star"></i>
        ):(
          <i className="fa-solid fa-star" style={style}></i>
        )}</p>
      
    </div>
  )
}

export default ToggleTF
