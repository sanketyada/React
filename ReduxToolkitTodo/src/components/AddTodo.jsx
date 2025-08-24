import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
addTodo

function AddTodo() {
  let [input, setInput] =useState('')
  const dispatch = useDispatch()
  
  let addTodoHandler = (e)=>{
    console.log(input)
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <form onSubmit={addTodoHandler}>  
      <input type="text"
      placeholder='Enter Your Task' 
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default AddTodo
