import logo from './logo.svg';
import './App.css'
import Deepak from './Portfolio'
import { useDispatch, useSelector } from 'react-redux';
import { getData, postData } from './Redux/action';

function App() {
   const store = useSelector((s)=>s);
   console.log(store)
   const dispatch = useDispatch()
  
  const handleClick = ()=>{
    let obj = {
      email : "Delgjsaflgksad",
      password : "sdlfsakfljsadf",
      username : "askdghskidflhj"
    }
    dispatch(postData)(obj)
  }
  const handleget =()=>{
    let obj = {
      email : "Delgjsaflgksad",
      password : "sdlfsakfljsadf",
      username : "askdghskidflhj"
    }
    dispatch(getData)(obj)
  }
  return (
    <div>
       
    <button onClick={handleClick}>POST</button>
     <button onClick={handleget}>GET</button>
    </div>
  );
}

export default App;
