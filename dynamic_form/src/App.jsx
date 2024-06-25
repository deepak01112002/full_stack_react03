import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import A from './Components/A';
let obj = {
  email : "",
  pass : ""
}
function App() {
  const [state,setState] = useState(obj)
  const [arr,setArr] = useState([])
  const [isValid, setVal] = useState(false)
  const handleChange = (e)=>{
    const{name,value} = e.target
    setState({...state,[name] : value})

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setArr([...arr,state])
    setState({
      email : "",
      pass : ""
    })
  }
  const handleBlur = ()=>{
    let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    let val = /^[0-9A-Za-z]{6,16}$/
     if(regex.test(state.pass)){
        setVal(false)
     }else{
       setVal(true)
     }
  }
  
  const handleEmailBlur = ()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(validRegex.test(state.email)){
      setVal(false)
    }else{
      setVal(true)
    }
  }
  
  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email Id' name='email' onChange={handleChange} className={isValid ? "a" : "b"} onBlur={handleEmailBlur} /><br /><br />
          <input type="text" placeholder='Password' name='pass' onChange={handleChange} className={isValid ? "a" : "b"} onBlur={handleBlur} />
          {/* {isValid ? <p>Password must be 8 in length</p> : ""} */}
          <br /><br />
          <input type="submit" />
       </form>
       <A/>
    </div>
  );
}

export default App;
