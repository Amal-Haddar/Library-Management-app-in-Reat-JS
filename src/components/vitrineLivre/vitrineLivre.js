import React, { useState, useEffect } from "react";
import "./vitrineLivre.css";
import Footer from "../footer/footer";

import LivreExposé from "../LivreExposé/livreExposé";
import MesEmprunts from "../mesEmprunts/mesEmprunts";

import { fetchLivres, AfficherLivres } from "../../services/livres.services";
//import { AfficherAdhérentsAccéptées } from "../../services/adhérents.services";

function VitrineLivre() {
  const [livres, setLivres] = useState([]);
  const [nvEmprunts, setNvEmprunts] = useState([]);
  const [ancEmprunts, setAncEmprunts] = useState([]);
  //const [adhérents, setAdhérents] = useState([]);
  //const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      if (!searchValue) {
        const result = await AfficherLivres();
        setLivres(result);
      } else {
        const result = await fetchLivres(searchValue);
        console.log("result: ", didCancel);
        if (!didCancel) {
          setLivres(result);
        }
      }
      var retrievedData = localStorage.getItem("UtilisateurConnecté");
      var UtilisateurConnecté = JSON.parse(retrievedData);
      var retrievedData1 = localStorage.getItem("adhérentsAccéptées");
      var accepté = JSON.parse(retrievedData1);
      const ad = accepté.filter((ac) => ac.id == UtilisateurConnecté.id);

      setAncEmprunts(ad[0].emprunts);
      //console.log("ancEmprunts : " + JSON.stringify(ancEmprunts));
    };
    fetchData();

    return () => {
      console.log("cleanup: ", searchValue);
      didCancel = true;
    };
  }, [searchValue]);

  const EmprunterLivre = (id) => {
    //adherent connecté
    var retrievedData = localStorage.getItem("UtilisateurConnecté");
    var UtilisateurConnecté = JSON.parse(retrievedData);
    console.log("UtilisateurConnecté: " + UtilisateurConnecté);
    //adherent connecté emprunts
    console.log(UtilisateurConnecté.id);
    if (UtilisateurConnecté.emprunts.length < 3) {
      //adherent acceptéé
      var retrievedData1 = localStorage.getItem("adhérentsAccéptées");
      var accepté = JSON.parse(retrievedData1);
      //Livre à emprunter
      const newLivres = livres.filter((livre) => livre.id == id);
      //console.log(newLivres[0].id);
      newLivres[0].nombre_exemplaire = newLivres[0].nombre_exemplaire - 1;

      //setLivres(newLivres);

      console.log(
        "UtilisateurConnecté.emprunts: " + UtilisateurConnecté.emprunts
      );

      var livreEmpr = [];
      //console.log(livreEmpr);
      var dateRetour = new Date();

      // add a day
      dateRetour.setDate(dateRetour.getDate() + 15);

      livreEmpr.push(
        {
          id: newLivres[0].id,
          libelle: newLivres[0].libelle,
          titre: newLivres[0].titre,
          auteur: newLivres[0].auteur,
          photo: newLivres[0].photo,
          dateEmprunt: new Date(),
          dateRetour: dateRetour,
        },
        ...UtilisateurConnecté.emprunts
      );
      setNvEmprunts(livreEmpr);
      localStorage.setItem(
        "UtilisateurConnecté",
        JSON.stringify({
          id: UtilisateurConnecté.id,
          nom: UtilisateurConnecté.nom,
          prenom: UtilisateurConnecté.prenom,
          email: UtilisateurConnecté.email,
          pass: UtilisateurConnecté.pass,
          photo: UtilisateurConnecté.photo,
          emprunts: livreEmpr,
        })
      );
      //console.log(UtilisateurConnecté.emprunts);
      var retrievedData3 = localStorage.getItem("UtilisateurConnecté");
      var UtilisateurConnectée = JSON.parse(retrievedData3);
      setUser(UtilisateurConnectée);
      //console.log(UtilisateurConnectée[0].emprunts);
      //mise à jours des emprunts dans les adhérents acceptés in

      var retrievedData4 = localStorage.getItem("adhérentsAccéptées");
      var adhérentsAccéptées = JSON.parse(retrievedData4);
      adhérentsAccéptées = adhérentsAccéptées.filter(
        (ad) => ad.id != UtilisateurConnecté.id
      );
      adhérentsAccéptées.push({
        id: UtilisateurConnecté.id,
        nom: UtilisateurConnecté.nom,
        prenom: UtilisateurConnecté.prenom,
        email: UtilisateurConnecté.email,
        pass: UtilisateurConnecté.pass,
        photo: UtilisateurConnecté.photo,
        emprunts: livreEmpr,
      });
      localStorage.setItem(
        "adhérentsAccéptées",
        JSON.stringify(adhérentsAccéptées)
      );

      //console.log("les adhérentsAccéptées: " + adhérentsAccéptées);
      alert("Livre emprunté avec succés ");
    } else {
      alert("Vous ne pouvez pas emprunter plus que 2 livres en même temps ");
    }
  };

  return (
    <div className="VitrineLivre">
      <div className="Maclass">
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
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
              <div className="  " style={{ float: "right" }}></div>
              {/* Search  */}
              <h3
                className="  w3-border-light-grey w3-padding-16"
                style={{ color: "#830b51" }}
              >
                <strong> Livres disponibles </strong>
              </h3>

              <div
                className="example w3-border-bottom  w3-border-light-grey"
                style={{ marginTop: "20px" }}
              ></div>

              <div className="w3-row-padding">
                {livres.map((livre) => (
                  <LivreExposé
                    key={livre.id}
                    id={livre.id}
                    libelle={livre.libelle}
                    titre={livre.titre}
                    auteur={livre.auteur}
                    nombre_exemplaire={livre.nombre_exemplaire}
                    photo={require(`../../assets/images_livres/${livre.photo}.jpg`)}
                    EmprunterLivre={EmprunterLivre}
                  />
                ))}
              </div>
            </div>
            <h3
              className="w3-border-bottom w3-border-top w3-border-light-grey w3-padding-16"
              style={{ color: "#830b51" }}
            >
              <strong> Mes Emprunts</strong>
            </h3>
            <div
              style={{
                paddingLeft: "7%",
                paddingTop: "2%",
                paddingRight: "5%",
              }}
            >
              <div className="w3-row-padding">
                {nvEmprunts.length == 0 &&
                  ancEmprunts.map((livre) => (
                    <MesEmprunts
                      key={livre.id}
                      id={livre.id}
                      titre={livre.titre}
                      auteur={livre.auteur}
                      photo={require(`../../assets/images_livres/${livre.photo}.jpg`)}
                      EmprunterLivre={EmprunterLivre}
                    />
                  ))}
                {nvEmprunts.map(
                  (livre) =>
                    console.log("i'm here") && (
                      <MesEmprunts
                        key={livre.id}
                        id={livre.id}
                        titre={livre.titre}
                        auteur={livre.auteur}
                        photo={require(`../../assets/images_livres/${livre.photo}.jpg`)}
                        EmprunterLivre={EmprunterLivre}
                      />
                    )
                )}
              </div>
              {/* {user.nom} */}
              {/*  {adhérents &&
                adhérents.map(
                  (adherent) =>
                    adherent.emprunts.length === 2 &&
                    adherent.emprunts.map((emprunt) => (
                      <Emprunts
                        key={emprunt.titre}
                        nom={adherent.nom}
                        titre={emprunt.titre}
                        dateEmprunt={emprunt.dateEmprunt}
                        dateRetour={emprunt.dateRetour}
                      />
                    ))
                )}
               */}
            </div>
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

export default VitrineLivre;
