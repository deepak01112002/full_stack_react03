import { useState } from "react"

const HOC = (OriginalComponent)=>{
    const add =()=>{
        const [state,setState] = useState(0)
        const handleClick = ()=>{
            setState(state + 1)
        }
        const handlePlus5=()=>{
             setState(state + 5)
        }
        return (
           <> 
            <h1>{state}</h1>
            <OriginalComponent clr={"red"} h={handleClick} h5={handlePlus5}/>
          </> 
        )
    }
   return add
}

export default HOC