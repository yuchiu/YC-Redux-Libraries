import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import { Navbar, Footer } from "./common";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import NotFoundPage from "./NotFoundPage";

const Routes = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/:unfoundLocation" component={NotFoundPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
