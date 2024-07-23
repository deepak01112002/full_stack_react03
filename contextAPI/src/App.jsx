import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyContext } from './Components/ContextApi'

function App() {
 
    const {state,dispatch} = useContext(MyContext)

  return (
    <>
     <h1>{state}</h1>
     <button onClick={()=>dispatch({type : "INC",payload  : 54})}>INC</button>
     <button onClick={()=>dispatch({type : "DEC"})}>DEC</button>
    </>
  )
}

export default App
