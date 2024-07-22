import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { FetchingData } from './Redux/action'
import Login from './Login'

function App() {
  
  const dispatch  = useDispatch()
  const data = useSelector((s)=>s.LoginReducer)
  console.log(data)
  
  const handleClick = ()=>{
    
  }

  useEffect(()=>{
    FetchingData(dispatch)
  },[])

  return (
    <>
      <button onClick={handleClick}>FETCH</button>
      <Login/>
    </>
  )
}

export default App
