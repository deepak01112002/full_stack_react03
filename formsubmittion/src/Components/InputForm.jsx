import React, { useState } from 'react'
import './InputForm.css'
function InputForm() {
    const [state,setState] = useState({
        name : "",
        email : "",
        pass : ""
    })
    const [see,Setsee] = useState(false)

    const [arr,setArr] = useState([])
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setArr([...arr,state])
        setState({
            name : "",
            email : "",
            pass : ""
        })
    }
  return (
    <div id='D' className='DataForm'>
        <form onSubmit={handleSubmit}>
            <input style={{backgroundColor : "red",padding : "10px",borderRadius : "5px"}} type="text" value={state.name} placeholder='Username' name='name' onChange={handleChange} required /><br /><br />
            <input type="email" value={state.email} placeholder='Email' name='email' onChange={handleChange} required /><br /><br />
            <input type={see ? "text" : "password"} value={state.pass} placeholder='Password' name='pass' onChange={handleChange} required /><span onClick={()=>Setsee(!see)} class="material-symbols-outlined">
            visibility
            </span><br /><br />
            <input type="submit" value="Click" className='btn btn-primary' />
        </form>
    </div>
  )
}

export default InputForm