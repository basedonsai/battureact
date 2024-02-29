import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

function Main(props) {
  let [hides, setHide] = useState(false);
  function hide() {
    setHide(true);
  }
  // {data:[{},{}]} => props
  let productsData = props.data;
  const navigate = useNavigate();
  function openProduct(product) {
    navigate("/product", { state: product });
  }
  return (
    <div className="">
      <div className="container">
        {props.productInfo === "" ? (
          <div
            className="main row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-5 mt-2 p-4"
            style={{ zIndex: "2" }}
          >
            {productsData.map((product, index) => (
              <div className="col" key={index}>
                <div className="card border border-0 custom-card text-center h-100 p-2 d-flex justify-content-center align-items-center">
                  <div className="">
                    <img
                      src={product.image}
                      alt=""
                      className="d-block mx-auto img-custom"
                      style={{ width: "150px" }}
                    />
                    <div className="card-body">
                      <p className="fw-normal">{product.title}</p>
                      <button
                        className="btn btn-success"
                        onClick={() => openProduct(product)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : productsData.filter((product) =>
            product.title
              .toLowerCase()
              .includes(props.productInfo.toLowerCase())
          ).length === 0 ? (
          <div className="d-block mt-5">
            <div className="">
              <img
                src="https://i.pinimg.com/originals/4b/e9/e8/4be9e8a099465288a32dc366a866fdfd.png"
                className="d-block mx-auto"
                style={{ width: "250px" }}
                alt=""
              />
            </div>
            <h1 className="text-center p-3 text-warning mt-3 main-center">
              PRODUCTS NOT FOUND !!
            </h1>
          </div>
        ) : (
          <div className="main row justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 mt-2 g-5 row-cols-lg-3 g-4 mt-2 p-4">
            {productsData
              .filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(props.productInfo.toLowerCase())
              )
              .map((selected, index) => (
                <div className="col" key={index}>
                  <div className="card border border-0 custom-card text-center h-100 p-2 d-flex justify-content-center align-items-center">
                    <div className="">
                      <img
                        src={selected.image}
                        alt=""
                        className="d-block mx-auto img-custom"
                        style={{ width: "150px" }}
                      />
                      <div className="card-body">
                        <p>{selected.title}</p>
                        <button
                          className="btn btn-success"
                          onClick={() => openProduct(selected)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {hides === true ? (
        <p></p>
      ) : (
        <div className="up-footer mt-5 p-3 d-flex justify-content-center align-items center">
          <p className="text-center mt-1">
            Our site uses cookies.By continuing to use our website, you agree to
            our <p className="d-inline fw-bold">privacy policy</p>.
          </p>
          <button
            onClick={hide}
            className="border border-0 p-2 rounded-2 ps-3 pe-3 buton text-white ms-3"
          >
            Accept
          </button>
        </div>
      )}
      <div className="foot text-white p-5">
        <div className="mb-5">
          <h1 className="display-3 fw-medium">Cattron</h1>
        </div>
        <div className="d-flex justify-content-evenly ms-2">
          <address>
            <p className="border-bottom border-white text-center">V I S I T - S T O R E</p>
            <p>korutla , Jagityal</p>
            <p>Telangana</p>
          </address>
          <address>
            <p className="border-bottom border-white text-center">C U S T O M E R <p className="ms-2 d-inline">C A R E</p></p>
            <p>Timings : 10 A M - 7 P M ( Mon-Sat )</p>
            <p>Whatsapp : +91 7075659983</p>
          </address>
          <address>
            <p className="border-bottom border-white text-center">F O L L O W <p className="ms-2 d-inline">U S</p></p>
            <a href="https://linktr.ee/srimanikanta" className="text-center link-danger ms-4" style={{textDecoration:"none"}}>Click here</a>
          </address>
          <address>
            <p className="border-bottom border-white text-center">A B O U T<p className="ms-3 d-inline">O R D E R</p></p>
            <p className="text-center">T r a c k - o r d e r</p>
            <p>Place Return / Exchange Request</p>
            <p className="text-center">Returns / Exchange Policy</p>
          </address>
        </div>
      </div>
    </div>
  );
}

export default Main;
