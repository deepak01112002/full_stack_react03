import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
function App() {
  
    const [state,setState] = useState(false)
    useEffect(()=>{
       setState(true)
      fetch(`https://randomuser.me/api`)
      .then(res => res.json())
      .then((res)=>{
        console.log(res.results)
        setState(flase)
      })
    },[state])
    console.log(state)
   

  return (
    <div className="App">
        <button onClick={()=>setState(false)}>Click</button>
    </div>
  );
}

export default App;
