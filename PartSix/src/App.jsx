import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Forms'
import CommentsForm from './CommentsForm'
import Comments from './Comments'
import UseEffect from './UseEffect'
import UseEffectApiCall from './UseEffectApiCall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Forms/> */}
    {/* <Comments/> */}
    {/* <UseEffect/> */}
    <UseEffectApiCall/>
    </>
  )
}

export default App
