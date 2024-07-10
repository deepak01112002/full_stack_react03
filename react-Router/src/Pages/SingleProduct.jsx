import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
 
  const deepak = useParams()
  const [state,setState] = useState({})
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${deepak.id}`)
    .then((res)=>res.json())
    .then((res)=>{
       setState(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
        <img src={state.image} alt="" width="150px" height="150px"/>
        <h1>{state.title} - ₹{state.price}</h1>
    </div>
  )
}

export default SingleProduct