import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home';

import PageNotFound from './components/Pages/404Page/PageNotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <Home />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App