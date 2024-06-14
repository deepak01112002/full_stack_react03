import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FetchingData from './Components/FetchingData';

function App() {
   
  const [state,setState] = useState(null)
  const [s,setS] = useState(true)
  
   useEffect(()=>{
    
    fetch('https://randomuser.me/api/')
    .then((res)=>res.json())
    .then((res)=>{
      setState(res)
    })
   


   },[s])
  

  return (
    <div className="App">
        {state == null ? <h1>Loading.....</h1> : <FetchingData state={state.results}/>}
        <button onClick={()=>setS(!s)}> Click</button>
    </div>
  );
}

export default App;
