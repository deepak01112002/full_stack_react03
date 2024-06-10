

import React from 'react'
import { useState } from 'react'

function Counter() {

   const[state,setState] = useState({
    count : 0,
    c : 10,
    d : 15
   })

   const handleInc = ()=>{
      setState({...state,count : state.count +1,c : state.c + 10})
   }
   const handleDec = ()=>{
    setState({...state,count : state.count - 1})
   }
  return (
    <div>
        <h1>{state.count} - {state.c}</h1>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Counter