import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import PageNotFound from "./components/Pages/404Page/PageNotFound";
import ComingSoon from "./components/Pages/ComingSoon/ComingSoon";
import AboutMe from "./components/Pages/AboutMe/AboutMe.Jsx";
import Projects from "./components/Pages/Projects/Projects";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route exact path="/about">
            <AboutMe />
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
