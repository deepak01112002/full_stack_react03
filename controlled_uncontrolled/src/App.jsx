import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
   const [state,setState] = useState("")
   const [password,setPassword] = useState("")
  const handleSubmit = (e)=>{
     e.preventDefault()
    console.log(state,password)
  }
  
  return (
    <div className="App">
      <h1>{state}</h1>
      <form onSubmit={handleSubmit}>
       <input type="email" onChange={(e)=>setState(e.target.value)} required />
       <input type="password" onChange={(e)=>setPassword(e.target.value)} required />
       <input type='submit'  value="Submit"/>
      </form> 
    </div>
  );
}

export default App;
