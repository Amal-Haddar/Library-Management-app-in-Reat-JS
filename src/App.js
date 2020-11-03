import React from "react";
import Index from "./components/index/index";
import Register from "./components/register/register";
import Login from "./components/login/login";

import BibliothécaireRoutes from "./components/bibliothécaireRoutes/bibliothécaireRoutes";
import AdhérentRoutes from "./components/adhérentRoutes/adhérentRoutes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/bibliothécaire">
            <BibliothécaireRoutes />
          </Route>
          <Route path="/adhérent">
            <AdhérentRoutes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
