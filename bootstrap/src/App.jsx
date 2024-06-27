import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from '@chakra-ui/react'

function App() {
 const [state,setState] = useState(null)
  useEffect(()=>{
     fetch(`https://dog.ceo/api/breeds/image/random`)
     .then((res)=>{
      return res.json()
     })
     .then((res)=>{
          setState(res)
     })
     .catch((err)=>{
      console.log(err)
     })
  },[])

  return (
    <>
      
      
      { state == null ? <Spinner/> : <img src={state.message}/>}
    </>
  )
}

export default App
