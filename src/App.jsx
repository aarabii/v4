import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import PageNotFound from "./components/Pages/404Page/PageNotFound";
import ComingSoon from "./components/Pages/ComingSoon/ComingSoon";
import About from "./components/Section/About/About";
import Contact from "./components/Section/Contact/Contact";
import Exp from "./components/Section/Experience/Exp";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/experience">
            <Exp />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <ComingSoon />
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
