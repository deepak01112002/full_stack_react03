import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {
   const [data,setData] = useState([])

   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
       setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[])

  return (
    <div>
        {
           data.map((el)=>(
                  <Link to={`/product/${el.id}`} key={el.id}><div>
                       <img src={el.image} alt="" width="150px" height="150px" />
                       <h1>{el.title} - ₹{el.price}</h1>
                   </div></Link>
            ))
        }
    </div>
  )
}

export default Product