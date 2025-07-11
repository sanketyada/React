import React, { useEffect, useState } from "react";

function UseEffectApiCall() {
  let [joke, SetJoke] = useState({});
  let URL = "https://official-joke-api.appspot.com/random_joke";

  let Caller = async () => {
    let response = await fetch(URL);
    let jsonData = await response.json();
    // console.log(jsonData);
    SetJoke({ setup: jsonData.setup, punchline: jsonData.punchline });
  };


  //while we write async await in in useEffect we write under arrow
//   function and call it inside this
  useEffect(() => {
    async function getjoke() {
      let response = await fetch(URL);
      let jsonData = await response.json();
      // console.log(jsonData);
      SetJoke({ setup: jsonData.setup, punchline: jsonData.punchline });
    }
    getjoke();
  }, []);
  return (
    <div>
      <h1>Joke</h1>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={Caller}>New Jokw</button>
    </div>
  );
}

export default UseEffectApiCall;
