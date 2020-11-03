import React from "react";

import "./index.css";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="Index">
      <div className="Maclass">
        {" "}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            {/*  <a href="#home" className="w3-bar-item w3-button">
              <strong>ك</strong> <strong> KTEBI</strong>
            </a> */}
            <Link to="/" className="w3-bar-item " activeClassName="active">
              <strong>ك</strong> <strong> KTEBI</strong>
            </Link>
            {/* //Float links to the right. Hide them on small screens  */}
            <div className="w3-right w3-hide-small">
              {/*    <a href="#projects" className="w3-bar-item w3-button">
                Register
              </a> */}
              <Link
                to="/register"
                className="w3-bar-item "
                activeClassName="active"
              >
                Register
              </Link>
              <Link
                to="/login"
                className="w3-bar-item "
                activeClassName="active"
              >
                Login
              </Link>
              {/*  <a href="#about" className="w3-bar-item w3-button">
                Login
              </a> */}
            </div>
          </div>
        </div>
        <header className="w3-display-container  w3-wide" id="home">
          <img
            className="w3-image"
            src={require("../../assets/images/17.jpg")}
            alt="Plateforme Ktebi"
            style={{ width: 1700, height: 650 }}
          />

          <div className="w3-display-middle w3-margin-top w3-center">
            <h1 style={{ color: "black", marginLeft: 10 }}>
              <strong>BIENVENUE DANS « KTEBI » !</strong>
            </h1>
            <h1 className="w3-xxlarge w3-text-white">
              <span className="w3-padding w3-black w3-opacity-min">
                <strong style={{ color: "#830b51" }}>ك</strong>
              </span>{" "}
              <span className="w3-hide-small w3-text-light-grey" id="test">
                <strong style={{ color: "#830b51" }}>KTEBI</strong>
              </span>
            </h1>
          </div>
        </header>
        {/*  <Menu /> */}
        <div
          className="w3-content w3-padding"
          style={{ maxWidth: "1564px" }}
        ></div>
      </div>
    </div>
  );
}

export default Index;
