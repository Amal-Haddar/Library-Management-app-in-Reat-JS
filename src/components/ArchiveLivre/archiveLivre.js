import React from "react";
import PropTypes from "prop-types";

import "./archiveLivre.css";

export default function LivreArchive({ titre, auteur, photo }) {
  return (
    <div className="livre">
      <>
        <div>
          <div className="title">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <div className="w3-display-container" style={{ padding: "1%" }}>
                <div className="w3-display-topleft w3-black w3-padding">
                  Livre archivé
                </div>

                <img
                  className="zoom"
                  src={photo}
                  alt=""
                  style={{ width: "60%", height: 210 }}
                />
                <h5 style={{ fontSize: "15px" }}>{titre}</h5>
                <p className="w3-opacity" style={{ fontSize: "13px" }}>
                  {auteur}
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

LivreArchive.propTypes = {
  titre: PropTypes.string.isRequired,
  libelle: PropTypes.number,
};

LivreArchive.defaultProps = {
  libelle: 1,
};
