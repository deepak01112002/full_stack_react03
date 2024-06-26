import React, { useState } from 'react'
import HOC from './HOC'

function Counter1(props) {
    
  return (
    <div style={{backgroundColor : props.clr}}>
        <button onClick={props.h}>ADD</button>
        <button onClick={props.h5}>aDD 5</button>
    </div>
  )
}

export default HOC(Counter1)