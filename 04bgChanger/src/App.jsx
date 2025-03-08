import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
  <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2
     border border-solid h-12'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg
       bg-white px-5 py-3 rounded-xl'>
         <button onClick={()=>{setcolor("red")}} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"red"}}>Red</button>
         <button onClick={()=>{setcolor("green")}} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"green"}}>Green</button>
         <button onClick={()=>{setcolor("pink")}} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"pink"}}>Pink</button>
         <button onClick={()=>{setcolor("blue")}} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"blue"}}>Blue</button>
         <button onClick={()=>{setcolor("orange")}} className='outline-none px-4 rounded-full text-white shadow-lg ' style={{backgroundColor:"orange"}}>Yellow</button>
      </div>
    </div>
  </div>
  )
}

export default App
