import React, { useState } from 'react'

function A() {
    const [arr,setarr] = useState([{plc : "Username", name : "username", type : "text"},{plc : "Email",name : "email",type : "email"}])
    const [state,setState] = useState({
        username : "",
        email : ""
    })
    const handleClick = ()=>{
       setarr([...arr,{plc : "Enter your text", name : "hobbies", type : "text"}])
    }
    const handleChange = (e)=>{
        let {name,value} = e.target
       setState({...state,[name] : value})
    }
    console.log(state)
  return (
    <div>
        {
            arr.map((el)=>{
                return (
                    <input type={el.type} placeholder={el.plc} name={el.name} onChange={handleChange} />
                )
            })
        }
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default A