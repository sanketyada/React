import './App.css'
import Hero from './component/Hero'
import Herosection from './component/Mainsection/Herosection.jsx'
import Navigation from './component/Navigation'
import NavigationTab from './component/Navigation/NavigationTab.jsx'

function App() {
  return (
    <div>
      {/* <Navigation/>
      <Hero/> */}
      <NavigationTab/>
      <Herosection/>
    </div>
  )
}

export default App
