import React, { useState, useCallback, useEffect } from "react";
import "./livresPage.css";
import LivreForm from "../livreForm/livreForm";
import LivresList from "../livresList/livresList";
import Footer from "../footer/footer";
import Livre from "../livre/livre";
import LivreArchive from "../ArchiveLivre/archiveLivre";

import {
  fetchLivres,
  AfficherLivres,
  AfficherArchiveLivres,
} from "../../services/livres.services";

function LivresPage() {
  const [livres, setLivres] = useState([]);
  const [livresArchive, setLivresArchive] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setLoading(true);
      if (!searchValue) {
        const result = await AfficherLivres();
        const result2 = await AfficherArchiveLivres();
        setLivres(result);
        setLivresArchive(result2);
        setLoading(false);
      } else {
        const result = await fetchLivres(searchValue);
        console.log("result: ", didCancel);
        if (!didCancel) {
          setLivres(result);
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => {
      console.log("cleanup: ", searchValue);
      didCancel = true;
    };
  }, [searchValue]);

  const addLivre = (
    libelle,
    titre,
    auteur,
    genre,
    edition,
    description,
    nombre_exemplaire,
    photo
  ) => {
    setLivres((previousLivres) => [
      {
        id: previousLivres.length + 1,
        libelle: Number(libelle),
        titre,
        auteur,
        genre,
        edition,
        description,
        nombre_exemplaire,
        photo,
      },
      ...previousLivres,
    ]);
  };

  const addLivreArchive = (id) => {
    //Livre à archiver
    const newLivres = livres.filter((livre) => livre.id === id);
    //tab livre sans le livre à archiver
    const newLivres2 = livres.filter((livre) => livre.id !== id);

    //console.log(newLivres[0].libelle);
    setLivresArchive((previousLivresArchive) => [
      ...previousLivresArchive,
      {
        id: previousLivresArchive.length + 1,
        libelle: newLivres[0].libelle,
        titre: newLivres[0].titre,
        auteur: newLivres[0].auteur,
        genre: newLivres[0].genre,
        edition: newLivres[0].edition,
        description: newLivres[0].description,
        nombre_exemplaire: newLivres[0].nombre_exemplaire,
        photo: newLivres[0].photo,
      },
    ]);

    setLivres(newLivres2);
    alert("Livre ajoutée à l'archive ");
  };

  const deleteLivreArchive = (
    id,
    libelle,
    titre,
    auteur,
    genre,
    edition,
    description,
    nombre_exemplaire,
    photo
  ) => {
    const newLivres = livresArchive.filter((livre) => livre.id === id);
    const newLivresArchive = livresArchive.filter((livre) => livre.id !== id);

    setLivres((previoussetLivres) => [
      {
        id: setLivres.length + 1,
        libelle: newLivres[0].libelle,
        titre: newLivres[0].titre,
        auteur: newLivres[0].auteur,
        genre: newLivres[0].genre,
        edition: newLivres[0].edition,
        description: newLivres[0].description,
        nombre_exemplaire: newLivres[0].nombre_exemplaire,
        photo: newLivres[0].photo,
      },
      ...setLivres,
    ]);
    setLivresArchive(newLivresArchive);
  };

  const updateLivre = (
    id,
    libelle,
    titre,
    auteur,
    nombre_exemplaire,
    description,
    photo
  ) => {
    const newLivres = livres.map((livre) =>
      livre.id === id
        ? {
            libelle,
            titre,
            auteur,
            nombre_exemplaire,
            description,
            photo,
          }
        : livre
    );
    setLivres(newLivres);
  };

  const memoizedCallback = useCallback(addLivre, []);

  const deleteLivre = (id) => {
    const newLivres = livres.filter((livre) => livre.id !== id);

    // eslint-disable-next-line no-restricted-globals
    if (confirm("Voulez vous vraiment supprimer ce livre ?")) {
      setLivres(newLivres);
      alert("Succées de suppression du livre ");
    } else {
      alert("Supression annulée ");
    }
  };

  return (
    <div className="LivresPage">
      <div className="Maclass">
        {/* Page content  */}
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
          {/* Livres Section */}
          <div className="w3-container w3-padding-32" id="projects">
            {/* Search  */}
            <form className="example ">
              <div className="w3-row-padding">
                <strong>Rechercher Livre</strong>
                <input
                  type="search"
                  placeholder="Rechercher livre par nom, par auteur..."
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  style={{ width: "60%", marginLeft: "15px" }}
                />
              </div>
            </form>

            <div
              className="example w3-border-bottom  w3-border-light-grey"
              style={{ marginTop: "20px" }}
            ></div>
            <div className="cont">
              <div className="  " style={{ float: "right" }}>
                <LivreForm addLivre={memoizedCallback} />
              </div>
              {/* Search  */}
              <h3
                className="  w3-border-light-grey w3-padding-16"
                style={{ color: "#830b51" }}
              >
                <strong> Gestion Livres </strong>
              </h3>

              <div
                className="example w3-border-bottom  w3-border-light-grey"
                style={{ marginTop: "20px" }}
              ></div>
            </div>
          </div>
          <div className="w3-row-padding">
            <div>
              {
                loading ? (
                  <div>
                    {livres.map((livre) => (
                      <Livre
                        key={livre.id}
                        id={livre.id}
                        libelle={livre.libelle}
                        titre={livre.titre}
                        deleteLivre={deleteLivre}
                        updateLivre={updateLivre}
                        addLivreArchive={addLivreArchive}
                        deleteLivreArchive={deleteLivreArchive}
                      />
                    ))}{" "}
                  </div>
                ) : (
                  // isVisible && (
                  <LivresList
                    livres={livres}
                    deleteLivre={deleteLivre}
                    updateLivre={updateLivre}
                    addLivreArchive={addLivreArchive}
                    deleteLivreArchive={deleteLivreArchive}
                  />
                )
                // )
              }
            </div>
          </div>
          <h3
            className="w3-border-bottom w3-border-top w3-border-light-grey w3-padding-16"
            style={{ color: "#830b51" }}
          >
            <strong> Livres Archivés</strong>
          </h3>
          <div
            style={{ paddingLeft: "7%", paddingTop: "2%", paddingRight: "5%" }}
          >
            {livresArchive.map((livre) => (
              <LivreArchive
                key={livre.id}
                id={livre.id}
                libelle={livre.libelle}
                titre={livre.titre}
                auteur={livre.auteur}
                photo={require(`../../assets/images_livres/${livre.photo}.jpg`)}
                addLivreArchive={addLivreArchive}
                updateLivre={updateLivre}
              />
            ))}{" "}
          </div>
        </div>

        {/* Image end */}
        <div className="w3-container">
          <img
            src={require("../../assets/images/5.jpg")}
            alt=""
            className="w3-image"
          />
        </div>
        {/* Image end */}
        {/* Footer  */}
        <Footer />
        {/* Footer  */}
      </div>
    </div>
  );
}

export default LivresPage;
