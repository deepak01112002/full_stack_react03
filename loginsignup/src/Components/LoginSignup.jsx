


import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
function LoginSignup() {

   const [state,setState] = useState("Logindd")
   const [name,setName] = useState("")
   const [email,setEmail]  = useState("")
    const [password,setPassword] = useState("")
    const [LoginEmail,setLoginEmail] = useState("")
    const [Lpassword,setLpassword] = useState("")
    const [arr,setArr] = useState([])
    const handleClick = ()=>{
        let obj = {
            username : name,
            email : email,
            pass : password
        }
        setArr([...arr,obj])
        setState("Login")
    }
    const handleLogin = ()=>{
       let data = arr.filter((el)=>el.email == LoginEmail && el.pass == Lpassword)
       console.log(data);
       if(data.length>0){
        Swal.fire("Login Successfull");
       }else{
          alert("Login Unsuccessfull")
       }
    }
    
  return (
    <div>
        

     {state == "Login" ?  <div>
                 
              <h1>Login</h1>
              <input type="text" placeholder='Email Id' onChange={(e)=>setLoginEmail(e.target.value)} />
              <input type="text" placeholder='Password' onChange={(e)=>setLpassword(e.target.value)}/>
              <button onClick={handleLogin}>Click</button>
               <p onClick={()=>setState("Signup")}>New account</p>  


           </div> :  <div>
        
            <h1>Signup</h1>
            <input type="text" placeholder='Username' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleClick}>Signup</button>
            <p onClick={()=>setState("Login")}>Already an account ? Login</p>
        </div>}

    </div>
  )
}

export default LoginSignup