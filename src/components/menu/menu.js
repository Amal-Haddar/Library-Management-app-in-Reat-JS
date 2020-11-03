import React from "react";
import { NavLink } from "react-router-dom";

import "./menu.css";

function Menu() {
  return (
    <div className="Menu">
      {" "}
      <div className="Maclass">
        {" "}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <NavLink to="/accueil" className="w3-bar-item ">
              <strong>ك</strong> <strong> KTEBI</strong>
            </NavLink>
            <div className="w3-right w3-hide-small" activeClassName="active">
              <NavLink
                to="/livres"
                className="w3-bar-item "
                activeClassName="active"
              >
                Livres
              </NavLink>
              <NavLink
                to="/adherents"
                className="w3-bar-item "
                activeClassName="active"
              >
                Adhérents
              </NavLink>
              {/* <NavLink
                to="/livres"
                className="w3-bar-item "
                activeClassName="active"
              >
                Emprunts
              </NavLink> */}
              <NavLink
                to="/contact"
                className="w3-bar-item "
                activeClassName="active"
              >
                Contact
              </NavLink>
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
      </div>
    </div>
  );
}

export default Menu;
