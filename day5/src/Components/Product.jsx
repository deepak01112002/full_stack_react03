

import React from 'react'
import { useState } from 'react'

function Product() {
    const [state,setState] = useState({
        title : "",
        price : "",
        img : "",
        cat : ""
    })
    const [arr,setArr] = useState([])

     const handleChange = (e)=>{
        let {name,value} = e.target
       setState({...state,[name] : value})
     }

    const handleClick = ()=>{
        setArr([...arr,state])
    }

    console.log(arr)
  return (
    <div>
        <input type="text" placeholder='Title' name='title' onChange={handleChange} />
        <input type="text" placeholder='Price' name='price' onChange={handleChange} />
        <input type="text" placeholder='ImageUrl' name='img' onChange={handleChange} />
        <input type="text" placeholder='Category' name='cat' onChange={handleChange} />
        <button onClick={handleClick}>Click</button>
        <div>
            {arr.map((el)=>{
                return(
                    <img src={el.img} alt={el.title}/>
                )
            })}
        </div>
    </div>
  )
}

export default Product