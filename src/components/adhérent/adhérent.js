import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
//import Modal from "react-modal";

import "./adhérent.css";

export default function Adhérent({
  id,
  email,
  nom,
  prenom,
  photo,
  BannirAdhérent,
}) {
  let { path } = useRouteMatch();
  return (
    <div className="livre">
      <>
        <div>
          <div className=" w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img
                className="zoom"
                src={photo}
                alt="John"
                style={{ width: "90%", height: 280, paddingRight: "20px" }}
              />
              <h5>
                {nom} {prenom}
              </h5>
              <strong className="w3-opacity">{email}</strong>

              <p>
                <Link to={`${path}/${id}`}>
                  <button
                    className="w3-button w3-light-grey "
                    style={{ width: "280px" }}
                  >
                    Details
                  </button>
                </Link>
                <button
                  className="w3-button  "
                  style={{ width: "280px", background: "red" }}
                  onClick={() => BannirAdhérent(id)}
                >
                  Bannir
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
