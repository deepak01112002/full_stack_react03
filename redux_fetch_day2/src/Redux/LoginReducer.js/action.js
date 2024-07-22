


export const LoginData = (dispatch,obj)=>{
    fetch(`https://jsonplaceholder.typicode.com/users?email=${obj.email}`)
    .then(res=>res.json())
    .then((res)=>{
        if(res[0].username == obj.username){
            dispatch({type : "SUCCESS", payload : res})
        }else{
            dispatch({type : "wrong"})
        }
    })
}