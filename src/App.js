import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/homepage";
import Products from "./components/products";

function App() {
  return (
    <div className="App">
      <Home />
      <div className="container productsection">
        <div className="row">
          <div className="col-sm-4 paddingsetting">
            <Products
              price="80"
              title="Perfume"
              imgUrl="https://netstorage-tuko.akamaized.net/images/40799ba2dd4e2f3c.jpg"
              description="Some quick example text to build on the card title and make up the
        bulk of the card's content."
            />
          </div>
          <div className="col-sm-4 paddingsetting">
            <Products
              price="100"
              title="Watch"
              imgUrl="https://staticimg.titan.co.in/Titan/Catalog/1696QC03_3.jpg?pView=pdp"
              description="Some quick example text to build on the card title and make up the
        bulk of the card's content."
            />
          </div>
          <div className="col-sm-4 paddingsetting">
            <Products
              price="1000"
              title="Laptop"
              imgUrl="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6326/6326270_sd.jpg"
              description="Some quick example text to build on the card title and make up the
        bulk of the card's content."
            />
          </div>
          <div className="col-sm-4 paddingsetting">
            <Products
              price="80"
              title="Perfume"
              imgUrl="https://netstorage-tuko.akamaized.net/images/40799ba2dd4e2f3c.jpg"
              description="Some quick example text to build on the card title and make up the
        bulk of the card's content."
            />
          </div>
          <div className="col-sm-4 paddingsetting">
            <Products
              price="100"
              title="Watch"
              imgUrl="https://staticimg.titan.co.in/Titan/Catalog/1696QC03_3.jpg?pView=pdp"
              description="Some quick example text to build on the card title and make up the
        bulk of the card's content."
            />
          </div>
          <div className="col-sm-4 paddingsetting">
            <Products
              price="1000"
              title="Laptop"
              imgUrl="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6326/6326270_sd.jpg"
              description="Some quick example text to build on the card title and make up the
        bulk of the card's content."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
