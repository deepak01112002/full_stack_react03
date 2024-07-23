import React, { createContext, useReducer } from 'react'


export let MyContext = createContext()
let initial = 0
const reducer = (state,action)=>{
    switch(action.type){
        case "INC" :
            return state + action.payload
        case "DEC" : 
            return state - 1
        default : return state        
    }
}


function ContextApi({children}) {

    const [state,dispatch] = useReducer(reducer,initial)

  return (
    <MyContext.Provider value={{state,dispatch}} >
      {children}
    </MyContext.Provider>
  )
}


export default ContextApi