import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  function inCounter() {
    setCount(count+1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter = {count}</p>
      <button onClick={inCounter}>Count</button>
    </div>
  );
}

export default Counter;
