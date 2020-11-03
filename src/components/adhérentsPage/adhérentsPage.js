import React, { useState, useEffect } from "react";
import "./adhérentsPage.css";

import AdhérentsList from "../adhérentsList/adhérentsList";
import AdhérentDemande from "../adhérentDemande/adhérentDemande";

//import Adhérent from "../adhérent/adhérent";
import Footer from "../footer/footer";

import {
  AfficherAdhérentsAccéptées,
  AfficherAdhérentsDemande,
} from "../../services/adhérents.services";

function AdhérentsPage() {
  const [adhérents, setAdhérents] = useState([]);
  const [adhérentsDemande, setAdhérentsDemande] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    //let didCancel = false;
    const fetchData = async () => {
      //setLoading(true);
      const result = await AfficherAdhérentsAccéptées();
      const result2 = await AfficherAdhérentsDemande();
      setAdhérents(result);
      setAdhérentsDemande(result2);
      //setLoading(false);
    };
    fetchData();

    return () => {
      //didCancel = true;
    };
  }, []);

  const acceptéDemandeAdhésion = (id) => {
    const DemandeAdherant = adhérentsDemande.filter(
      (adherentDemande) => adherentDemande.id === id
    );
    const newTabDemande = adhérentsDemande.filter(
      (demande) => demande.id !== id
    );

    setAdhérentsDemande(newTabDemande);
    alert("Demande d'adhésion accepté avec succées ");

    localStorage.setItem("tabDemande", JSON.stringify(newTabDemande));
    localStorage.setItem(
      "adhérentsAccéptées",
      JSON.stringify([
        ...adhérents,
        {
          id: adhérents.length + 1,
          banni: "faux",
          email: DemandeAdherant[0].email,
          pass: DemandeAdherant[0].pass,
          nom: DemandeAdherant[0].nom,
          prenom: DemandeAdherant[0].prenom,
          photo: DemandeAdherant[0].photo,
          emprunts: DemandeAdherant[0].emprunts,
        },
      ])
    );

    /*  var retrievedData2 = localStorage.getItem("tabDemande");
    var demande = JSON.parse(retrievedData2);
    setAdhérentsDemande(demande); */

    var retrievedData1 = localStorage.getItem("adhérentsAccéptées");
    var accepté = JSON.parse(retrievedData1);
    setAdhérents(accepté);
  };

  const RefuserAdhérent = (id) => {
    const newAdhérent = adhérentsDemande.filter(
      (adhérent) => adhérent.id !== id
    );

    // eslint-disable-next-line no-restricted-globals
    if (confirm("Voulez vous vraiment Refuser cette demande d'adhésion ?")) {
      alert("Demande d'adhésion annulée ! ");
      localStorage.setItem("tabDemande", JSON.stringify(newAdhérent));
      var retrievedData2 = localStorage.getItem("tabDemande");
      var demande = JSON.parse(retrievedData2);
      setAdhérentsDemande(demande);
    } else {
      alert("La demande d'adhésion est toujours en cours !  ");
    }
  };

  const BannirAdhérent = (id) => {
    const newAdhérentsAccéptés = adhérents.filter(
      (adhérent) => adhérent.id !== id
    );
    const Adhérent_A_Bannir = adhérents.filter((adhérent) => adhérent.id == id);

    //console.log(Adhérent_A_Bannir[0].banni);
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Voulez vous vraiment Bannir cet adhérent ?")) {
      Adhérent_A_Bannir[0].banni = "vrai";
      Adhérent_A_Bannir[0].photo = "banni";
      newAdhérentsAccéptés.push(Adhérent_A_Bannir[0]);
      localStorage.setItem(
        "adhérentsAccéptées",
        JSON.stringify(newAdhérentsAccéptés)
      );
      var retrievedData2 = localStorage.getItem("adhérentsAccéptées");
      var adhérentsAccéptées = JSON.parse(retrievedData2);
      setAdhérents(adhérentsAccéptées);
      alert("Adhérent banni ! ");
    } else {
      alert("La demande de banne est annulée  !  ");
    }
  };

  return (
    <div className="AdhérentsPage">
      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        {/* Titre  */}

        <div className="w3-container w3-padding-32" id="projects">
          <div
            className="example w3-border-bottom  w3-border-light-grey"
            style={{ marginTop: "20px" }}
          ></div>
          <div className="cont">
            <h3
              className="  w3-border-light-grey w3-padding-16"
              style={{ color: "#830b51" }}
            >
              <strong> Nos adhérents : </strong>
              <span style={{ color: "red" }}>{adhérents.length} membres</span>
            </h3>

            <div
              className="example w3-border-bottom  w3-border-light-grey"
              style={{ marginTop: "20px" }}
            ></div>
          </div>
        </div>
        {/* Fin titre  */}

        <div className="w3-row-padding ">
          <div>
            {
              <AdhérentsList
                adhérents={adhérents}
                BannirAdhérent={BannirAdhérent}
              />
            }
          </div>
        </div>
        <h3
          className="w3-border-bottom w3-border-top w3-border-light-grey w3-padding-16"
          style={{ color: "#830b51" }}
        >
          {" "}
          <strong style={{ color: "#830b51" }}>
            Adhérents en attente d'acceptation :{" "}
          </strong>
          <span style={{ color: "red" }}>
            {adhérentsDemande.length} demande
          </span>{" "}
        </h3>
        <div
          style={{ paddingLeft: "7%", paddingTop: "2%", paddingRight: "5%" }}
        >
          {adhérentsDemande.map((adhérent) => (
            <AdhérentDemande
              key={adhérent.id}
              id={adhérent.id}
              nom={adhérent.nom}
              prenom={adhérent.prenom}
              email={adhérent.email}
              photo={require(`../../assets/images_personnes/${adhérent.photo}.jpg`)}
              RefuserAdhérent={RefuserAdhérent}
              acceptéDemandeAdhésion={acceptéDemandeAdhésion}
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
  );
}

export default AdhérentsPage;
