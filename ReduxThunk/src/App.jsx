import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FetchData } from './Redux/productReducer/action'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  
  const data = useSelector((d)=>d);
  console.log(data)
  const dispatch = useDispatch()
  useEffect(()=>{
    // FetchData(dispatch)
    dispatch(FetchData)({email : "deepak"},10,20)
  },[])

  return (
    <>
      
    </>
  )
}

export default App
