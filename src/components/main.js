import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";
import Journey from "./journey";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
    <Route exact path="/journey" component={Journey} />
  </Switch>
);

export default Main;
