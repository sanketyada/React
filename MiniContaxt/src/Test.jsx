import React, { useContext } from 'react'
import { UserContext } from './context/userContext'

function Test() {
    const name = useContext(UserContext)
  return (
    <div>
      <h1>Hii My name is Test:{name}</h1>
    </div>
  )
}

export default Test
