import React from "react";

import Livre from "../livre/livre";

import "./livresList.css";

export default function LivresList({
  livres,
  deleteLivre,
  updateLivre,
  addLivreArchive,
  deleteLivreArchive,
}) {
  return (
    <div className="LivresList">
      <div>
        {livres.map((livre) => (
          <Livre
            key={livre.id}
            id={livre.id}
            libelle={livre.libelle}
            titre={livre.titre}
            auteur={livre.auteur}
            photo={require(`../../assets/images_livres/${livre.photo}.jpg`)}
            nombre_exemplaire={livre.nombre_exemplaire}
            deleteLivre={deleteLivre}
            updateLivre={updateLivre}
            addLivreArchive={addLivreArchive}
            deleteLivreArchive={deleteLivreArchive}
          />
        ))}
      </div>
    </div>
  );
}
