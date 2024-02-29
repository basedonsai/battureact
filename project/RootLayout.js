import React from 'react'
import Search from './search/Search';
import { useState,useEffect } from 'react';
import Home from './home/Home';
import Main from './main/Main';
function RootLayout() {
let [productsData,setProductsData]=useState([])
let [search,accessSearch]=useState('')
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then(response=>response.json())
  .then(productsData=>setProductsData(productsData))
  .catch(err=>console.log(err))
})

  return (
    <div className="">
        <Search productInfo={search} data={productsData} changeProduct={accessSearch}></Search>
        <Home></Home>
        <Main data={productsData} productInfo={search} setting={setProductsData}></Main>
    </div>
  )
}

export default RootLayout