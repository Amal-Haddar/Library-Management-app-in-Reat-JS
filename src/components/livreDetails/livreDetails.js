import React, { useEffect, useState } from "react";
import { fetchLivreById } from "../../services/livres.services";
import { useParams } from "react-router-dom";
import Footer from "../footer/footer";

import "./livreDetails.css";

function LivreDetails() {
  const [loading, setLoading] = useState(false);
  const [livre, setLivre] = useState({});

  const { livreId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchLivreById(livreId);
      setLivre(result);
      setLoading(false);
    };
    fetchData();
  }, [livreId]);

  return (
    <div className="livre-details">
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
          <div className="w3-container w3-padding-32" id="about">
            <h3
              className="w3-border-bottom w3-border-light-grey w3-padding-16"
              style={{ color: "#830b51" }}
            >
              <strong> Details livre : « {livre.titre} » </strong>
            </h3>
          </div>

          <div className="containerFlex">
            <div className="roundedImage">
              <img
                src={require("../../assets/images/purple.jpg")}
                alt=""
                className="roundedImage"
                style={{
                  width: "300px",
                  height: "300px",
                  marginRight: "30px",
                }}
              />
            </div>
            <div className="divTexte">
              <div className="w3-container w3-padding-32" id="about">
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Libelle : </strong>{" "}
                  {livre.libelle}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Titre : </strong>{" "}
                  {livre.titre}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Auteur : </strong>{" "}
                  {livre.auteur}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Genre : </strong>{" "}
                  {livre.genre}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Edition : </strong>{" "}
                  {livre.edition}
                </h5>
                <h5 className="">
                  <strong style={{ color: "#830b51" }}>
                    {" "}
                    Nombre d'exemplaire :{" "}
                  </strong>{" "}
                  {livre.nombre_exemplaire}
                </h5>

                <h5 className="">
                  <strong style={{ color: "#830b51" }}> Description : </strong>{" "}
                  {livre.description}
                </h5>
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

export default LivreDetails;
