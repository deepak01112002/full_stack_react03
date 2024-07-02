import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(localStorage.getItem("a")||0)

  const handleClick = ()=>{
    setCount(count + 1)
    
  }
  useEffect(()=>{
    localStorage.setItem("a" , count)
  },[count])

  return (
    <>
     <h1>{count}</h1>
      <Button variant='light' onClick={handleClick} >Minus</Button>
    </>
  )
}

export default App
