import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {
   const [data,setData] = useState([])
   const [filterData,setFilter] = useState({
    men : false,
    women : false,
    jewelry : false,
    electronics : false
   })
   const [sort , setSort] = useState("")
   const [search , setSearch] = useState("")

   useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
       setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })
   },[])

   const handleFilter = (e)=>{
       setFilter({
          ...filterData,
          [e.target.name] : e.target.checked
       })
   }

   const handleSort = (e)=>{
    setSort(e.target.value)
   }
   const handleSearch = (e)=>{
    setSearch(e.target.value)
   }
  //  function deepak(){
    let filteredDatas = data
    if(filterData.men || filterData.women || filterData.jewelry || filterData.electronics){
     filteredDatas =  filteredDatas.filter((el)=>{
        // if(filterData.men && filterData.women){
        //   return el.category == "men's clothing" || el.category == "women's clothing"
        // }
        // else if(filterData.men == true){
        //   return el.category == "men's clothing"
        // }else if(filterData.women == true){
        //   return el.category == "women's clothing"
        // }else if(filterData.jewelry == true)
        //    return el.category == "jewelery"
        // else{
        //   return true;
        // }
          if(filterData.men && el.category == "men's clothing") {
            return true;
          }
          if(filterData.women && el.category == "women's clothing"){
            return true;
          }
          if(filterData.jewelry && el.category == "jewelery"){
            return true;
          }
          if(filterData.electronics && el.category == "electronics"){
            return true;
          }
          
      })
    }
    
      if(sort){
         filteredDatas = filteredDatas.sort((a,b)=>{
           if(sort == "asc"){
            return  a.price - b.price
           }else if(sort == "desc"){
            return  b.price - a.price
           }
         })
      }
      if(search){
        filteredDatas = filteredDatas.filter((el)=>{
          return el.title.toLowerCase().includes(search.toLowerCase())
        })
      }

      // return filteredDatas;
  //  }

  //  let d = deepak()

  return (
    <div> 
         <input type="checkbox" name='men'  onChange={handleFilter}/> : Men
         <input type="checkbox" name='women'  onChange={handleFilter}/> : Women
         <input type="checkbox" name='jewelry'  onChange={handleFilter}/> : Jewelery
         <input type="checkbox" name='electronics'  onChange={handleFilter}/> : Electronics
         <select value="" onChange={handleSort}>
            <option value="">Sort the </option>
            <option name="" id="" value="asc">Low to High</option>
            <option name="" id="" value="desc">High to Low</option>
         </select>
         <input type="text" onChange={handleSearch} />

        {
           filteredDatas.map((el)=>(
                  <Link to={`/product/${el.id}`} key={el.id}><div>
                       <img src={el.image} alt="" width="150px" height="150px" />
                       <h1>{el.title} - ₹{el.price}</h1>
                   </div></Link>
            ))
        }
    </div>
  )
}

export default Product