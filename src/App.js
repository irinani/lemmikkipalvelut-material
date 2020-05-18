import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import VetsPage from "./pages/VetsPage";
import StoresPage from "./pages/StoresPage";
import ExercisesPage from './pages/ExercisesPage';
import WellbeingPage from './pages/WellbeingPage';
import AssociationsPage from './pages/AssociationsPage';
import EventsPage from './pages/EventsPage';

import "./App.scss";

export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/elainlaakarit">
            <VetsPage />
          </Route>
          {/* <Route path="/elaintarvikeliikkeet">
            <StoresPage />
          </Route> */}
          {/* <Route path="/ulkoilu-ja-liikunta">
            <ExercisesPage />
          </Route>
          <Route path="/hyvinvointi">
            <WellbeingPage />
          </Route>
          <Route path="/yhdistykset">
            <AssociationsPage />
          </Route>
          <Route path="/tapahtumat">
            <EventsPage />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
}
