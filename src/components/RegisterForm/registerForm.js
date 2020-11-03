import React, { useState, useRef, memo, useEffect } from "react";
import "./registerForm.css";
function RegisterForm({ addDemandeInscrit }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [photo, setPhoto] = useState("");

  const handleAddDemandeInscrit = () => {
    addDemandeInscrit(nom, prenom, email, pass, photo);
    setNom("");
    setPrenom("");
    setEmail("");
    setPass("");
    setPhoto("");
  };
  useEffect(() => {
    //document.title = nom;
  });
  return (
    <div className="RegisterForm">
      <form>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Nom"
          required
          name="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Prenom"
          required
          name="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Mot de passe"
          required
          name="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          className="w3-input w3-section w3-border"
          type="text"
          placeholder="Photo"
          required
          value={photo}
          name="photo"
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button
          className="w3-button w3-black w3-section"
          onClick={handleAddDemandeInscrit}
        >
          <i className="fa fa-paper-plane"></i> Envoyer demande
        </button>
      </form>
    </div>
  );
}
export default memo(RegisterForm);
