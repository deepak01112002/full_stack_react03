let initial = {
    isLoading : false,
    data : [],
    isError : false,
}

export const reducer = (state = initial,action)=>{
    switch(action.type){
        case "LOAD" : 
           return {
             ...state,
             isLoading : true
           }
        case "DATA" : 
            return {
                ...state,
                data : action.payload,
                isLoading : false
            }
        case "ERROR" : 
           return {
              ...state,
              isError : true
           }
        default : return state;          
    }
}