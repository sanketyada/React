import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Full Stack Project</h1>
      <p>{jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
