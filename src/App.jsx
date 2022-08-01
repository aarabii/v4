import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import PageNotFound from "./components/Pages/404Page/PageNotFound";
import ComingSoon from "./components/Pages/ComingSoon/ComingSoon";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <ComingSoon />
          </Route>
          <Route exact path="/about">
            <Home section="about" />
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
