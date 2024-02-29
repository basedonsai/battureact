import React from "react";
import "./Product.css";
import { useLocation, useNavigate } from "react-router-dom";
function Product() {
  let { state } = useLocation();
  const navigate = useNavigate();
  function addToCart(product) {
    navigate("/cart", { state: product });
  }
  return (
    <div className="d-flex container css-custom">
      <div className="d-flex w-50">
        <img
          src={state.image}
          className="border p-5 rounded-5 d-block mx-auto custom-img"
          style={{ width: "400px" }}
          alt=""
        />
      </div>
      <div className="g-4 css-custom1 mx-auto d-flex justify-content-center align-items-center custom">
        <div className="p-5 border">
          <p className="lead fw-normal">{state.title}</p>
          <p>"{state.description}"</p>
          <div
            className="custom-para1 mx-auto d-inline ps-2 pe-2 pt-1 pb-1 rounded-4"
            style={{ width: "70px" }}
          >
            <p className="d-inline pe-1">{state.rating.rate}</p>
            <i className="bi bi-star-fill"></i>
          </div>
          <div className="d-inline ps-2 rating">
            {state.rating.count} Ratings & reviews
          </div>
          <div className="pt-3">
            <p className="price mb-1 fw-normal">Special Price</p>
            <i className="bi fs-3 bi-currency-rupee"></i>
            <p className="d-inline fs-3">{state.price}</p>
            <p className="fs-5">Category : {state.category}</p>
            <button
              onClick={() => addToCart(state)}
              className="btn-warning text-light rounded-3 btn ps-3 pe-3 text-center rounded-5"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
