import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/nav/Navbar'
import { Routes, Route} from 'react-router-dom'
import { DropdownItems } from './components/nav/Navbar'

const paths = () => {
  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        
      </Routes>
    </div>
  )
}

export default App
