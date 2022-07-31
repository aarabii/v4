import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import PageNotFound from "./components/Pages/404Page/PageNotFound";

import About from "./components/Section/About/About";
import Contact from "./components/Section/Contact/Contact";
import Exp from "./components/Section/Experience/Exp";
import GithubRepo from "./components/Section/GithubProjects/GithubRepo";

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
          <Route path="/experience">
            <Exp />
          </Route>
          <Route path="/projects">
            <GithubRepo />
          </Route>
          <Route path="/contact">
            <Contact />
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
