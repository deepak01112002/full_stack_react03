import {legacy_createStore} from "redux"

let initial = 0
const reducer = (state = initial,action)=>{
     
    switch(action.type){
        case "INC": 
            return state + 1
        case "DEC" : 
            return state - 1
        default:
            return state        
    }


}


export const store = legacy_createStore(reducer)


