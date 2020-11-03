import React from "react";
import "./contact.css";

import Footer from "../footer/footer";

function Contact() {
  return (
    <div className="Contact">
      {" "}
      <div className="Maclass">
        {" "}
        {/*  <Menu /> */}
        {/* Page content  */}
        <div className="w3-container w3-padding-32" id="contact">
          <h3
            className="w3-border-bottom w3-border-light-grey w3-padding-16"
            style={{ color: "#830b51" }}
          >
            <strong> Contact</strong>
          </h3>
          <p>Parlez nous de vos livres préférés</p>
          <form action="/action_page.php" target="_blank">
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Nom"
              required
              name="Name"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required
              name="Email"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Livre"
              required
              name="Subject"
            />
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Commentaire"
              required
              name="Comment"
            />
            <button className="w3-button w3-black w3-section" type="submit">
              <i className="fa fa-paper-plane"></i> Envoyez message
            </button>
          </form>
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

export default Contact;
