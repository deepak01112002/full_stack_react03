import { useState } from "react"



function Todo(){

    let [state,setState] = useState("")
    let [arr,setArr] = useState([])

    const handleChange = (ram)=>{
       setState(ram.target.value)
    }
    
    const handleClick = ()=>{
        let obj = {
            task : state,
            completed : false,
        }
        setArr([...arr,obj])
    }
    console.log(arr)

    return (
        <div>
            <h1>Todo</h1>
            <input type="text" placeholder="Enter a task" onChange={handleChange} />
            <button onClick={handleClick}>Click!!!</button>
            {
                arr.map((el)=>{
                    return (<div>
                          <h1>{el.task}</h1>
                          {el.completed ? <div>
                              <h1>Login</h1>
                          </div> : <div>
                              <h1>Signup</h1>
                            </div>}
                    </div>)
                })
            }
        </div>
    )
}

export default Todo