import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingData } from './Redux/action'

function App() {
 
    const data = useSelector((s)=>s)
    console.log(data)
    const dispatch = useDispatch()
     const handleClick = ()=>{
       
       dispatch(fetchingData(dispatch))
    }

  return (
    <>
     <button onClick={handleClick}>Fetch</button>
    </>
  )
}

export default App
