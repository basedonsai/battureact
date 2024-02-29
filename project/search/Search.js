import React from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'
function Search(props) {
  const navigate=useNavigate();
  function openCart(){
   navigate("/cart",{state:props.data})
  }
  return (
      <div className="w-100 bg-dark pt-2 pb-1 text-white d-flex align-items-center justify-content-between container-fluid" style={{position:'fixed',zIndex:"7"}}  >
        <div className="d-flex justify-content-center">
        <img src="https://images.vexels.com/media/users/3/132103/isolated/preview/2b512b5ece5d914e68950bfdbf73b481-shopping-cart-circle-icon-by-vexels.png" style={{width:"4rem"}} alt="" />
        <h5 className='text-center mt-3'>CARTTRON</h5></div>
        <div className='input-group flex-nowrap w-50 mx-auto' style={{marginRight:"100px"}}>
          <input type="search" id="" className='p-2 form-control w-100 d-block mx-auto' placeholder='Search by Product "title"' aria-describedby="addon-wrapping" onChange={(e)=>props.changeProduct(e.target.value)}/>
          <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search fs-5"></i></span>
          </div>
          <div className="me-3 d-flex">
            <button onClick={()=>openCart(props.data)} className="bi bi-cart2 fs-1 text-white bg-dark border border-0 me-3"></button>
          <i className="bi bi-person-circle fs-1"></i>
          </div>
        </div>
  )
}

export default Search