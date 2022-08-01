import React from "react";
import Nav from "../../Section/Nav/Nav";
import "./project.css";

import RepoStats from "./RepoStats";

const Projects = () => {
  return (
    <div>
      <Nav />
      <div className="project_container">
        <h2>Projects</h2>
        <h5>Some are usefull, while some are for fun</h5>

        <div className="Projects">
          <input type="text" placeholder="Search for a project..."></input>
          <div className="Projects_list">
            <RepoStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
