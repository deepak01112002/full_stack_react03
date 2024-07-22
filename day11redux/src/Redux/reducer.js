import { DECREASE, INCREASE, INCREASE5 } from "./actionType"



let initial = {
    count : 0,
    count2 : 0
}
const reducer = (state = initial,action)=>{
     
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                count : state.count + 1
            }
        case DECREASE : 
            return {
                ...state,
                count : state.count - 1
            }
        case INCREASE5 : 
             return {
                ...state,
                count2 : state.count2 + action.payload
             }    
        default:
            return state        
    }


}

export default reducer