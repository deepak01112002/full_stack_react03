

let initial = {
    isLoading : false,
    data : [],
    getData : [],
    isError : false,
}


export const reducer = (state = initial , action)=>{
    switch(action.type){
        case "SUCCESS":
             return {
                ...state,
                isLoading : false,
                data : action.payload
             }
        case "GETSUCC" :
             return {
                ...state,
                isLoading : false,
                getData : action.payload
             }
        case "LOAD" :
             return {
                ...state,
                isLoading : true
             }  
        case "ERROR" : 
             return {
                ...state,
                isLoading : false,
                isError : true
             } 
        default : return state;           
    }
}