import React from 'react'
import RenderData from './RenderData'

function FetchingData(props) {
  return (
    <div>
        <RenderData data={props.state}/>
    </div>
  )
}

export default FetchingData