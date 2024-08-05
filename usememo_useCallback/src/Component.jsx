import {React,memo} from 'react'

function Component({handleClick}) {
    console.log("Child Component")
  return (
    <div>Component
        <button onClick={handleClick}>CHild button</button>
    </div>
  )
}

export default memo(Component)