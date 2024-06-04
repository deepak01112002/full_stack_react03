import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Counter from "./Counter"
import {UserProfile} from "./UserProfile"
function App() {
 
   let [state,setstate] = useState(0)
   let [deepak,setDeepak] = useState("deepak pandey")
  
  function rajkot(){
     setstate(state+1)
  }

  function amreli(){
    setDeepak(50)
  }


  return (
    <div className="App">
       <Counter count={state}/>
       <button onClick={rajkot}>+</button>
       <UserProfile ashu={deepak}/>
    </div>
  );
}

export default App;
