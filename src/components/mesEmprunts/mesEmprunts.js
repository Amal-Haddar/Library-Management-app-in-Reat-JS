import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useRouteMatch } from "react-router-dom";

import "./mesEmprunts.css";

export default function MesEmprunts({ id, titre, auteur, photo }) {
  let { path } = useRouteMatch();

  return (
    <div className="livre">
      <>
        <div>
          <div className="title">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container" style={{ padding: "1%" }}>
                <div
                  className="w3-display-container"
                  style={{ padding: "20px" }}
                >
                  <img
                    className="zoom"
                    src={photo}
                    alt=""
                    style={{ width: "100%", height: 210 }}
                  />
                  <h5>{titre}</h5>
                  <p className="w3-opacity">{auteur}</p>

                  <Link to={`${path}/${id}`}>
                    <button className="w3-button w3-light-grey w3-block">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

/* LivreArchive.propTypes = {
  titre: PropTypes.string.isRequired,
  libelle: PropTypes.number,
};

LivreArchive.defaultProps = {
  libelle: 1,
}; */
