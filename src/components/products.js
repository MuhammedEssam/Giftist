import React, { Component } from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./products.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Products(props) {
  return (
    <div className="card product">
      <img src={props.imgUrl} className="card-img-top" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <h4 className="card-title">Price: ${props.price}</h4>
        <a href="#" className="btn btn-primary">
          Send Gift
        </a>
      </div>
    </div>
  );
}
export default Products;
