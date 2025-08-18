import React from 'react'
import { useTodo } from './Context/TodoContext'

function Test() {
    let {name,age}  = useTodo()
  return (
    <div>
      Hii my name is {name} and age is {age}
    </div>
  )
}

export default Test
