let initial = {
    isLogin : false,
    wrongPass : false,
    user : []
}

export const LoginReducer = (state=initial,action)=>{
    switch(action.type){
        case "SUCCESS" : 
          return {
            ...state,
            isLogin : true,
            user : action.payload
          }
          case "wrong" : 
            return {
                ...state,
                wrongPass : true
            }
        default : return state
    }
}