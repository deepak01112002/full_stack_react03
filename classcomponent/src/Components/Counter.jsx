// import { useState } from "react"

import { Component } from "react";



// function Counter(){
//     const [state,setState] = useState
//     return (
//         <div>
//             <h1>Counter</h1>
//         </div>
//     )
// }




class Counter extends Component{

constructor(props){
    super(props)
    this.state = {count : 0}

}

handleClick = ()=>{
    this.setState({count : this.state.count + 1 })
}


render(){
    return (
        <div>
            <h1>Counter</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Click</button>
        </div>
    )
}



}










export default Counter