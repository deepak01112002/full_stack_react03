


export const FetchingData = (dispatch)=>{
    dispatch({type : "LOAD"})
    fetch(`https://fakestoreapi.com/products`)
    .then(res =>res.json())
    .then((res)=>{
        dispatch({type : "DATA",payload : res})
    })
    .catch((err)=>{
        dispatch({type : "ERROR"})
    })
}