import React from "react";
import VitrineLivre from "../vitrineLivre/vitrineLivre";
/*import AdhérentsPage from "../adhérentsPage/adhérentsPage";
import LivreDetails from "../livreDetails/livreDetails";
import AdhérentDetails from "../adhérentDetails/adhérentDetails";
import BibliothécaireLayout from "./bibliothécaireLayout/bibliothécaireLayout"; */
import Contact from "../contact/contact";
import Accueil from "../accueil/accueil";
import AdhérentLayout from "./adhérentLayout/adhérentLayout";
import LivreDetails from "../livreDetails/livreDetails";
import AdhérentProfil from "../profilAdhérent/profilAdhérent";
import Login from "../login/login";

import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

function AdhérentRoutes() {
  let { path } = useRouteMatch();
  return (
    <div className="bib-routes">
      <AdhérentLayout>
        <Switch>
          <Route exact path={`${path}/`}>
            <Redirect to={`${path}/accueil`} />
          </Route>
          <Route exact path={`${path}/accueil`}>
            <Accueil value="Welcome to my web site" />
          </Route>

          <Route exact path={`${path}/accueil`}>
            <Accueil />
          </Route>

          <Route exact path={`${path}/livres`}>
            <VitrineLivre />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path={`${path}/livres/:livreId`}>
            <LivreDetails />
          </Route>

          <Route exact path={`${path}/adherents/:adherentId`}>
            <AdhérentProfil />
          </Route>

          <Route exact path={`${path}/contact`}>
            <Contact />
          </Route>
        </Switch>
      </AdhérentLayout>
    </div>
  );
}

export default AdhérentRoutes;
