
import { Routes,Route } from 'react-router-dom'
import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Home from '../Components/Home'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute