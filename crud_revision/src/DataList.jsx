import React from 'react'

function DataList({arr,handleDelete,handleEdit}) {
  return (
    <div>
        {
        arr.map((el)=>{
          return (
              <div key={el.id}>
                 <img src={el.img} alt="" />
                 <h1>{el.name}</h1>
                 <button onClick={()=>handleDelete(el.id)}>Delete</button>
                 <button onClick={()=>handleEdit(el.id)}>Edit</button>
              </div>
          )
        })
       }
    </div>
  )
}

export default DataList