import React, { useState } from 'react'
import { LoginData } from './Redux/LoginReducer.js/action'
import { useDispatch } from 'react-redux'

function Login() {
    const [state,setState] = useState({
        email : "Sincere@april.biz",
        username : "Bret"
    })
    const dispatch = useDispatch()
    const handleLogin = ()=>{
        LoginData(dispatch,state)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login