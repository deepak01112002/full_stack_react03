import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INCREASE5 } from '../Redux/actionType'
import {d} from "../Redux/action"

function Counter2() {


    const value = useSelector((store)=>store)
    const dispatch = useDispatch()

  return (
    <div>
       <h1>{value.count2}</h1>
       <button onClick={()=>dispatch(d())}>+5</button>
    </div>
  )
}

export default Counter2