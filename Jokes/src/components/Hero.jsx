import React, { useState } from "react";
import ShowData from "./ShowData";

function Hero() {
    const [jokedata,setJokeData] = useState(null)
    
    const handleJokes = async (e)=>{
        e.preventDefault()
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
        let data =await res.json();
        console.log(data)
        setJokeData(data)
    }
  return (
    <div>
      <form>
        <h1
          className="text-2xl font-bold
       text-center my-6"
        >
          Click To Get A Random Joke!
        </h1>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleJokes}
          >
            Click Me
          </button>
        </div>
      </form>
      <ShowData data={jokedata}/>
    </div>
  );
}

export default Hero;
