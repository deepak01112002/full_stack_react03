import React from 'react'

function RenderData({data}) {
  return (
    <div>
        {
            data.map((el)=>(
                <div>
                    <img src={el.picture.large} alt="" />
                    <h1>{el.name.title} - {el.name.first}{el.name.last}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default RenderData