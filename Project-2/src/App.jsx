import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components\'/Navigation/Navigation'
import ContactHeaders from './components\'/ContactHeader/ContactHeaders'
import ContactForm from './components\'/ContactForm/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <main className='mainConatiner'>
      <ContactHeaders/>
      <ContactForm/>
      </main>
    </div>
  )
}

export default App
