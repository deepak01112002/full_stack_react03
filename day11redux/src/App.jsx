import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'

function App() {
   
    const dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>dispatch({type : "DEC"})}>+</button>
      <button>-</button>
    </>
  )
}

export default App
