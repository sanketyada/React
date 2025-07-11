import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function BoardGame() {
  let [todos, Settodos] = useState([{task:"Smaple Task",id:uuidv4(),isDone:false}]);

  let [newTodos,SetnewTodos] = useState("")

  let updateInput = (event)=>{
    SetnewTodos(event.target.value)
  }

  let addTasks = ()=>{
    Settodos((prev)=>([...prev,{task:newTodos,id:uuidv4(),isDone:false}]))
    SetnewTodos("")
    console.log(todos)
  }
  let handleDelete =(id)=>{
    // let copy = todos.filter((todo)=>todo.id != id)
    // Settodos(copy)
    Settodos( (prev)=> prev.filter((todo)=>todo.id != id))
  }

  let UpperCaseAll =()=>{
    let copy=todos.map((todo)=>{
      return {...todo,isDone:true}
    })
    Settodos(copy)
  }

  let markAsDone = (id)=>{
    let copy=todos.map((todo)=>{
      if(todo.id == id){
        return {...todo,isDone:true}
      }
      else{
        return todo;
      }
    })
    Settodos(copy)
  }
  return (
    <div>
      <h1>TODO APP</h1>
      <input placeholder="Enter Your Task" value={newTodos} onChange={updateInput} />
      <br /> <br />
      <button onClick={addTasks}>Add Task</button>
      <h3>Task To Do</h3>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todos.id} >
            <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
            <button onClick={()=>handleDelete(todo.id)}> Delete</button>
            <button onClick={()=>markAsDone(todo.id)} > UpperCase</button>
          </li>
        ))}
      </ul>
      <button onClick={UpperCaseAll}>UpperCase All</button>
    </div>
  );
}

export default BoardGame;
