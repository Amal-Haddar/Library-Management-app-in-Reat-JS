import React, { useEffect, useState } from "react";
//import "./login.css";

import { Link } from "react-router-dom";

import {
  fetchAdhérent,
  fetchAdhérentDemande,
} from "../../services/adhérents.services";

function LoginForm({ find, adherent, fetchData }) {
  // find = false;
  return (
    <div className="LoginForm">
      <div className="Maclass">
        {" "}
        <div id="contact">
          <form>
            {find === false ? (
              <div>
                <button className="w3-button w3-black w3-section">
                  <Link to="/register">Login</Link>
                </button>
              </div>
            ) : (
              <div>
                <button className="w3-button w3-black w3-section">
                  <Link to={`/adhérent/adherents/${adherent[0].id}`}>
                    Login
                  </Link>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
