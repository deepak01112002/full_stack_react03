import { DATA, ERROR, LOADING } from "./actionType"

let initial = {
    isLoading : false,
    data : [],
    isError : false
}


export const productReducer = (state = initial,{type,payload})=>{
    switch(type){
        case  LOADING: 
           return {
              ...state,
              isLoading : true
           }
        case DATA : 
             return {
                ...state,
                isLoading : false,
                data : payload
             }  
        case ERROR :
             return {
                ...state,
                isLoading : false,
                isError : true
             }      
        default : return state     
    }
}


 