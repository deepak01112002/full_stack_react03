import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import { DECREASE, INCREASE } from './Redux/actionType'

function App() {
   
  const dispatch = useDispatch()
  const obj = useSelector((deepak)=>deepak)
  console.log(obj)

  return (
    <>
     <h1>Value : {obj.count}</h1>
      <button onClick={()=>dispatch({type : INCREASE})}>+</button>
      <button disabled={obj.count == 0} onClick={()=>dispatch({type : DECREASE})}>-</button>
    </>
  )
}

export default App
