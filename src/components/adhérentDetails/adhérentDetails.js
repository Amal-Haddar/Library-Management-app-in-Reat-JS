import React, { useEffect, useState } from "react";
import "./adhérentDetails.css";
import { fetchAdhérentsAccéptéesById } from "../../services/adhérents.services";
import { useParams } from "react-router-dom";
import Footer from "../footer/footer";

function AdhérentDetails() {
  const [loading, setLoading] = useState(false);
  const [adherent, setAdherent] = useState({});

  const { adherentId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("id de l'adherent accepté: " + adherentId);
      const result = await fetchAdhérentsAccéptéesById(adherentId);
      setAdherent(result);
      setLoading(false);
    };
    fetchData();
  }, [adherentId]);

  return (
    <div className="adhérent-details">
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="w3-container w3-padding-32" id="about">
            <h3
              className="w3-border-bottom w3-border-light-grey w3-padding-16"
              style={{ color: "#830b51" }}
            >
              <strong>
                {" "}
                Details adhérent : « {adherent.nom} {adherent.prenom} »{" "}
              </strong>
            </h3>
          </div>

          <div className="containerFlex">
            <div className="=">
              <img
                src={require("../../assets/images/bib.jpg")}
                alt=""
                className=""
                style={{
                  width: "350px",
                  height: "550px",
                  marginRight: "30px",
                  float: "right",
                  paddingBottom: "20px",
                }}
              />
            </div>
            <div className="divTexte">
              <div className="w3-container w3-padding-32" id="about">
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Nom : </strong>{" "}
                  {adherent.nom}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Prenom : </strong>{" "}
                  {adherent.prenom}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Email : </strong>{" "}
                  {adherent.email}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Emprunts : </strong>{" "}
                </h5>
                <table>
                  <thead>
                    <tr>
                      <th>Titre</th>
                      <th>Date d'emprunt</th>
                      <th>Date de retour</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adherent &&
                      adherent.emprunts &&
                      adherent.emprunts.map((emprunt) => (
                        <tr>
                          <td key={emprunt.titre}>{emprunt.titre}</td>
                          <td key={emprunt.dateEmprunt}>
                            {emprunt.dateEmprunt}
                          </td>
                          <td key={emprunt.dateRetour}>{emprunt.dateRetour}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}

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

export default AdhérentDetails;
