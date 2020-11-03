import React from "react";

import "./adhérentEmprunt.css";

export default function Emprunts({
  id,
  libelle,
  titre,
  nom,
  prenom,
  photo,
  dateEmprunt,
  dateRetour,
}) {
  function GetFormattedDate(d) {
    var todayTime = new Date(d);
    var month = todayTime.getMonth();
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  }
  return (
    <div className="mesEmprunts">
      <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container" style={{ padding: "1%" }}>
          <div className="w3-display-container" style={{ padding: "20px" }}>
            <div className="w3-display-topleft w3-black w3-padding">
              Libelle {libelle}
            </div>

            <img
              className="zoom"
              src={photo}
              alt=""
              style={{ width: "100%", height: 210 }}
            />
            <h5>{titre}</h5>
            <p className="w3-opacity">
              {GetFormattedDate(dateEmprunt)} - {GetFormattedDate(dateRetour)}
            </p>
            <p>
              Emprunteur : {nom} {prenom}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
