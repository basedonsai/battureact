import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Counter from "../counter/Counter";
function Cart() {
  let navigate=useNavigate();
  function travel(){
    navigate("/");
  }
  let { state } = useLocation();
  let [cart, setCart] = useState([]);
  let [productsData, setProductsData] = useState([]);
  console.log(cart);
  if(cart.length===1 && cart[0].length===20)
  setCart([]);
  function addToCart(product) {
    setCart([...cart,product]);
  }
  function deleteFromCart(product,index){
    let arr=cart;
    arr.splice(index,1);
    setCart(arr);
    setProductsData([...productsData,product]);
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((productsData) => setProductsData(productsData))
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    if(state){
      setCart([state]);
    }
  },[state]);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div
        className="scrollable bg-dark text-white p-4"
        style={{ flex: "0 0 250px" }}
      >
        <button onClick={travel} className="btn ms-5"><i class="bi fs-1 bi-house-door-fill text-white"></i></button>
        <p className="mb-4 text-info fs-4 fw-bolder">Filter Products</p>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label labels"
            htmlFor="flexRadioDefault1"
          >
            Ascending
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label labels"
            htmlFor="flexRadioDefault2"
          >
            Descending
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="customRange3" className="form-label">
            Price
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            id="customRange3"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="customRange3" className="form-label">
            Rating
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.1"
            id="customRange3"
          ></input>
        </div>
      </div>
      <div className="scrollable p-2">
        <div className="bg-secondary rounded-4">
        <p className="text-white text-center fs-3">You might also add</p>
        </div>
         {productsData.filter((selected)=>{
          let y=0;
          for(let i=0;i<cart.length;i++){
            if(cart[i]===selected)
            y=1
          }
          if(y===0)
          return selected;
        }).map((object, index) => ( 
          <div key={index} className="d-flex content mt-2 border border-1 p-4">
            <img src={object.image} alt="" className="mb-5" width={"150px"} />
            <div className="">
              <p className="fw-3 fs-5 ms-4">{object.title}</p>
              <div
            className="custom-para1 ms-4 mb-5 d-inline ps-2 pe-2 pt-1 pb-1 rounded-4"
            style={{ width: "70px" }}
          >
            <p className="d-inline pe-1">{object.rating.rate}</p>
            <i className="bi bi-star-fill"></i>
          </div>
              <div className="d-inline ps-2 rating">
            {object.rating.count} Ratings & reviews
          </div>
          <div className="mt-3">
              <i className="bi fs-5 bi-currency-rupee fw-3 ms-4"></i>
            <p className="d-inline fs-5 fw-3">{object.price}</p>
            <div className="mt-2">
            <button onClick={()=>addToCart(object)} className="border border-0 ms-4 p-2 rounded-4 bg-warning-subtle text-dark">Add to cart</button>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hello scrollable p-4">
        {cart.length===0?<p className="text-center bg-dark text-white rounded-4 fs-3">Your Cattron Cart is EMPTY</p>:
        cart.map((obj, index) => (
          <div className="d-flex content-content border border-1 mb-2 p-4" key={index}>
            <img src={obj.image} style={{ width: "150px" }} alt="" />
            <div className="">
            <p className="fw-4 fs-5 ms-4">{obj.title}</p>
            <Counter />
            <i className="bi fs-5 bi-currency-rupee fw-3 ms-4"></i>
            <p className="d-inline fs-5 fw-3">{obj.price}</p>
            <div className="mt-3 ms-4">
            <button onClick={()=>deleteFromCart(obj,index)} className="custom-button text-danger bg-white">Delete</button>
            </div>
          </div>
          </div>
        ))}
        {cart.length===0?<p></p>:<div className="text-center mt-3">
          <button className="but">Confirm Products</button>
        </div>
}
      </div>
    </div>
  );
}
export default Cart;