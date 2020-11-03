import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import Modal from "react-modal";

import "./livre.css";

Modal.setAppElement("#root");

export default function Livre({
  id,
  libelle,
  titre,
  auteur,
  genre,
  edition,
  description,
  nombre_exemplaire,
  photo,
  addLivreArchive,
  deleteLivre,
  updateLivre,
}) {
  const [updateMode, setUpdateMode] = useState(false);
  const [titreToUpdate, setTitreToUpdate] = useState(titre);
  const [libelleToUpdate, setLibelleToUpdate] = useState(libelle);
  const [auteurToUpdate, setAuteurToUpdate] = useState(auteur);
  const [photoToUpdate, setPhotoToUpdate] = useState(photo);
  const [descriptionToUpdate, setDescriptionToUpdate] = useState(description);
  const [nombre_exemplaireToUpdate, setNombre_exemplaireToUpdate] = useState(
    nombre_exemplaire
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);

  let { path } = useRouteMatch();

  const handleUpdateLivre = () => {
    updateLivre(
      id,
      libelleToUpdate,
      titreToUpdate,
      auteurToUpdate,
      nombre_exemplaireToUpdate,
      descriptionToUpdate,
      photoToUpdate
    );
    setUpdateMode(false);
  };

  return (
    <div className="livre">
      {!updateMode ? (
        <>
          <div>
            <div className="title">
              <div className="w3-col l3 m6 w3-margin-bottom">
                <div
                  className="w3-display-container"
                  style={{ padding: "20px" }}
                >
                  <div className="w3-display-topleft w3-black w3-padding">
                    {nombre_exemplaire} exemplaire
                  </div>

                  <img
                    className="zoom"
                    src={photo}
                    alt=""
                    style={{ width: "100%", height: 210 }}
                  />
                  <h5>{titre}</h5>
                  <p className="w3-opacity">{auteur}</p>
                  <p>
                    <button
                      id="bb"
                      onClick={() => setModalIsOpen(true)}
                      className="w3-button  w3-section"
                      style={{ background: "#830b51" }}
                    >
                      Modifier
                    </button>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={() => setModalIsOpen(false)}
                      style={{
                        overlay: {
                          backgroundColor: "black",
                          left: 200,
                          right: 200,
                          top: 150,
                          bottom: 150,
                        },
                        content: {
                          color: "#830b51",
                        },
                      }}
                    >
                      <h4>
                        <strong>Formulaire de modification de livre</strong>
                      </h4>
                      <div>
                        <input
                          className="w3-input w3-border"
                          type="number"
                          value={libelleToUpdate}
                          name="duration"
                          onChange={(e) => setLibelleToUpdate(e.target.value)}
                        />
                        <input
                          className="w3-input w3-section w3-border"
                          type="text"
                          name="titre"
                          value={titreToUpdate}
                          onChange={(e) => setTitreToUpdate(e.target.value)}
                        />
                        <input
                          className="w3-input w3-section w3-border"
                          type="text"
                          name="auteur"
                          value={auteurToUpdate}
                          onChange={(e) => setAuteurToUpdate(e.target.value)}
                        />

                        <input
                          className="w3-input w3-section w3-border"
                          type="text"
                          name="nombre_exemplaire"
                          value={nombre_exemplaireToUpdate}
                          onChange={(e) =>
                            setNombre_exemplaireToUpdate(e.target.value)
                          }
                        />
                        <input
                          className="w3-input w3-section w3-border"
                          placeholder="Description livre"
                          type="text"
                          name="description"
                          value={descriptionToUpdate}
                          onChange={(e) =>
                            setDescriptionToUpdate(e.target.value)
                          }
                        />
                        <input
                          className="w3-input w3-section w3-border"
                          type="text"
                          name="photo"
                          value={photoToUpdate}
                          onChange={(e) => setPhotoToUpdate(e.target.value)}
                        />
                      </div>
                      <button
                        className="w3-button w3-black w3-section"
                        onClick={handleUpdateLivre}
                      >
                        Modifier livre
                      </button>
                      <div>
                        <button
                          onClick={() => setModalIsOpen(false)}
                          style={{ float: "right" }}
                        >
                          Fermer
                        </button>
                      </div>
                    </Modal>
                    <button
                      id="bb"
                      onClick={() => deleteLivre(id)}
                      className="w3-button  w3-section"
                      style={{ background: "#830b51", width: "95px" }}
                    >
                      Supprimer
                    </button>
                    <button
                      id="bb"
                      onClick={() => addLivreArchive(id)}
                      className="w3-button  w3-section"
                      style={{ background: "#830b51" }}
                    >
                      Archiver
                    </button>
                    <Link to={`${path}/${id}`}>
                      <button className="w3-button w3-light-grey w3-block">
                        Details
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

Livre.propTypes = {
  titre: PropTypes.string.isRequired,
  libelle: PropTypes.number,
};

Livre.defaultProps = {
  libelle: 1,
};
