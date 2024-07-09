import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Men from "../Pages/Men"
import Women from "../Pages/Women"
import Cart from "../Pages/Cart"
import Error from '../Pages/Error'
import Product from '../Pages/Product'
import SingleProduct from '../Pages/SingleProduct'
function MainRoute() {
  return (
    <div>
      <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/product' element={<Product/>}></Route>
           <Route path='/product/:id' element={<SingleProduct/>}></Route>
           <Route path='/women' element={<Women/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='*' element={<Error/>}></Route>
      </Routes>

    </div>
  )
}

export default MainRoute