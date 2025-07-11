import React, { useState } from "react";

function MyTodo() {
  let [todos,SetTodos] = useState(["Sleewp"])

  let [newTodos,SetNewTodos] = useState("")

  function handelTask(){
    console.log("Listening")
  }
  function updateTodoValue(e){
    SetNewTodos(e.target.value)
  }
  return (
    <div>
      <h1>My Todo App</h1>
      <div>
        <input onChange={updateTodoValue} placeholder="Enter a Task" /> <br />
        <button onClick={handelTask}>Add Tasks</button>
        <hr />
        <ul>
          {
            todos.map((item)=><li>{item}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default MyTodo;
