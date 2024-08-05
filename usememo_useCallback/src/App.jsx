import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Component'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(()=>{

  },[])
  return (
    <>
      <Component handleClick={handleClick} />
      <h1>P{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
