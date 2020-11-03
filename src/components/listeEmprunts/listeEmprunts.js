import React, { useState, useEffect } from "react";
import "./listeEmprunts.css";
import Footer from "../footer/footer";

import Emprunts from "../adhérentEmprunt/adhérentEmprunt";

import { AfficherAdhérentsAccéptées } from "../../services/adhérents.services";

function ListeEmprunts() {
  const [adhérents, setAdhérents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await AfficherAdhérentsAccéptées();
      setAdhérents(result2);
    };

    fetchData();

    return () => {
      console.log("cleanup: ");
    };
  }, []);

  return (
    <div className="VitrineLivre">
      <div className="Maclass">
        <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
          <div className="w3-container w3-padding-32" id="projects">
            {/* Search  */}

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
                <strong> Emprunts en cours </strong>
              </h3>

              <div
                className="example w3-border-bottom  w3-border-light-grey"
                style={{ marginTop: "20px" }}
              ></div>

              <div className="w3-row-padding">
                {adhérents &&
                  adhérents.map(
                    (adherent) =>
                      adherent.emprunts.length !== 0 &&
                      adherent.emprunts.map((emprunt) => (
                        <Emprunts
                          key={emprunt.id}
                          id={emprunt.id}
                          libelle={emprunt.libelle}
                          nom={adherent.nom}
                          prenom={adherent.prenom}
                          titre={emprunt.titre}
                          photo={require(`../../assets/images_livres/${emprunt.photo}.jpg`)}
                          dateEmprunt={emprunt.dateEmprunt}
                          dateRetour={emprunt.dateRetour}
                        />
                      ))
                  )}
              </div>
            </div>
            <h3
              className="w3-border-bottom w3-border-top w3-border-light-grey w3-padding-16"
              style={{ color: "#830b51" }}
            >
              <strong> Emprunts en retards</strong>
            </h3>
            <div
              style={{
                paddingLeft: "7%",
                paddingTop: "2%",
                paddingRight: "5%",
              }}
            >
              {adhérents &&
                adhérents.map((adherent) =>
                  //adherent.emprunts.length === 2 &&
                  adherent.emprunts.map(
                    (emprunt) =>
                      //console.log(emprunt.dateRetour) &&
                      //console.log(new Date(emprunt.dateRetour).getTime()) &&
                      //console.log(new Date().getTime()) && (
                      new Date(emprunt.dateRetour).getTime() <
                        new Date().getTime() && (
                        <Emprunts
                          key={emprunt.titre}
                          nom={adherent.nom}
                          titre={emprunt.titre}
                          libelle={emprunt.libelle}
                          photo={require(`../../assets/images_livres/${emprunt.photo}.jpg`)}
                          dateEmprunt={emprunt.dateEmprunt}
                          dateRetour={emprunt.dateRetour}
                        />
                      )
                  )
                )}
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

export default ListeEmprunts;
