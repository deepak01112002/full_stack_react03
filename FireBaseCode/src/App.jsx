import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './Fierbase/firebase';

function App() {
      const [email,setEmail] = useState("");
      const [pass,setPass] = useState("")
      const [data,setData] = useState([])
      const [edit,setEdit] = useState(null)
 
        const userCollection  = collection(db,"users")

      const handleSubmit = async (e)=>{
        e.preventDefault();
        let obj = {
          email : email,
          password : pass
        }
        if(edit != null){
             let d = doc(db,"users", edit);
             await updateDoc(d,obj)
             
        }else{
          let d = await addDoc(userCollection,obj)
          alert(`Data added successfully with id ${d.id}`)
        }
       
        setPass("")
        setEmail("")
        setEdit(null)
       getData()
       
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

    const handleEdit =(id)=>{
      setEdit(id)
      data.forEach((el)=>{
        if(el.id == id){
           setEmail(el.email)
           setPass(el.password)
        }
      })
    }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" value={edit != null ? "Update" : "Submit"} />
      </form>
      {
        data.map((el)=>{
            return (
                 <div key={el.id}>
                     <h3>{el.email} - {el.password}</h3>
                     <button onClick={()=>handleDelete(el.id)}>Delete</button>
                     <button onClick={()=>handleEdit(el.id)}>Edit</button>
                 </div>
            )
        })
      }
    </>
  )
}

export default App
