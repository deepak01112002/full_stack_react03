import React, { useState } from 'react'
import HOC from './HOC'

function Counter2(props) {
  return (
    <div>
        <button onClick={props.h}>ADD</button>
        <button onClick={props.h5}>add5</button>
    </div>
  )
}

export default HOC(Counter2)