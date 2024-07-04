import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useEffect } from 'react';
import DataList from './DataList';

function App() {
  const [state,setState] = useState({
    id : v4(),
    img : "",
    name : ""
  })
  const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])
  const [edit,setEdit] = useState(null)
  const handleChange = (e)=>{
    setState({...state,[e.target.name] : e.target.value})
  }
  const handleSubmit = (e)=>{
     e.preventDefault()

     if(edit == null){
     setArr([...arr,state])
     }else{
        
       let data =  arr.map((el)=>{
          if(el.id == edit){
             return {...state}
          }else{
            return el;
          }
        })
        setArr(data)
     }
     setEdit(null)

     setState({
      id : v4(),
      img : "",
      name : ""
     })
  }
  
  useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(arr))
  },[arr])

  const handleDelete = (id)=>{
    let data = arr.filter((el)=>{
      if(el.id != id){
        return el;
      }
    })
    setArr(data);
  }

  
  const handleEdit = (id)=>{
    setEdit(id)
      arr.forEach((el)=>{
        if(el.id == id){
          setState(el)
        }
      })
  }

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <input type="text" name='img' value={state.img} onChange={handleChange} placeholder='Image URL' />
          <input type="text" name='name' value={state.name} onChange={handleChange} placeholder='Name'/>
          <input type="submit" value={edit == null ? "Submit" : "Edit"}  />
       </form>
       <DataList arr={arr} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
