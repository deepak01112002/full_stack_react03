import { DATA, ERROR, LOADING } from "./actionType"


 export const FetchData = (dispatch)=> (obj,a,b)=>{
    dispatch({type : LOADING})
    console.log(obj,a,b)
    fetch(`https://fakestoreapi.com/products`)
    .then((Res) => Res.json())
    .then((res)=>{
        dispatch({type : DATA, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR})
    })
 }