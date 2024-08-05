import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from './Fierbase/firebase';

function App() {
      const [email,setEmail] = useState("");
      const [pass,setPass] = useState("")
 
        const userCollection  = collection(db,"users")

      const handleSubmit = async (e)=>{
        e.preventDefault();
        let obj = {
          email : email,
          password : pass
        }
       let d = await addDoc(userCollection,obj)
       alert(`Data added successfully with id ${d.id}`)
      }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
    </>
  )
}

export default App
