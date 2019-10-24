import React, { Component } from "react";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer(props) {
  return (
    <footer className="footer bg-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <img
              className="img-fluid footerImg"
              src="https://www.logolynx.com/images/logolynx/63/63e15cf56aae30c9cc5cebbde27f7ddd.jpeg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
