import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
function App() {
  const [data, setData] = useState([]);
  let inputRef = useRef("");

  return (
    <>
      {/* <Navbar />
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setData([...data,inputRef.current.value]);
        }}
      >
        Click
      </button>
      {data.map((el,idx)=><h2 key={idx}>{el}</h2>)} */}
      <Test/>
    </>
  );
}

export default App;
