import React from 'react'

function DataListing({arr,handleDelete,handleEdit}) {

  return (
    <>
      {
            arr.map((el)=>{
                return (
                     <div key={el.id} style={{display : "flex", flexWrap : "wrap"}}>
                          <div>
                             <img src={el.img} alt={el.title} />
                            
                          </div>
                          <div>
                              <h1>{el.title} - {el.des}</h1>
                              <button onClick={()=>handleEdit(el.id)}>Edit</button>
                              <button onClick={()=>handleDelete(el.id)}>Delete</button>

                          </div>
                          <div>
                              <h1> ₹ {el.price}</h1>
                          </div>
                     </div>
                )
            })
        }
    </>
  )
}

export default DataListing