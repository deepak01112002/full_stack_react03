import React, { useEffect, useState } from 'react'
import DataListing from './DataListing'
import { v4 } from 'uuid';
let obj = {
    id : v4(),
    title : "",
    price : "",
    img : "",
    des : ""
}
function Data() {
    const [state,setState] = useState(obj)
    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])
    const [id,setId] = useState(null)
    const handleChange = (e)=>{
        let {name,value} = e.target
        setState({...state,[name] : value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(id == null){
        setArr([...arr,state])
        }else{
          let d = arr.map((el)=>{
            if(el.id == id){
                return {...el,...state}
            }else{
                return el
            }
           }) 
           setArr(d)
           
        }
        setId(null)
        setState({
            id : v4(),
            title : "",
            price : "",
            img : "",
            des : ""
        })
    }
    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])
    const handleDelete = (a)=>{
    //    arr.filter((el)=>{
    //      if(el.id != a){
    //         return el
    //      }
    //    })

       let d = arr.filter(el => el.id != a)
       setArr(d)
    }

    const handleEdit = (id)=>{
        setId(id)
      arr.forEach((el)=>{
        if(el.id == id){
            setState(el)
        }
      })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title' value={state.title} name='title' onChange={handleChange} />
            <input type="text" placeholder='Price' value={state.price} name='price' onChange={handleChange}/>
            <input type="text" placeholder='Image URL' name='img' value={state.img} onChange={handleChange}/>
            <input type="text" placeholder='Description' name='des' value={state.des} onChange={handleChange}/>
            <input type="submit" value={id == null ? "Submit" : "Edit"} />
        </form>
        <DataListing arr={arr} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default Data