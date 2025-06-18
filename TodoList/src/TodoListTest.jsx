import React, { useState } from "react";

function TodoListTest() {
  let [task, setTask] = useState([]);
  let addTask = () => {
    let input = document.querySelector("#input");
    console.log(input.value);
    setTask([...task, input.value]);
    console.log(task);
    input.value = "";
  };
  return (
    <div>
      <h1>Todo List App</h1>
      <div>
        <input id="input" placeholder="Add Your tTAsk here..." />
        <br />
        <br />
        <button onClick={addTask}>Add</button>
        <h3>Task to Do</h3>
        <hr />
        <ul>
          {task.map((element) => (
            <li>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListTest
