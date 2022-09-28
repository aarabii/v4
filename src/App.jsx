import React from "react";

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

import Home from "./components/Home/Home";

import PageNotFound from "./components/Pages/404Page/PageNotFound";
import ComingSoon from "./components/Pages/ComingSoon/ComingSoon";

import Project from "./components/Pages/Projects/Project";

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
          <Route path="/cv" element={<ComingSoon />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
