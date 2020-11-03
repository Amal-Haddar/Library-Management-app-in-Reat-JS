import React from "react";
import "./adhérentsList.css";

import Adhérent from "../adhérent/adhérent";

function AdhérentsList({ adhérents, adhérentsDemande, BannirAdhérent }) {
  return (
    <div className="AdhérentsList">
      <div>
        {adhérents.map((adhérent) => (
          <Adhérent
            key={adhérent.id}
            id={adhérent.id}
            email={adhérent.email}
            nom={adhérent.nom}
            prenom={adhérent.prenom}
            photo={require(`../../assets/images_personnes/${adhérent.photo}.jpg`)}
            emprunts={adhérent.emprunts}
            BannirAdhérent={BannirAdhérent}
          />
        ))}
      </div>
    </div>
  );
}

export default AdhérentsList;
