import React from "react";

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Home from "./components/Home";

import PageNotFound from "./components/Pages/PageNotFound";

import Project from "./components/Pages/Project";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route exact path="/about" element={<Home section="about" />} />
          <Route exact path="/experience" element={<Home section="experience" />} />
          <Route exact path="/projects" element={<Home section="projects" />} />
          <Route exact path="/contact" element={<Home section="contact" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
