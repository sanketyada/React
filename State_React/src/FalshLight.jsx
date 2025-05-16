import React, { useState } from "react";

function FalshLight() {
  const [flash, setflash] = useState(false);

  const [count,setCount] = useState(0)
  let Light =()=>{
    setflash(!flash)
    setCount(count+1)
  }
  return (
    <div>

      <h2>Switch</h2>
      <p>Switch off/On {count} Times</p>
      <p onClick={Light}>
        {flash ? <i class="fa-solid fa-toggle-on"></i> :<i class="fa-solid fa-toggle-off"></i>}
      </p>

    </div>
  );
}

export default FalshLight;
