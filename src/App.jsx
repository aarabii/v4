import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import PageNotFound from "./components/Pages/404Page/PageNotFound";
import ComingSoon from "./components/Pages/ComingSoon/ComingSoon";

import Project from "./components/Pages/Projects/Project";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route exact path="/about">
            <Home section="about" />
          </Route>
          <Route exact path="/experience">
            <Home section="experience" />
          </Route>
          <Route exact path="/projects">
            <Home section="projects" />
          </Route>
          <Route exact path="/contact">
            <Home section="contact" />
          </Route>
          <Route path="/cv">
            <ComingSoon />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
