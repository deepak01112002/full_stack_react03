import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [state,setState] = useState({
        username : "",
        email : "",
        password : ""
    })
    const navil = useNavigate()
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/users`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(state)
        })
        .then((res)=>res.json())
        .then((res)=>{
            navil("/login")
        }).catch((err)=>{
            console.log(err)
        })
        setState({
            username : "",
            email : "",
            password : ""
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={state.username} name='username' placeholder='Username' onChange={handleChange} />
            <input type="text" name='email' value={state.email} placeholder='Email Id' onChange={handleChange} />
            <input type="text" name='password' value={state.password} placeholder='Password' onChange={handleChange} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup