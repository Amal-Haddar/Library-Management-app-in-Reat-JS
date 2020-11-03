import React from "react";
//import PropTypes from "prop-types";
//import { Link } from "react-router-dom";
//import { useRouteMatch } from "react-router-dom";

import "./adhérentDemande.css";

export default function AdhérentDemande({
  id,
  email,
  nom,
  prenom,
  photo,
  RefuserAdhérent,
  acceptéDemandeAdhésion,
}) {
  //let { path } = useRouteMatch();
  return (
    <div className="adhérentDemande">
      <>
        <div>
          <div className=" ">
            <div className="w3-col l3 m6 w3-margin-bottom ">
              <img
                className="zoom"
                src={photo}
                alt="John"
                style={{ width: "80%", height: 200, paddingRight: "10px" }}
              />
              <h6>
                {nom} {prenom}
              </h6>
              <p className="w3-opacity">{email}</p>

              <p>
                <button
                  className="w3-button  w3-section w3-grayscale"
                  style={{ background: "green", width: "112px" }}
                  onClick={() => acceptéDemandeAdhésion(id)}
                >
                  Accepter
                </button>
                <button
                  className="w3-button  w3-section w3-grayscale"
                  style={{ background: "red", width: "112px" }}
                  onClick={() => RefuserAdhérent(id)}
                >
                  Refuser
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
