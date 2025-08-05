import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skill from './components/Skills/Skill'
import Works from './components/Works/Works'
import Client from './components/MyClients/Client'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Intro/>
    <Skill/>
    <Works/>
    <Client/>
    <Footer/>
    </>
  )
}

export default App
