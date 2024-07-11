import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Routes/Navbar'
import MainRoute from './Routes/MainRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainRoute/>
    </>
  )
}

export default App
