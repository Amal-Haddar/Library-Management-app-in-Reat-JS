import React, { useState, useCallback } from "react";
import "./register.css";
import RegisterForm from "../RegisterForm/registerForm";
import { NavLink } from "react-router-dom";

function Register() {
  const [adhérentsDemande, setAdhérentsDemande] = useState([]);

  const addDemandeInscrit = (nom, prenom, email, pass, photo) => {
    alert(
      "Votre demande a été envoyer, nous allons la traiter dans les plus brefs delais"
    );
    setAdhérentsDemande((previousAdhérentDemande) => [
      {
        id: previousAdhérentDemande.length + 1,
        banni: "vrai",
        nom,
        prenom,
        email,
        pass,
        photo,
      },
      ...adhérentsDemande,
    ]);

    var retrievedData = localStorage.getItem("tabDemande");
    var tabDemande = JSON.parse(retrievedData);

    localStorage.setItem(
      "tabDemande",
      JSON.stringify([
        ...tabDemande,
        {
          id: tabDemande.length + 1,
          banni: "vrai",
          nom,
          prenom,
          email,
          pass,
          photo,
        },
      ])
    );
  };
  const memoizedCallback = useCallback(addDemandeInscrit, []);

  return (
    <div className="Register">
      <div className="Maclass">
        {" "}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <NavLink to="/" className="w3-bar-item " activeClassName="active">
              <strong>ك</strong> <strong> KTEBI</strong>
            </NavLink>

            <div className="w3-right w3-hide-small">
              <NavLink
                to="/register"
                className="w3-bar-item "
                activeClassName="active"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="w3-bar-item "
                activeClassName="active"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="w3-container w3-padding-32"
          id="contact"
          style={{ marginTop: "100px", width: "50%", marginLeft: "25%" }}
        >
          <h3
            className="w3-border-bottom w3-border-light-grey w3-padding-16"
            style={{ color: "#830b51" }}
          >
            <strong> Formulaire d'inscription</strong>
          </h3>

          <RegisterForm addDemandeInscrit={memoizedCallback} />
        </div>
      </div>
    </div>
  );
}

export default Register;
