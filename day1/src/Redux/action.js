import axios from 'axios';
export const postData = (dispatch)=> (obj)=>{
    dispatch({type : "LOAD"})
    fetch(`http://localhost:8080/products`,{
        method : "POST",
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(obj)
    }).then((res)=>res.json())
    .then((res)=>{
        dispatch({type : "SUCCESS",payload : res})
    
    })
    .catch((Err)=>{
        dispatch({type : "ERROR"})
    })
}



export const getData = (dispatch) =>(obj)=>{
    dispatch({type : "LOAD"})
    // fetch(`http://localhost:8080/products`)
    // .then(res => res.json())
    // .then((res)=>{
    //     console.log(res)
    //     dispatch({type : "GETSUCC", payload : res})
    // })
    // .catch((Err)=>{
    //     dispatch({type : "ERROR"})
    // })
    axios.post("http://localhost:8080/products",obj)
    .then((res)=>{
        console.log(res)
        dispatch({type : "GETSUCC", payload : res.data})
    }).catch((err)=>{
        dispatch({type : "ERROR"})
    })
    .finally(()=>{
        console.log("api fetched completely")
    })
    
}

