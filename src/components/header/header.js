import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="Header">
      {" "}
      <div className="Maclass">
        {" "}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a href="#home" className="w3-bar-item w3-button">
              <strong>ك</strong> <strong> KTEBI</strong>
            </a>
            {/* //Float links to the right. Hide them on small screens  */}
            <div className="w3-right w3-hide-small">
              <a href="#projects" className="w3-bar-item w3-button">
                Livres
              </a>
              <a href="#about" className="w3-bar-item w3-button">
                Adhérents
              </a>
              <a href="#contact" className="w3-bar-item w3-button">
                Emprunts
              </a>
              <a href="#contact" className="w3-bar-item w3-button">
                Contact
              </a>
            </div>
          </div>
        </div>
        <header className="w3-display-container  w3-wide" id="home">
          <img
            className="w3-image"
            src={require("../../assets/images/17.jpg")}
            alt="Plateforme Ktebi"
            style={{ width: 1700, height: 600 }}
          />

          <div className="w3-display-middle w3-margin-top w3-center">
            <h1 style={{ color: "black", marginLeft: 10 }}>
              BIENVENUE DANS KTEBI !
            </h1>
            <h1 className="w3-xxlarge w3-text-white">
              <span className="w3-padding w3-black w3-opacity-min">
                <b>ك</b>
              </span>{" "}
              <span className="w3-hide-small w3-text-light-grey" id="test">
                KTEBI
              </span>
            </h1>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
