import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './Fierbase/firebase';

function App() {
      const [email,setEmail] = useState("");
      const [pass,setPass] = useState("")
      const [data,setData] = useState([])
 
        const userCollection  = collection(db,"users")

      const handleSubmit = async (e)=>{
        e.preventDefault();
        let obj = {
          email : email,
          password : pass
        }
       let d = await addDoc(userCollection,obj)
       getData()
       alert(`Data added successfully with id ${d.id}`)
      }
     

      // Getting the Data ------------------------------------------------------------ 
     

      const getData = async()=>{
         let data = await getDocs(userCollection)
         let arr = data.docs.map((el)=>{
             return { id : el.id, ...el.data()}
         })
         setData(arr)
      }
      useEffect(()=>{
         getData()
      },[])
    const handleDelete = async (id)=>{
      let dell = doc(db,"users", id)
      await deleteDoc(dell)
      getData()
      alert("Data Deleted Successfully")
    }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
      {
        data.map((el)=>{
            return (
                 <div key={el.id}>
                     <h3>{el.email} - {el.password}</h3>
                     <button onClick={()=>handleDelete(el.id)}>Delete</button>
                     <button>Edit</button>
                 </div>
            )
        })
      }
    </>
  )
}

export default App
