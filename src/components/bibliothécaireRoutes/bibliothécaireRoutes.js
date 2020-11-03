import React from "react";
import LivresPage from "../livresPage/livresPage";
import AdhérentsPage from "../adhérentsPage/adhérentsPage";
import LivreDetails from "../livreDetails/livreDetails";
import AdhérentDetails from "../adhérentDetails/adhérentDetails";
import BibliothécaireLayout from "./bibliothécaireLayout/bibliothécaireLayout";
import Contact from "../contact/contact";
import Accueil from "../accueil/accueil";
import Emprunts from "../listeEmprunts/listeEmprunts";

import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

function BibliothécaireRoutes() {
  let { path } = useRouteMatch();
  return (
    <div className="bib-routes">
      <BibliothécaireLayout>
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
            <LivresPage />
          </Route>

          <Route exact path={`${path}/livres/:livreId`}>
            <LivreDetails />
          </Route>

          <Route exact path={`${path}/adherents`}>
            <AdhérentsPage />
          </Route>

          <Route exact path={`${path}/adherents/:adherentId`}>
            <AdhérentDetails />
          </Route>

          <Route exact path={`${path}/emprunts`}>
            <Emprunts />
          </Route>

          <Route exact path={`${path}/contact`}>
            <Contact />
          </Route>
        </Switch>
      </BibliothécaireLayout>
    </div>
  );
}

export default BibliothécaireRoutes;
