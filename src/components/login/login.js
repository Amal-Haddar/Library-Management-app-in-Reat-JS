import React, { useEffect, useState } from "react";
import "./login.css";
import { NavLink, useRouteMatch } from "react-router-dom";

import { Link } from "react-router-dom";
//import LoginForm from "../loginForm/loginForm";

import {
  fetchAdhérent,
  fetchAdhérentDemande,
  fetchAdmin,
} from "../../services/adhérents.services";

function Login() {
  const [find, setFind] = useState(false);
  const [isBib, setIsBib] = useState(false);
  const [bib, setBib] = useState({});
  const [adherent, setAdherent] = useState({});
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setFind(false);
      setIsBib(false);
      const result = await fetchAdhérent(searchValue1, searchValue2);
      const result2 = await fetchAdmin(searchValue1, searchValue2);
      //const result2 = await fetchAdhérentDemande(searchValue1, searchValue2);
      setBib(result2);
      setAdherent(result);
      if (result.length === 0 && result2.length === 0) {
        alert(
          "Nous vous excusons, Votre demande d'adhésion a étè banni ou elle n'est pas encore traité"
        );

        setFind(false);
      } else if (result2.length !== 0) {
        localStorage.setItem("UtilisateurConnecté", JSON.stringify(result2[0]));
        setIsBib(true);
      } else if (result.length !== 0 && result[0].banni === "vrai") {
        alert("Nous vous excusons, Votre demande d'adhésion a étè banni ");
        setFind(false);
        //console.log(result[0].id);
      } else {
        localStorage.setItem("UtilisateurConnecté", JSON.stringify(result[0]));
        setFind(true);
        //console.log(result[0].id);
      }
    };
    fetchData();
  }, [searchValue1, searchValue2]);

  return (
    <div className="Register">
      <div className="Maclass">
        {" "}
        <div className="w3-top">
          <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <NavLink to="/" className="w3-bar-item " activeClassName="active">
              <strong>ك</strong> <strong> KTEBI</strong>
            </NavLink>
            <div className="w3-right w3-hide-small">
              <NavLink
                to="/register"
                className="w3-bar-item "
                activeClassName="active"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="w3-bar-item "
                activeClassName="active"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className="w3-container w3-padding-32"
          id="contact"
          style={{ marginTop: "100px", width: "50%", marginLeft: "25%" }}
        >
          <h3
            className="w3-border-bottom w3-border-light-grey w3-padding-16"
            style={{ color: "#830b51" }}
          >
            <strong> Login form</strong>
          </h3>

          <form>
            <input
              className="w3-input w3-section w3-border"
              type="text"
              placeholder="Email"
              required
              name="search"
              value={searchValue1}
              onChange={(e) => setSearchValue1(e.target.value)}
            />

            <input
              className="w3-input w3-section w3-border"
              type="password"
              placeholder="Mot de passe"
              required
              name="search"
              value={searchValue2}
              onChange={(e) => setSearchValue2(e.target.value)}
            />

            {/* <LoginForm find={find} adherent={adherent} /> */}
            {find === true && adherent ? (
              <div>
                <button
                  className="w3-button w3-black w3-section"
                  style={{ width: "180px" }}
                >
                  <Link to={`/adhérent/adherents/${adherent[0].id}`}>
                    Login As Member
                  </Link>
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="w3-button w3-black w3-section"
                  style={{ width: "180px" }}
                >
                  <Link to="/register">Login As Member</Link>
                </button>
              </div>
            )}
            {isBib === true && bib ? (
              <div>
                <button
                  className="w3-button w3-black w3-section "
                  style={{ width: "180px" }}
                >
                  <Link to={`/bibliothécaire/livres`}>Login As Librarian</Link>
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
