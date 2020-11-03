import React, { useState, useRef, memo, useEffect } from "react";
import Modal from "react-modal";

import "./livreForm.css";

Modal.setAppElement("#root");

function LivreForm({ addLivre }) {
  const [libelle, setLibelle] = useState();
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [genre, setGenre] = useState("");
  const [edition, setEdition] = useState("");
  const [description, setDescription] = useState("");
  const [nombre_exemplaire, setNombre_exemplaire] = useState("");
  const [photo, setPhoto] = useState("");

  const inputTitre = useRef(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleAddLivre = () => {
    addLivre(
      libelle,
      titre,
      auteur,
      genre,
      edition,
      description,
      nombre_exemplaire,
      photo
    );
    setLibelle();
    inputTitre.current.focus();
    setTitre("");
    setPhoto("");
  };
  useEffect(() => {
    document.title = titre;
  });

  return (
    <div className="task-form">
      <button
        onClick={() => setModalIsOpen(true)}
        className="w3-button w3-black w3-section"
      >
        Ajouter Livre
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "black",
            left: 150,
            right: 150,
            top: 100,
            bottom: 100,
          },
          content: {
            color: "#830b51",
          },
        }}
      >
        <h2>
          <strong>Formulaire d'ajout de livre</strong>
        </h2>
        <p>
          <input
            className="w3-input w3-border"
            type="number"
            placeholder="Libellé"
            value={libelle}
            name="libelle"
            onChange={(e) => setLibelle(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Titre"
            value={titre}
            ref={inputTitre}
            name="titre"
            onChange={(e) => setTitre(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Auteur"
            value={auteur}
            name="auteur"
            onChange={(e) => setAuteur(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Genre"
            value={genre}
            name="genre"
            onChange={(e) => setGenre(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="date"
            placeholder="Edition"
            value={edition}
            name="edition"
            onChange={(e) => setEdition(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Decription"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="number"
            placeholder="Nombre d'exemplaire"
            value={nombre_exemplaire}
            name="nombre_exemplaire"
            onChange={(e) => setNombre_exemplaire(e.target.value)}
          />
          <input
            className="w3-input w3-section w3-border"
            type="text"
            placeholder="Photo"
            value={photo}
            name="photo"
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button
            className="w3-button w3-black w3-section"
            onClick={handleAddLivre}
          >
            Ajouter
          </button>
        </p>
        <div>
          <button
            onClick={() => setModalIsOpen(false)}
            style={{ float: "right" }}
          >
            Fermer
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default memo(LivreForm);
